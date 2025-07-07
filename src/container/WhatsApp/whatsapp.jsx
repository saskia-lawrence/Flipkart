import React, { useState } from "react";

const WhatsApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!phoneNumber || !message) {
      alert("Please enter both phone number and message.");
      return;
    }

    // Remove spaces or special characters from phone number
    const formattedPhone = phoneNumber.replace(/[^\d]/g, "");
    const encodedMessage = encodeURIComponent(message);

    const waUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    window.open(waUrl, "_blank");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Send WhatsApp Message</h2>

      <input
        type="text"
        placeholder="Phone Number (e.g. 919876543210)"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={handleSendMessage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        📤 Send via WhatsApp
      </button>
    </div>
  );
};

export default WhatsApp;
