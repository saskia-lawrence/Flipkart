import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmailList.css";

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  const syncEmails = async () => {
    try {
      await axios.post("https://localhost:44329/api/Email/sync");
      fetchEmails();
    } catch (error) {
      console.error("Sync failed", error);
    }
  };

  const fetchEmails = async () => {
    try {
      const res = await axios.get("https://localhost:44329/api/Email/list");
      setEmails(res.data);
    } catch (error) {
      console.error("Fetch failed", error);
    }
  };

  function stripHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="email-wrapper">
      <button className="sync-btn" onClick={syncEmails}>
        📥 Sync Emails
      </button>
      <div className="email-header-row">
        <input type="checkbox" />
        <span className="email-header-title">Primary</span>
      </div>
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id} className="email-item">
            <input type="checkbox" className="checkbox" />
            <span className="star">☆</span>
            <span className="sender">{email.sender}</span>
            <span className="email-content">
              <span className="subject">{email.subject}</span> -{" "}
              <span className="body-snippet">
                {stripHtmlTags(email.body).length > 80
                  ? stripHtmlTags(email.body).slice(0, 80) + "..."
                  : stripHtmlTags(email.body)}
              </span>
            </span>
            <span className="timestamp">
              {email.receivedAt
                ? new Date(email.receivedAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })
                : "—"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
