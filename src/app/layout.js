import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
export const metadata = {
  title: "Fern Nichanun",
  description: "Ferncake Web Portfolio",
  // icons: [{ rel: 'icon', url: Favicon }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/images/carrot.png" />
      </head>
      <body className={poppins.className}>{children}</body>      
    </html>
  );
}
