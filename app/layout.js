import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  title: "Vismay|Cultural Fest",
  description:
    "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
  keywords: "hackathon, IIITDMJ, hackbyte, coding, programming, tech",
  url: "https://vismaygmcmiraj.in",
  openGraph: {
    title: "Vismay|Cultural Fest",
    description:
      "Relive the magic of Vismay at IIITDMJ—explore unforgettable moments, vibrant snapshots, and the spirit of celebration that brings our cultural community together.",
    url: "https://vismaygmcmiraj.in",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay|Cultural Fest",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-50RJG4PPLT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-50RJG4PPLT');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
