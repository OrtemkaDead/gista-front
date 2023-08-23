import classnames from 'classnames'
import { memo } from 'react'

import { Typography } from '@/shared'

import CardItemProps from './card-item.types'
import './styles.scss'

export const CardItem: React.FC<CardItemProps> = ({
  className = '',
  children = '',
  title = '',
}) => {
  //* ClassNames
  const componentClassName = 'card-item'
  const CardItemClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={CardItemClassName}>
      <Typography
        className={`${CardItemClassName}__title`}
        font="ntSomic"
        variant="text-16"
      >
        {title}
      </Typography>
      <div className={`${CardItemClassName}__content`}>{children}</div>
    </div>
  )
}

export default memo(CardItem)
