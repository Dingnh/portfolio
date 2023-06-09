import localFont from "next/font/local";
import "./globals.css";

const sentient = localFont({
  src: "../public/fonts/Sentient/Fonts/Variable/Sentient-Variable.ttf",
  display: "swap",
  variable: "--font-sentient",
});
const epilogue = localFont({
  src: "../public/fonts/Epilogue/Epilogue-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-epilogue",
});
export const metadata = {
  title: "dingnh",
  description: "Portfolio Page by Ding Nick Hong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sentient.variable} ${epilogue.variable}`}>
        {children}
      </body>
    </html>
  );
}
