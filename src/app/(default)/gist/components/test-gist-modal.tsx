'use client'

import { Button } from '@/components/shared'
import ModalContent from '@/components/shared/modal/modal-content'
import ModalLayout from '@/components/shared/modal/modal-layout'
import { useContext, useState } from 'react'

import GistContext from '@/shared/context'

export default function TestGistModal({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { serverFunc } = useContext(GistContext)

  const renderModal = () => (
    <ModalLayout onClose={() => setModalIsOpen(false)}>
      <ModalContent
        title="pohui"
        description="При смене тарифа текущий будет аннулирован!"
        confirmBtnText="Тест"
        handleConfirm={() => serverFunc?.()}
      />
    </ModalLayout>
  )

  return (
    <>
      <Button onClick={() => setModalIsOpen(true)}>Кнопка какая-то</Button>
      {modalIsOpen && renderModal()}
    </>
  )
}
