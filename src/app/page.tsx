import { GistaCard, Logo } from '@/components'
import { Collapse } from '@/components/collapse'

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

      <GistaCard />
      <GistaCard editable />

      <Logo />

      <Checkbox state />
      <Collapse
        title="Test"
        type="section"
      >
        <GistaCard editable />
      </Collapse>
    </main>
  )
}
