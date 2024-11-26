import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

export function CartItemQuantity({ quantity }: { quantity: number }) {
  return (
    <div className="flex items-center gap-2">
      <Button variant={"outline"} size={"icon"} className="size-4">
        <PlusIcon size={10} />
      </Button>

      <p className="text-xs">{quantity}</p>

      <Button variant={"outline"} size={"icon"} className="size-4">
        <MinusIcon size={10} />
      </Button>
    </div>
  );
}
