"use client";

import { siteConfig, navLinks } from "@/data/content";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      style={{
        background: "var(--color-bg-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--color-accent-cyan)",
          }}
        >
          RG<span style={{ color: "var(--color-accent-violet)" }}>_</span>
        </span>

        {/* Quick nav */}
        <nav
          aria-label="Footer navigation"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            justifyContent: "center",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-accent-cyan)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-text-muted)")
              }
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
            { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
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
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--color-accent-cyan)";
                el.style.borderColor = "var(--color-accent-cyan)";
                el.style.boxShadow = "0 0 12px var(--color-accent-cyan-dim)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--color-text-secondary)";
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "none";
              }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--color-text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          © {year} {siteConfig.name}. Built with{" "}
          <Heart size={12} style={{ color: "var(--color-accent-violet)" }} />
          and Next.js.
        </p>
      </div>
    </footer>
  );
}
