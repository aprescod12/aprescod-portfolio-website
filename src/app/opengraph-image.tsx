import { ImageResponse } from "next/og";

export const alt = "Amiri Prescod — embedded and biomedical systems engineering portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -170,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(59, 130, 246, 0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: 160,
            width: 540,
            height: 540,
            borderRadius: 540,
            background: "rgba(37, 99, 235, 0.12)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 82px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 18,
                border: "2px solid #3b82f6",
                background: "#111827",
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              AP
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
              Amiri Prescod
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
            <div
              style={{
                display: "flex",
                marginBottom: 20,
                color: "#93c5fd",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Engineering portfolio
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 62,
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: -2,
              }}
            >
              Embedded and biomedical systems built for real-world use.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                color: "#d4d4d8",
                fontSize: 25,
                lineHeight: 1.4,
              }}
            >
              Electrical Engineering · Biomedical Engineering M.S. candidate · Embedded systems · Biomedical sensing
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
