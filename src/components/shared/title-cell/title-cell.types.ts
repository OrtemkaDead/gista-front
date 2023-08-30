import { IconNameTypes } from '@/shared/icon/icon-paths'

import { TypographyVariants } from '@/assets/styles/typography/export.scss'

import { TagTypes } from '../typography/typography.types'

export interface TitleCellProps {
  className?: string
  children?: string

  textSize?: TypographyVariants
  titleTag?: TagTypes

  leftSideIconName?: IconNameTypes
  leftSideIsBackButton?: boolean
  rightSideText?: string
}

export default TitleCellProps
