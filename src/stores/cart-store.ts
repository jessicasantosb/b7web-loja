import { create } from "zustand";

import { CartProps } from "@/types/cart";
import { ProductProps } from "@/types/product";

type StatesProps = {
  cart: CartProps[];
};

type ActionsProps = {
  upsertCartItem: (product: ProductProps, quantity: number) => void;
};

const initialState: StatesProps = {
  cart: [],
};

export const useCartStore = create<StatesProps & ActionsProps>()((set) => ({
  ...initialState,
  upsertCartItem: (product, quantity) =>
    set((state) => {
      let newCart = state.cart;
      
      const findProductIndex = () => newCart.findIndex(
          (item) => item.product.id === product.id
        );

      let productIndex = findProductIndex()

      if (productIndex < 0) {
        newCart.push({ product, quantity: 0 });
        productIndex = findProductIndex()
      }

      newCart[productIndex].quantity += quantity;

      if (newCart[productIndex].quantity <= 0) {
        newCart = newCart.filter((item) => item.product.id !== product.id);
      }

      return { ...state, cart: newCart };
    }),
}));
