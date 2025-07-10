// const {
//   default: makeWASocket,
//   useMultiFileAuthState,
//   DisconnectReason,
// } = require("@whiskeysockets/baileys");
// const { Boom } = require("@hapi/boom");
// const express = require("express");
// const cors = require("cors");
// const qrcode = require("qrcode");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const PORT = 5000;

// const axios = require("axios");

// const fetchImageBuffer = async (url) => {
//   const response = await axios.get(url, { responseType: "arraybuffer" });
//   return Buffer.from(response.data, "binary");
// };

// // ✅ Enable CORS for all origins
// app.use(cors());
// app.use(express.json());

// let sock;

// let qrCodeBase64 = "";

// // 📲 Start WhatsApp connection
// const startSock = async () => {
//   const { state, saveCreds } = await useMultiFileAuthState("./auth_info");

//   sock = makeWASocket({
//     auth: state,
//     printQRInTerminal: true,
//   });

//   // 🔄 Handle connection updates
//   sock.ev.on("connection.update", async (update) => {
//     const { connection, lastDisconnect, qr } = update;

//     if (qr) {
//       qrCodeBase64 = await qrcode.toDataURL(qr);
//       console.log("📸 QR Code ready: http://localhost:5000/qr");
//     }

//     if (connection === "close") {
//       const shouldReconnect =
//         (lastDisconnect?.error?.output?.statusCode ?? 0) !==
//         DisconnectReason.loggedOut;

//       console.log("🔌 Disconnected. Reconnect?", shouldReconnect);
//       if (shouldReconnect) startSock();
//     }

//     if (connection === "open") {
//       qrCodeBase64 = "";
//       console.log("✅ WhatsApp connected and ready.");
//       console.log("🔐 Logged in as:", sock.user);
//     }
//   });

//   // 💾 Save auth credentials
//   sock.ev.on("creds.update", saveCreds);
// };

// startSock();

// // 📷 Serve QR code on browser
// app.get("/qr", (req, res) => {
//   if (qrCodeBase64) {
//     res.send(`
//       <html>
//         <body>
//           <h2>Scan WhatsApp QR Code:</h2>
//           <img src="${qrCodeBase64}" />
//         </body>
//       </html>
//     `);
//   } else {
//     res.send("⏳ QR code not generated yet. Please wait...");
//   }
// });

// // ✅ Better status check
// app.get("/status", (req, res) => {
//   res.json({ connected: !!sock?.user?.id });
// });

// router.post("/send-message", async (req, res) => {
//   const { number, message } = req.body;

//   try {
//     await sock.sendMessage(`${number}@s.whatsapp.net`, {
//       text: message,
//     });
//     res.status(200).send({ success: true });
//   } catch (err) {
//     console.error("Text send error:", err);
//     res.status(500).send({ error: "Failed to send message" });
//   }
// });

// router.post("/send-image", async (req, res) => {
//   const { number, imageUrl, caption } = req.body;

//   try {
//     const response = await axios.get(imageUrl, {
//       responseType: "arraybuffer",
//     });
//     const buffer = Buffer.from(response.data, "binary");

//     await sock.sendMessage(`${number}@s.whatsapp.net`, {
//       image: buffer,
//       caption: caption || "",
//     });

//     res.status(200).send({ success: true });
//   } catch (err) {
//     console.error("Image send error:", err);
//     res.status(500).send({ error: "Failed to send image" });
//   }
// });

// app.post("/send-message", async (req, res) => {
//   let { number, message, imageUrl } = req.body;

//   if (!sock?.user?.id) {
//     return res
//       .status(503)
//       .json({ success: false, error: "WhatsApp not connected" });
//   }

//   if (!number || !message) {
//     return res
//       .status(400)
//       .json({ success: false, error: "number and message are required" });
//   }

//   number = number.replace(/[^0-9]/g, "");

//   if (!/^91\d{10}$/.test(number)) {
//     return res.status(400).json({
//       success: false,
//       error: "Please enter a valid Indian mobile number starting with 91",
//     });
//   }

//   const jid = `${number}@s.whatsapp.net`;

//   try {
//     const [result] = await sock.onWhatsApp(jid);
//     if (!result?.exists) {
//       return res.status(404).json({
//         success: false,
//         error: "Number is not registered on WhatsApp",
//       });
//     }

//     const finalJid = result.jid;
//     let mediaMessage;
//     if (imageUrl) {
//       const imageBuffer = await fetchImageBuffer(imageUrl);
//       mediaMessage = {
//         image: imageBuffer,
//         caption: message,
//       };
//     } else {
//       const imagePath = path.join(__dirname, "assets", "zoicart.jpg");
//       let imageContent;
//       try {
//         imageContent = fs.readFileSync(imagePath);
//       } catch {
//         imageContent = {
//           url: "https://images.unsplash.com/photo-1580894894510-399f66e2c8b2",
//         };
//       }

//       mediaMessage = {
//         image: imageContent,
//         caption: message,
//       };
//     }

//     await sock.sendMessage(finalJid, mediaMessage);

//     res.json({
//       success: true,
//       message: `Image message sent to ${finalJid}`,
//     });
//   } catch (err) {
//     console.error("❌ Error sending message:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// // 🚀 Start the Express server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

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
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let sock;
let qrCodeBase64 = "";

const fetchImageBuffer = async (url) => {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  return Buffer.from(response.data, "binary");
};

// Start WhatsApp connection
const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState("./auth_info");

  sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

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

  sock.ev.on("creds.update", saveCreds);
};

startSock();

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

app.get("/status", (req, res) => {
  res.json({ connected: !!sock?.user?.id });
});

app.post("/send-message", async (req, res) => {
  const { number, message, imageUrl } = req.body;

  if (!sock?.user?.id) {
    return res
      .status(503)
      .json({ success: false, error: "WhatsApp not connected" });
  }

  if (!number || !message) {
    return res
      .status(400)
      .json({ success: false, error: "number and message are required" });
  }

  const cleanNumber = number.replace(/[^0-9]/g, "");

  if (!/^91\d{10}$/.test(cleanNumber)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid Indian mobile number starting with 91",
    });
  }

  const jid = `${cleanNumber}@s.whatsapp.net`;

  try {
    const [result] = await sock.onWhatsApp(jid);
    if (!result?.exists) {
      return res
        .status(404)
        .json({
          success: false,
          error: "Number is not registered on WhatsApp",
        });
    }

    const finalJid = result.jid;
    let mediaMessage;

    if (imageUrl) {
      const imageBuffer = await fetchImageBuffer(imageUrl);
      mediaMessage = {
        image: imageBuffer,
        caption: message,
      };
    } else {
      const imagePath = path.join(__dirname, "assets", "zoicart.jpg");
      let imageBuffer;

      try {
        imageBuffer = fs.readFileSync(imagePath);
      } catch {
        imageBuffer = await fetchImageBuffer(
          "https://images.unsplash.com/photo-1580894894510-399f66e2c8b2"
        );
      }

      mediaMessage = {
        image: imageBuffer,
        caption: message,
      };
    }

    await sock.sendMessage(finalJid, mediaMessage);

    res.json({ success: true, message: `Image message sent to ${finalJid}` });
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const axios = require("axios");

router.post("/send-image", async (req, res) => {
  const { number, imageUrl, caption } = req.body;

  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    await sock.sendMessage(`${number}@s.whatsapp.net`, {
      image: buffer,
      caption,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    console.error("Image send error:", err);
    res.status(500).send({ error: "Failed to send image" });
  }
});


// Send multiple images
app.post("/send-multiple-images", async (req, res) => {
  const { number, products } = req.body;

  if (!sock?.user?.id) {
    return res
      .status(503)
      .json({ success: false, error: "WhatsApp not connected" });
  }

  const cleanNumber = number.replace(/[^0-9]/g, "");

  if (!/^91\d{10}$/.test(cleanNumber)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid Indian number" });
  }

  const jid = `${cleanNumber}@s.whatsapp.net`;

  try {
    const [result] = await sock.onWhatsApp(jid);
    if (!result?.exists) {
      return res
        .status(404)
        .json({ success: false, error: "Number not registered on WhatsApp" });
    }

    const finalJid = result.jid;

    for (const product of products) {
      try {
        const caption = `${product.name} (x${product.quantity})\nPrice: ₹${(
          product.price * product.quantity
        ).toFixed(2)}`;
        const imageBuffer = await fetchImageBuffer(product.imageUrl);

        await sock.sendMessage(finalJid, {
          image: imageBuffer,
          caption,
        });

        await new Promise((r) => setTimeout(r, 1200));
      } catch (e) {
        console.warn("Failed to send one image:", e.message);
      }
    }

    res.json({ success: true, message: "All images sent." });
  } catch (err) {
    console.error("Multiple image send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
