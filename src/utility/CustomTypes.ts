import { Unsubscribe } from "firebase/auth";
import { type } from "os";

export type ProductsFilter = { key: string; count: number };

type ProductColors = {
  [key: string]: string;
};

export type ProductsWithMeta = {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Product = {
  id: string;
  attributes: {
    price: number;
    name: string;
    quantity: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    salePrice: number;
    onSale: boolean;
    colors: ProductColors;
    // colors: {
    //     "Cyclamen": [
    //         "mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_1100x.jpg?v=1637106934"
    //     ],
    //     "Mediterranean Blue": [
    //         "mlouye-art-deco-med-blue-1_26f465fa-c74f-4b68-bbc7-6fd61239feb8_1100x.jpg?v=1637106934"
    //     ]
    // },
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;

          extention: {
            sizes?: string[];
          };
        };
      };
    };
    subcategory: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
  };
};

export type Category = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    extention: null;
    products: {
      data: Product[];
    };
    subcategories: {
      data: SubCategory[];
    };
  };
};

export type SubCategory = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type CartItem = {
  id: string;
  name: string;
  imgSrc: string;
  price: number;
  salePrice: number;
  color: string;
  size?: string | null;
  quantity: number;
  total: number;
};

export type LoginRequestBody = {
  email: string;
  password: string;
};
export type RegisterRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
};

export type User = {
  id: number;
  attributes: {
    firstName: string;
    lastName: string;
    email: string;
    // createdAt: string;
    // updatedAt: string;
    // publishedAt: string;
  };
};

export type UserValidationPromise = {
  ok: boolean;
  unsubscribe: Unsubscribe;
  email: string | null;
};
