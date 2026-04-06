"use client";

import Image from "next/image";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as Easing },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Profile photo */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          marginBottom: "1.5rem",
          position: "relative",
          width: "128px",
          height: "128px",
          borderRadius: "50%",
          padding: "3px",
          background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 40%, transparent))",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "var(--card)",
            position: "relative",
          }}
        >
          <Image
            src="/my-photo.png"
            alt="Mohamed Elmoustapha"
            fill
            sizes="128px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.3rem 0.9rem",
          borderRadius: "999px",
          border: "1px solid var(--accent)",
          backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
          marginBottom: "1.5rem",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500 }}>
          Open to internships & junior roles
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: "var(--foreground)",
          marginBottom: "0.5rem",
        }}
      >
        Mohamed Elmoustapha
        <br />
        <span style={{ color: "var(--accent)" }}>Mohamed Lemine</span>
      </motion.h1>

      {/* Title */}
      <motion.p
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 600,
          color: "var(--muted)",
          marginBottom: "1.25rem",
          letterSpacing: "0.01em",
        }}
      >
        Full Stack Developer
      </motion.p>

      {/* Description */}
      <motion.p
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          color: "var(--muted)",
          maxWidth: "520px",
          lineHeight: 1.75,
          marginBottom: "2.5rem",
        }}
      >
        Building scalable web and mobile applications with modern technologies.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <a
          href="#projects"
          style={{
            padding: "0.75rem 1.75rem",
            borderRadius: "10px",
            backgroundColor: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            transition: "all 0.2s",
            boxShadow: "0 4px 14px color-mix(in srgb, var(--accent) 30%, transparent)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.backgroundColor = "var(--accent-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.backgroundColor = "var(--accent)";
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.75rem 1.75rem",
            borderRadius: "10px",
            border: "1px solid var(--card-border)",
            color: "var(--foreground)",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            backgroundColor: "transparent",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.backgroundColor = "var(--card)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        custom={6}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ display: "flex", gap: "1rem", marginBottom: "4rem" }}
      >
        {[
          { icon: <GithubIcon size={18} />, href: "https://github.com/med-mostapha", label: "GitHub" },
          {
            icon: <LinkedinIcon size={18} />,
            href: "https://www.linkedin.com/in/mohamed-elmostapha-mohamed-209645343/",
            label: "LinkedIn",
          },
          { icon: <Mail size={18} />, href: "mailto:dedijekani@gmail.com", label: "Email" },
        ].map(({ icon, href, label }) => (
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
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid var(--card-border)",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent) 8%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--card-border)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#projects"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ color: "var(--muted)" }}
        aria-label="Scroll to projects"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
