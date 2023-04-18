import Navbar from "./components/navbar/Navbar";
import { assistant } from "./components/Fonts";
import "./globals.css";
import AppProvider from "./components/AppProvider";
import Container from "./components/containers/Container";
import MenuSidePanel from "./components/navbar/panels/MenuSidePanel";
import MenuSidePanelWrapper from "./components/panels/MenuSidePanelWrapper";
// import FilterSortingSideMenuOverlay from "./products/components/panels/FilterSortingSideMenuOverlay";
import { DocumentData } from "firebase/firestore";
import { ProductsFilter } from "@/utility/CustomTypes";
import {
  apiURLAvailablity,
  apiURLColors,
  apiURLProductType,
  apiURLProducts,
} from "@/utility/baseExports";
import FilterSortingSideMenuOverlay from "./productslisting/components/panels/FilterSortingSideMenuOverlay";

export const metadata = {
  title: 'Bags "n" Shoes',
  description: "welcome to our demo store for selling bags and shoes",
};

export async function GetProducts(): Promise<DocumentData[]> {
  const productsResponse = await fetch(apiURLProducts);
  const data = await productsResponse.json();

  return data;
}

export async function GetColorFilters(): Promise<ProductsFilter[]> {
  const response = await fetch(apiURLColors);
  const colorsFilter: ProductsFilter[] = await response.json();

  return colorsFilter;
}

export async function GetProductTypes(): Promise<ProductsFilter[]> {
  const response = await fetch(apiURLProductType);
  const producttypeFilter: ProductsFilter[] = await response.json();

  return producttypeFilter;
}

export async function GetProductsAvailability(): Promise<ProductsFilter[]> {
  const response = await fetch(apiURLAvailablity);
  const availabilityFilter: ProductsFilter[] = await response.json();

  return availabilityFilter;
}

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
              {children}
              <MenuSidePanelWrapper isLeft={true} isNavMenu={true}>
                <MenuSidePanel />
              </MenuSidePanelWrapper>
            </div>
            <FilterSortingSideMenuOverlay />
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
