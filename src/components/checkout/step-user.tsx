import { Dispatch, SetStateAction } from "react";

import { StepsProps } from "@/types/checkout-steps";

export function StepUser({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<StepsProps>>;
}) {
  return (
    <section>
      <h3>StepUser</h3>
    </section>
  );
}
