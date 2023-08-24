'use client'

import { Button, Icon, TextInput, Typography } from '@/components/shared'
import { useForm } from 'react-hook-form'

import FourthScreenProps from './fourth-screen.types'
import './styles.scss'

export const FourthScreen: React.FC<FourthScreenProps> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const componentClassName = 'fourth-screen'

  return (
    <form className="fourth-step">
      <div className={`fourth-step__inputs`}>
        <TextInput
          name="password"
          register={register}
          placeholder="Пароль"
          type="password"
          options={{
            required: true,
            minLength: 8,
          }}
          hintText={errors.password?.message ? errors.password?.message : ''}
        />
        <div className="fourth-step__validation">
          <div className="fourth-step__validation__container">
            <div className="fourth-step__validation__item">
              <Icon
                height={8}
                width={8}
                fill={'#A1A1A1'}
                iconName="circle"
              />
              <Typography
                className="fourth-step__validation__item"
                variant="text-14"
                font="lato"
              >
                Не менее 8 символов
              </Typography>
            </div>
            <div className="fourth-step__validation__item">
              <Icon
                height={8}
                width={8}
                fill={'#A1A1A1'}
                iconName="circle"
              />
              <Typography
                variant="text-14"
                font="lato"
                color="#A1A1A1"
              >
                Заглавная буква
              </Typography>
            </div>
          </div>
          <div className="fourth-step__validation__container">
            <div className="fourth-step__validation__item">
              <Icon
                height={8}
                width={8}
                fill={'#A1A1A1'}
                iconName="circle"
              />
              <Typography
                variant="text-14"
                font="lato"
                color="#A1A1A1"
              >
                Не менее 1 цифры
              </Typography>
            </div>
            <div className="fourth-step__validation__item">
              <Icon
                height={8}
                width={8}
                fill={'#A1A1A1'}
                iconName="circle"
              />
              <Typography
                font="lato"
                variant="text-14"
                color="#A1A1A1"
              >
                Специальный символ
              </Typography>
            </div>
          </div>
        </div>
        <TextInput
          name="confirmPassword"
          register={register}
          options={{
            required: true,
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
