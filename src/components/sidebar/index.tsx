import classnames from 'classnames'
import { memo } from 'react'

import { Icon, Typography } from '@/ui-kit'

import SidebarProps, { SidebarLinkType } from './sidebar.types'
import './styles.scss'

const sidebarMainLinks: SidebarLinkType[] = [
  {
    id: 1,
    title: 'Главная',
    iconName: 'keyboardOpen',
    to: '',
  },
  // {
  //   id: 2,
  //   title: "Подписка",
  //   iconName: "huobitoken",
  //   to: "",
  // },
  {
    id: 3,
    title: 'Аккаунт',
    iconName: 'user',
    to: '',
  },
  {
    id: 4,
    title: 'Избранное',
    iconName: 'star',
    to: 'favorites',
  },
]

const sidebarManagementLinks: SidebarLinkType[] = [
  {
    id: 5,
    title: 'Учебный план',
    iconName: 'book',
    to: 'edit',
  },
  {
    id: 6,
    title: 'Настройки',
    iconName: 'setting',
    to: '',
  },
]

export const Sidebar: React.FC<SidebarProps> = memo(function Sidebar({ className = '' }) {
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
          <div
            key={link.id}
            className={`${componentClassName}__link`}
          >
            <Icon iconName={link.iconName} />
            <Typography>{link.title}</Typography>
          </div>
        ))}
      </div>

      <div className={`${componentClassName}__links`}>
        {sidebarManagementLinks.map((link) => (
          <div
            key={link.id}
            className={`${componentClassName}__link`}
          >
            <Icon iconName={link.iconName} />
            <Typography>{link.title}</Typography>
          </div>
        ))}
        <div className={`${componentClassName}__link`}>
          <Icon iconName="exit" />
          <Typography>Выйти</Typography>
        </div>
      </div>
    </aside>
  )
})
