type Props = {
  label: string,
  type: string,
  value: string,
  setValue: (value: string) => void
}

export const Input = ({ label, type, value, setValue }: Props) => {
  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={`Enter your ${label}`}
        id={label}
        className="rounded-md outline-none shadow-[2px_2px_8px_#8d8d8d] p-2 mt-1.5"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}