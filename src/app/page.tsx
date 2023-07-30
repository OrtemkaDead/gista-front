import Button from '@/ui-kit/button'
import Typography from '@/ui-kit/typography'

import './styles.scss'

export default function Home(): React.ReactElement {
  return (
    <main>
      <Typography
        variant="display"
        font="lato400"
      >
        Test Текста LAto
      </Typography>
      <Typography
        className="page__test-text"
        variant="display"
        font="gilroy400"
      >
        Test Текста gilroy400
      </Typography>
      <Typography
        variant="display"
        font="ntSomic400"
      >
        Test Текста ntSomic400
      </Typography>
    </main>
  )
}
