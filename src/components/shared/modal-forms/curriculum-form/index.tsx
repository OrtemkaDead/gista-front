import { FC, useMemo } from 'react'

import { Button, TextInput } from '@/shared'

import MultiLevelSelect from '../../multi-level-select'
import { CurriculumFormProps } from './curriculum-form.types'
import './styles.scss'

export const CurriculumForm: FC<CurriculumFormProps> = ({
  formFor,
  selectList = [],
  cancel,
  action,
}) => {
  const componentClassName = 'add-section-form'

  const addSectionForm = formFor === 'add-section'
  const addSubsectionForm = formFor === 'add-subsection'
  const addSpecimenForm = formFor === 'add-specimen'

  const form = useMemo(() => {
    return addSectionForm ? (
      <TextInput
        type="text"
        placeholder="Название раздела"
      />
    ) : addSubsectionForm ? (
      <>
        <MultiLevelSelect
          selectList={selectList}
          placeholder="Выберите раздел"
        />
        <TextInput
          type="text"
          placeholder="Название подраздела"
        />
      </>
    ) : addSpecimenForm ? (
      <>
        <MultiLevelSelect
          selectList={selectList}
          extraButton={
            <Button
              iconName="add"
              type="borderless"
            >
              Добавить подраздел
            </Button>
          }
          placeholder="Раздел"
        />
        <TextInput
          type="text"
          placeholder="Название препарата"
        />
      </>
    ) : null
  }, [addSectionForm, addSpecimenForm, addSubsectionForm, selectList])

  return (
    <form className={componentClassName}>
      {form}

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
          onClick={action}
          className={`${componentClassName}__button`}
        >
          Добавить
        </Button>
      </div>
    </form>
  )
}
