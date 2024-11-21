import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Parsa Alavi",
  description: "Frontend middle developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  );
}
