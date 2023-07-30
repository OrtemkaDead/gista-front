type ButtonTypes = 'primary' | 'secondary' | 'borderless' | 'invert'

type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  className?: string
  children?: React.ReactNode

  type?: ButtonTypes
  size?: ButtonSize

  fullWidth?: boolean
  disabled?: boolean

  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode

  onClick?: React.MouseEventHandler
}

export default ButtonProps
