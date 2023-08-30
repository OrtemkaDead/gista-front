import classnames from 'classnames'
import { memo, useMemo } from 'react'

import { AccountCardItem, TitleCell, Typography } from '@/shared'

import AccountCardProps from './account-card.types'
import './styles.scss'

export const AccountCard: React.FC<AccountCardProps> = ({
  className = '',
  children = '',
  type = 'user-card',
  universityID,
  universityName,
}) => {
  const universityIsConnected = type === 'university-isconnected-card'
  const universityNonConnected = type === 'university-non-connection-card'

  //* ClassNames
  const componentClassName = 'account-card'
  const AccountCardClassName = classnames(
    componentClassName,
    {
      [`${componentClassName}--connection`]: !universityIsConnected || universityIsConnected,
      [`${componentClassName}--non-connection`]: type === 'university-empty-card',
    },
    className,
  )

  const cardContent = useMemo(() => {
    return type === 'university-card' ? (
      <TitleCell
        leftSideIconName="teacher"
        className={`${componentClassName}__title`}
        rightSideText={`ID:${universityID}`}
        titleTag="h3"
      >
        Университет
      </TitleCell>
    ) : type === 'university-empty-card' ? (
      <>
        <TitleCell
          leftSideIconName="teacher"
          className={`${componentClassName}__title`}
          titleTag="h3"
        >
          Университет не подключен
        </TitleCell>

        <Typography
          font="lato"
          variant="text-16"
        >
          Оставьте заявку, если хотите, чтобы ваш университет присоединился к нашему сервису!
        </Typography>
      </>
    ) : universityIsConnected || universityNonConnected ? (
      <div className={`${componentClassName}__content`}>
        <TitleCell
          className={`${componentClassName}__title`}
          textSize="headline-h1"
          titleTag="h3"
        >
          {universityIsConnected ? 'Подключен к университету' : 'Подключение к университету'}
        </TitleCell>

        <Typography
          className={`${componentClassName}__description`}
          font="lato"
          variant="text-16"
        >
          {universityIsConnected
            ? 'Вы покдлючены к университету и можете пользователься всеми возможностями платформы!'
            : `Для подключения к организации запросите код у вашего университета, 
              с помощью него вы сможете получить доступ к тарифу университета`}
        </Typography>

        {universityIsConnected && <AccountCardItem>{universityName}</AccountCardItem>}
      </div>
    ) : (
      <TitleCell
        leftSideIconName="profileCircle"
        className={`${componentClassName}__title`}
        titleTag="h3"
      >
        Личная информация
      </TitleCell>
    )
  }, [type, universityID, universityIsConnected, universityName, universityNonConnected])

  return (
    <article className={AccountCardClassName}>
      {cardContent}

      {children}
    </article>
  )
}

export default memo(AccountCard)
