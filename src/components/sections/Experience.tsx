"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { experiences, education } from "@/data/content";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const TYPE_COLORS: Record<string, string> = {
  work: "var(--color-accent-cyan)",
  leadership: "var(--color-accent-violet)",
  education: "#22c55e",
};

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="experience">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">// experience</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}>
            Where I&apos;ve built{" "}
            <span className="gradient-text">real things</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, var(--color-accent-cyan), var(--color-accent-violet), transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                variants={childVariants}
                style={{ display: "flex", gap: 24 }}
              >
                {/* Dot + line connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--color-bg-surface)",
                      border: `2px solid ${TYPE_COLORS[exp.type] || "var(--color-accent-cyan)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 12px ${TYPE_COLORS[exp.type] || "var(--color-accent-cyan)"}44`,
                      flexShrink: 0,
                    }}
                  >
                    {exp.type === "work" ? (
                      <Briefcase size={16} style={{ color: TYPE_COLORS[exp.type] }} />
                    ) : (
                      <GraduationCap size={16} style={{ color: TYPE_COLORS[exp.type] }} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="glass-card"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ flex: 1, padding: "20px 24px", marginBottom: 4 }}
                >
                  {/* Period badge */}
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: TYPE_COLORS[exp.type] || "var(--color-accent-cyan)",
                        background: `${TYPE_COLORS[exp.type] || "var(--color-accent-cyan)"}15`,
                        padding: "3px 10px",
                        borderRadius: 4,
                      }}
                    >
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                        <MapPin size={10} />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 2 }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-accent-cyan)", marginBottom: 12, fontWeight: 500 }}>
                    {exp.company}
                  </p>

                  {exp.highlights.length > 0 && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {exp.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          style={{
                            display: "flex",
                            gap: 10,
                            fontSize: "0.82rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: "var(--color-accent-cyan)", flexShrink: 0, marginTop: 2 }}>›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div variants={childVariants} style={{ marginTop: 64 }}>
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--color-accent-violet)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Education
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {education.map((edu, i) => (
              <div key={i} className="glass-card" style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>{edu.degree}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-accent-violet)", marginBottom: 4 }}>{edu.institution}</p>
                    {edu.note && (
                      <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{edu.note}</p>
                    )}
                    {edu.coursework.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              padding: "2px 8px",
                              borderRadius: 4,
                              background: "var(--color-bg-elevated)",
                              color: "var(--color-text-muted)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                        marginBottom: 4,
                      }}
                    >
                      {edu.period}
                    </div>
                    {edu.gpa && (
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--color-accent-cyan)",
                        }}
                      >
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
