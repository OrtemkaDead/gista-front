'use client'

import { Button } from '@/components/shared'
import { RegisterInput } from '@/components/shared/inputs/register-input'
import { useForm } from 'react-hook-form'

import FirstScreenProps from './first-screen.types'
import './styles.scss'

interface FirstScreenRegisterData {
  lastName: string
  firstName: string
  surname: string
}

export const FirstScreen: React.FC<FirstScreenProps> = ({ setActiveScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstScreenRegisterData>()

  const componentClassName = 'first-screen'

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    setActiveScreen(2)
  })

  return (
    <form
      onSubmit={onSubmit}
      className={componentClassName}
    >
      <div className={`${componentClassName}__inputs`}>
        <RegisterInput
          register={register}
          name="lastName"
          type="text"
          placeholder="Фамилия"
          options={{
            required: {
              value: true,
              message: `Поле "Фамилия" является обязательным`,
            },
            minLength: {
              value: 2,
              message: 'Должно быть не менее 2 символов',
            },
            pattern: {
              message: 'Фамилия не валидна',
              value: /^[А-ЯЁ][а-яё]*$/,
            },
          }}
          hintText={errors.lastName?.message}
        />
        <RegisterInput
          register={register}
          type="text"
          name="firstName"
          placeholder="Имя"
          options={{
            required: {
              value: true,
              message: `Поле "Имя" является обязательным`,
            },
            minLength: {
              value: 2,
              message: 'Должно быть не менее 2 символов',
            },
            pattern: {
              message: 'Имя не валидно',
              value: /^[А-ЯЁ][а-яё]*$/,
            },
          }}
          hintText={errors.firstName?.message}
        />
        <RegisterInput
          register={register}
          type="text"
          name="surname"
          placeholder="Отчество"
          options={{
            pattern: {
              message: 'Отчество не валидно',
              value: /^[А-ЯЁ][а-яё]*$/,
            },
            minLength: {
              value: 2,
              message: 'Должно быть не менее 2 символов',
            },
          }}
          hintText={errors.surname?.message}
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
