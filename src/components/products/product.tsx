import { ProductProps } from "@/types/product";
import Image from "next/image";
import { Button } from "../ui/button";

export function Product({ product }: { product: ProductProps }) {
  return (
    <div className="p-1">
      <div className="relative h-32 object-cover">
        <Image
          alt={product.name}
          src={product.image}
          fill
          sizes="auto"
          priority
          className="absolute rounded-sm"
        />
      </div>
      <h3 className="pt-2 text-lg">{product.name}</h3>
      <p className="py-1 text-primary/70">R$ {product.price}</p>
      <Button variant={"outline"} className="w-full">Adicionar</Button>
    </div>
  );
}
