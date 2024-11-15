import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 작은 공구함",
  description: "앱스토어에 없어서 내가 그냥 만든 기능성 페이지들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
