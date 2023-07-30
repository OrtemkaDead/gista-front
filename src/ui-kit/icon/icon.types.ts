import { IconNameTypes } from './icon-paths'

interface IconProps {
  className?: string
  onClick?: () => void

  iconName: IconNameTypes
  size?: number
  width?: number
  height?: number
  viewBox?: number
  color?: string
  fill?: string
}

export default IconProps
