import classnames from 'classnames'
import { memo, useMemo } from 'react'

import { Typography } from '@/shared'

import AccountCardItemProps from './account-card-item.types'
import './styles.scss'

export const AccountCardItem: React.FC<AccountCardItemProps> = ({
  className = '',
  children = '',
  title = '',
  titleTag = 'h4',
}) => {
  //* ClassNames
  const componentClassName = 'card-item'
  const CardItemClassName = classnames(
    componentClassName,

    className,
  )

  const content = useMemo(
    () =>
      typeof children === 'string' ? (
        <Typography
          variant="title-h1"
          font="ntSomic"
        >
          {children}
        </Typography>
      ) : (
        children
      ),
    [children],
  )

  const heading = useMemo(
    () =>
      title && (
        <Typography
          className={`${CardItemClassName}__title`}
          font="lato"
          variant="text-16"
          tag={titleTag}
        >
          {title}
        </Typography>
      ),
    [CardItemClassName, title, titleTag],
  )

  return (
    <div className={CardItemClassName}>
      {heading}

      <div className={`${componentClassName}__content`}>{content}</div>
    </div>
  )
}

export default memo(AccountCardItem)
