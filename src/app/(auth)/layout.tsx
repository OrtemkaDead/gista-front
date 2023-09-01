import { useMemo } from 'react'

import { Button, Header } from '@/shared'

import './styles.scss'

export default function AuthPagesLayout({ children }: { children: React.ReactNode }) {
  const headerContent = useMemo(() => {
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
    <section className="auth-pages-layout">
      <Header>{headerContent}</Header>

      <div className="auth-pages-layout__content">{children}</div>
    </section>
  )
}
