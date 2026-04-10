import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top right, #2b1a12 0%, #140c0f 50%, #0f090a 100%)",
          color: "#e8ddd0",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 28,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c41e3a",
            }}
          >
            rflvz.com
          </span>
          <span style={{ fontSize: 20, opacity: 0.75 }}>
            AI Architecture Developer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 1000,
            }}
          >
            Rafa Alvarez
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.25,
              opacity: 0.92,
              maxWidth: 980,
            }}
          >
            LLM orchestration, agentes autonomos y arquitectura MCP para sistemas
            de IA en produccion.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: 24,
            color: "#e8ddd0",
          }}
        >
          <span
            style={{
              border: "1px solid #3a2a1a",
              padding: "8px 16px",
            }}
          >
            Next.js
          </span>
          <span
            style={{
              border: "1px solid #3a2a1a",
              padding: "8px 16px",
            }}
          >
            TypeScript
          </span>
          <span
            style={{
              border: "1px solid #3a2a1a",
              padding: "8px 16px",
            }}
          >
            Multi-agent Systems
          </span>
        </div>
      </div>
    ),
    size,
  );
}
