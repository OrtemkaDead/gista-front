'use client'

import { Button } from '@/components/shared'
import { RegisterInput } from '@/components/shared/inputs/register-input'
import { USER_SERVICE } from '@/services/user-service/user.service'
import { UserDataContext } from '@/store/providers/user-register-data-provider'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import SecondScreenProps from './second-screen.types'
import './styles.scss'

interface SecondScreenRegisterData {
  phone: string
  email: string
}

export const SecondScreen: React.FC<SecondScreenProps> = ({ setActiveScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SecondScreenRegisterData>()

  const { setPhone, setEmail } = useContext(UserDataContext)

  const componentClassName = 'second-screen'

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    setPhone(data.phone)
    setEmail(data.email)

    const response = await USER_SERVICE.sendCode(data.email)
    console.log(response)

    setActiveScreen(3)
  })

  return (
    <form
      onSubmit={onSubmit}
      className={componentClassName}
    >
      <div className={`${componentClassName}__inputs`}>
        <RegisterInput
          register={register}
          name="phone"
          type="tel"
          placeholder="Номер телефона"
          options={{
            required: {
              value: true,
              message: `Поле "Номер телефона" является обязательным`,
            },
            minLength: {
              value: getValues('phone') && getValues('phone')[0] === '+' ? 20 : 19,
              message: 'ошибка!',
            },
          }}
          hintText={errors.phone?.message}
        />
        <RegisterInput
          register={register}
          name="email"
          type="text"
          placeholder="E-mail"
          options={{
            required: {
              value: true,
              message: `Поле "E-mail" является обязательным`,
            },
            pattern: {
              message: 'E-mail не валиден',
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            },
          }}
          hintText={errors.email?.message}
        />
      </div>
      <Button
        as="submit"
        size="large"
        fullWidth
      >
        Продолжить
      </Button>
    </form>
  )
}
