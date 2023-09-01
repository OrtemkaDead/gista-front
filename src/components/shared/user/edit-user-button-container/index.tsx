'use client'

import { MouseEventHandler, memo, useMemo, useState } from 'react'

import { Button } from '@/shared'

export const EditUserButtonContainer = () => {
  // получаем значение состояние isEditedUser (из store)
  // пример с локальным состоянием
  const [isEditedUser, setIsEditUser] = useState(false)

  const handleEdit: MouseEventHandler<HTMLButtonElement> = () => {
    // диспатчим в store cостояние isEditedUser, меняя его на true
    setIsEditUser(true)
    // и получаем его в форме редактирования данных - активируя инпуты
    console.log('Редактировать')
  }

  const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
    // диспатчим в store - меняя cостояние isEditedUser на false (возвращаем исходное значение)
    setIsEditUser(false)
    // отправляем отреадктированные данные на сервер
    console.log('Сохранить')
  }

  const button = useMemo(
    () =>
      isEditedUser ? (
        <Button
          size="medium"
          type="borderless"
          iconSide="right"
          onClick={handleSave}
        >
          Сохранить
        </Button>
      ) : (
        <Button
          size="medium"
          type="borderless"
          iconSide="right"
          iconName="edit"
          onClick={handleEdit}
        >
          Редактировать
        </Button>
      ),
    [isEditedUser],
  )

  return button
}

export default memo(EditUserButtonContainer)
