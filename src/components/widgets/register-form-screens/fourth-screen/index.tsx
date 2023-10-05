'use client'

import { Button, Icon, Typography } from '@/components/shared'
import { RegisterInput } from '@/components/shared/inputs/register-input'
import { USER_SERVICE } from '@/services/user-service/user.service'
import { UserDataContext } from '@/store/providers/user-register-data-provider'
import Validate from '@/utils/Validate'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import FourthScreenProps from './fourth-screen.types'
import './styles.scss'

interface FourthScreenRegisterData {
  password: string
  confirmPassword: string
}

export const FourthScreen: React.FC<FourthScreenProps> = ({}) => {
  const [pass, setPass] = useState<string>('')

  const componentClassName = 'fourth-screen'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FourthScreenRegisterData>()

  const { first_name, last_name, surname, email, phone } = useContext(UserDataContext)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    const userData = {
      email: email,
      phone: phone,
      password: data.password,
      first_name: first_name,
      last_name: last_name,
      surname: surname,
    }

    const response = await USER_SERVICE.register(userData)

    console.log(response)

    // дальнейшие действия - переалресация на страницу главная?
  })

  return (
    <form
      onSubmit={onSubmit}
      className={componentClassName}
    >
      <div className={`${componentClassName}__inputs`}>
        <RegisterInput
          value={pass}
          setValue={setPass}
          name="password"
          register={register}
          placeholder="Пароль"
          type="password"
          options={{
            required: {
              value: true,
              message: `Поле "Пароль" является обязательным`,
            },
          }}
          hintText={errors.password?.message}
        />
        <div className={`${componentClassName}__validation-container`}>
          <div className={`${componentClassName}__validation-conditions`}>
            <div
              className={
                !Validate.minLength(pass)
                  ? `${componentClassName}__validation-condition`
                  : `${componentClassName}__validation-condition--success`
              }
            >
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                className={`${componentClassName}__validation-condition`}
                variant="text-14"
                font="lato"
                tag="span"
              >
                Не менее 8 символов
              </Typography>
            </div>
            <div
              className={
                !Validate.hasCapital(pass)
                  ? `${componentClassName}__validation-condition`
                  : `${componentClassName}__validation-condition--success`
              }
            >
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                className={`${componentClassName}__validation-condition`}
                variant="text-14"
                font="lato"
                tag="span"
              >
                Заглавная буква
              </Typography>
            </div>
          </div>
          <div className={`${componentClassName}__validation-conditions`}>
            <div
              className={
                !Validate.hasOneNumber(pass)
                  ? `${componentClassName}__validation-condition`
                  : `${componentClassName}__validation-condition--success`
              }
            >
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                className={`${componentClassName}__validation-condition`}
                variant="text-14"
                font="lato"
                tag="span"
              >
                Не менее 1 цифры
              </Typography>
            </div>
            <div
              className={
                !Validate.specialSymbol(pass)
                  ? `${componentClassName}__validation-condition`
                  : `${componentClassName}__validation-condition--success`
              }
            >
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                className={`${componentClassName}__validation-condition`}
                font="lato"
                variant="text-14"
                tag="span"
              >
                Специальный символ
              </Typography>
            </div>
          </div>
        </div>
        <RegisterInput
          name="confirmPassword"
          register={register}
          options={{
            required: {
              value: true,
              message: `Поле "Подтверждение пароля" является обязательным`,
            },
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Пароли не совпадают'
              }
            },
          }}
          placeholder="Подтверждение пароля"
          type="password"
          hintText={errors.confirmPassword?.message}
        />
      </div>
      <Button
        as="submit"
        size="large"
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}
