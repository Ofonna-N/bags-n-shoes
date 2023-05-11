import {
  ProductsWithMeta,
  Product,
  Category,
  ProductsFilter,
} from "./CustomTypes";
import {
  apiURLProducts,
  apiURLCategories,
  apiURLFilteredProducts,
  apiURLColors,
  apiURLProductType,
  apiURLAvailablity,
  apiUrlUser,
} from "./baseExports";

export async function GetProductsWithMenta(): Promise<ProductsWithMeta> {
  const response = await fetch(apiURLProducts);
  const data = await response.json();

  return data;
}

export async function GetProducts(): Promise<Product[]> {
  const productsWM = await GetProductsWithMenta();
  const data = productsWM.data;

  return data;
}

export async function GetProduct(
  id: string,
  isClient: boolean
): Promise<Product> {
  const productData = await GetFilteredProducts(`product=${id}`, isClient);
  const product = productData[0];
  return product;
}

export async function GetCategories(): Promise<Category[]> {
  const categoriesResponse = await fetch(apiURLCategories);
  const data = await categoriesResponse.json();

  return data;
}

export async function GetFilteredProducts(
  filterParams: string,
  isClient: boolean
): Promise<Product[]> {
  if (filterParams === "" || !filterParams) {
    const products = await GetProducts();
    return products;
  }
  console.log(apiURLFilteredProducts + "?" + filterParams, "PAAAAA");
  if (!isClient) {
    const productsResponse = await fetch(
      apiURLFilteredProducts + "?" + filterParams
    );
    const data = await productsResponse.json();

    return data;
  } else {
    const productsResponse = await fetch(
      "/api/filters/products?" + filterParams
    );
    const data = await productsResponse.json();

    return data;
  }
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

export async function GetUser(email: string) {
  // console.log("sending: ", email);
  const response = await fetch(apiUrlUser, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const user = await response.json();
  // console.log("GOT USER: ", user);

  return user;
}
