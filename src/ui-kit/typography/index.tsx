import classnames from 'classnames'

import fonts from '@/fonts'

import './styles.scss'
import TypographyProps from './typography.types'

export const Typography: React.FC<TypographyProps> = ({
  variant = 'title-h3',
  font = 'lato400',

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

  return <p className={TypographyClassName}>{children}</p>
}
