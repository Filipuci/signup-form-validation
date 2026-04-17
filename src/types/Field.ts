import type { SignUpInputs } from "../validation/signupSchema";

export type Field = {
  label: keyof SignUpInputs,
}