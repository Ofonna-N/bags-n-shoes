"use clien";

import { Product } from "@/utility/CustomTypes";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SideMenuBtn from "../navbar/SideMenuBtn";
import SearchBar from "./SearchBar";
import SearchFilterCard from "./SearchFilterCard";
import { GetFilteredProducts } from "@/utility/AsyncFetchFunctions";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import {
  setSearchFilter,
  toggleSearchFilter,
} from "@/appstore/slices/SearchFilterSlice";
import { toggleSearchBarMenuOverlay } from "@/appstore/slices/SideMenuToggleSlice";
import { clearCategoryFilter } from "@/appstore/slices/CategoryFilterSlice";
import { useRouter } from "next/navigation";

interface Props {
  isMenu?: boolean;
  closeHandler?: () => void;
}

const SearchBarFilter: React.FC<Props> = ({ closeHandler, isMenu }) => {
  const searchFilter = useAppSelector(
    (state) => state.SearchFilterSlice.search
  );
  const router = useRouter();
  const dispach = useAppDispatch();
  const [search, setSearch] = useState(isMenu ? searchFilter : "");
  const [products, setProducts] = useState<Product[]>([]);
  const [inputFocused, setInputFocused] = useState(false);
  const [dropDownFocused, setDropDownFocused] = useState(false);

  const inputFocusHandler = (isFocused: boolean) => {
    setInputFocused(isFocused);
  };

  const dropDownFocusHandler = (focus: boolean) => {
    setDropDownFocused(focus);
  };

  const searchFromSubmitHandler = () => {
    dispach(toggleSearchBarMenuOverlay({ toggle: false }));
    dispach(setSearchFilter({ search }));
    dispach(toggleSearchFilter({ toggle: true }));
    router.push("/productslisting");
  };

  const searchCardClickHandler = (id: string) => {
    dispach(toggleSearchBarMenuOverlay({ toggle: false }));
    // dispach(setSearchFilter({ search }));
    if (isMenu) dispach(toggleSearchFilter({ toggle: false }));
    router.push(`/productslisting/${id}`);
  };

  useEffect(() => {
    if (search.length < 1) return;
    let params = `maxCount=4&search=${search}`;
    const p = GetFilteredProducts(params).then((response) => {
      // console.log(response, "search products");
      setProducts(response);
    });
  }, [search]);

  useEffect(() => {
    if (isMenu) {
      setSearch(searchFilter);
      dispach(clearCategoryFilter());
    }
  }, [searchFilter]);

  return (
    <div className="relative bg-red-950 md:w-[50rem] w-[90%] mx-auto">
      <SearchBar
        search={search}
        changeHandler={(e) => {
          setSearch(e.target.value);
          // console.log("working");
        }}
        focusHandler={inputFocusHandler}
        submitHandler={searchFromSubmitHandler}
      />

      {(inputFocused || dropDownFocused) && search.length > 0 && (
        <ul
          className="absolute bg-white w-full flex flex-col mt-[1px] z-[500]"
          onMouseEnter={() => dropDownFocusHandler(true)}
          onMouseLeave={() => {
            dropDownFocusHandler(false);
          }}
        >
          {products.length > 0 && (
            <li className="border-b border-gray-300 py-[0.5rem] text-[1.2rem] px-[1.5rem] mb-1">
              Products
            </li>
          )}
          {products?.map((product) => (
            <li key={product.id}>
              <SearchFilterCard
                label={product.attributes.name}
                imageSrc={
                  product.attributes.colors[
                    Object.keys(product.attributes.colors)[0]
                  ]
                }
                clickHandler={() => searchCardClickHandler(product.id)}
              />
            </li>
          ))}
          <li className="border-t border-gray-300">
            <SideMenuBtn
              label={`Go to "${search}"`}
              onClicked={() => {
                searchFromSubmitHandler();
              }}
            />
          </li>
        </ul>
      )}
      {closeHandler && (
        <button
          className="absolute left-[102%] top-[50%] translate-y-[-50%] "
          onClick={closeHandler}
        >
          <MdOutlineClose className="text-[2rem] text-slate-800" />
        </button>
      )}
    </div>
  );
};

export default SearchBarFilter;
