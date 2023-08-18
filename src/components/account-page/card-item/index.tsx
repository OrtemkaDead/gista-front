import classnames from 'classnames'

import { Typography } from '@/ui-kit'

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
        font="ntSomic400"
        variant="text-16"
      >
        {title}
      </Typography>
      <div className={`${CardItemClassName}__content`}>{children}</div>
    </div>
  )
}
