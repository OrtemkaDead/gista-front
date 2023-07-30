import { Logo } from '@/components'

import { Checkbox, Icon, Typography } from '@/ui-kit'

import './styles.scss'

export default function Home(): React.ReactElement {
  return (
    <main>
      <Typography
        variant="display"
        font="ntSomic400"
      >
        Это конечно треш
      </Typography>

      <Icon
        iconName="book"
        size={64}
      />

      <Logo />

      <Checkbox state />
    </main>
  )
}
