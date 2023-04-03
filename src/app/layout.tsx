import Navbar from "./components/navbar/Navbar";
import { assistant } from "./components/Fonts";
import "./globals.css";
import AppProvider from "./components/AppProvider";
import Container from "./components/containers/Container";
import MenuSidePanel from "./components/navbar/panels/MenuSidePanel";

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
    <html lang="en" className={`${assistant.className}`}>
      <AppProvider>
        <body>
          <div className="text-center py-4 shadow-sm text-[1.2rem]">
            Free shipping available on all orders!
          </div>
          <div className="grid grid-cols-1">
            <div className="border-y">
              <Container>
                <Navbar />
              </Container>
            </div>
            <div className="relative">
              {children} <MenuSidePanel />
            </div>
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
