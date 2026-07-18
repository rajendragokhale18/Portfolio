"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionWrapper, { childVariants } from "@/components/ui/SectionWrapper";
import { projects, ProjectFilter } from "@/data/content";
import { ExternalLink, X, Award, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

const FILTERS: ProjectFilter[] = ["All", "AI & LLM", "Backend", "Data Pipelines", "Full-Stack"];

type Project = (typeof projects)[0];

// ─── Project Card (extracted to fix hooks-in-map) ─────────────────────────────
function ProjectCard({
  project,
  onClick,
  prefersReduced,
}: {
  project: Project;
  onClick: () => void;
  prefersReduced: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || prefersReduced) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(4px)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <div
      ref={cardRef}
      className="glass-card"
      style={{
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Featured glow */}
      {project.featured && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 80,
            height: 80,
            background:
              "radial-gradient(circle at top right, var(--color-accent-cyan-dim), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Research / honor badge */}
      {project.badge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 4,
            background: "rgba(168, 85, 247, 0.12)",
            border: "1px solid var(--color-border-violet)",
            color: "var(--color-accent-violet)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            fontWeight: 600,
            alignSelf: "flex-start",
          }}
        >
          {project.isCapstone ? <BookOpen size={10} /> : <Award size={10} />}
          {project.badge.label}
        </div>
      )}

      {/* Category tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: 3,
              background: "var(--color-bg-elevated)",
              color: "var(--color-accent-cyan)",
              border: "1px solid var(--color-border-glow)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.4, flex: 1 }}>
        {project.title}
      </h3>

      {/* Period */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--color-text-muted)",
        }}
      >
        {project.period}
      </span>

      {/* Short description */}
      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.6,
          flex: 2,
        }}
      >
        {project.shortDesc}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              padding: "2px 6px",
              borderRadius: 3,
              background: "var(--color-bg-base)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer actions */}
      <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--color-accent-cyan)",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <ExternalLink size={12} />
          View details
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub for ${project.title}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            marginLeft: "auto",
            color: "var(--color-text-muted)",
            display: "flex",
            alignItems: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent-cyan)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
          }
        >
          <GithubIcon size={16} />
        </a>
      </div>
    </div>
  );
}

// ─── Main Projects Section ─────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReduced = useReducedMotion();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <SectionWrapper id="projects">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">// projects</span>
          <h2
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: 12 }}
          >
            Things I&apos;ve <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
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
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 6,
                  border: `1px solid ${isActive ? "var(--color-accent-cyan)" : "var(--color-border)"}`,
                  background: isActive
                    ? "linear-gradient(135deg, var(--color-accent-cyan-dim), var(--color-accent-violet-dim))"
                    : "transparent",
                  color: isActive
                    ? "var(--color-accent-cyan)"
                    : "var(--color-text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  prefersReduced={prefersReduced}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project detail modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.8)",
                  backdropFilter: "blur(4px)",
                  zIndex: 70,
                }}
              />
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90%",
                  maxWidth: 600,
                  maxHeight: "85vh",
                  overflow: "auto",
                  background: "var(--color-bg-surface)",
                  border: "1px solid var(--color-border-glow)",
                  borderRadius: 16,
                  padding: "32px",
                  zIndex: 80,
                  boxShadow:
                    "0 0 60px var(--color-accent-cyan-dim), 0 40px 80px rgba(0,0,0,0.6)",
                }}
                role="dialog"
                aria-modal="true"
                aria-label={selectedProject.title}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project detail"
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = "var(--color-accent-cyan)";
                    el.style.color = "var(--color-accent-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <X size={16} />
                </button>

                {/* Badge */}
                {selectedProject.badge && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 12px",
                      borderRadius: 4,
                      background: "rgba(168, 85, 247, 0.12)",
                      border: "1px solid var(--color-border-violet)",
                      color: "var(--color-accent-violet)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {selectedProject.isCapstone ? (
                      <BookOpen size={12} />
                    ) : (
                      <Award size={12} />
                    )}
                    {selectedProject.badge.label} — {selectedProject.badge.conference}
                  </div>
                )}

                {/* Category tags */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}
                >
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        padding: "2px 8px",
                        borderRadius: 3,
                        background: "var(--color-bg-elevated)",
                        color: "var(--color-accent-cyan)",
                        border: "1px solid var(--color-border-glow)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {selectedProject.title}
                </h2>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--color-text-muted)",
                    display: "block",
                    marginBottom: 20,
                  }}
                >
                  {selectedProject.period}
                </span>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  {selectedProject.shortDesc} {selectedProject.fullDesc}
                </p>

                {/* Tech stack */}
                <div style={{ marginBottom: 24 }}>
                  <span
                    className="section-label"
                    style={{ display: "block", marginBottom: 10, fontSize: "0.65rem" }}
                  >
                    tech stack
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          padding: "4px 10px",
                          borderRadius: 4,
                          background: "var(--color-bg-elevated)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: "none", display: "inline-flex" }}
                  aria-label={`View ${selectedProject.title} on GitHub`}
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
