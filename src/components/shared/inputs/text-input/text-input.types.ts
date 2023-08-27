interface TextInputProps {
  placeholder?: string
  value?: string
  className?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  label?: string
  hintText?: string
  type: React.HTMLInputTypeAttribute
  name?: string
}

export default TextInputProps
