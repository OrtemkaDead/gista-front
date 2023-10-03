import { FormEventHandler, MouseEventHandler } from 'react'

import { MultiLevelSelectProps } from '../../multi-level-select/multi-level-select.types'

export type ModalFormTypes = 'add-section' | 'add-subsection' | 'add-specimen'

export interface CurriculumFormProps extends Partial<Pick<MultiLevelSelectProps, 'selectList'>> {
  cancel: MouseEventHandler<HTMLButtonElement>
  onSubmit: FormEventHandler<HTMLFormElement>
  formFor: ModalFormTypes
}
