import { AuthorizationRegister } from '@/components/widgets/authorization/authorization-register'

import { AboutInfoBlock, Typography } from '@/shared'

export default function RegisterPage(): React.ReactElement {
  return (
    <>
      <AboutInfoBlock />
      {/* TODO: AuthLogin надо заменить на компонент для регистрации, на подобии этого */}
      {/* <AuthorizationLogin /> */}
      <AuthorizationRegister />
      {/* <Typography
        font="ntSomic"
        variant="display"
      >
        Регестраци я
      </Typography> */}
    </>
  )
}
