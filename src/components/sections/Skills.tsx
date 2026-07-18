"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/data/content";
import { Code2, Brain, Server, Cpu, Database, Workflow } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Server,
  Cpu,
  Database,
  Workflow,
};

const CATEGORY_ACCENT: Record<string, string> = {
  Programming: "var(--color-accent-cyan)",
  "GenAI & LLMs": "var(--color-accent-violet)",
  "Backend Engineering": "#3b82f6",
  "AI & Machine Learning": "#f59e0b",
  "Databases & Cloud": "#22c55e",
  "Automation & Tools": "#f97316",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...skillCategories.map((c) => c.name)];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeCategory);

  return (
    <SectionWrapper id="skills" className="dot-grid-bg">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">// skills</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}>
            The <span className="gradient-text">stack</span> I ship with
          </h2>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          variants={childVariants}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  border: `1px solid ${isActive ? "var(--color-accent-cyan)" : "var(--color-border)"}`,
                  background: isActive ? "var(--color-accent-cyan-dim)" : "transparent",
                  color: isActive ? "var(--color-accent-cyan)" : "var(--color-text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skill categories grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = ICON_MAP[cat.icon] || Code2;
              const accent = CATEGORY_ACCENT[cat.name] || "var(--color-accent-cyan)";

              return (
                <motion.div
                  key={cat.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card"
                  style={{ padding: "24px" }}
                  whileHover={{ y: -4, boxShadow: `0 12px 40px ${accent}22` }}
                >
                  {/* Category header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: `${accent}20`,
                        border: `1px solid ${accent}50`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} style={{ color: accent }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: accent,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {cat.name}
                    </span>
                  </div>

                  {/* Skills tag grid */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          padding: "4px 10px",
                          borderRadius: 4,
                          background: "var(--color-bg-elevated)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text-secondary)",
                          cursor: "default",
                          transition: "border-color 0.2s, color 0.2s",
                        }}
                        onHoverStart={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.borderColor = `${accent}80`;
                          target.style.color = accent;
                        }}
                        onHoverEnd={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.borderColor = "var(--color-border)";
                          target.style.color = "var(--color-text-secondary)";
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
