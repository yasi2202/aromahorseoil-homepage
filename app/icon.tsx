import { ImageResponse } from "next/og";

// Das Symbol im Browser-Tab: ein cremefarbener Tropfen auf Terrakotta.
// Es wird gezeichnet statt geladen — solange es kein richtiges Logo gibt,
// ist das die ehrlichste Zwischenlösung. Ersetze diese Datei später einfach
// durch eine app/icon.png, dann nimmt Next.js die.

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        <svg width="34" height="45" viewBox="0 0 12 16" fill="#FBF5EE">
          <path d="M6 0C6 0 0 7.2 0 10.4A6 6 0 0 0 12 10.4C12 7.2 6 0 6 0Z" />
        </svg>
      </div>
    ),
    size
  );
}
