import { ImageResponse } from "next/og";

// Dasselbe Symbol für iPhone und iPad, nur größer. Apple legt seine eigene
// abgerundete Maske darüber, deshalb keine runden Ecken hier.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8B3E29",
        }}
      >
        <svg width="92" height="122" viewBox="0 0 12 16" fill="#FBF5EE">
          <path d="M6 0C6 0 0 7.2 0 10.4A6 6 0 0 0 12 10.4C12 7.2 6 0 6 0Z" />
        </svg>
      </div>
    ),
    size
  );
}
