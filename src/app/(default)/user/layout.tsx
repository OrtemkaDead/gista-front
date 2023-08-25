import type { Metadata } from 'next'

import { AccountCard, TitleCell, UniversityFormContainer } from '@/shared'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Сдать гисту | Аккаунт',
  description: 'Информация о пользователе и университете',
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
          titleTag="h2"
        >
          title
        </TitleCell>

        <div className="account-page-layout__content account-page-content">
          <div className="account-page-content__info">{children}</div>

          <div className="account-page-content__university-connection">
            <AccountCard type="university-connection-card">
              <UniversityFormContainer />
            </AccountCard>
          </div>
        </div>
      </section>
    </main>
  )
}
