import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  return (
    <main className="container px-1 py-10 md:p-10">
      <h1>Loja</h1>
      <ModeToggle />
    </main>
  );
}
