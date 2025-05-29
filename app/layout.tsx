import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "UI Logic",
  description: "UI Logc is a platform that revolutionizes the way developers build and manage user interfaces. Our mission is to simplify UI development, making it faster, more efficient, and accessible to everyone.",
  keywords: [
    "UI Logic",
    "UI development",
    "user interface",
    "web development",
    "frontend development",
    "software development",
    "developer tools",
    "UI design",
    "web design",
    "frontend tools",
    "UI frameworks",
    "UI components",],
  generator: "UI Logic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
     
        {children}
      </body>
    </html>
  );
}
