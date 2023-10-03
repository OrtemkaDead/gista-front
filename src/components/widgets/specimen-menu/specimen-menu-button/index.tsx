'use client'

import { EditCurriculum } from '@/components/features/edit-curriculum'
import { EditSpecimen } from '@/components/features/edit-specimen'
import { Button, ModalContent, ModalLayout } from '@/components/shared'
import { IconNameTypes } from '@/components/shared/icon/icon-paths'
import { FC, useCallback, useMemo, useState } from 'react'

import { SpecimenMenuButtonProps } from './specimen-menu-button.types'

export const SpecimenMenuButton: FC<SpecimenMenuButtonProps> = ({
  action,
  textButton,
  sectionName = 'Раздел',
  specimenName = 'Препарат',
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const deleteAction = action === 'delete'
  const clearAction = action === 'clear'
  const editAction = action === 'edit'

  const openModal = useCallback(() => {
    setIsModalOpened(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

  const closeModal = useCallback(() => {
    setIsModalOpened(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

  const deleteSpecimen = useCallback(() => {
    console.log('Препарат удален')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearLayout = useCallback(() => {
    console.log('Разметка очищена')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const iconName: IconNameTypes = useMemo(() => {
    return deleteAction ? 'delete' : clearAction ? 'clear' : 'edit'
  }, [clearAction, deleteAction])

  const modalContent = useMemo(() => {
    return deleteAction ? (
      <ModalContent
        title={'Удаление препарата'}
        attentionIcon
        confirmBtnText="Удалить"
        description={`Вы уверены, что хотите удалить препарат?`}
        handleConfirm={deleteSpecimen}
        handleCancel={closeModal}
      />
    ) : clearAction ? (
      <ModalContent
        title={'Очистить'}
        attentionIcon
        confirmBtnText="Очистить"
        description={`Вы уверены, что хотите очистить разметку?`}
        handleConfirm={clearLayout}
        handleCancel={closeModal}
      />
    ) : editAction ? (
      <ModalContent
        title="Редактировать препарат"
        content={
          <EditSpecimen
            cancel={closeModal}
            sectionName={sectionName}
            specimenName={specimenName}
          />
        }
      />
    ) : null
  }, [
    clearAction,
    clearLayout,
    closeModal,
    deleteAction,
    deleteSpecimen,
    editAction,
    sectionName,
    specimenName,
  ])

  return (
    <>
      <Button
        iconName={iconName}
        iconSide="left"
        type="borderless"
        onClick={openModal}
      >
        {textButton}
      </Button>

      {isModalOpened && (
        <ModalLayout
          onClose={closeModal}
          exitIcon
        >
          {modalContent}
        </ModalLayout>
      )}
    </>
  )
}
