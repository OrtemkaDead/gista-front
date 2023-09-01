import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

interface RegisterInputProps<T extends FieldValues> {
  placeholder?: string
  className?: string
  label?: string
  hintText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | null
  type: React.HTMLInputTypeAttribute
  register: UseFormRegister<T>
  name: Path<T>
  options?: RegisterOptions
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

export default RegisterInputProps
