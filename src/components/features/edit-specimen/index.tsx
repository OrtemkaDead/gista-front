import { EditSpecimenForm } from '@/components/shared/modal-forms/edit-specimen-form'
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'

import { EditSpecimenProps } from './edit-specimen.types'

export const EditSpecimen: FC<EditSpecimenProps> = ({
  cancel,
  sectionName,
  specimenName,
  selectList,
}) => {
  const [specimenPreview, setSpecimenPreview] = useState('/default-image.svg')

  const editSpecimen: FormEventHandler = (event) => {
    event.preventDefault()
    console.log('Изменения препарата сохранены')
  }

  const uploadSpecimenImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log('Изображение препарата загружено')
    const file = event.target.files && event.target.files[0]

    if (file) {
      const previewImage = URL.createObjectURL(file)
      console.log(previewImage)
      setSpecimenPreview(previewImage)
    }
  }

  // selectList ?? будет disabled (нужен ли)
  return (
    <EditSpecimenForm
      sectionName={sectionName}
      specimenName={specimenName}
      onSubmit={editSpecimen}
      cancel={cancel}
      uploadImage={uploadSpecimenImage}
      selectList={selectList}
      previewImage={specimenPreview}
    />
  )
}
