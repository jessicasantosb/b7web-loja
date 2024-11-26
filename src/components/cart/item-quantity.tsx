import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { CartProps } from "@/types/cart";

export function CartItemQuantity({ cartItem }: { cartItem: CartProps }) {
  const { upsertCartItem } = useCartStore((state) => state);

  const handleAddItem = () => upsertCartItem(cartItem.product, 1);
  const handleSubtractItem = () => upsertCartItem(cartItem.product, -1);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleSubtractItem}
        variant={"outline"}
        size={"icon"}
        className="size-4"
      >
        <MinusIcon size={10} />
      </Button>

      <p className="text-xs">{cartItem.quantity}</p>

      <Button
        onClick={handleAddItem}
        variant={"outline"}
        size={"icon"}
        className="size-4"
      >
        <PlusIcon size={10} />
      </Button>
    </div>
  );
}
