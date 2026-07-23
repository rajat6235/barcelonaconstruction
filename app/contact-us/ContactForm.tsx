"use client";

import { useState, FormEvent } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid rgba(25,29,27,0.14)",
  padding: "14px 0",
  fontFamily: "var(--font-jost-var), 'Jost', sans-serif",
  fontWeight: 300,
  fontSize: 15,
  color: "#191D1B",
  background: "transparent",
  outline: "none",
  transition: "border-color 0.28s ease",
  borderRadius: 0,
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "#095B67",
  marginBottom: 8,
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot — never shown to users
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldError, setFieldError] = useState<string | undefined>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    setFieldError(undefined);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setFieldError(data.field);
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "72px 20px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "1.5px solid #095B67",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 12l4 4 6-7"
              stroke="#095B67"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-heading mb-4" style={{ fontSize: 30, color: "#191D1B", letterSpacing: "-0.02em" }}>
          Message Sent
        </h3>
        <p style={{ fontWeight: 300, color: "#5F6160", fontSize: 15, lineHeight: "1.7" }}>
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0 48px", marginBottom: 32 }}>
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            placeholder="Your name"
            required
            style={{
              ...fieldStyle,
              borderBottomColor: fieldError === "name" ? "#c0392b" : undefined,
            }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={(e) => { e.target.style.borderColor = "#095B67"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(25,29,27,0.14)"; }}
          />
        </div>
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            style={{
              ...fieldStyle,
              borderBottomColor: fieldError === "email" ? "#c0392b" : undefined,
            }}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={(e) => { e.target.style.borderColor = "#095B67"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(25,29,27,0.14)"; }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <label style={labelStyle}>Phone</label>
        <input
          type="tel"
          placeholder="+1 (000) 000-0000"
          style={fieldStyle}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onFocus={(e) => { e.target.style.borderColor = "#095B67"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(25,29,27,0.14)"; }}
        />
      </div>

      <div style={{ marginBottom: 48 }}>
        <label style={labelStyle}>Your Message *</label>
        <textarea
          placeholder="Tell us about your project..."
          rows={6}
          required
          style={{
            ...fieldStyle,
            resize: "none",
            lineHeight: "1.7",
            borderBottomColor: fieldError === "message" ? "#c0392b" : undefined,
          }}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={(e) => { e.target.style.borderColor = "#095B67"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(25,29,27,0.14)"; }}
        />
      </div>

      {status === "error" && (
        <p style={{ color: "#c0392b", fontSize: 14, marginBottom: 20, fontWeight: 400 }}>
          {errorMsg}
        </p>
      )}

      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 24px" }}>
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "loading"}
          style={{ opacity: status === "loading" ? 0.7 : 1, flexShrink: 0 }}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        <p style={{ fontWeight: 300, color: "#9a9b9a", fontSize: 12, lineHeight: "1.5" }}>
          We respond within 24 hours on business days
        </p>
      </div>
    </form>
  );
}
