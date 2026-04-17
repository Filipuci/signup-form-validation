import { useController, type UseControllerProps } from "react-hook-form"
import type { Inputs } from "../types/Inputs"



export const Input = (props: UseControllerProps<Inputs>) => {
  const { field, fieldState } = useController(props)

  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={props.name}>{props.name}</label>

      <input
        {...field}
        type={props.name === 'password' ? 'password' : props.name === 'email' ? 'email' : 'text'}
        placeholder={`Enter your ${props.name}`}
        id={props.name}
        className={`rounded-md outline-none shadow-[2px_2px_8px_#8d8d8d] p-2 mt-1.5 ${fieldState.error?.message && 'border-2 border-red-400 shadow-none'}`}
      />

      {fieldState.error?.message && <p>{fieldState.error.message}</p>}
    </div>
  )
}