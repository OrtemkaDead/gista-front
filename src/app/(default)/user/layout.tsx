import type { Metadata } from 'next'
import './styles.scss'
import { TitleCell } from '@/components/shared'
import AccountCard from '@/components/account-page/account-card'

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

      <section className='account-page-layout'>
        {/* в TitleCell текст всегда в теге p, если необходима семантика надо сделать возможность
      выбирать тег, в Typografhy такая возможность есть, можно перенести ее и в TitleCell*/}
        <TitleCell className='account-page-layout__title'>
          title
        </TitleCell>

        <div className='account-page-layout__content'>

          <div className='account-page-layout__content--info'>
            {children}
          </div>

          <div className='account-page-layout__content--university-connection'>
            <AccountCard type='university-connection-card'>
              [Форма подключение к университету через код]
            </AccountCard>
          </div>

        </div>

      </section>

    </main>

  )
}
