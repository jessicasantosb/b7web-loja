import { products } from "@/data/products";
import { ProductProps } from "@/types/product";

export const getProducts = async (): Promise<ProductProps[]> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(products), 2000);
  });
};
