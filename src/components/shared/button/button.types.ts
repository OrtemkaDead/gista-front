import { IconNameTypes } from '@/shared/icon/icon-paths'

type ButtonTypes = 'primary' | 'secondary' | 'borderless' | 'invert'

type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  className?: string
  children?: React.ReactNode

  as?: 'submit' | 'reset' | 'button'
  type?: ButtonTypes
  size?: ButtonSize

  isOnlyIcon?: boolean
  fullWidth?: boolean
  disabled?: boolean

  iconName?: IconNameTypes
  iconSide?: 'left' | 'right'

  to?: string

  onClick?: React.MouseEventHandler
}

export default ButtonProps
