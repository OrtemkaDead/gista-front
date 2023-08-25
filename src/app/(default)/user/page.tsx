import { AccountCard, UniversityFormContainer, UniversityInfo } from '@/shared'

// пример обьектов данных, пришедших с сервера

// переключение рендера 'Инфо об университете' или 'Форму для заявки' (если универ не подключен)
const universityIsConnected = true

const university = {
  id: '1234567890',
  name: 'ОГУ им. И. С. Тургенева',
  address: 'г. Москва, ул. Степанова, д. 20',
  head: 'Сергеев Михаил Юрьевич',
  email: 'sense.nessa@gmail.com',
  phone: '+7 (800) 555-35-35',
}

export default function UserPage(): React.ReactElement {
  return (
    <>
      <AccountCard>[UserInfoBlock(FORM)]</AccountCard>

      <AccountCard
        type={universityIsConnected ? 'university-card' : 'university-empty-card'}
        universityID={university.id}
      >
        {universityIsConnected ? (
          <UniversityInfo
            name={university.name}
            address={university.address}
            head={university.head}
            email={university.email}
            phone={university.phone}
          />
        ) : (
          <UniversityFormContainer formType="request" />
        )}
      </AccountCard>
    </>
  )
}
