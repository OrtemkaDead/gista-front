import classnames from 'classnames'

import { Logo } from '@/components'

import { Typography } from '@/ui-kit'

import HeaderProps from './header.types'
import './styles.scss'

export const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  //* ClassNames
  const componentClassName = 'header'
  const HeaderClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <header className={HeaderClassName}>
      <div className={`${componentClassName}__logo`}>
        <Logo />
        <Typography
          className={`${componentClassName}__title`}
          variant="title-h1"
          font="ntSomic400"
        >
          Сдать Гисту
        </Typography>
      </div>
      <div className={`${componentClassName}__buttons`}>{children}</div>
    </header>
  )
}
