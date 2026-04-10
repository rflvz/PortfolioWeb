import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            "linear-gradient(140deg, #140c0f 5%, #1c1510 55%, #2b1a12 100%)",
          color: "#e8ddd0",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#c41e3a",
          }}
        >
          The Analog Artifact
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 68,
              lineHeight: 1.06,
              fontWeight: 700,
              maxWidth: 1020,
            }}
          >
            Rafa Alvarez
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 34,
              lineHeight: 1.24,
              opacity: 0.92,
              maxWidth: 980,
            }}
          >
            Arquitectura IA con LLMs, agentes y protocolo MCP.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <span style={{ opacity: 0.85 }}>rflvz.com</span>
          <span style={{ color: "#d94f3d" }}>summary_large_image ready</span>
        </div>
      </div>
    ),
    size,
  );
}
