import type { Metadata } from "next";
import localFont from "next/font/local";
import Clarity from "@microsoft/clarity";
const cobaltRidge = localFont({
  src: "./../../fonts/CobaltRidge.otf",
  variable: "--font-cobalt",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesRegular = localFont({
  src: "./../../fonts/TT Hoves Regular.otf",
  variable: "--font-tthoves-regular",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesMedium = localFont({
  src: "./../../fonts/TT Hoves Medium.otf",
  variable: "--font-tthoves-medium",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesDemiBold = localFont({
  src: "./../../fonts/TT Hoves DemiBold.otf",
  variable: "--font-tthoves-demibold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesBold = localFont({
  src: "./../../fonts/TT Hoves Bold.otf",
  variable: "--font-tthoves-bold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yudurobotics.com"),
  title: "Yudu Robotics",
  description:
    "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun, helping you build, play, and explore with groundbreaking tech.",
  openGraph: {
    title: "Yudu Robotics",
    description:
      "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Yudu Robotics - Unleashing the power of creative robotics",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yudu Robotics",
    description:
      "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun",
    images: ["/preview.png"],
  },
  keywords: [
    "Yudu Robotics",
    "Robots",
    "Drones",
    "3D Printers",
    "Robotics",
    "Technology",
    "Innovation",
    "DIY Kits",
    "Educational Toys",
    "STEM Toys",
    "Robotic Kits",
    "Robotics Lab Kits",
    "Electronic Learning Kits",
    "Robotic Toys for Kids",
    "STEM Toys for Kids",
    "Robotics for All Ages",
    "Educational Gifts for Kids",
    "Coding Toys",
    "Block-based Coding",
    "Visual Programming",
    "AI Robotics",
    "Multiple Project Kits",
    "All Terrain Robots",
    "School Robotics Lab",
    "Educational STEM Kits",
    "Learning Materials",
    "Teaching Kits",
    "Humanoid Robots",
    "AI Learning Kits",
    "Microcontroller Kits",
    "Animatronics",
    "Affordable Robotic Kits",
    "Premium Robotics",
    "Event Display Robots",
    "Lab Equipment",
    "School Projects",
    "App-controlled Toys",
    "Building Block Toys",
    "International Robotics",
    "Arduino Compatible",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  Clarity.init("qo1dspuq4k");
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cobaltRidge.variable} ${ttHovesRegular.variable} ${ttHovesMedium.variable} ${ttHovesDemiBold.variable} ${ttHovesBold.variable} w-screen overflow-x-hidden`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D90W2RDVFK"
        />

        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
   gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
gtag('config', 'G-D90W2RDVFK');`}
        </Script>

        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5G8Q4Z7Q');

            `}
        </Script>
        <Script id="microsoft-clarity">
          {`
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qo1dspuq4k");
            `}
        </Script>
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5G8Q4Z7Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="root"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleTagManager gtmId="GTM-5G8Q4Z7Q" />
        <GoogleAnalytics gaId="G-D90W2RDVFK" />
      </body>
    </html>
  );
}
