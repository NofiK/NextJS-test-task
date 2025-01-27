import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper/ThemeWrapper";

export const metadata: Metadata = {
  title: "NextikTT",
  description: "Hrechukh Yaroslav test task",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
