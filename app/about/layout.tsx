import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Your Company Name",
  description:
    "Learn about our company's mission, values, and the innovative technology solutions we provide. Discover our team, our approach, and our commitment to excellence.",
  keywords:
    "about us, company mission, technology solutions, team, innovation, expertise",
  openGraph: {
    title: "About Us | Your Company Name",
    description:
      "Learn about our company's mission, values, and the innovative technology solutions we provide.",
    type: "website",
    locale: "en_US",
    siteName: "Your Company Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Your Company Name",
    description:
      "Learn about our company's mission, values, and the innovative technology solutions we provide.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
