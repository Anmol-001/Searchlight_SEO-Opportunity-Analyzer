import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),

  verification: {
    google: "bQ0kEfnnf3Hf8knYe4eZYe-8-fGh_5mwSOctsVSG2O0",
  },

  title: {
    default: "Searchlight — SEO Opportunity Analyzer",
    template: "%s · Searchlight",
  },

  description:
    "Find evidence-backed SEO opportunities using website, search, competitor, and keyword research.",

  openGraph: {
    type: "website",
    title: "Searchlight — SEO Opportunity Analyzer",
    description: "Discover where your website can win in search.",
    images: [
      {
        url: "/og.png",
        width: 1718,
        height: 900,
        alt: "Searchlight SEO Opportunity Analyzer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Searchlight — SEO Opportunity Analyzer",
    description: "Discover where your website can win in search.",
    images: ["/og.png"],
  },
};

const GTM_ID = "GTM-NV22ZXR5";

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Google Tag Manager noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}