"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ backgroundColor: "#EFEEED", padding: 60, textAlign: "center" }}>
        <div className="mb-6">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="mx-auto">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Your Name *"
          required
          className="form-input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email *"
          required
          className="form-input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <input
          type="tel"
          placeholder="Phone Number"
          className="form-input"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-input"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <div className="mb-10">
        <textarea
          placeholder="Your Message *"
          required
          rows={6}
          className="form-input"
          style={{ resize: "none" }}
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
