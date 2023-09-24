import { FC } from 'react'

import { Button, TextInput } from '../..'
import MultiLevelSelect from '../../multi-level-select'
import '../curriculum-form/styles.scss'
import { EditSubsectionFormProps } from './edit-subsection.types'

export const EditSubsectionForm: FC<EditSubsectionFormProps> = ({
  selectList,
  sectionName,
  subsectionName,
  onSubmit,
  setValue,
  cancel,
}) => {
  const componentClassName = 'add-section-form'
  return (
    <form
      className={componentClassName}
      onSubmit={onSubmit}
    >
      <MultiLevelSelect
        selectList={selectList}
        defaultValue={sectionName}
        placeholder="Раздел"
        disabled
      />
      <TextInput
        type="text"
        placeholder="Название препарата"
        value={subsectionName}
        setValue={setValue}
      />

      <div className={`${componentClassName}__button-wrapper`}>
        <Button
          size="large"
          type="borderless"
          onClick={cancel}
          className={`${componentClassName}__button`}
        >
          Отмена
        </Button>

        <Button
          as="submit"
          size="large"
          type="primary"
          className={`${componentClassName}__button`}
        >
          Сохранить
        </Button>
      </div>
    </form>
  )
}
