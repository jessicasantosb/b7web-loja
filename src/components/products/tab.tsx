import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function ProductsTab() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex mb-6">
        <TabsTrigger value="tab1" className="flex-1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          Tab 2
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">Conteúdo tab1</TabsContent>
      <TabsContent value="tab2">Conteúdo tab2</TabsContent>
    </Tabs>
  );
}
