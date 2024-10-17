import "@/app/ui/global.css";
import { Inter, Lusitana } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={"${Inter.className} antialiased"}>{children}</body>
    </html>
  );
}
