interface NumberInputProps {
  className?: string

  value?: number
  onChange?: () => void
  required?: boolean
  disabled?: boolean

  min?: number
  max?: number
}

export default NumberInputProps
