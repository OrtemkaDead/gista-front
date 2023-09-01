import { AuthorizationLogin } from '@/widgets'

import { AboutInfoBlock } from '@/shared'

export default function AuthorizationPage(): React.ReactElement {
  return (
    <>
      <AboutInfoBlock />
      <AuthorizationLogin />
    </>
  )
}
