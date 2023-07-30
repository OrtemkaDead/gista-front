import { FontsType } from '@/assets/fonts'
import { TypographyVariants } from '@/assets/styles/typography/export.scss'

interface TypographyProps {
  className?: string
  children?: React.ReactNode

  variant?: TypographyVariants
  font?: FontsType
}

export default TypographyProps
