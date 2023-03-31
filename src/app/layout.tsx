import "./globals.css";

export const metadata = {
  title: 'Bags "n" Shoes',
  description: "welcome to our demo store for selling bags and shoes",
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
