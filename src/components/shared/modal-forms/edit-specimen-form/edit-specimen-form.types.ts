import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'

import { MultiLevelSelectProps } from '../../multi-level-select/multi-level-select.types'

// selectList ?? будет disabled, нужен ли?
export interface EditSpecimenFormProps extends Partial<Pick<MultiLevelSelectProps, 'selectList'>> {
  specimenName: string
  sectionName: string
  cancel: MouseEventHandler<HTMLButtonElement>
  onSubmit: FormEventHandler<HTMLFormElement>
  uploadImage: ChangeEventHandler<HTMLInputElement>
  previewImage: string
}
