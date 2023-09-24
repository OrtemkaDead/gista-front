import { AddSectionForm } from '@/components/shared/modal-forms/add-section-form'
import { FC, FormEventHandler } from 'react'

import { AddSectionProps } from './add-section.types'

export const AddSection: FC<AddSectionProps> = ({ cancel }) => {
  const addSection: FormEventHandler = (event) => {
    event.preventDefault()
    console.log('Add Section')
  }

  return (
    <AddSectionForm
      addSection={addSection}
      cancel={cancel}
    />
  )
}
