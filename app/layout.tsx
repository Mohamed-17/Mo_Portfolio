import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingContext";
import ClientLayout from "@/components/ClientLayout";
import Hero from "@/components/Hero";

const joseFonts = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mo | Front-end Developer",
  description:
    "Web developer with a relentless drive for excellence, skilled in creating and maintaining functional and responsive web applications and websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="my-element" suppressHydrationWarning={true}>
      <head>
        <title>Mo | Front-end Developer</title>
        <script type="application/ld+json">
          {`
            {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamed",
            "jobTitle": "Frontend Developer",
            "description": "As a frontend developer, I’m especially attracted to your focus on high-quality digital experiences. I want to work in a team that values clean code, performance, user-centric design, and innovation — and SCS Agency aligns perfectly with that. Being part of an agency that sets global standards would challenge me, help me develop faster, and allow me to contribute meaningful work to clients around the world.",
            "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js"]
            }
          `}
        </script>
        <meta
          name="description"
          content="Web developer with a relentless drive for excellence, skilled in creating and maintaining functional and responsive web applications and websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${joseFonts.className} antialiased`}>
        <main className="relative">
          <LoadingProvider>
            <ClientLayout>
              <div className="hidden">
                <Hero />
              </div>
              <div className="hidden lg:block fixed left-[-86px] text-gray-300 bottom-50 z-10 rotate-90">
                <a href="mailto:muhamed77700m@gmail.com">
                  muhamed77700m@gmail.com
                </a>
              </div>
              {children}
            </ClientLayout>
          </LoadingProvider>
        </main>
      </body>
    </html>
  );
}
