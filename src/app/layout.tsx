import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./styles/globals.scss";
import Head from 'next/head';

// const nyghtSerif = localFont({
//   src: "../../public/fonts/nyght-serif/NyghtSerif-Regular.woff",
//   // Outras configurações de fonte, se necessário
// });

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
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body id="__next">{children}</body>
    </html>
  );
}
