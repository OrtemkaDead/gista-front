import React, { FC } from 'react'

import { Button, TextInput } from '../..'
import { FileInput } from '../../inputs/file-input'
import MultiLevelSelect from '../../multi-level-select'
import { EditSpecimenFormProps } from './edit-specimen-form.types'
import './styles.scss'

export const EditSpecimenForm: FC<EditSpecimenFormProps> = ({
  onSubmit,
  specimenName,
  selectList = [],
  sectionName,
  cancel,
  uploadImage,
  previewImage,
}) => {
  const componentClassName = 'edit-specimen-form'

  return (
    <form
      className={componentClassName}
      onSubmit={onSubmit}
    >
      <TextInput
        type="text"
        placeholder="Введите название препарата"
        value={specimenName}
      />

      <MultiLevelSelect
        selectList={selectList}
        defaultValue={sectionName}
        disabled
      />

      <FileInput
        onChange={uploadImage}
        previewImage={previewImage}
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
