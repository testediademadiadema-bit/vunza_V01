import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VUNZA — tecnologia que movimenta seu negócio.",
  description: "Sistema operacional comercial para pequenos negócios.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
