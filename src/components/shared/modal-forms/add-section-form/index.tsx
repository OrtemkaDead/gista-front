import { FC } from 'react'

import { Button, TextInput } from '@/shared'

import { AddSectionFormProps } from './add-section-form.types'
import './styles.scss'

export const AddSectionForm: FC<AddSectionFormProps> = ({ cancel, addSection }) => {
  const componentClassName = 'add-section-form'

  return (
    <form className={componentClassName}>
      <TextInput
        type="text"
        placeholder="Название раздела"
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
          onClick={addSection}
          className={`${componentClassName}__button`}
        >
          Добавить
        </Button>
      </div>
    </form>
  )
}
