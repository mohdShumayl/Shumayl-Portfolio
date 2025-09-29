import { Inter,Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter=Inter({
  weight:["100","200","300","400","500","600","600","700","800","900"],
  subsets:['latin'],
  variable:'--font-inter',
});
const bebasNeue=Bebas_Neue({
  weight:["400"],
  subsets:['latin'],
  variable:'--font-bebasNeue',
});

export const metadata = {
  title: "Shumayl Portfolio",
  description: "Shumayl Portfolio app created by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
