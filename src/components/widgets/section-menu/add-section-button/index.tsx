'use client'

import { AddSection } from '@/components/features/add-section'
import { Button, ModalContent, ModalLayout } from '@/components/shared'
import { useState } from 'react'

export const AddSectionButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const openModal = () => {
    setIsModalOpened(true)
  }

  const closeModal = () => {
    setIsModalOpened(false)
  }

  return (
    <>
      <Button
        iconName="folder"
        iconSide="left"
        type="borderless"
        onClick={openModal}
      >
        Добавить раздел
      </Button>

      {isModalOpened && (
        <ModalLayout
          onClose={closeModal}
          exitIcon
        >
          <ModalContent
            title="Добавить раздел"
            content={<AddSection cancel={closeModal} />}
          />
        </ModalLayout>
      )}
    </>
  )
}
