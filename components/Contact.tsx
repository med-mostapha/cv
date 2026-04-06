"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "dedijekani@gmail.com",
    href: "mailto:dedijekani@gmail.com",
    color: "#6366f1",
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/med-mostapha",
    href: "https://github.com/med-mostapha",
    color: "#374151",
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "Mohamed Elmostapha",
    href: "https://www.linkedin.com/in/mohamed-elmostapha-mohamed-209645343/",
    color: "#0077b5",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--card-border)",
        backgroundColor: "color-mix(in srgb, var(--card) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem", maxWidth: "560px" }}
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
            Get In Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75 }}>
            I&apos;m currently looking for internship and junior opportunities. If you have a role that
            might be a good fit, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1rem",
          }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                backgroundColor: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "14px",
                textDecoration: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = link.color;
                e.currentTarget.style.boxShadow = `0 4px 20px color-mix(in srgb, ${link.color} 15%, transparent)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: `color-mix(in srgb, ${link.color} 12%, transparent)`,
                  color: link.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.15rem",
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.value}
                </p>
              </div>
              <ArrowUpRight size={16} style={{ color: "var(--muted)", flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
