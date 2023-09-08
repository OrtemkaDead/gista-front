'use client'

import { Button, TextInput } from '@/components/shared'
import ModalContent from '@/components/shared/modal/modal-content'
import ModalLayout from '@/components/shared/modal/modal-layout'
import { useContext, useMemo, useState } from 'react'

import GistContext from '@/shared/context'

export default function EditGistModal({ id }: { id: number }) {
  const { value: gists, editFunc } = useContext(GistContext)
  const gist = useMemo(() => gists.find((item) => item.id === id), [gists, id])

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [name, setName] = useState<string>(gist?.name || '')

  const renderModal = () => (
    <ModalLayout onClose={() => setModalIsOpen(false)}>
      <ModalContent
        title="Edit Gist"
        confirmBtnText="Сохранить"
        content={
          <TextInput
            type="text"
            value={name}
            setValue={setName}
          />
        }
        handleConfirm={() => editFunc?.(id, name)}
        handleCancel={() => setModalIsOpen(false)}
      />
    </ModalLayout>
  )

  return (
    <>
      <Button onClick={() => setModalIsOpen(true)}>Редактировать</Button>
      {modalIsOpen && renderModal()}
    </>
  )
}
