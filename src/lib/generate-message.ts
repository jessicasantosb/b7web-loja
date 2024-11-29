import { States } from "@/stores/checkout-store";
import { CartProps } from "@/types/cart";

type GenerateMessageProps = States & { cart: CartProps[] };

export const generateMessage = ({
  address,
  name,
  cart,
}: GenerateMessageProps) => {
  const { street, number, complement, district, city, state } = address;
  let orderProduct = [];

  for (const item of cart) {
    orderProduct.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do Cliente:**
Nome: ${name}
Endereço: ${street}, ${number} ${
    complement && `(${complement})`
  } ${district}, ${city}/${state}

--------

**Pedido**
${orderProduct.join("\n")}`;
};
