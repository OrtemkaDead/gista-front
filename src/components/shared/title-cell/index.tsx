'use client'

import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import { memo, useMemo } from 'react'

import { Button, Icon, Typography } from '@/shared'

import './styles.scss'
import TitleCellProps from './title-cell.types'

export const TitleCell: React.FC<TitleCellProps> = memo(function TitleCell({
  className = '',
  children = '',

  textSize = 'headline-h2',

  leftSideIconName,
  leftSideIsBackButton = false,
  rightSideText,
}) {
  const router = useRouter()

  //* ClassNames
  const componentClassName = 'title-cell'
  const TitleCellClassName = classnames(
    componentClassName,

    className,
  )

  const leftSideContent = useMemo(() => {
    if (leftSideIconName && !leftSideIsBackButton) {
      return (
        <Icon
          className={`${componentClassName}__left-icon`}
          iconName={leftSideIconName}
        />
      )
    }

    if (leftSideIsBackButton && !leftSideIconName) {
      return (
        <Button
          isOnlyIcon
          iconName="arrowLeft"
          type="borderless"
          onClick={() => router.back()}
        />
      )
    }

    return null
  }, [leftSideIconName, leftSideIsBackButton, router])

  return (
    <div className={TitleCellClassName}>
      {leftSideContent}

      <Typography
        font="ntSomic400"
        variant={textSize}
      >
        {children}
      </Typography>

      {rightSideText && (
        <Typography
          className={`${componentClassName}__right-text`}
          variant="title-h3"
          font="lato400"
        >
          {rightSideText}
        </Typography>
      )}
    </div>
  )
})
