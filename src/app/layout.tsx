import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.scss";

const nyghtSerif = localFont({
  src: "../../public/fonts/nyght-serif/NyghtSerif-Regular.woff",
  // Outras configurações de fonte, se necessário
});

export const metadata: Metadata = {
  title: "DarkDawn",
  description: "O site do projeto artístico DarkDawn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={nyghtSerif.className}>{children}</body>
    </html>
  );
}
