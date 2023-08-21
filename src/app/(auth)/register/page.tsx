import { Typography } from '@/shared'

import './styles.scss'

export default function RegisterPage(): React.ReactElement {
  const componentClassName = 'register-page'

  return (
    <div className={componentClassName}>
      <Typography
        variant="display"
        font="ntSomic400"
      >
        Страница регистрации в работи...
      </Typography>
    </div>
  )
}
