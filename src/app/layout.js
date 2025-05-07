import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Load local font but do NOT apply globally

// Keep Geist Mono as the global font
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Diamond QR | Custom QR Code T-Shirts, Mugs, Hoodies, Caps & More",
  description:
    "Design and buy Diamond-quality QR code graphics on T-shirts, mugs, hoodies, caps, and more. Featuring kufic patterns, text-based logos, and Printful-powered ecommerce printing.",
  keywords: [
    "diamond qr",
    "diamond logo",
    "diamond qr code",
    "diamond style shirt",
    "diamond kufic pattern",
    "qr design",
    "custom qr",
    "qr t-shirt",
    "qr code cap",
    "qr mug",
    "qr hoodie",
    "qr code sweatshirt",
    "text qr code",
    "cufic design",
    "typographic qr",
    "islamic qr pattern",
    "arabic calligraphy logo",
    "qr tshirt india",
    "buy qr tshirt online",
    "ecommerce qr product",
    "custom qr graphic hoodie",
    "modern kufic calligraphy",
    "qr code art hoodie",
    "qr generator stylish",
    "advanced qr print design",
    "custom qr print mug",
    "personalized qr t-shirt",
    "qr code on bucket hat",
    "qr text logo mug",
    "order qr print",
    "minimalist qr hoodie",
    "qr arabic kufic",
    "buy qr fashion cap",
    "design logo kufi",
    "custom kufic bucket hat",
    "qr textile hoodie",
    "fashion qr generator hoodie",
    "qr hoodie printing",
    "create qr with name hoodie",
    "diamond qr printing",
    "printful qr shirts",
    "diamond qr mugs",
    "diamond qr cap design",
    "diamond ecommerce shop",
    "diamond brand printing",
    "diamond kufic tshirt",
    // You can continue this with 800 similar pattern-based, product-inclusive, and diamond-branded keywords
  ],
  openGraph: {
    title:
      "Diamond QR | QR Fashion & Print Store – T-Shirts, Mugs, Hoodies, More",
    description:
      "Design QR code graphics, kufic logos, and Diamond QR art for printing on T-shirts, mugs, hoodies, caps and more. Built with Printful and creativity.",
    url: "https://www.diamondqr.com/",
    siteName: "Diamond QR",
    images: [
      {
        url: "https://printful-upload.s3-accelerate.amazonaws.com/tmp/76d58afd9c3d88107f580c17ed2dff6e/unisex-v-neck-tee-white-front-681b54b0ec970.jpg",
        width: 1200,
        height: 630,
        alt: "Diamond QR Product Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond QR | QR Design Fashion – T-Shirts, Hoodies, Mugs & More",
    description:
      "Create and print QR code graphics on Diamond-quality merch. T-shirts, mugs, caps, hoodies, and more powered by Printful.",
    images: [
      "https://printful-upload.s3-accelerate.amazonaws.com/tmp/76d58afd9c3d88107f580c17ed2dff6e/unisex-v-neck-tee-white-front-681b54b0ec970.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable}`} // Geist_Mono applied globally
    >
      <head />
      <body className={`${geistMono.variable}`}>
        {" "}
        {/* myCustomFont not applied globally */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
