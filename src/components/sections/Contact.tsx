"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/content";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate form submission (replace with actual API call / Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact">
      {/* Ambient blobs (bookend the page) */}
      <div className="blob blob-cyan" aria-hidden="true" style={{ position: "absolute", width: 500, height: 500, top: -100, right: -150, opacity: 0.5 }} />
      <div className="blob blob-violet" aria-hidden="true" style={{ position: "absolute", width: 400, height: 400, bottom: -80, left: -100, opacity: 0.4 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">// contact</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}>
            Let&apos;s build something{" "}
            <span className="gradient-text">that matters.</span>
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            Open to AI Engineering, Data Engineering & Backend roles from June 2026. Reach out if you&apos;re building something ambitious.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {/* Left: Contact info */}
          <motion.div variants={childVariants} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Status badge */}
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(34, 197, 94, 0.08)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: 12,
                marginBottom: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 10px #22c55e",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#22c55e", fontWeight: 600 }}>
                  AVAILABLE FROM JUNE 2026
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                {siteConfig.location} · Remote · Open to relocation
              </p>
            </div>

            {/* Contact details */}
            {[
              { icon: Mail, label: "Primary Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Mail, label: "Secondary Email", value: siteConfig.emailSecondary, href: `mailto:${siteConfig.emailSecondary}` },
              { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: MapPin, label: "Location", value: siteConfig.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--color-accent-cyan-dim)",
                    border: "1px solid var(--color-border-glow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} style={{ color: "var(--color-accent-cyan)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: 2 }}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent-cyan)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-primary)" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              {[
                { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
                { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-accent-cyan)";
                    el.style.borderColor = "var(--color-accent-cyan)";
                    el.style.background = "var(--color-accent-cyan-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-text-secondary)";
                    el.style.borderColor = "var(--color-border)";
                    el.style.background = "transparent";
                  }}
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div variants={childVariants}>
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{
                  padding: "40px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  minHeight: 300,
                  justifyContent: "center",
                }}
              >
                <CheckCircle size={40} style={{ color: "#22c55e" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Message sent!</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => setFormState("idle")}
                  style={{ marginTop: 8 }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card"
                style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 20 }}
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: 6, fontFamily: "var(--font-mono)" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: 6, fontFamily: "var(--font-mono)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: 6, fontFamily: "var(--font-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="form-input"
                    aria-required="true"
                    style={{ resize: "vertical", minHeight: 140 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formState === "sending"}
                  aria-label="Send message"
                  style={{
                    opacity: formState === "sending" ? 0.7 : 1,
                    justifyContent: "center",
                  }}
                >
                  {formState === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{ width: 16, height: 16, border: "2px solid #000", borderTopColor: "transparent", borderRadius: "50%" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
