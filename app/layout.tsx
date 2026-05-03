import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Cost Predictor — Forecast Your Monthly API Spend",
  description: "Analyze your API key usage patterns and predict monthly costs for OpenAI, Anthropic, and more. Get optimization recommendations to cut your bill."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9611bc16-52ac-4f3f-af11-108be7d01e2b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
