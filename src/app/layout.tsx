import type { Metadata } from 'next'
import { useMemo } from 'react'

import { Button, Header, Icon, Sidebar } from '@/shared'

import './globals.scss'
import './styles.scss'

export const metadata: Metadata = {
  title: 'Сдать гисту',
  description: 'Сдайте гисту пж',
}

export default function RootLayout({
  children,
  authorization,
}: {
  children: React.ReactNode
  authorization: React.ReactNode
}): React.ReactElement {
  const isLogged = false

  const headerContent = useMemo(() => {
    if (isLogged) {
      return <Icon iconName="profileCircle" />
    }

    return (
      <>
        <Button>Auth</Button>
        <Button>Register</Button>
      </>
    )
  }, [isLogged])

  return (
    <html lang="ru">
      <body className="app-layout">
        <Header>{headerContent}</Header>

        <div className="app-layout__content">
          {isLogged ? <Sidebar /> : null}

          {isLogged ? children : authorization}
        </div>
      </body>
    </html>
  )
}
