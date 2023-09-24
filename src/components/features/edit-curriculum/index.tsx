import { CurriculumForm } from '@/components/shared/modal-forms/curriculum-form'
import { FC, FormEventHandler } from 'react'

import { EditCurriculumProps } from './edit-curriculum.types'

export const EditCurriculum: FC<EditCurriculumProps> = ({ cancel, formFor, selectList }) => {
  const editCurriculum: FormEventHandler = (event) => {
    event.preventDefault()

    // const form = event.target as HTMLFormElement
    // const formData = new FormData(form)
    // const formJson = Object.fromEntries(formData.entries())
    // в компоненте ИНпута свойство name не указано как атрибут
    // (пока не исправлял так как изменения были вдругой ветке в инпуте)

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
