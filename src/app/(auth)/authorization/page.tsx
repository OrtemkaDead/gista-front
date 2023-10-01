import api from '@/components/shared/api'
import { cookies } from 'next/headers'

import { AuthorizationLogin } from '@/widgets'

import { AboutInfoBlock } from '@/shared'

export default function AuthorizationPage(): React.ReactElement {
  const authFunc = async function (username: string, password: string) {
    'use server'

    const response = await api.token.create(username, password)
    cookies().set('access-token', response.data.access)
    cookies().set('refresh-token', response.data.refresh)
  }

  return (
    <>
      <AboutInfoBlock />
      <AuthorizationLogin authFunc={authFunc} />
    </>
  )
}
