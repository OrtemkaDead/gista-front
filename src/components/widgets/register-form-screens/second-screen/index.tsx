'use client'

import { Button, TextInput } from '@/components/shared'
import { useForm } from 'react-hook-form'

import SecondScreenProps from './second-screen.types'
import './styles.scss'

export const SecondScreen: React.FC<SecondScreenProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const componentClassName = 'second-screen'

  return (
    <form className={componentClassName}>
      <div className={`${componentClassName}__inputs`}>
        <TextInput
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
        <TextInput
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
