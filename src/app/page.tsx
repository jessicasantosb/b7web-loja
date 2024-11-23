import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default async function Home() {
  return (
    <main className="container px-2 py-10 md:p-10">
      <Header />
      <h1>Loja</h1>
      <Footer />
    </main>
  );
}
