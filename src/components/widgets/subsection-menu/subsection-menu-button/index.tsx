import { EditCurriculum } from '@/components/features/edit-curriculum'
import { EditSubsection } from '@/components/features/edit-subsection'
import { Button, ModalContent, ModalLayout, Typography } from '@/components/shared'
import { IconNameTypes } from '@/components/shared/icon/icon-paths'
import { EditSubsectionForm } from '@/components/shared/modal-forms/edit-subsection-form'
import { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react'

import { SubsectionMenuButtonProps } from './subsection-menu-button.types'

export const SubsectionMenuButton: FC<SubsectionMenuButtonProps> = ({
  action,
  subsectionName = '',
  sectionName = '',
  selectList = [],
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const deleteAction = action === 'delete'
  const editAction = action === 'edit'

  const deleteSubsection: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log('Удалить подраздел')
  }, [])

  const openModal = useCallback(() => {
    setIsModalOpened(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

  const closeModal = useCallback(() => {
    setIsModalOpened(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

  const iconName: IconNameTypes = useMemo(() => {
    return deleteAction ? 'delete' : 'edit'
  }, [deleteAction])

  const modalContent = useMemo(() => {
    return editAction ? (
      <ModalContent
        title={'Редактирование подраздела'}
        content={
          <EditSubsection
            sectionName={sectionName}
            selectList={selectList}
            subsectionName={subsectionName}
            cancel={closeModal}
          />
        }
      />
    ) : deleteAction ? (
      <ModalContent
        title={'Удаление подраздела'}
        attentionIcon
        confirmBtnText="Удалить"
        description={`Вы уверены, что хотите удалить подраздел “${subsectionName}” ?`}
        handleConfirm={deleteSubsection}
        handleCancel={closeModal}
      />
    ) : null
  }, [
    closeModal,
    deleteAction,
    deleteSubsection,
    editAction,
    sectionName,
    selectList,
    subsectionName,
  ])

  return (
    <>
      <Button
        iconName={iconName}
        iconSide="left"
        type="borderless"
        onClick={openModal}
      ></Button>

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
