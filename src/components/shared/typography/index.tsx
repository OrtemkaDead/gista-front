import classnames from 'classnames'
import { memo } from 'react'

import fonts from '@/fonts'

import './styles.scss'
import TypographyProps from './typography.types'

export const Typography: React.FC<TypographyProps> = ({
  variant,
  font,
  tag,

  className = '',
  children,
}) => {
  // ? ClassNames
  const componentClassName = 'typography'
  const TypographyClassName = classnames(
    componentClassName,
    // ? Variant
    `${componentClassName}--${variant}`,
    // ? Font-family
    fonts[font].className,

    className,
  )

  const CustomTag = tag ? tag : 'p'

  return <CustomTag className={TypographyClassName}>{children}</CustomTag>
}

export default memo(Typography)
