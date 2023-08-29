import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

interface TextInputProps {
  placeholder?: string
  value?: string
  className?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  label?: string
  hintText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | null
  type: React.HTMLInputTypeAttribute
  register?: UseFormRegister<FieldValues>
  name?: 'lastName' | 'firstName' | 'surname' | 'email' | 'phone' | 'password' | 'confirmPassword'
  options?: RegisterOptions
}

export default TextInputProps
