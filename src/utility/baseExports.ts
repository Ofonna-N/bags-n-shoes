const baseImageUrl =
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/";

export { baseImageUrl };

const siteUrl = "http://127.0.0.1:1337";
export { siteUrl };

const siteUrlText = "http://localhost:3000";
export { siteUrlText };

const apiURLProducts = "http://localhost:3000/api/products";
export { apiURLProducts };

const apiURLCategories = "http://localhost:3000/api/categories";
export { apiURLCategories };

const apiURLFilteredProducts = "http://localhost:3000/api/filters/products";
export { apiURLFilteredProducts };

const apiURLAvailablity = "http://localhost:3000/api/filters/availability";
export { apiURLAvailablity };

const apiURLColors = "http://localhost:3000/api/filters/colors";
export { apiURLColors };

const apiURLProductType = "http://localhost:3000/api/filters/producttype";
export { apiURLProductType };

const apiUrlUser = "http://localhost:3000/api/auth/user";
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
