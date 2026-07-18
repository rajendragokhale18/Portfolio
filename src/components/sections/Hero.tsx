"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/BrandIcons";
import { siteConfig, heroRoles, heroTagline, heroSubtext } from "@/data/content";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    if (prefersReduced) {
      setDisplayedText(heroRoles[0]);
      return;
    }
    const current = heroRoles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length + 1));
      }, 80);
    } else if (!isDeleting && displayedText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, prefersReduced]);

  // Particle / neural net canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouse);

    const PARTICLE_COUNT = 80;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x += dx * 0.003;
          p.y += dy * 0.003;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 217, 255, 0.5)";
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [prefersReduced]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
      aria-label="Hero section"
    >
      {/* Neural net canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      />

      {/* Ambient blobs */}
      <div
        className="blob blob-cyan"
        aria-hidden="true"
        style={{ width: 600, height: 600, top: -100, right: -100 }}
      />
      <div
        className="blob blob-violet"
        aria-hidden="true"
        style={{ width: 500, height: 500, bottom: -100, left: -100 }}
      />

      {/* Dot grid overlay */}
      <div
        className="dot-grid-bg"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.3 }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="section-label"
            style={{ display: "block", marginBottom: 20 }}
          >
            &lt; portfolio /&gt;
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}
        >
          {siteConfig.name}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ marginBottom: 20 }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              color: "var(--color-accent-cyan)",
              fontWeight: 500,
            }}
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              style={{
                borderLeft: "2px solid var(--color-accent-cyan)",
                marginLeft: 2,
                display: "inline-block",
                height: "1.2em",
                verticalAlign: "middle",
              }}
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="gradient-text"
          style={{
            fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
            fontWeight: 700,
            marginBottom: 16,
            letterSpacing: "-0.01em",
          }}
        >
          {heroTagline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "var(--color-text-secondary)",
            maxWidth: 640,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          {heroSubtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <button
            className="btn-primary"
            onClick={() => scrollTo("projects")}
            aria-label="View projects"
          >
            <ExternalLink size={16} />
            View Projects
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo("contact")}
            aria-label="Get in touch"
          >
            Get In Touch
          </button>
          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-secondary"
            aria-label="Download resume"
            style={{ textDecoration: "none" }}
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 64 }}
        >
          {[
            { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
            { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
            { icon: LeetcodeIcon, href: siteConfig.leetcode, label: "LeetCode" },
            { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--color-accent-cyan)";
                el.style.borderColor = "var(--color-accent-cyan)";
                el.style.boxShadow = "0 0 16px var(--color-accent-cyan-dim)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--color-text-secondary)";
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "none";
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={() => scrollTo("about")}
          aria-label="Scroll to about section"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-muted)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            margin: "0 auto",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
