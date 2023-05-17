import { URLSearchParams } from "url";
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
  siteUrl,
  backendUrl,
  sortingDropDownValues,
} from "./baseExports";

export async function GetProductsWithMenta(): Promise<ProductsWithMeta> {
  const productsResponse = await fetch(
    `${backendUrl}/api/products?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const responseJson = await productsResponse.json();
  // const products = responseJson.data;

  return responseJson;

  // const response = await fetch(siteUrl + apiURLProducts);
  // const data = await response.json();

  // return data;
}

export async function GetProducts(): Promise<Product[]> {
  const productsWM = await GetProductsWithMenta();
  const data = productsWM.data;

  return data;
}

export async function GetProduct(id: string): Promise<Product> {
  const productData = await GetFilteredProducts(`product=${id}`);
  const product = productData[0];
  return product;
}

export async function GetCategories(): Promise<Category[]> {
  const categoriesResponse = await fetch(
    `${backendUrl}/api/categories?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );

  const categoriesJSON = await categoriesResponse.json();

  const categories = categoriesJSON.data;

  return categories;
  // const categoriesResponse = await fetch(siteUrl + apiURLCategories);
  // const data = await categoriesResponse.json();

  // return data;
}

export async function GetFilteredProducts(
  filterParams: string
): Promise<Product[]> {
  // if (filterParams === "" || !filterParams) {
  //   const products = await GetProducts();
  //   return products;
  // }
  const searchParams = new URLSearchParams(filterParams);
  const params = BuildBackEndQueryParam(searchParams);
  const productsResponse = await fetch(
    `${backendUrl}/api/products?populate=*&${params.join("&")}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const responseJson = await productsResponse.json();
  const products: Product[] = responseJson.data;
  return products;

  // console.log(apiURLFilteredProducts + "?" + filterParams, "PAAAAA");
  // const productsResponse = await fetch(
  //   siteUrl + apiURLFilteredProducts + "?" + filterParams
  // );
  // const data = await productsResponse.json();

  // return data;
}

export async function GetColorFilters(): Promise<ProductsFilter[]> {
  // const response = await fetch(siteUrl + apiURLProducts, {
  //   cache: "no-store",
  // });
  // const productsMeta = await response.json();

  const products: Product[] = await GetProducts();

  const colors: ProductsFilter[] = [];
  products.forEach((product: Product) => {
    for (const [key, value] of Object.entries(product.attributes.colors)) {
      let index = 0;
      if (
        colors.some((color, i) => {
          index = i;
          return color.key == key;
        })
      ) {
        colors[index].count += 1;
      } else {
        colors.push({ key, count: 1 });
      }
    }
  });

  return colors;
  // const response = await fetch(siteUrl + apiURLColors);
  // const colorsFilter: ProductsFilter[] = await response.json();

  // return colorsFilter;
}

export async function GetProductTypes(): Promise<ProductsFilter[]> {
  // const categoryResponse = await fetch(siteUrl + apiURLCategories, {
  //   cache: "no-store",
  // });
  const categories: Category[] = await GetCategories();

  const categoryNames: ProductsFilter[] = [];

  // categoryNames = categories.map(category => category.attributes.name);

  categories.forEach((category) => {
    const catName = category.attributes.name;
    categoryNames.push({
      key: catName,
      count: category.attributes.products.data.length,
    });
  });

  return categoryNames;
  // const response = await fetch(siteUrl + apiURLProductType);
  // const producttypeFilter: ProductsFilter[] = await response.json();

  // return producttypeFilter;
}

export async function GetProductsAvailability(): Promise<ProductsFilter[]> {
  // const response = await fetch(siteUrl + apiURLProducts, {
  //   cache: "no-store",
  // });
  const productsMeta = await GetProductsWithMenta();

  const products: Product[] = productsMeta.data;

  const availability: ProductsFilter[] = [
    {
      key: "In Stock",
      count: 0,
    },
    {
      key: "Out of Stock",
      count: 0,
    },
  ];

  products.forEach((product: Product) => {
    if (product.attributes.quantity > 0) {
      availability[0].count += 1;
    } else {
      availability[1].count += 1;
    }
  });

  return availability;

  // const response = await fetch(siteUrl + apiURLAvailablity);
  // const availabilityFilter: ProductsFilter[] = await response.json();

  // return availabilityFilter;
}

export async function GetUser(email: string) {
  const response = await fetch(apiUrlUser, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const user = await response.json();
  // console.log("GOT USER: ", user);

  return user;
}

export function BuildBackEndQueryParam(searchParams: URLSearchParams) {
  // const queryParams = new URLSearchParams(query);
  const params: string[] = [];
  const colors = searchParams.getAll("color");
  const productType = searchParams.getAll("producttype");
  const availability = searchParams.getAll("availability");
  const priceFrom = searchParams.get("from");
  const priceTo = searchParams.get("to");
  const sort = searchParams.get("sort");
  const categoryFilter = searchParams.get("category");
  const searchFilter = searchParams.get("search");
  const maxCount = searchParams.get("maxCount");
  const product = searchParams.get("product");
  const excluded = searchParams.getAll("exclude");

  if (excluded.length > 0) {
    excluded.forEach((exclude) => {
      params.push(`filters[name][$ne]=${exclude}`);
    });
  }

  if (product) {
    params.push(`filters[id][$eq]=${product}`);
  }

  if (maxCount) {
    params.push(`pagination[pageSize]=${maxCount}`);
  }

  if (searchFilter) {
    params.push(`filters[name][$contains]=${searchFilter}`);
  }

  if (categoryFilter) {
    params.push(
      `filters[$or][0][category][name]=${categoryFilter}&filters[$or][1][subcategory][name]=${categoryFilter}`
    );
  }

  if (colors.length > 0) {
    // constraints.push(where("colors", "in", colors));
    colors.forEach((color) => {
      params.push(`filters[colors][$contains]=${color}`);
    });
  }
  //work on querying categories!!!!!!!!!!!!
  if (productType.length > 0) {
    productType.forEach((category) => {
      params.push(`filters[category][name][$eq]=${category}`);
    });
    // constraints.push(where("category.name", "in", productType));
  }

  if (availability.length > 0) {
    availability.forEach((status) => {
      if (status === "In Stock") {
        params.push(`filters[quantity][$gt]=${0}`);
      } else {
        params.push(`filters[quantity][$lt]=${1}`);
      }
    });
  }
  if (priceFrom || priceTo) {
    params.push(`filters[price][$lte]=${priceTo}`);
    params.push(`filters[price][$gte]=${priceFrom}`);
  }
  if (sort) {
    switch (sort) {
      case sortingDropDownValues.name_asc:
        params.push("sort[0]=name:asc");
        break;
      case sortingDropDownValues.name_des:
        params.push("sort[0]=name:desc");
        break;
      case sortingDropDownValues.price_asc:
        params.push("sort[0]=price:asc");
        break;
      case sortingDropDownValues.price_desc:
        params.push("sort[0]=price:desc");
        break;

      default:
        break;
    }
  }

  return params;
}
