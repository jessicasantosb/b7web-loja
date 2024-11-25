"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart-store";

export function Sidebar() {
  const { cart } = useCartStore((state) => state);

  let subtotal = 0;

  for (let item of cart) subtotal += item.quantity * item.product.price;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart />
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 px-1 rounded-sm bg-red-500 text-white">
              {cart.length}
            </div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">...</div>

        <Separator className="my-4" />

        <div className="flex items-center justify-between text-xs">
          <h4>Subtotal</h4>
          <p>{subtotal.toFixed(2)}</p>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button disabled={cart.length === 0}>Finalizar compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
