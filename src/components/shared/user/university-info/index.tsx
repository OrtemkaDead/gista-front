import { FC, memo, useMemo } from 'react'

import { AccountCardItem } from '@/shared'

import './styles.scss'
import { UniversityInfoProps } from './universityy-info.types'

export const UniversityInfo: FC<UniversityInfoProps> = ({ name, address, head, email, phone }) => {
  //* ClassNames
  const componentClassName = 'university-info'

  // можно прописать условие если ни один из пропсов не пришел
  // то вернуть "Нет информации об университете"
  // либо сделать оябзательным только пропс name - он должен быть всегда
  const content = useMemo(() => {
    return (
      <>
        {name && <AccountCardItem title="Учебное учреждение">{name}</AccountCardItem>}
        {address && <AccountCardItem title="Адрес">{address}</AccountCardItem>}
        {head && <AccountCardItem title="Контактное лицо">{head}</AccountCardItem>}
        {email && <AccountCardItem title="E-mail">{email}</AccountCardItem>}
        {phone && <AccountCardItem title="Номер телефона">{phone}</AccountCardItem>}
      </>
    )
  }, [address, email, head, name, phone])

  // опять же если важна семантика - то надо делать этот элемент список - <ul></ul>
  // а AccountCardItem делать <li></li>
  return <div className={componentClassName}>{content}</div>
}

export default memo(UniversityInfo)
