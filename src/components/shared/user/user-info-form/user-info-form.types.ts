import { Dispatch, SetStateAction } from 'react'

import TextInputProps from '../../inputs/text-input/text-input.types'

export interface UserInfoFormProps extends Omit<TextInputProps, 'type' | 'value' | 'setValue'> {
  phoneValue: string
  emailValue: string
  passwordValue: string
  setPhoneValue: Dispatch<SetStateAction<string>>
  setEmailValue: Dispatch<SetStateAction<string>>
  setPasswordValue: Dispatch<SetStateAction<string>>
  isEditAccount: boolean
}
