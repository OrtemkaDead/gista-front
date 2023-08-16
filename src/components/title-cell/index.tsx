import classnames from 'classnames'

import { Typography } from '@/ui-kit'

import { TypographyVariants } from '@/assets/styles/typography/export.scss'

import './styles.scss'
import TitleCellProps from './title-cell.types'

export const TitleCell: React.FC<TitleCellProps> = ({
  className = '',
  before,
  after,
  size = 'medium',
  children = '',
}) => {
  //* ClassNames
  const componentClassName = 'title-cell'
  const TitleCellClassName = classnames(
    componentClassName,
    `${componentClassName}--${size}`,

    className,
  )

  const titleCellSize = (): TypographyVariants => {
    switch (size) {
      case 'large':
        return 'headline-h1'

      case 'medium':
        return 'headline-h2'

      case 'small':
        return 'title-h3'

      default:
        return 'headline-h2'
    }
  }

  return (
    <div className={TitleCellClassName}>
      {before}
      <Typography
        font="ntSomic400"
        variant={titleCellSize()}
      >
        {children}
      </Typography>
      {after}
    </div>
  )
}
