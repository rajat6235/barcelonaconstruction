"use client";

import { useState, FormEvent } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(25,29,27,0.15)",
  borderRadius: 50,
  padding: "16px 24px",
  fontFamily: "var(--font-jost-var), 'Jost', sans-serif",
  fontWeight: 300,
  fontSize: 15,
  color: "#191D1B",
  backgroundColor: "#ffffff",
  outline: "none",
  transition: "border-color 0.3s",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#095B67",
  marginBottom: 10,
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ marginBottom: 24 }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto", display: "block" }}>
            <circle cx="12" cy="12" r="11" stroke="#095B67" strokeWidth="1.5" />
            <path d="M7 12l4 4 6-7" stroke="#095B67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading mb-3" style={{ fontSize: 28, color: "#191D1B" }}>
          Message Sent!
        </h3>
        <p style={{ fontWeight: 300, color: "#5F6160" }}>
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 24, marginBottom: 24 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <label style={labelStyle}>Your Message</label>
        <textarea
          placeholder="Message"
          rows={6}
          style={{ ...inputStyle, borderRadius: 16, resize: "none" }}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer" }}>
        Send Message
      </button>
    </form>
  );
}
