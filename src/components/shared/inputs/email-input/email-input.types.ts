interface EmailInputProps {
  className?: string

  setIsValid?: React.Dispatch<React.SetStateAction<boolean>>

  value?: string
  onChange?: React.Dispatch<React.SetStateAction<string>>
}

export default EmailInputProps
