import { TypographyVariants } from '@/assets/styles/typography/export.scss'

import { IconNameTypes } from '../icon/icon-paths'

interface TitleCellProps {
  className?: string
  children?: string

  textSize?: TypographyVariants

  leftSideIconName?: IconNameTypes
  leftSideIsBackButton?: boolean
  rightSideText?: string
}

export default TitleCellProps
