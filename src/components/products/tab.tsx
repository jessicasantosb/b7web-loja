import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProducts } from "@/services/product";
import { ProductProps } from "@/types/product";
import { ProductsEmpty } from "./empty";
import { Product } from "./product";

type ValueProps = "sushi" | "temaki" | "pack" | "beverage";

type TabProps = {
  title: string;
  value: ValueProps;
  products: ProductProps[];
};

export async function ProductsTab() {
  const products = await getProducts();

  const filterProducts = (value: ValueProps) => {
    return products.filter((product) => product.category === value);
  };

  const tabs: TabProps[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: filterProducts("sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: filterProducts("temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: filterProducts("pack"),
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: filterProducts("beverage"),
    },
  ];

  return (
    <Tabs defaultValue="sushi" className="min-h-dvh">
      <TabsList className="flex mb-6">
        {tabs.map(({ title, value }) => (
          <TabsTrigger key={value} value={value} className="flex-1">
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, products }) => (
        <TabsContent key={value} value={value}>
          {products.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}

          {products.length === 0 && <ProductsEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
