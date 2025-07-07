const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
} = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const express = require("express");
const cors = require("cors");
const qrcode = require("qrcode");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

// ✅ Enable CORS for all origins
app.use(cors());
app.use(express.json());

let sock;

let qrCodeBase64 = "";

// 📲 Start WhatsApp connection
const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState("./auth_info");

  sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  // 🔄 Handle connection updates
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      qrCodeBase64 = await qrcode.toDataURL(qr);
      console.log("📸 QR Code ready: http://localhost:5000/qr");
    }

    if (connection === "close") {
      const shouldReconnect =
        (lastDisconnect?.error?.output?.statusCode ?? 0) !==
        DisconnectReason.loggedOut;

      console.log("🔌 Disconnected. Reconnect?", shouldReconnect);
      if (shouldReconnect) startSock();
    }

    if (connection === "open") {
      qrCodeBase64 = "";
      console.log("✅ WhatsApp connected and ready.");
      console.log("🔐 Logged in as:", sock.user);
    }
  });

  // 💾 Save auth credentials
  sock.ev.on("creds.update", saveCreds);
};

startSock();

// 📷 Serve QR code on browser
app.get("/qr", (req, res) => {
  if (qrCodeBase64) {
    res.send(`
      <html>
        <body>
          <h2>Scan WhatsApp QR Code:</h2>
          <img src="${qrCodeBase64}" />
        </body>
      </html>
    `);
  } else {
    res.send("⏳ QR code not generated yet. Please wait...");
  }
});

// ✅ Better status check
app.get("/status", (req, res) => {
  res.json({ connected: !!sock?.user?.id });
});
app.post("/send-message", async (req, res) => {
  let { number, message } = req.body;

  if (!sock?.user?.id) {
    return res.status(503).json({
      success: false,
      error: "WhatsApp is not connected yet. Please scan the QR and wait.",
    });
  }

  if (!number || !message) {
    return res
      .status(400)
      .json({ success: false, error: "number and message are required" });
  }

  // ✅ Clean number: remove +, spaces, dashes etc.
  number = number.replace(/[^0-9]/g, "");

  if (!number.startsWith("91")) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid Indian mobile number starting with 91",
    });
  }

  const jid = `${number}@s.whatsapp.net`;

  try {
    // ✅ Step 1: Check if number exists on WhatsApp
    const [result] = await sock.onWhatsApp(jid);
    if (!result?.exists) {
      return res.status(404).json({
        success: false,
        error: "Number is not registered on WhatsApp",
      });
    }

    const finalJid = result.jid;

    // ✅ Step 2: Load local image buffer
    const imagePath = path.join(__dirname, "assets", "cart1.jpg");

    let imageContent;
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      imageContent = imageBuffer;
    } catch (e) {
      console.warn("⚠️ Local image not found, using fallback image URL.");
      imageContent = {
        url: "https://images.unsplash.com/photo-1580894894510-399f66e2c8b2",
      };
    }

    // ✅ Step 3: Send image with caption (message)
    await sock.sendMessage(finalJid, {
      image: imageContent,
      caption: message || "🛒 Welcome to ZoiCart! Here’s our latest offer!",
    });

    res.json({
      success: true,
      message: `🖼️ Image message sent to ${finalJid}`,
    });
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🚀 Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
