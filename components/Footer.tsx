"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--card-border)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          Med<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: 0 }}>
          © {year} Mohamed Elmoustapha. Built with Next.js & Tailwind CSS.
        </p>

        <a
          href="#hero"
          style={{
            fontSize: "0.82rem",
            color: "var(--muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
