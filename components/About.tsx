"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={18} />,
    label: "Education",
    value: "2nd-year Information Systems student",
  },
  {
    icon: <Code2 size={18} />,
    label: "Focus",
    value: "Full-Stack Web & Mobile Development",
  },
  {
    icon: <Target size={18} />,
    label: "Goal",
    value: "Internship or junior role in a product-focused team",
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            I&apos;m a second-year Information Systems student with a strong focus on full-stack
            development. I enjoy building products end-to-end — from designing clean UIs to
            architecting backend APIs and deploying to production.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
            }}
          >
            I&apos;ve shipped multiple projects across web and mobile using modern stacks like Next.js,
            Django, and React Native. I&apos;m actively looking for an internship or junior role where I
            can contribute to a real product and grow alongside an experienced team.
          </p>
        </motion.div>

        {/* Right: highlight cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                backgroundColor: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
