import { FormEventHandler, MouseEventHandler } from 'react'

export interface AddSectionFormProps {
  cancel: MouseEventHandler<HTMLButtonElement>
  addSection: FormEventHandler
}
