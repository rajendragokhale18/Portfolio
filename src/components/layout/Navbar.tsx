"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/content";
import { Mail, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/BrandIcons";

const sections = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scrollspy
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          style={{
            background: scrolled
              ? "rgba(10, 10, 15, 0.92)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--color-accent-cyan)",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.05em",
              }}
              aria-label="Scroll to top"
            >
              RG<span style={{ color: "var(--color-accent-violet)" }}>_</span>
            </button>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              style={{ display: "flex", alignItems: "center", gap: 4 }}
              className="hidden-mobile"
            >
              {navLinks.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = active === id;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    style={{
                      position: "relative",
                      padding: "6px 14px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: isActive
                        ? "var(--color-accent-cyan)"
                        : "var(--color-text-secondary)",
                      transition: "color 0.2s",
                    }}
                    aria-current={isActive ? "true" : undefined}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--color-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--color-text-secondary)";
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "14px",
                          right: "14px",
                          height: 2,
                          background: "var(--color-accent-cyan)",
                          borderRadius: 1,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Social icons + mobile menu button */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="hidden-mobile" style={{ display: "flex", gap: 4 }}>
                {[
                  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
                  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
                  { icon: LeetcodeIcon, href: siteConfig.leetcode, label: "LeetCode" },
                  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
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
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      color: "var(--color-text-secondary)",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--color-accent-cyan)";
                      el.style.background = "var(--color-accent-cyan-dim)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--color-text-secondary)";
                      el.style.background = "transparent";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Mobile menu toggle */}
              <button
                className="mobile-only"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  background: "none",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: 320,
              background: "var(--color-bg-surface)",
              borderLeft: "1px solid var(--color-border)",
              zIndex: 60,
              padding: "80px 24px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                style={{
                  padding: "14px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--color-border)",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color:
                    active === href.replace("#", "")
                      ? "var(--color-accent-cyan)"
                      : "var(--color-text-primary)",
                  textAlign: "left",
                }}
              >
                {label}
              </button>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
                { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: LeetcodeIcon, href: siteConfig.leetcode, label: "LeetCode" },
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
                    color: "var(--color-text-secondary)",
                    fontSize: "0.85rem",
                  }}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 55,
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .mobile-only { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}
