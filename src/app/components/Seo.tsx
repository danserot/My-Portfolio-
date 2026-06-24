import { useEffect } from "react";

export const SITE_URL = "https://artem-khloptsev-portfolio.netlify.app";
const DEFAULT_IMAGE = `${SITE_URL}/Images/android-chrome-512x512.png`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

function upsertMeta(selector: string, attribute: "name" | "property", key: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  return element;
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description").content = description;
    upsertMeta('meta[property="og:title"]', "property", "og:title").content = title;
    upsertMeta('meta[property="og:description"]', "property", "og:description").content = description;
    upsertMeta('meta[property="og:type"]', "property", "og:type").content = "website";
    upsertMeta('meta[property="og:url"]', "property", "og:url").content = canonicalUrl;
    upsertMeta('meta[property="og:image"]', "property", "og:image").content = image;
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card").content = "summary_large_image";

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const scriptId = "portfolio-structured-data";
    document.getElementById(scriptId)?.remove();

    const structuredData =
      jsonLd ??
      ({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Artem Khloptsev",
        url: SITE_URL,
        jobTitle: "Frontend Developer",
        email: "mailto:tema324756@gmail.com",
        sameAs: [
          "https://github.com/danserot",
          "https://www.linkedin.com/in/artem-khloptsev-a37533384/",
          "https://t.me/Artem_Khloptsev",
        ],
      } as Record<string, unknown>);

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => script.remove();
  }, [description, image, jsonLd, path, title]);

  return null;
}
