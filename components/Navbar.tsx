"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder preserves layout during SSR without flickering
    return (
      <span
        style={{
          display: "inline-flex",
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          border: "1px solid var(--card-border)",
        }}
      />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      style={{
        padding: "0.4rem",
        borderRadius: "8px",
        border: "1px solid var(--card-border)",
        background: "transparent",
        color: "var(--muted)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        lineHeight: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--card)";
        e.currentTarget.style.color = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--muted)";
      }}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Track viewport to avoid mixing inline display styles with Tailwind responsive classes
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop(e.matches);
    handle(mq);
    mq.addEventListener("change", handle);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => {
      mq.removeEventListener("change", handle);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        backgroundColor: scrolled ? "var(--background)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--foreground)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Med<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav — rendered conditionally via JS to avoid inline/Tailwind conflict */}
        {isDesktop && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            ))}
            {/* Single theme toggle for desktop */}
            <ThemeToggle />
          </nav>
        )}

        {/* Mobile controls */}
        {!isDesktop && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Single theme toggle for mobile */}
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                padding: "0.4rem",
                borderRadius: "8px",
                border: "1px solid var(--card-border)",
                background: "transparent",
                color: "var(--foreground)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 0,
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {!isDesktop && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            style={{
              backgroundColor: "var(--background)",
              borderBottom: "1px solid var(--card-border)",
              padding: "0.5rem 1.5rem 1rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.65rem 0",
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--card-border)",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
