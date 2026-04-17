import { Input } from "./Input"
import type { Field } from "../types/Field"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { Inputs } from "../types/Inputs"

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<Inputs>()

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Form enviado:', data)

    alert('Cadastro realizado com sucesso!')
  }

  const fields: Field[] = [
    { label: 'name', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'password', type: 'password' }
  ]

  const validators = {
    name: {
      minLength: {
        value: 2,
        message: 'Campo de name precisa ter o mínimo de 2 caracteres'
      },
      maxLength: {
        value: 10,
        message: 'Campo de name precisa ter o máximo de 10 caracteres'
      }
    },
    email: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Informe um e-mail válido!'
      }
    },
    password: {
      minLength: {
        value: 8,
        message: 'Campo de senha precisa ter o mínimo de 8 caracteres'
      }
    }
  }

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
            rules={{ required: 'Campo obrigatório!', ...validators[field.label] }}
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
    </form>
  )
}