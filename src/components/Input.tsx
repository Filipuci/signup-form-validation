type Props = {
  label: string,
  type: string,
  value: string,
  error: string
  setValue: (value: string) => void
  setError: (error: string) => void
}

export const Input = ({ label, type, value, setValue, error, setError }: Props) => {
  const validationBlur = () => {
    if (!value.trim()) {
      setError('Campo obrigatório!')
      return
    }

    if (label === 'name') {
      if (value.length < 2) {
        setError('O nome precisa ter no mínimo 2 caracteres.')
        return
      }
    }

    if (label === 'email') {
      const index = value.indexOf('@')

      if (index === -1) {
        setError('Insira um e-mail válido!')
        return
      }

      if (value.slice(index + 1).indexOf('.com') === -1) {
        setError('Insira um e-mail válido!')
        return
      } else if (!value.slice(0, index)) {
        setError('Insira um e-mail válido!')
        return
      }
    }

    if (label === 'password') {
      if (value.length < 8) {
        setError('A senha precisa ter no mínimo 8 caracteres.')
      }
    }
  }

  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={`Enter your ${label}`}
        id={label}
        className={`rounded-md outline-none shadow-[2px_2px_8px_#8d8d8d] p-2 mt-1.5 ${error && 'border-2 border-red-400 shadow-none'}`}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={validationBlur}
        onFocus={() => setError('')}
      />
      {error && <span>{error}</span>}
    </div>
  )
}