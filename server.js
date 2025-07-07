const express = require("express");
const makeWASocket = require("@whiskeysockets/baileys").default;
const { useSingleFileAuthState } = require("@whiskeysockets/baileys/auth");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(express.json());

// Setup Baileys auth
const { state, saveState } = useSingleFileAuthState("./auth_info.json");

const sock = makeWASocket({
  auth: state,
  printQRInTerminal: true, // this prints the QR code in terminal
});

sock.ev.on("creds.update", saveState);

// API to send WhatsApp message
app.post("/send-whatsapp", async (req, res) => {
  const { number, message } = req.body;
  const id = number + "@s.whatsapp.net";

  try {
    await sock.sendMessage(id, { text: message });
    res.send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
