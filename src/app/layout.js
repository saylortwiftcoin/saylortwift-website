import { Gluten } from "next/font/google";
import "./globals.css";
import { cnm } from "@/utils";

const gluten = Gluten({ subsets: ["latin"], variable: "--font-gluten" });

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Saylor Twift",
  description:
    "In a world of dips and peaks, just shake it off and hodl - $TWIFT melody never fades!",
  keywords: [
    "saylor",
    "twift",
    "swyft",
    "crypto",
    "blockchain",
    "nft",
    "defi",
    "decentralized",
    "finance",
    "token",
    "coin",
    "hodl",
    "shake",
    "off",
    "melody",
    "fades",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/saylor.svg" sizes="any" />
      </head>
      <body className={cnm(gluten.variable, "font-sans")}>{children}</body>
    </html>
  );
}
