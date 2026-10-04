import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "DMath Learning — Think Deeper, Solve Better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoUrl =
  "https://raw.githubusercontent.com/DescaAR/DMath-Learning/github-pages-static/public/brand/logo-symbol.webp";

export default function Image() {
  const verticalLines = Array.from({ length: 21 }, (_, index) => 28 + index * 56);
  const horizontalLines = Array.from({ length: 12 }, (_, index) => 30 + index * 50);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          padding: "8px",
          background: "#C6F2CB",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            borderRadius: 12,
            background:
              "linear-gradient(115deg, #0B2A4D 0%, #09213D 48%, #0A3768 73%, #2C84CB 100%)",
            color: "#FFFFFF",
          }}
        >
          {verticalLines.map((left) => (
            <div
              key={"v-" + left}
              style={{
                position: "absolute",
                left,
                top: 0,
                width: 1,
                height: "100%",
                background: "rgba(116, 185, 235, 0.075)",
              }}
            />
          ))}

          {horizontalLines.map((top) => (
            <div
              key={"h-" + top}
              style={{
                position: "absolute",
                left: 0,
                top,
                width: "100%",
                height: 1,
                background: "rgba(116, 185, 235, 0.075)",
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              width: 430,
              height: 430,
              borderRadius: 999,
              right: -35,
              top: -108,
              background:
                "linear-gradient(145deg, rgba(70,167,231,.96), rgba(44,126,199,.50))",
              boxShadow: "0 0 120px rgba(62,155,225,.48)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 395,
              height: 395,
              borderRadius: 999,
              right: -78,
              bottom: -228,
              background:
                "linear-gradient(145deg, rgba(53,145,211,.86), rgba(31,101,172,.42))",
              boxShadow: "0 0 100px rgba(38,126,199,.38)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 310,
              height: 310,
              borderRadius: 999,
              left: 25,
              top: -145,
              background:
                "linear-gradient(145deg, rgba(29,104,162,.46), rgba(13,61,103,.10))",
              boxShadow: "0 0 85px rgba(25,106,169,.30)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 87,
              top: 70,
              width: 330,
              height: 330,
              borderRadius: 999,
              border: "1px solid rgba(184,227,255,.08)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 112,
              top: 94,
              width: 280,
              height: 280,
              borderRadius: 999,
              border: "1px solid rgba(184,227,255,.065)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 137,
              top: 119,
              width: 230,
              height: 230,
              borderRadius: 999,
              border: "1px solid rgba(184,227,255,.055)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 72,
              top: 62,
              width: 112,
              height: 112,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              background: "rgba(255,255,255,.97)",
              border: "2px solid rgba(255,255,255,.84)",
              boxShadow: "0 14px 34px rgba(0, 20, 49, .28)",
            }}
          >
            <img
              src={logoUrl}
              width="82"
              height="82"
              alt=""
              style={{
                objectFit: "contain",
                borderRadius: 14,
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              left: 72,
              top: 218,
              display: "flex",
              flexDirection: "column",
              width: 790,
            }}
          >
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: "0.11em",
                color: "#A8D5F5",
                textTransform: "uppercase",
              }}
            >
              MATHEMATICS · LEARNING · OLYMPIAD
            </div>

            <div
              style={{
                marginTop: 18,
                fontSize: 68,
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
              }}
            >
              DMath Learning
            </div>

            <div
              style={{
                marginTop: 13,
                fontSize: 31,
                lineHeight: 1.2,
                fontWeight: 500,
                color: "#D8E9F7",
                letterSpacing: "-0.012em",
              }}
            >
              Think Deeper, Solve Better.
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 17,
                lineHeight: 1.25,
                fontWeight: 500,
                color: "#AFCBE1",
                letterSpacing: "0.025em",
              }}
            >
              Konsep · Pembuktian · Latihan · Bank Soal
            </div>

            <div
              style={{
                marginTop: 46,
                width: 620,
                height: 1,
                background: "rgba(170, 211, 239, .28)",
              }}
            />

            <div
              style={{
                marginTop: 25,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#92B7D4",
              }}
            >
              descaar.github.io/DMath-Learning
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
