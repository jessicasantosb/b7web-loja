import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProducts } from "@/services/product";
import { ProductProps } from "@/types/product";

type TabProps = {
  title: string;
  value: string;
  products: ProductProps[];
};

export async function ProductsTab() {
  const products = await getProducts();
  console.log(products);

  const tabs: TabProps[] = [
    {
      title: "sushi",
      value: "sushi",
      products: [],
    },
    {
      title: "Temaki",
      value: "temaki",
      products: [],
    },
    {
      title: "Combinados",
      value: "pack",
      products: [],
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: [],
    },
  ];

  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex mb-6">
        {tabs.map(({ title, value }) => (
          <TabsTrigger key={title} value={value} className="flex-1">
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="tab1">Conteúdo tab1</TabsContent>
      <TabsContent value="tab2">Conteúdo tab2</TabsContent>
    </Tabs>
  );
}
