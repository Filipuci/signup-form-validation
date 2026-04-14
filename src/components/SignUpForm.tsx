import { useState } from "react"
import { Input } from "./Input"
import type { Field } from "../types/Field"

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  })

  const validators = {
    name: (value: string) => {
      if (!value.trim()) return 'Campo do nome está vazio!'
      if (value.length < 2) return 'O nome precisa ter no mínimo 2 caracteres.'

      return ""
    },

    email: (value: string) => {
      const index = value.indexOf('@')

      if (!value.trim()) return 'Campo do e-mail está vazio!'
      if (index === -1) return 'Informe um e-mail inválido!'
      if (value.slice(index + 1).indexOf('.com') === -1) return 'Insira um e-mail válido!'
      if (!value.slice(0, index)) return 'Insira um e-mail válido!'

      return ""
    },

    password: (value: string) => {
      if (!value.trim()) return 'O campo de senha está vazio!'
      if (value.length < 8) return 'A senha precisa ter no mínimo 8 caracteres!'

      return ""
    }
  }

  const fields: Field[] = [
    { label: 'name', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'password', type: 'password' }
  ]

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const newErrors = {
          name: '',
          email: '',
          password: ''
        }

        fields.forEach(field => {
          const error = validators[field.label](formData[field.label])
          newErrors[field.label] = error
          setErrors(newErrors)
          if (newErrors[field.label] === '') return
        })

      }}
      className="h-3/4 bg-white flex flex-col items-center justify-center flex-1 gap-5">
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
            label={field.label}
            type={field.type}
            value={formData[field.label]}
            setValue={(value) => setFormData(prev => ({ ...prev, [field.label]: value }))}
            error={errors[field.label]}
            setError={(error) => setErrors(prev => ({ ...prev, [field.label]: error }))}
            validator={(value) => validators[field.label](value)}
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