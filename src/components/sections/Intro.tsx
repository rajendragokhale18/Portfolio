"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "> Initializing systems...", delay: 0 },
  { text: "> Loading AI modules... [OK]", delay: 700 },
  { text: "> Connecting data pipelines... [OK]", delay: 1400 },
  { text: "> Running agentic workflows... [OK]", delay: 2100 },
  { text: "> From prompts to production.", delay: 2800, accent: true },
];

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
          if (i === BOOT_LINES.length - 1) {
            timers.push(
              setTimeout(() => {
                setDone(true);
                setTimeout(onComplete, 600);
              }, 800)
            );
          }
        }, line.delay)
      );
    });

    // Auto-skip after 5 seconds regardless
    timers.push(setTimeout(() => { setDone(true); setTimeout(onComplete, 400); }, 5000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    setDone(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--color-bg-base)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {/* Terminal window */}
          <div
            style={{
              width: "100%",
              maxWidth: 560,
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-border-glow)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 0 60px var(--color-accent-cyan-dim), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Terminal titlebar */}
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--color-bg-elevated)",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--color-text-muted)",
                }}
              >
                rajendra@portfolio ~ boot
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: "24px", minHeight: 180 }}>
              {BOOT_LINES.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        lineHeight: "2",
                        color: line.accent
                          ? "var(--color-accent-cyan)"
                          : "var(--color-text-secondary)",
                        fontWeight: line.accent ? 600 : 400,
                        textShadow: line.accent
                          ? "0 0 20px var(--color-accent-cyan)"
                          : "none",
                      }}
                    >
                      {line.text}
                      {i === visibleLines[visibleLines.length - 1] && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.7 }}
                          style={{ marginLeft: 2, borderLeft: "2px solid var(--color-accent-cyan)" }}
                        >
                          &nbsp;
                        </motion.span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            style={{
              marginTop: 32,
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: 6,
              padding: "8px 20px",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-accent-cyan)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent-cyan)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)";
            }}
          >
            skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
