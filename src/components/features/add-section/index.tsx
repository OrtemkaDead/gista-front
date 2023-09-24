import { CurriculumForm } from '@/components/shared/modal-forms/curriculum-form'
import { FC, FormEventHandler } from 'react'

import { EditCurriculumProps } from './add-section.types'

export const EditCurriculum: FC<EditCurriculumProps> = ({ cancel, formFor, selectList }) => {
  const editCurriculum: FormEventHandler = (event) => {
    event.preventDefault()
    formFor === 'add-section' && console.log('Add section')
    formFor === 'add-subsection' && console.log('Add subsection')
    formFor === 'add-specimen' && console.log('Add specimen')
  }

  return (
    <CurriculumForm
      formFor={formFor}
      action={editCurriculum}
      cancel={cancel}
      selectList={selectList}
    />
  )
}
