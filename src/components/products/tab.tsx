import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductsTab() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex">
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
