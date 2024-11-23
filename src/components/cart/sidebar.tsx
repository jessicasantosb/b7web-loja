import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <ShoppingCart />
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
          <p>...</p>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button>Finalizar compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
