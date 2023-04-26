const baseImageUrl =
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/";

export { baseImageUrl };

const siteUrl = "http://127.0.0.1:1337";
export { siteUrl };

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
