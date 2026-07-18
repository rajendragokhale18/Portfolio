"use client";

import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { certifications, publications, honors } from "@/data/content";
import { Award, BookOpen, Trophy, Star, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="dot-grid-bg">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">// certifications & publications</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}>
            Recognition &{" "}
            <span className="gradient-text">research</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
          }}
        >
          {/* Left: Certifications */}
          <motion.div variants={childVariants}>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--color-accent-cyan)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <CheckCircle size={14} />
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="glass-card"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    padding: "14px 18px",
                    borderLeft: cert.highlight
                      ? "2px solid var(--color-accent-cyan)"
                      : "2px solid transparent",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.4, marginBottom: 2 }}>
                        {cert.name}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                        {cert.issuer}
                      </p>
                      {"badge" in cert && cert.badge && (
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            marginTop: 6,
                            padding: "2px 8px",
                            borderRadius: 3,
                            background: "rgba(0, 217, 255, 0.08)",
                            border: "1px solid var(--color-border-glow)",
                            color: "var(--color-accent-cyan)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.62rem",
                          }}
                        >
                          <Star size={9} />
                          {cert.badge}
                        </div>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--color-text-muted)",
                        flexShrink: 0,
                        paddingTop: 2,
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Publications + Honors */}
          <motion.div variants={childVariants} style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {/* Publications */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--color-accent-violet)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <BookOpen size={14} />
                Publications
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {publications.map((pub, i) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{
                      padding: "20px",
                      borderLeft: pub.featured
                        ? "2px solid var(--color-accent-violet)"
                        : "2px solid transparent",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {pub.featured && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: 60,
                          height: 60,
                          background: "radial-gradient(circle at top right, var(--color-accent-violet-dim), transparent 70%)",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          padding: "2px 8px",
                          borderRadius: 3,
                          background: "var(--color-accent-violet-dim)",
                          border: "1px solid var(--color-border-violet)",
                          color: "var(--color-accent-violet)",
                          flexShrink: 0,
                        }}
                      >
                        {pub.type}
                      </span>
                      {pub.featured && pub.isCapstone && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            padding: "2px 8px",
                            borderRadius: 3,
                            background: "rgba(0, 217, 255, 0.08)",
                            border: "1px solid var(--color-border-glow)",
                            color: "var(--color-accent-cyan)",
                          }}
                        >
                          Final Year Project
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.4, marginBottom: 6 }}>
                      &ldquo;{pub.title}&rdquo;
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-accent-violet)", marginBottom: 4 }}>
                      {pub.venue}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                      {pub.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#f59e0b",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Trophy size={14} />
                Honors & Achievements
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {honors.map((honor, i) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{
                      padding: "16px 18px",
                      borderLeft: honor.highlight ? "2px solid #f59e0b" : "2px solid transparent",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <Award
                      size={16}
                      style={{ color: honor.highlight ? "#f59e0b" : "var(--color-text-muted)", marginTop: 2, flexShrink: 0 }}
                    />
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: 2 }}>{honor.title}</p>
                      <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>{honor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
