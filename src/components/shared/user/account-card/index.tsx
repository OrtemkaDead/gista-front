import classnames from 'classnames'
import { memo, useMemo } from 'react'

import { TitleCell, Typography } from '@/shared'

import AccountCardProps from './account-card.types'
import './styles.scss'

export const AccountCard: React.FC<AccountCardProps> = ({
  className = '',
  children = '',
  type = 'user-card',
  universityID,
}) => {
  //* ClassNames
  const componentClassName = 'account-card'
  const AccountCardClassName = classnames(
    componentClassName,
    {
      [`${componentClassName}--connection`]: type === 'university-connection-card',
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
          font="ntSomic"
          variant="headline-h2"
        >
          Оставьте заявку, если хотите, чтобы ваш университет присоединился к нашему сервису!
        </Typography>
      </>
    ) : type === 'university-connection-card' ? (
      <>
        <TitleCell
          className={`${componentClassName}__title`}
          textSize="headline-h1"
        >
          Подключение к университету
        </TitleCell>

        <Typography
          className={`${componentClassName}__description`}
          font="lato"
          variant="text-16"
        >
          Для подключения к организации запросите код у вашего университета, с помощью него вы
          сможете получить доступ к тарифу университета
        </Typography>
      </>
    ) : (
      <TitleCell
        leftSideIconName="profileCircle"
        className={`${componentClassName}__title`}
        titleTag="h3"
      >
        Личная информация
      </TitleCell>
    )
  }, [type, universityID])

  return (
    <div className={AccountCardClassName}>
      {cardContent}

      {children}
    </div>
  )
}

export default memo(AccountCard)
