import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
      <p style={{ fontWeight: 700, letterSpacing: 2 }}>VUNZA</p>
      <h1 style={{ fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.02, maxWidth: 800 }}>
        Tecnologia que movimenta seu negócio.
      </h1>
      <p style={{ fontSize: 20, maxWidth: 650, color: "#666", lineHeight: 1.6 }}>
        Uma base SaaS preparada para ajudar pequenos negócios a atrair, vender,
        atender, fidelizar e vender novamente.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
        <Link
          href="/login"
          style={{
            background: "#111",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Entrar
        </Link>
        <Link
          href="/register"
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "14px 20px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Criar conta
        </Link>
      </div>
    </main>
  );
}
