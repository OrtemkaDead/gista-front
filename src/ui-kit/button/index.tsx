'use client'

import classnames from 'classnames'

import Typography from '@/ui-kit/typography'

import ButtonProps from './button.types'
import './styles.scss'

const Button = ({
  className = '',
  children = '',

  type = 'primary',
  size = 'medium',

  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,

  onClick,
}: ButtonProps): React.ReactElement => {
  // ? ClassNames
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
}

export default Button
