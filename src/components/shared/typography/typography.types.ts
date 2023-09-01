import { FontsType } from '@/assets/fonts'
import { TypographyVariants } from '@/assets/styles/typography/export.scss'

export type TagTypes = 'p' | 'span' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'
interface TypographyProps {
  className?: string
  children?: React.ReactNode

  variant: TypographyVariants
  font: FontsType
  tag?: TagTypes
}

export default TypographyProps
