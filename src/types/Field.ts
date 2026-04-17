import type { Inputs } from "./Inputs"

export type Field = {
  label: keyof Inputs,
  type: 'text' | 'email' | 'password'
}