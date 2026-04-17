import { Input } from "./Input"
import type { Field } from "../types/Field"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, type SignUpInputs } from "../validation/signupSchema"
import { useState } from "react"

export const SignUpForm = () => {
  const [sucess, setSucess] = useState(false)
  const { control, handleSubmit, reset } = useForm<SignUpInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const handleFormSubmit: SubmitHandler<SignUpInputs> = () => {
    reset()
    setSucess(true)
  }

  const fields: Field[] = [
    { label: 'name' },
    { label: 'email' },
    { label: 'password' }
  ]

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="h-3/4 bg-white flex flex-col items-center justify-center flex-1 gap-5"
      noValidate>
      <div className="w-1/2 mb-8">
        <p className="font-bold text-3xl">Get Start</p>
        <p className="font-semibold">Already have as account?
          <a href="#" className="ml-1 text-blue-500">Log in</a>
        </p>
      </div>

      {fields &&
        fields.map(field => (
          <Input
            key={field.label}
            control={control}
            name={field.label}
          />
        ))
      }

      <input
        type="submit"
        value={'Sign Up'}
        className="cursor-pointer bg-blue-500 hover:bg-blue-400 transition-all 
        duration-300 text-white rounded-md outline-none
        shadow-[2px_2px_8px_#8d8d8d] p-2 w-1/2 mt-10"
      />

      {sucess && <p className="text-green-600">Account created successfully!</p>}
    </form>
  )
}