import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react'

import { MultiLevelSelectProps } from '../../multi-level-select/multi-level-select.types'

export interface EditSubsectionFormProps extends Pick<MultiLevelSelectProps, 'selectList'> {
  sectionName: string
  subsectionName: string
  onSubmit: FormEventHandler<HTMLFormElement>
  setValue: Dispatch<SetStateAction<string>>
  cancel: MouseEventHandler<HTMLButtonElement>
}
