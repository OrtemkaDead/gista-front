import { AuthorizationLogin } from '@/widgets'

import { AboutInfoBlock } from '@/shared'

import './styles.scss'

export default function AuthorizationPage(): React.ReactElement {
  const componentClassName = 'authorization-page'

  return (
    <div className={componentClassName}>
      <AboutInfoBlock />
      <AuthorizationLogin />
    </div>
  )
}
