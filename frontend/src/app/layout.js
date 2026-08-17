import { Inter } from "next/font/google";
import "./globals.css";

// Self-hosted at build time: no request to fonts.googleapis.com at runtime,
// which was timing out and leaving every page in a fallback face.
const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "AMACO EIMS ProSystem",
  description:
    "Claims-centric digital insurance management platform for Motor & General Insurance in the Kenyan market. Built to international standards.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#ff6b00",
  colorScheme: "light dark",
};

// Runs before paint so the saved theme is on <html> already -- same trick the
// legacy index.html used to avoid a flash of the wrong palette.
const THEME_BOOT = `{
  const s = localStorage.getItem("color-scheme") || "system";
  const dark = s === "dark" || (s === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
