import classnames from 'classnames'
import { memo } from 'react'

import { Typography } from '@/ui-kit'

import ButtonProps from './button.types'
import './styles.scss'

export const Button: React.FC<ButtonProps> = memo(function Button({
  className = '',
  children = '',

  type = 'primary',
  size = 'medium',

  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,

  onClick,
}) {
  //* ClassNames
  const componentClassName = 'button'
  const ButtonClassName = classnames(
    componentClassName,
    `${componentClassName}--${type}`,
    `${componentClassName}--${size}`,
    {
      [`${componentClassName}--disabled`]: disabled,
      [`${componentClassName}-full-width`]: fullWidth,
    },
    className,
  )

  const content =
    typeof children === 'string' ? (
      <Typography
        className={`${componentClassName}__text`}
        variant="title-h3"
        font="ntSomic400"
      >
        {children}
      </Typography>
    ) : (
      children
    )

  return (
    <button
      type="button"
      className={ButtonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}

      {content}

      {rightIcon}
    </button>
  )
})
