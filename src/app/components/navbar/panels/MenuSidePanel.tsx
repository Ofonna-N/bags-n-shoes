"use client";

import React, { useEffect, useState } from "react";
import SideMenuBtn from "../SideMenuBtn";

import SubMenuSidePanel from "../../panels/SubMenuSidePanel";
import { Category } from "@/utility/CustomTypes";
import MenuSelectBtn from "../MenuSelectBtn";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { updateCateryFilter } from "@/appstore/slices/CategoryFilterSlice";
import { toggleSideMenu } from "@/appstore/slices/SideMenuToggleSlice";

interface Props {
  categoriesResponse: Promise<Category[]>;
}

const MenuSidePanel: React.FC<Props> = ({ categoriesResponse }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [subMenuToggled, setSubMenuToggled] = useState({
    title: "",
    index: -1,
    toggled: false,
  });

  const dispach = useAppDispatch();

  const onSideMenuBtnClicked = (title: string, index: number) => {
    setSubMenuToggled({ title, index, toggled: true });
    console.log({ title, index }, "menu cat");
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled({ title: "", index: -1, toggled: false });
  };

  const onSelectMenuBtnClicked = (select: string) => {
    dispach(updateCateryFilter({ category: select }));
    // onSubMenuBtnClicked();
    dispach(toggleSideMenu());
  };

  useEffect(() => {
    categoriesResponse.then((response) => {
      console.log(response, "Side menu categories");
      setCategories(response);
      // return response;
    });
  }, []);

  if (categories.length === 0) return <h2>Reload Page</h2>;
  return (
    <div className="mt-16">
      <ul>
        {categories.map((category, index) => (
          <li key={category.id}>
            <SideMenuBtn
              label={category.attributes.name}
              onClicked={() =>
                onSideMenuBtnClicked(category.attributes.name, index)
              }
            />
          </li>
        ))}
      </ul>
      <SubMenuSidePanel
        data={subMenuToggled}
        onBackbtnClicked={onSubMenuBtnClicked}
      >
        <ul className="flex flex-col">
          <li className="text-[1.4rem]">
            {subMenuToggled.index > -1 && (
              <MenuSelectBtn
                label="Shop all"
                className="bg-slate-700 pl-[2rem] py-[1rem]"
                clickHandler={() =>
                  onSelectMenuBtnClicked(
                    categories[subMenuToggled.index].attributes.name
                  )
                }
              />
            )}
          </li>
          {subMenuToggled.index > -1 &&
            categories[subMenuToggled.index].attributes.subcategories.data.map(
              (submenuCat) => (
                <li key={submenuCat.id} className="text-[1.4rem]">
                  <MenuSelectBtn
                    label={submenuCat.attributes.name}
                    className="bg-slate-700 pl-[2rem] py-[1rem]"
                    clickHandler={() =>
                      onSelectMenuBtnClicked(submenuCat.attributes.name)
                    }
                  />
                </li>
              )
            )}
        </ul>
      </SubMenuSidePanel>
    </div>
  );
};

export default MenuSidePanel;
