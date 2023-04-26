import { GetCategories } from "@/app/layout";
import NavBarMenuDropdwn from "./NavBarMenuDropdwn";

const CategoryBtnsContainer = async () => {
  const categories = await GetCategories();

  return (
    <div className="text-[1.4rem] ml-6 hidden lg:flex lg:gap-8">
      {/* <NavBarMenuDropdwn label="Bags" />
      <NavBarMenuDropdwn label="Shoes" /> */}
      {categories.map((category) => (
        <NavBarMenuDropdwn
          key={category.id}
          label={category.attributes.name}
          subCategory={category.attributes.subcategories.data}
        />
      ))}
    </div>
  );
};

export default CategoryBtnsContainer;
