import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruto Test",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
