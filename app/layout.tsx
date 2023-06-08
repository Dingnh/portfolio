import localFont from "next/font/local";
import "./globals.css";

const sentient = localFont({
  src: "../public/fonts/Sentient/Fonts/Variable/Sentient-Variable.ttf",
  display: "swap",
  variable: "--font-sentient",
});
const literata = localFont({
  src: "../public/fonts/Literata/Literata-VariableFont_opsz,wght.ttf",
  display: "swap",
  variable: "--font-literata",
});
const epilogue = localFont({
  src: "../public/fonts/Epilogue/Epilogue-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-epilogue",
});
const petrona = localFont({
  src: "../public/fonts/Petrona/Petrona-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-petrona",
});

export const metadata = {
  title: "DNH Technologies",
  description: "Portfolio Page by Ding Nick Hong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sentient.variable} ${literata.variable} ${epilogue.variable} ${petrona.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
