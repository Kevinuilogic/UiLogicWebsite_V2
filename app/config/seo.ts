import { Metadata } from "next";

const siteConfig = {
  name: "Your Platform Name",
  description: "The ultimate solution for modern development workflows",
  url: "https://your-domain.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-org",
  },
};

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = siteConfig.ogImage,
  ogType = "website",
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: ogType,
      siteName: siteConfig.name,
      title: fullTitle,
      description: description || siteConfig.description,
      url: siteConfig.url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || siteConfig.description,
      images: [ogImage],
      creator: siteConfig.links.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}
