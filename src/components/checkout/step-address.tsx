import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { stepAddressSchema } from "@/schemas/step-address";
import { useCheckoutStore } from "@/stores/checkout-store";
import { SetStepProps } from "@/types/checkout-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function StepAddress({ setStep }: SetStepProps) {
  const { address, setAddress } = useCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof stepAddressSchema>>({
    resolver: zodResolver(stepAddressSchema),
    defaultValues: { ...address },
  });

  const onSubmit = (values: z.infer<typeof stepAddressSchema>) => {
    setAddress(values);
    setStep("finish");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-2 gap-2">
          <FormField
            name="street"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rua</FormLabel>
                <FormControl>
                  <Input autoFocus {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="number"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="complement"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complemento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="district"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="city"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="state"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      <SelectItem value="ce">Ceará</SelectItem>
                      <SelectItem value="pr">Paraná</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between gap-2">
          <Button
            type="button"
            variant={"link"}
            onClick={() => setStep("user")}
          >
            Voltar
          </Button>
          <Button type="submit">Finalizar</Button>
        </div>
      </form>
    </Form>
  );
}
