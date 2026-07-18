"use client";

import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { about, siteConfig } from "@/data/content";
import { MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <SectionWrapper id="about" className="dot-grid-bg">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">// about</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              marginTop: 12,
            }}
          >
            The engineer behind the{" "}
            <span className="gradient-text">systems</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left: bio */}
          <motion.div variants={childVariants}>
            {/* Profile Picture */}
            <div
              style={{
                width: "100%",
                maxWidth: 360,
                aspectRatio: "1 / 1",
                borderRadius: 16,
                background: "var(--color-bg-surface)",
                border: "1px solid var(--color-border-glow)",
                boxShadow: "0 0 40px var(--color-accent-cyan-dim)",
                marginBottom: 24,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 360px"
                priority
              />
            </div>

            {/* Location + status */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                <MapPin size={14} style={{ color: "var(--color-accent-cyan)" }} />
                {about.location}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  background: "rgba(0, 217, 255, 0.08)",
                  border: "1px solid var(--color-border-glow)",
                  borderRadius: 6,
                  fontSize: "0.8rem",
                  color: "var(--color-accent-cyan)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    flexShrink: 0,
                  }}
                />
                Open to work — from June 2026
              </div>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div variants={childVariants} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              {about.bio}
            </p>

            {/* Top skill badges */}
            <div>
              <span
                className="section-label"
                style={{ display: "block", marginBottom: 12, fontSize: "0.7rem" }}
              >
                top skills
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {about.topSkills.map((skill) => (
                  <span key={skill} className="pill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat counters */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
                marginTop: 8,
              }}
            >
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: "20px 16px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--color-accent-cyan)",
                      textShadow: "0 0 20px var(--color-accent-cyan-dim)",
                      lineHeight: 1.2,
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
