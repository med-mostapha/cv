"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Bot,
  BarChart3,
  Package,
  MessageSquare,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

// Media config per project.
// Files live in: /public/projects/[slug]/preview.mp4  or  /public/projects/[slug]/preview.png
// Set mediaType to "video" | "image" | null (null = show placeholder).
type MediaType = "video" | "image" | null;

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  color: string;
  demo: string | null;
  github: string;
  featured: boolean;
  mediaSlug: string;
  mediaType: MediaType;
}

const projects: Project[] = [
  {
    title: "BuBbLEMInD",
    subtitle: "AI Customer Support SaaS",
    description:
      "AI-powered SaaS platform that automates customer support with intelligent chatbots. Built for scalability — handles high message volumes with zero agent overhead.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Stripe", "PostgreSQL"],
    icon: <Bot size={22} />,
    color: "#6366f1",
    demo: null,
    github: "https://github.com/med-mostapha",
    featured: true,
    mediaSlug: "bubblemind",
    mediaType: "video",
  },
  {
    title: "AccuDash",
    subtitle: "Financial Dashboard",
    description:
      "Full-stack dashboard for managing invoices and tracking financial analytics. Features secure authentication, full CRUD operations, and real-time data visualization.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Tailwind"],
    icon: <BarChart3 size={22} />,
    color: "#10b981",
    demo: null,
    github: "https://github.com/med-mostapha",
    featured: true,
    mediaSlug: "accudash",
    mediaType: null,
  },
  {
    title: "Stock Management System",
    subtitle: "Mobile App + REST API",
    description:
      "Cross-platform mobile app paired with a Django REST API for inventory tracking. Features real-time stock alerts, analytics dashboards, and barcode scanning.",
    tech: ["React Native", "Expo", "Django", "PostgreSQL", "REST API"],
    icon: <Package size={22} />,
    color: "#f59e0b",
    demo: null,
    github: "https://github.com/med-mostapha",
    featured: true,
    mediaSlug: "stock-management",
    mediaType: null,
  },
  {
    title: "Ch6ari",
    subtitle: "Real-Time Chat App",
    description:
      "Real-time messaging application powered by Supabase. Supports group conversations, push notifications, and live presence indicators.",
    tech: ["React Native", "Supabase", "Expo", "TypeScript"],
    icon: <MessageSquare size={22} />,
    color: "#ec4899",
    demo: null,
    github: "https://github.com/med-mostapha",
    featured: false,
    mediaSlug: "ch6ari",
    mediaType: null,
  },
];

// Media preview: 16:9 container shown at the top of each card.
// - "video" → <video> with controls
// - "image" → Next.js <Image> with onError fallback to placeholder
// - null    → styled placeholder with project icon
function MediaPreview({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "var(--background)",
    border: "1px solid var(--card-border)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Placeholder shown when no media or on image load error
  const Placeholder = () => (
    <div
      style={{
        ...containerStyle,
        background: `linear-gradient(135deg, color-mix(in srgb, ${project.color} 8%, var(--background)), color-mix(in srgb, ${project.color} 18%, var(--card)))`,
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          backgroundColor: `color-mix(in srgb, ${project.color} 18%, transparent)`,
          color: project.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.7,
        }}
      >
        {project.icon}
      </div>
      <span
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          fontWeight: 500,
          opacity: 0.6,
          letterSpacing: "0.04em",
        }}
      >
        Preview coming soon
      </span>
    </div>
  );

  if (project.mediaType === "video") {
    const src = `/projects/${project.mediaSlug}/preview.webm`;
    return (
      <div style={containerStyle}>
        <video
          src={src}
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            // Hide broken video and show placeholder behind it
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    );
  }

  if (project.mediaType === "image" && !imgError) {
    const src = `/projects/${project.mediaSlug}/preview.png`;
    return (
      <div style={containerStyle}>
        <Image
          src={src}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return <Placeholder />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 8px 32px color-mix(in srgb, ${project.color} 14%, transparent)`,
      }}
    >
      {/* Media preview at the top of the card */}
      <div style={{ padding: "1rem 1rem 0" }}>
        <MediaPreview project={project} />
      </div>

      {/* Card body */}
      <div
        style={{
          padding: "1.25rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          flexGrow: 1,
        }}
      >
        {/* Header: icon + title + badge */}
        <div
          style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem" }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              backgroundColor: `color-mix(in srgb, ${project.color} 12%, transparent)`,
              color: project.color,
            }}
          >
            {project.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                {project.title}
              </h3>
              {project.featured && (
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    padding: "0.12rem 0.45rem",
                    borderRadius: "999px",
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                margin: "0.15rem 0 0",
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            margin: 0,
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                padding: "0.2rem 0.55rem",
                borderRadius: "6px",
                border: "1px solid var(--card-border)",
                color: "var(--muted)",
                backgroundColor: "var(--background)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "var(--accent)",
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--foreground)",
              border: "1px solid var(--card-border)",
              padding: "0.45rem 0.9rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--card-border)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            <GithubIcon size={12} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          Work
        </p>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            margin: "0 0 0.75rem",
          }}
        >
          Featured Projects
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          A selection of projects I built — each solving a real problem with a
          focused tech stack.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
