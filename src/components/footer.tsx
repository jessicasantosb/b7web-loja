import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer>
      <Separator />
      <p className="text-center p-4 opacity-50">
        Criado por{" "}
        <Link
          href={"https://github.com/jessicasantosb/b7web-loja"}
          target="_blank"
        >
          Jéssica
        </Link>
      </p>
    </footer>
  );
}
