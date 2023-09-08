interface AuthorizationLoginProps {
  className?: string
  children?: React.ReactNode
  authFunc: (username: string, password: string) => void
}

export default AuthorizationLoginProps
