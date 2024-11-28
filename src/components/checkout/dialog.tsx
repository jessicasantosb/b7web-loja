import { useState } from "react";

import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";
import { StepUser } from "@/components/checkout/step-user";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepsProps } from "@/types/checkout-steps";

type ChekoutProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CheckoutDialog({ open, onOpenChange }: ChekoutProps) {
  const [step, setStep] = useState<StepsProps>("user");

  let progressBar = 0;
  let stepTitle = "";
  let stepElement: JSX.Element;

  switch (step) {
    case "user":
      progressBar = 30;
      stepTitle = "Dados Pessoais";
      stepElement = <StepUser setStep={setStep} />;
      break;
    case "address":
      progressBar = 70;
      stepTitle = "Endereço de entrega";
      stepElement = <StepAddress setStep={setStep} />;
      break;
    case "finish":
      progressBar = 100;
      stepTitle = "Envio para o Whatsapp";
      stepElement = <StepFinish />;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{stepTitle}</DialogTitle>
        </DialogHeader>

        <Progress value={progressBar} />

        <div className="flex flex-col gap-3">{stepElement}</div>
      </DialogContent>
    </Dialog>
  );
}
