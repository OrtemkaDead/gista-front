import classnames from 'classnames'
import { memo } from 'react'

import { Icon, Typography } from '@/shared'

import SidebarProps, { SidebarLinkType } from './sidebar.types'
import './styles.scss'
import { Link } from './ui/link'

const sidebarMainLinks: SidebarLinkType[] = [
  {
    id: 1,
    title: 'Главная',
    iconName: 'keyboardOpen',
    to: '/',
  },
  {
    id: 2,
    title: 'Аккаунт',
    iconName: 'user',
    to: '/user',
  },
]

const sidebarManagementLinks: SidebarLinkType[] = [
  {
    id: 6,
    title: 'Настройки',
    iconName: 'setting',
    to: '/settings',
  },
]

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  //* ClassNames
  const componentClassName = 'sidebar'
  const SidebarClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <aside className={SidebarClassName}>
      <div className={`${componentClassName}__links`}>
        {sidebarMainLinks.map((link) => (
          <Link
            key={link.id}
            title={link.title}
            iconName={link.iconName}
            to={link.to}
          />
        ))}
      </div>

      <div className={`${componentClassName}__links`}>
        {sidebarManagementLinks.map((link) => (
          <Link
            key={link.id}
            title={link.title}
            iconName={link.iconName}
            to={link.to}
          />
        ))}

        <Link
          title="Выйти"
          iconName="exit"
          to="/exit"
        />
      </div>
    </aside>
  )
}

export default memo(Sidebar)
