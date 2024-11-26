import Image from "next/image";

import { CartItemQuantity } from "@/components/cart/item-quantity";
import { CartProps } from "@/types/cart";

export function CartItem({ item }: { item: CartProps }) {
  return (
    <div className="flex items-center justify-between gap-1">
      <div className="relative size-12 border">
        <Image
          alt={item.product.name}
          src={item.product.image}
          fill
          sizes="auto"
          className="absolute object-cover rounded"
        />
      </div>

      <div className="flex-1">
        <p>{item.product.name}</p>
        <p className="text-primary/60 text-xs">R$ {item.product.price}</p>
      </div>

      <CartItemQuantity cartItem={item} />
    </div>
  );
}
