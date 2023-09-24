'use client'

import { EditCurriculum } from '@/components/features/add-section'
import { Button, ModalContent, ModalLayout } from '@/components/shared'
import { IconNameTypes } from '@/components/shared/icon/icon-paths'
import { FC, useCallback, useMemo, useState } from 'react'

import { CurriculumMenuButtonProps } from './curriculum-menu-button.types'

export const CurriculumMenuButton: FC<CurriculumMenuButtonProps> = ({ buttonFor, selectList }) => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const addSection = buttonFor === 'add-section'
  const addSubsection = buttonFor === 'add-subsection'
  const addSpecimen = buttonFor === 'add-specimen'

  const iconName: IconNameTypes = useMemo(() => {
    return addSpecimen ? 'bubble' : 'folder'
  }, [addSpecimen])

  const textButton = useMemo(() => {
    return addSection
      ? 'Добавить раздел'
      : addSubsection
      ? 'Добавить подраздел'
      : addSpecimen
      ? 'Добавить препарат'
      : ''
  }, [addSection, addSpecimen, addSubsection])

  const openModal = useCallback(() => {
    setIsModalOpened(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

  const closeModal = useCallback(() => {
    setIsModalOpened(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpened])

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
          <ModalContent
            title={textButton}
            content={
              <EditCurriculum
                formFor={buttonFor}
                cancel={closeModal}
                selectList={selectList}
              />
            }
          />
        </ModalLayout>
      )}
    </>
  )
}
