"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";
import { ProductProps } from "@/types/product";

export function Product({ product }: { product: ProductProps }) {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);

  const handleAddProduct = () => {
    upsertCartItem(product, 1);

    toast({
      title: "Adicionado ao carrinho!",
      description: product.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };

  return (
    <div className="p-1">
      <div className="relative h-32">
        <Image
          alt={product.name}
          src={product.image}
          fill
          sizes="auto"
          priority
          className="absolute rounded-sm object-cover"
        />
      </div>
      <h3 className="pt-2 text-lg">{product.name}</h3>
      <p className="py-1 text-primary/70">R$ {product.price}</p>
      <Button onClick={handleAddProduct} variant={"outline"} className="w-full">
        Adicionar
      </Button>
    </div>
  );
}
