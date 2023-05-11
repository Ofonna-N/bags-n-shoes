import Navbar from "./components/navbar/Navbar";
import { assistant } from "./components/Fonts";
import "./globals.css";
import AppProvider from "./components/AppProvider";
import Container from "./components/containers/Container";
import MenuSidePanel from "./components/navbar/panels/MenuSidePanel";
import MenuSidePanelWrapper from "./components/panels/MenuSidePanelWrapper";
// import FilterSortingSideMenuOverlay from "./products/components/panels/FilterSortingSideMenuOverlay";

import FilterSortingSideMenuOverlay from "./productslisting/components/panels/FilterSortingSideMenuOverlay";
import { GetCategories } from "@/utility/AsyncFetchFunctions";
import TestClientComponent from "./productslisting/components/FilteraAndSorting/TestClientComponent";
import ToggleLister from "@/components/Listeners/ToggleLister";
import SearchBarModal from "./components/searchbar/SearchBarModal";
import Footer from "./components/Footer/Footer";
import ClientSideInitializers from "@/components/initializers/ClientSideInitializers";

// import { auth } from "@/firebase/firebaseApp";

export const metadata = {
  title: 'Bags "n" Shoes',
  description: "welcome to our demo store for selling bags and shoes",
  icons: {
    icon: {
      url: "/images/icon.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryPromise = GetCategories();
  // console.log(auth);
  return (
    <html lang="en" className={`${assistant.className}`}>
      <AppProvider>
        <body>
          {/* <ToggleLister /> */}
          {/* <ClientSideInitializers /> */} --
          {/* <div className="text-center py-4 shadow-sm text-[1.2rem] whitespace-nowrap">
            Free shipping available on all orders!
          </div> */}
          {/**@ts-ezxpect-error Async Server Component*/}--
          {/* <SearchBarModal /> */}
          {/* <TestClientComponent /> */}--
          {/* <div className="grid grid-cols-1">
            <div className="border-y">
              <Container>
                <Navbar />
              </Container>
            </div>
            <div className="relative">
              {children}
              <MenuSidePanelWrapper isLeft={true} isNavMenu={true}>
                <MenuSidePanel categoriesResponse={categoryPromise} />
              </MenuSidePanelWrapper>
            </div>
            <FilterSortingSideMenuOverlay />
          </div> */}
          {/* {children} */}
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
