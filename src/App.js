// import React from "react";
// import Routing from "./route/route";

// function App() {
//   return <Routing />;
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    // const resp = await fetch("http://localhost:5000/status");
    // const data = await resp.json();
    // if (!data.connected) return alert("WhatsApp not connected yet");

    try {
      const res = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number, message }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));

      // ✅ Clear fields after success
      setNumber("");
      setMessage("");
      setTimeout(() => setResponse(""), 3000); // Clear response after 3 seconds (optional)
    } catch (err) {
      console.error("Message send failed", err);
      setResponse("❌ Failed to send message. Backend might not be running.");

      // ❌ Clear fields only on failure if you want
      setTimeout(() => setResponse(""), 3000);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>📤 Send WhatsApp Message</h1>

      <input
        type="text"
        placeholder="Phone Number e.g. 919999999999"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ width: 300, marginBottom: 10 }}
      />
      <br />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: 300, height: 100 }}
      />
      <br />

      <button onClick={sendMessage}>Send Message</button>

      {response && (
        <div style={{ marginTop: 20 }}>
          <strong>Response:</strong>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
