import classnames from 'classnames'
import { memo } from 'react'

import AccountCardProps from './account-card.types'
import './styles.scss'
import { TitleCell, Typography } from '@/components/shared'

export const AccountCard: React.FC<AccountCardProps> = ({
  className = '',
  children = '',
  type = 'user-card',
  universityID
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

  return (
    <div className={AccountCardClassName}>
      {type === 'user-card' && (
        <TitleCell
          leftSideIconName='profileCircle'
          className={`${componentClassName}__title`}
        >
          Личная информация
        </TitleCell>
      )}

      {type === 'university-card' && (
        <TitleCell
          leftSideIconName='teacher'
          className={`${componentClassName}__title`}
          rightSideText={`ID:${universityID}`}
        >
          Университет
        </TitleCell>
      )}

      {type === 'university-empty-card' && (
        <>
          <TitleCell
            leftSideIconName='teacher'
            className={`${componentClassName}__title`}
          >
            Университет не подключен
          </TitleCell>

          <Typography>
            Оставьте заявку, если хотите, чтобы ваш университет присоединился к нашему сервису!
          </Typography>
        </>
      )}

      {type === 'university-connection-card' && (
        <>
          <TitleCell
            className={`${componentClassName}__title`}
            textSize='headline-h1'
          >
            Подключение к университету
          </TitleCell>

          <Typography className={`${componentClassName}__description`}>
            Для подключения к организации запросите код у вашего университета,
            с помощью него вы сможете получить доступ к тарифу университета
          </Typography>
        </>
      )}

      {children}
    </div>
  )
}

export default memo(AccountCard)
