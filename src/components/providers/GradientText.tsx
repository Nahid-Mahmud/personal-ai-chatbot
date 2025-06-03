import React from "react";

export default function GradientText({ text }: { text?: string }) {
  return (
    <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
      {text || "Your Text Here"}
    </span>
  );
}
