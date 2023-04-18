const baseImageUrl =
  "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/";

export { baseImageUrl };

const apiURLProducts = "http://localhost:3000/api/products";
export { apiURLProducts };

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
