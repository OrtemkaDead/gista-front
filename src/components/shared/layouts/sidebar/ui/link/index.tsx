'use client'

import classnames from 'classnames'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'

import { Icon, Typography } from '@/shared'

import LinkProps from './link.types'
import './styles.scss'

export const Link: React.FC<LinkProps> = memo(function Link({
  className = '',

  title,
  iconName,
  to,
}) {
  const pathname = usePathname()

  //* ClassNames
  const componentClassName = 'link'
  const LinkClassName = classnames(
    componentClassName,
    {
      [`${componentClassName}--active`]: pathname === to,
    },

    className,
  )

  return (
    <NextLink
      className={LinkClassName}
      href={to}
    >
      <Icon
        className={`${componentClassName}__icon`}
        size={24}
        iconName={iconName}
      />
      <Typography
        className={`${componentClassName}__title`}
        variant="title-h3"
        font="ntSomic400"
      >
        {title}
      </Typography>
    </NextLink>
  )
})
