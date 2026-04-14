import "./globals.css";

export const metadata = {
  title: "Nyx Labs — High-Converting Websites",
  description:
    "Nyx Labs (Next Yield eXecution) builds websites that turn visitors into paying clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}