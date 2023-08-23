import classnames from 'classnames'
import { memo } from 'react'

import { Logo, Typography } from '@/shared'

import HeaderProps from './header.types'
import './styles.scss'

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
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
          font="ntSomic"
        >
          Сдать Гисту
        </Typography>
      </div>
      <div className={`${componentClassName}__buttons`}>{children}</div>
    </header>
  )
}

export default memo(Header)
