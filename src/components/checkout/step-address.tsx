import { Dispatch, SetStateAction } from "react";

import { StepsProps } from "@/types/checkout-steps";

export function StepAddress({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<StepsProps>>;
}) {
  return (
    <section>
      <h3>StepAddress</h3>
    </section>
  );
}
