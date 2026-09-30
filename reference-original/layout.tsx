import type { Metadata } from "next";
import "./globals.css";
import "./fixes.css";

export const metadata: Metadata = {
  title: "MAYA WASHIYA — Visual Retoucher / Creator",
  description: "映像・画像のレタッチを軸に、Beauty領域を中心としたVisual制作からWeb・デジタル領域まで。MAYA WASHIYAのポートフォリオ。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
