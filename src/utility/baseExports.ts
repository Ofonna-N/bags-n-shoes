const baseImageUrl =
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/";

export { baseImageUrl };

// const backendUrl = "http://127.0.0.1:1337";
const backendUrl = "https://strapi-xpu6.onrender.com";
export { backendUrl };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export { siteUrl };

const apiURLProducts = "/api/products";
export { apiURLProducts };

const apiURLCategories = "/api/categories";
export { apiURLCategories };

const apiURLFilteredProducts = "/api/filters/products";
export { apiURLFilteredProducts };

const apiURLAvailablity = "/api/filters/availability";
export { apiURLAvailablity };

const apiURLColors = "/api/filters/colors";
export { apiURLColors };

const apiURLProductType = "/api/filters/producttype";
export { apiURLProductType };

const apiUrlUser = "/api/auth/user";
export { apiUrlUser };

const sortingDropDownValues = {
  name_asc: "a-z",
  name_des: "z-a",
  price_asc: "low-high",
  price_desc: "high-low",
};

export { sortingDropDownValues };

const filterSortingStateTypes = {
  checkbox: "checkbox",
  priceRange: "priceRange",
  dropDown: "dropDown",
};

export { filterSortingStateTypes };
//http://localhost:1337/admin/

export function getRandomSort() {
  const rand = Math.floor(Math.random() * 4) + 1;
  switch (rand) {
    case 1:
      return sortingDropDownValues.name_asc;
    case 2:
      return sortingDropDownValues.name_des;
    case 3:
      return sortingDropDownValues.price_asc;
    case 4:
      return sortingDropDownValues.price_desc;

    default:
      return sortingDropDownValues.name_asc;
  }
}
