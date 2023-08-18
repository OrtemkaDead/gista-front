import classnames from 'classnames'
import Link from 'next/link'
import { memo } from 'react'

import { Icon, Typography } from '@/ui-kit'

import NavigationLinkProps from './navigation-link.types'
import './styles.scss'

export const NavigationLink: React.FC<NavigationLinkProps> = memo(function NavigationLink({
  className = '',
  children = '',
  href = '',
}) {
  //* ClassNames
  const componentClassName = 'navigation-link'
  const NavigationLinkClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <Link href={href}>
      <div className={NavigationLinkClassName}>
        <Icon
          className={`${NavigationLinkClassName}__icon`}
          iconName="arrowLeft"
        />
        <Typography
          className={`${NavigationLinkClassName}__title`}
          font="ntSomic400"
          variant="title-h3"
        >
          {children}
        </Typography>
      </div>
    </Link>
  )
})
