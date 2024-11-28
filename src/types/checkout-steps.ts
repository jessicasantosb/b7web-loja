import { Dispatch, SetStateAction } from "react";

export type StepsProps = "user" | "address" | "finish";

export type SetStepProps = { setStep: Dispatch<SetStateAction<StepsProps>> };
