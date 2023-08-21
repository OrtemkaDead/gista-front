import classnames from 'classnames'
import { memo } from 'react'

import AccountCardProps from './account-card.types'
import './styles.scss'

export const AccountCard: React.FC<AccountCardProps> = ({ className = '', children = '' }) => {
  //* ClassNames
  const componentClassName = 'account-card'
  const AccountCardClassName = classnames(
    componentClassName,

    className,
  )

  return <div className={AccountCardClassName}>{children}</div>
}

export default memo(AccountCard)
