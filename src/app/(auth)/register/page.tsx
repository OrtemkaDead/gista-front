import { AboutInfoBlock, Typography } from '@/shared'

export default function RegisterPage(): React.ReactElement {
  return (
    <>
      <AboutInfoBlock />
      {/* TODO: AuthLogin надо заменить на компонент для регистрации, на подобии этого */}
      {/* <AuthorizationLogin /> */}
      <Typography variant="display">Регестраци я</Typography>
    </>
  )
}
