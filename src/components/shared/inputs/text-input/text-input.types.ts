import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

export interface TextInputProps {
  placeholder?: string
  value?: string
  className?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  label?: string
  hintText?: string
  type: React.HTMLInputTypeAttribute
  register?: UseFormRegister<FieldValues>
  name?: 'lastName' | 'firstName' | 'surname' | 'email' | 'phone' | 'password' | 'confirmPassword'
  options?: RegisterOptions
  disabled?: boolean
}

export default TextInputProps
