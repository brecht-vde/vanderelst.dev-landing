import { Site } from "@/utilities/persistence/queries";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export async function generateMetadata(): Promise<Metadata> {
  const site = await Site();
  return {
    keywords: site.seo.keywords,
    authors: {
      name: site.seo.author
    },
    description: site.seo.description,
    title: site.seo.title,
    openGraph: {
      images: [
        site.seo.image.url
      ]
    },
    robots: site.seo.robots,
    icons: {
      icon: site.favicon.url,
    },
  };
}

// Wait for solution: https://github.com/vercel/next.js/issues/42292
export default (async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await Site();
  return (
    <html lang="en">
      <body
        className={
          "font-mono mx-auto flex h-screen w-4/5 flex-col gap-10 py-10 text-neutral-800"
        }
      >
        <nav>
          <Navigation site={site} />
        </nav>
        {children}
        <footer>
          <hr className="w-1/5 border-1 border-dotted border-blue-500 pb-2" />
        </footer>
        <Analytics />
      </body>
    </html>
  );
} as unknown as () => JSX.Element);
