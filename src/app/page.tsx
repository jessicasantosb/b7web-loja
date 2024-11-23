import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  return (
    <main className="container px-2 py-10 md:p-10">
      <h1>Loja</h1>
      <ModeToggle />
      <Footer />
    </main>
  );
}
