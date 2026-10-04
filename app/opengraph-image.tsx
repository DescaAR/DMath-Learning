import { ImageResponse } from "next/og";

export const dynamic = "force-static";

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
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #071B45 0%, #0B3B91 45%, #1467D8 72%, #4EA6FF 100%)",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            right: -120,
            top: -170,
            background: "rgba(255,255,255,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            borderRadius: 999,
            right: 70,
            bottom: -230,
            border: "2px solid rgba(255,255,255,0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 84,
            top: 92,
            fontSize: 180,
            lineHeight: 1,
            fontWeight: 700,
            color: "rgba(255,255,255,0.07)",
          }}
        >
          ∑
        </div>
        <div
          style={{
            position: "absolute",
            right: 285,
            bottom: 70,
            fontSize: 108,
            lineHeight: 1,
            fontWeight: 700,
            color: "rgba(255,255,255,0.065)",
          }}
        >
          π
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "74px 84px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 38,
              maxWidth: 980,
            }}
          >
            <div
              style={{
                width: 154,
                height: 154,
                borderRadius: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.14)",
                border: "2px solid rgba(255,255,255,0.26)",
                boxShadow: "0 24px 70px rgba(2, 14, 45, 0.28)",
                fontSize: 78,
                fontWeight: 900,
                letterSpacing: "-0.08em",
              }}
            >
              D
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  fontSize: 76,
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                }}
              >
                DMath Learning
              </div>

              <div
                style={{
                  width: 116,
                  height: 6,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.82)",
                }}
              />

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Think Deeper, Solve Better.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 84,
            bottom: 52,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.68)",
          }}
        >
          Mathematics Learning Platform
        </div>
      </div>
    ),
    size
  );
}
