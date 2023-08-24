import { AccountCard } from '@/shared'

export default function UserPage(): React.ReactElement {
  const universityID = '1234567890'

  return (
    <>
      <AccountCard>[UserInfoBlock(FORM)]</AccountCard>

      <AccountCard
        type="university-card"
        universityID={universityID}
      >
        [UniversityInfoBlock]
      </AccountCard>

      {/* <AccountCard type='university-empty-card'>
        [Форма отправки заявки на подключение университета]
      </AccountCard> */}
    </>
  )
}
