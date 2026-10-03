import { ImageResponse } from "next/og";

export const alt = "DMath Learning — Think Deeper, Solve Better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "linear-gradient(135deg, #F3F7FB 0%, #FFFFFF 58%, #E8F7FF 100%)",
          color: "#1F2A44",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#0B2D6B",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800 }}>DMath Learning</div>
            <div style={{ fontSize: 18, color: "#64748B" }}>Think Deeper, Solve Better.</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 930 }}>
          <div style={{ fontSize: 62, lineHeight: 1.04, fontWeight: 800 }}>
            Belajar matematika dengan konsep, bukti, visualisasi, dan latihan.
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.45, color: "#334155" }}>
            Kuliah · ON-MIPA · Pembuktian · Problem Solving
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#64748B" }}>
          <span>Materi · Bank Soal · Pembahasan</span>
          <span>dmath-learning.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
