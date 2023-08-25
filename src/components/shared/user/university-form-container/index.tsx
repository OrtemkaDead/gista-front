'use client'

import { FC, memo, useState } from 'react'

import { UniversityForm } from '@/shared'

import { UniversityFormContainerProps } from './university-form-container'

export const UniversityFormContainer: FC<UniversityFormContainerProps> = ({ formType }) => {
  const [value, setValue] = useState('')

  // логика взаимодействия с формой

  return (
    <UniversityForm
      formType={formType}
      value={value}
      setValue={setValue}
    />
  )
}

export default memo(UniversityFormContainer)
