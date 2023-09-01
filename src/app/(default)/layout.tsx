import { useMemo } from 'react'

import { Header, Icon, Sidebar } from '@/shared'

import './styles.scss'

export default function DefaultPagesLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  const headerContent = useMemo(() => {
    return (
      <>
        <Icon iconName="profileCircle" />
      </>
    )
  }, [])

  return (
    <section className="default-page-layout">
      <Header>{headerContent}</Header>

      <div className="default-page-layout__content">
        <Sidebar />

        {children}
      </div>
    </section>
  )
}
