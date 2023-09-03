import type { Metadata } from 'next'

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
      <body className="app-layout">
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
