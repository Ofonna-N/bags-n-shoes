"use client";
import MenuSidePanelWrapper from "@/app/components/panels/MenuSidePanelWrapper";
import FilterSortingSideMenu from "./FilterSortingSideMenu";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import {
  toggleFilterSideMenu,
  toggleFilterSideMenuOverlay,
} from "@/appstore/slices/SideMenuToggleSlice";
import { useEffect, useState } from "react";
import { ProductsFilter } from "@/utility/CustomTypes";
import {
  GetColorFilters,
  GetProductTypes,
  GetProductsAvailability,
} from "@/app/layout";

const FilterSortingSideMenuOverlay: React.FC = () => {
  const [filters, setFilters] = useState<ProductsFilter[][] | undefined>();
  const [colorFilters, availabilityFilters, productTypeFilters] = filters || [];
  const toggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.FilteringMenuToggled.overlayToggled
  );
  const dispach = useAppDispatch();

  // const filterMenuToggled = useAppSelector(
  //   (state) => state.SideMenuToggleSlice.FilteringMenuToggled.toggled
  // );

  const onCloseOverlay = () => {
    dispach(toggleFilterSideMenu({ toggle: false }));
    setTimeout(() => {
      dispach(toggleFilterSideMenuOverlay({ toggle: false }));
    }, 200);
  };

  useEffect(() => {
    document.body.style.overflowY = `${!toggled ? "visible" : "hidden"}`;
    if (toggled) {
      const timeout = setTimeout(() => {
        dispach(toggleFilterSideMenu({ toggle: true }));
        // console.log("Open side menu on overlay");
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [toggled]);

  useEffect(() => {
    const getFilters = async () => {
      const fetchedColorFilters = GetColorFilters();
      const fetchedAvailabilityFilters = GetProductsAvailability();
      const fetchedProductTypesFilters = GetProductTypes();

      const [colors, availability, productTypes] = await Promise.all([
        fetchedColorFilters,
        fetchedAvailabilityFilters,
        fetchedProductTypesFilters,
      ]);
      // console.log(colors, "colors filter");
      // console.log(availability, "availability filter");
      // console.log(productTypes, "product type");
      setFilters([colors, availability, productTypes]);
    };

    getFilters();
  }, []);

  if (filters === undefined) return <h2>Hello!</h2>;
  return (
    <>
      {toggled && (
        <div
          className="bg-[#00000063] fixed w-full h-[100vh] md:hidden"
          onClick={() => onCloseOverlay()}
        >
          <MenuSidePanelWrapper isLeft={false} isNavMenu={false}>
            <FilterSortingSideMenu
              onCloseOverlay={onCloseOverlay}
              colorFilter={colorFilters}
              availabilityFilter={availabilityFilters}
              productTypeFilter={productTypeFilters}
            />
          </MenuSidePanelWrapper>
        </div>
      )}
    </>
  );
};

export default FilterSortingSideMenuOverlay;
