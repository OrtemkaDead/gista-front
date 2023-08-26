'use client'

import { Button, TextInput } from '@/components/shared'
import { useForm } from 'react-hook-form'

import FirstScreenProps from './first-screen.types'
import './styles.scss'

export const FirstScreen: React.FC<FirstScreenProps> = ({ setActiveScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const componentClassName = 'first-screen'

  const onSubmit = handleSubmit((data) => {
    setActiveScreen(2)
  })

  return (
    <form
      onSubmit={onSubmit}
      className={componentClassName}
    >
      <div className={`${componentClassName}__inputs`}>
        <TextInput
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
        <TextInput
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
        <TextInput
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
