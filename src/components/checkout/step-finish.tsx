import Link from "next/link";

import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";
import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export function StepFinish() {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);

  const message = generateMessage({ name, address, cart });
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const whatsappLink = `https://wa.me//${number}?text=${encodeURI(message)}`;

  return (
    <div className="flex flex-col gap-4 text-center">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso Whatsapp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Button className="bg-[#075e54] text-[#ece5dd] hover:bg-[#128c7e]">
        <Link href={whatsappLink} target="_blank" className="w-full h-full">
          Enviar para o Whatsapp
        </Link>
      </Button>
    </div>
  );
}
