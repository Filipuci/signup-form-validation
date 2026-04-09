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

  const fields: Field[] = [
    { label: 'name', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'password', type: 'password' }
  ]

  return (
    <form className="h-3/4 bg-white flex flex-col items-center justify-center flex-1 gap-5">
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
            setError={(error) => setErrors(prev => ({...prev, [field.label]: error}))}
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