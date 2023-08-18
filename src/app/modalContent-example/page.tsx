'use client'

import Image from 'next/image'
import { MouseEventHandler, useState } from 'react'

import { ModalContent } from '@/components/modal-content'
import { ModalLayout } from '@/components/modal-layout'

import { Form } from './Form'

const styles = {
  padding: '10px',
  maxWidth: 300,
  width: '100%',
  fontSize: 16,
  lineHeight: '25px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(123, 123, 250)',
  borderRadius: 10,
}

export default function ModalContentExample() {
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btnName = event.currentTarget.name
    switch (btnName) {
      case 'type_1':
        setOpenModal1(true)
        break
      case 'type_2':
        setOpenModal2(true)
        break
      case 'type_3':
        setOpenModal3(true)
        break
    }
  }

  return (
    <main style={{ maxWidth: 800, display: 'flex', flexDirection: 'row', gap: 20 }}>
      <button
        style={styles}
        onClick={handleClick}
        name="type_1"
      >
        Модальное окно (тип 1): с вопросом и восклицательным знаком
      </button>

      <button
        style={styles}
        onClick={handleClick}
        name="type_2"
      >
        Модальное окно (тип 2): с картинкой в качестве основного контена
      </button>

      <button
        style={styles}
        onClick={handleClick}
        name="type_3"
      >
        Модальное окно (тип 3): с формой в качестве основного контена
      </button>

      {openModal1 && (
        <ModalLayout
          onClose={() => setOpenModal1(false)}
          exitIcon
          actionsOnClose={() => alert('Выполнить действия при закрытии модального окна')}
        >
          <ModalContent
            title="Очистить"
            description="Вы уверены, что хотите очистить разметку?"
            attentionIcon
            reverseButtonDirection
            confirmBtnText="Удалить"
            handleConfirm={() => {
              alert('Разметка удалена'), setOpenModal1(false)
            }}
            handleCancel={() => setOpenModal1(false)}
          />
        </ModalLayout>
      )}

      {openModal2 && (
        <ModalLayout
          onClose={() => setOpenModal2(false)}
          exitIcon
          actionsOnClose={() => alert('Выполнить действия при закрытии модального окна')}
        >
          <ModalContent
            title="Смена тарифа"
            content={
              <Image
                src={'/cat-example.png'}
                alt="cat"
                width={217}
                height={245}
              />
            }
            description="При смене тарифа текущий будет аннулирован!"
            confirmBtnText="Продлить"
            handleConfirm={() => {
              alert('Тариф продлен'), setOpenModal2(false)
            }}
            handleCancel={() => setOpenModal2(false)}
          />
        </ModalLayout>
      )}

      {openModal3 && (
        <ModalLayout
          onClose={() => setOpenModal3(false)}
          actionsOnClose={() => alert('Выполнить действия при закрытии модального окна')}
          exitIcon
        >
          <ModalContent
            title="Университет"
            content={<Form />}
            confirmBtnText="Отправить заявку"
            handleConfirm={() => {
              alert('Заявка отправлена'), setOpenModal3(false)
            }}
            handleCancel={() => setOpenModal3(false)}
          />
        </ModalLayout>
      )}
    </main>
  )
}
