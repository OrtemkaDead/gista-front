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
          titleTag="h2"
        >
          title
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
