"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { blogPosts } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function Blog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="blog">
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">// field notes</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}>
            Thinking out{" "}
            <span className="gradient-text">loud</span>
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", marginTop: 12 }}>
            Short-form reflections on AI engineering, data systems, and building in production.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {blogPosts.map((post, i) => {
            const isOpen = expandedId === post.id;
            return (
              <motion.div
                key={post.id}
                variants={childVariants}
                className="glass-card"
                style={{ overflow: "hidden" }}
              >
                {/* Card header (always visible) */}
                <button
                  onClick={() => toggle(post.id)}
                  aria-expanded={isOpen}
                  aria-controls={`blog-body-${post.id}`}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "24px",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    {/* Tag + number */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--color-accent-violet)",
                          padding: "2px 8px",
                          borderRadius: 3,
                          background: "var(--color-accent-violet-dim)",
                          border: "1px solid var(--color-border-violet)",
                        }}
                      >
                        {post.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        #{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--color-accent-cyan)" : "var(--color-text-primary)",
                        marginBottom: 4,
                        transition: "color 0.2s",
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Hook */}
                    <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                      {post.hook}
                    </p>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ flexShrink: 0, marginTop: 2, color: "var(--color-text-muted)" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Expandable body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`blog-body-${post.id}`}
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 24px 24px",
                          borderTop: "1px solid var(--color-border)",
                          paddingTop: 20,
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.8,
                            marginBottom: 12,
                          }}
                        >
                          {post.teaser}
                        </p>
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.8,
                            borderLeft: "2px solid var(--color-border-glow)",
                            paddingLeft: 16,
                          }}
                        >
                          {post.full}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
