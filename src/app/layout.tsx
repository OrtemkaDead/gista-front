import type { Metadata } from 'next'

import { Header } from '@/components'

import { Button } from '@/ui-kit'

import './globals.scss'

export const metadata: Metadata = {
  title: 'Сдать гисту',
  description: 'Сдайте гисту пж',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="ru">
      <body>
        <Header>
          <Button>Auth</Button>
          <Button>Register</Button>
        </Header>

        {children}
      </body>
    </html>
  )
}
