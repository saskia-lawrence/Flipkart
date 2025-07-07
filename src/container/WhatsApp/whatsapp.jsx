import React, { useState } from "react";
import axios from "axios";

function WhatsApp() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post("http://localhost:8000/send", {
        number,
        message,
      });
      setStatus(res.data.status);
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message");
    }

    // Remove spaces or special characters from phone number
    const formattedPhone = phoneNumber.replace(/[^\d]/g, "");
    const encodedMessage = encodeURIComponent(message);

    const waUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    window.open(waUrl, "_blank");
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      <h2>📲 WhatsApp Message Sender</h2>
      <input
        type="text"
        placeholder="Enter phone number with country code"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px" }}>
        Send Message
      </button>
      {status && <p style={{ marginTop: "15px" }}>{status}</p>}
    </div>
  );
}

export default WhatsApp;
