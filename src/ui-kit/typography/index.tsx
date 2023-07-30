import classnames from 'classnames'

import fonts from '@/fonts'

import './styles.scss'
import TypographyProps from './typography.types'

function Typography({
  variant = 'title-h3',
  font = 'lato400',

  className = '',
  children,
}: TypographyProps): React.ReactElement {
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

export default Typography
