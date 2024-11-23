import { Suspense } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsTab } from "@/components/products/tab";

export default async function Home() {
  return (
    <main className="container px-2 py-10 md:p-10">
      <Header />
      <Suspense fallback={"<p>carregando...</p>"}>
        <ProductsTab />
      </Suspense>
      <Footer />
    </main>
  );
}
