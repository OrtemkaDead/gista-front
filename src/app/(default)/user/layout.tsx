import type { Metadata } from 'next'

import { AccountCard, TitleCell, UniversityFormContainer } from '@/shared'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Сдать гисту | Аккаунт',
  description: 'Информация о пользователе и университете',
}

// имитация данных с сервера
const universityIsConnected = true // переключение контента блока "Подключение к университету"
const universityName = 'ОГУ им. И. С. Тургенева'
const user = {
  id: '1234567890',
  name: 'Абрамова Ева Данииловна',
  password: 'qwerty',
  email: 'sense.nessa@gmail.com',
  phone: '+7 (800) 555 35-35',
}

export default function AccountPagesLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <main className="account-page">
      <section className="account-page-layout">
        <TitleCell
          className="account-page-layout__title"
          textSize="headline-h1"
          titleTag="h2"
          rightSideText={`ID:${user.id}`}
        >
          {user.name}
        </TitleCell>

        <div className="account-page-layout__content account-page-content">
          <div className="account-page-content__info">{children}</div>

          <div className="account-page-content__university-connection">
            <AccountCard
              universityName={universityName}
              type={
                universityIsConnected
                  ? 'university-isconnected-card'
                  : 'university-non-connection-card'
              }
            >
              <UniversityFormContainer universityIsConnected={universityIsConnected} />
            </AccountCard>
          </div>
        </div>
      </section>
    </main>
  )
}
