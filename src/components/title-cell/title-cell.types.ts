import { IconNameTypes } from '@/ui-kit/icon/icon-paths'

import { TypographyVariants } from '@/assets/styles/typography/export.scss'

interface TitleCellProps {
  className?: string
  children?: string

  textSize?: TypographyVariants

  leftSideIconName?: IconNameTypes
  leftSideIsBackButton?: boolean
  rightSideText?: string
}

export default TitleCellProps
