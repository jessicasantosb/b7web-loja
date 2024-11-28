import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { stepUserSchema } from "@/schemas/step-user";
import { useCheckoutStore } from "@/stores/checkout-store";
import { StepsProps } from "@/types/checkout-steps";
import { Button } from "../ui/button";

type StepUserProps = { setStep: Dispatch<SetStateAction<StepsProps>> };

export function StepUser({ setStep }: StepUserProps) {
  const { name, setName } = useCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof stepUserSchema>>({
    resolver: zodResolver(stepUserSchema),
    defaultValues: { name },
  });

  const onSubmit = (values: z.infer<typeof stepUserSchema>) => {
    setName(values.name);
    setStep("address");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"outline"}>
          Próximo
        </Button>
      </form>
    </Form>
  );
}
