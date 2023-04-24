export type ProductsFilter = { key: string; count: number };

type ProductColors = {
  [key: string]: string;
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

          extension: {};
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
