import classnames from 'classnames'
import { FC, memo } from 'react'

import { AccountCardItem, Button, TextInput, Typography } from '@/shared'

import './styles.scss'
import { UserInfoFormProps } from './user-info-form.types'

export const UserInfoForm: FC<UserInfoFormProps> = ({
  phoneValue,
  emailValue,
  passwordValue,
  setPhoneValue,
  setEmailValue,
  setPasswordValue,
  isEditUserInfo,
  manageSubscription,
}) => {
  const componentClassName = 'user-info-form'

  const FormItemClassName = classnames({
    [`${componentClassName}__item`]: !isEditUserInfo,
    [`${componentClassName}__item--edit`]: isEditUserInfo,
  })
  // !!! TextInput необходима взможность передовать событие onChange!!!
  return (
    <form className={componentClassName}>
      <TextInput
        className={FormItemClassName}
        type="text"
        label="Номер телефона"
        value={phoneValue}
        setValue={setPhoneValue}
        disabled={!isEditUserInfo}
      />

      <TextInput
        className={FormItemClassName}
        type="email"
        label="E-mail"
        value={emailValue}
        setValue={setEmailValue}
        disabled={!isEditUserInfo}
      />

      <AccountCardItem
        title="Тариф"
        className={FormItemClassName}
      >
        <Typography
          font="ntSomic"
          variant="title-h1"
          className={`${componentClassName}__subscription-status`}
        >
          Активен
        </Typography>

        <Button
          size="medium"
          type="secondary"
          onClick={manageSubscription}
        >
          Управление подпиской
        </Button>
      </AccountCardItem>

      <TextInput
        className={FormItemClassName}
        type="password"
        label="Пароль"
        value={passwordValue}
        setValue={setPasswordValue}
        disabled={!isEditUserInfo}
      />
    </form>
  )
}

export default memo(UserInfoForm)
