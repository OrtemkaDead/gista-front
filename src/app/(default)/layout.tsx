import { useMemo } from 'react'

import { Button, Header, Sidebar } from '@/shared'

import './styles.scss'

export default function DefaultPagesLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  const headerContent = useMemo(() => {
    // if (isLogged) {
    //   return <Icon iconName="profileCircle" />
    // }

    return (
      <>
        <Button to="/register">Зарегистрироваться</Button>
        <Button
          type="secondary"
          to="/authorization"
        >
          Войти
        </Button>
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
