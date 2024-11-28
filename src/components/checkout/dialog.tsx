import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

type StepsProps = "user" | "address" | "finish";

type ChekoutProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CheckoutDialog({ open, onOpenChange }: ChekoutProps) {
  const [step, setStep] = useState<StepsProps>("user");

  let progressBar = 0;
  let stepTitle = "";

  switch (step) {
    case "user":
      progressBar = 30;
      stepTitle = "Dados Pessoais";
      break;
    case "address":
      progressBar = 70;
      stepTitle = "Endereço de entrega";
      break;
    case "finish":
      progressBar = 100;
      stepTitle = "Envio para o Whatsapp";
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{stepTitle}</DialogTitle>
        </DialogHeader>

        <Progress value={progressBar} />

        <div className="flex flex-col gap-3"></div>
      </DialogContent>
    </Dialog>
  );
}
