import { FieldValues, UseFormRegister } from 'react-hook-form'

interface TextInputProps {
  placeholder?: string
  value: string
  className?: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  label?: string
  hintText?: string | null
  type: React.HTMLInputTypeAttribute
  register?: UseFormRegister<FieldValues>
  name?: string
}

export default TextInputProps
