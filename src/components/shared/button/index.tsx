import classnames from 'classnames'
import Link from 'next/link'
import { memo, useMemo } from 'react'

import { Icon, Typography } from '@/shared'

import ButtonProps from './button.types'
import './styles.scss'

const Button: React.FC<ButtonProps> = ({
  className = '',
  children = '',

  type = 'primary',
  size = 'medium',

  isOnlyIcon = false,
  disabled = false,
  fullWidth = false,

  iconName,
  iconSide = 'left',

  to,

  onClick,
}) => {
  //* ClassNames
  const componentClassName = 'button'
  const ButtonClassName = classnames(
    componentClassName,
    `${componentClassName}--${type}`,
    `${componentClassName}--${size}`,
    {
      [`${componentClassName}--only-icon`]: isOnlyIcon,
      [`${componentClassName}-full-width`]: fullWidth,
    },
    className,
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let WrapperComponent: any = 'button'

  if (to && !disabled) {
    WrapperComponent = Link
  }

  const content = useMemo(
    () =>
      typeof children === 'string' ? (
        <Typography
          className={`${componentClassName}__text`}
          variant="title-h3"
          font="ntSomic"
        >
          {children}
        </Typography>
      ) : (
        children
      ),
    [children],
  )

  const icon = useMemo(() => {
    if (!iconName) return null

    return (
      <Icon
        className={`${componentClassName}__icon`}
        iconName={iconName}
        size={20}
      />
    )
  }, [iconName])

  return (
    <WrapperComponent
      type="button"
      className={ButtonClassName}
      disabled={disabled}
      onClick={onClick}
      href={to}
    >
      {iconSide === 'left' && icon}

      {content}

      {iconSide === 'right' && icon}
    </WrapperComponent>
  )
}

export default memo(Button)
