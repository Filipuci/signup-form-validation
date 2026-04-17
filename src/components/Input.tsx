import { useController, type UseControllerProps } from "react-hook-form"
import type { SignUpInputs } from "../validation/signupSchema"

export const Input = (props: UseControllerProps<SignUpInputs>) => {
  const { field, fieldState } = useController(props)
  const labels = {
    name: 'Name',
    email: 'Email adress',
    password: 'Password'
  }

  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={props.name}>{labels[props.name]}</label>

      <input
        {...field}
        type={props.name === 'password' ? 'password' : props.name === 'email' ? 'email' : 'text'}
        placeholder={`Enter your ${props.name}`}
        id={props.name}
        className={
          `rounded-md outline-none shadow-[2px_2px_8px_#8d8d8d] p-2 mt-1.5
          ${fieldState.error?.message && 'border-2 border-red-400 shadow-none'}`
        }
      />

      {fieldState.error?.message &&
        <p className="border border-red-500 bg-red-100 text-red-600 mt-4 pl-2 rounded-md">
          ⓘ {fieldState.error.message}
        </p>
      }
    </div>
  )
}