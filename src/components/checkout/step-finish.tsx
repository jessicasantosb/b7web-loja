import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/stores/checkout-store";

export function StepFinish() {
  const { name } = useCheckoutStore((state) => state);

  const message = "Oi, tudo bem?";
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
        <Link href={whatsappLink} target="_blank">
          Enviar para o Whatsapp
        </Link>
      </Button>
    </div>
  );
}
