import { EditSubsectionForm } from '@/components/shared/modal-forms/edit-subsection-form'
import { FC, FormEventHandler, useState } from 'react'

import { IEditSubsectionProps } from './edit-subsection.types'

export const EditSubsection: FC<IEditSubsectionProps> = ({
  sectionName,
  selectList,
  subsectionName,
  cancel,
}) => {
  const [subsectionValue, setSubsectionValue] = useState(subsectionName)

  const saveEditing: FormEventHandler = (event) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    console.log(formJson)
    console.log('Сохранить изменения подраздела')
  }

  return (
    <EditSubsectionForm
      sectionName={sectionName}
      selectList={selectList}
      subsectionName={subsectionValue}
      onSubmit={saveEditing}
      setValue={setSubsectionValue}
      cancel={cancel}
    />
  )
}
