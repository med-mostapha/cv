"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Django", "Node.js", "REST APIs", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Expo", "Vercel", "Linux"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
        backgroundColor: "color-mix(in srgb, var(--card) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
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
            Expertise
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                {group.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      padding: "0.35rem 0.75rem",
                      borderRadius: "8px",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
