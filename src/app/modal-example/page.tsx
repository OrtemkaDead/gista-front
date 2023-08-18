'use client'

import { MouseEventHandler, useEffect, useState } from 'react'

import { ModalLayout } from '@/components/modal-layout'

const styles = {
  padding: '10px',
  maxWidth: 300,
  fontSize: 16,
  lineHeight: '25px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(123, 123, 250)',
  borderRadius: 10,
}

const contentStyle = {
  width: 200,
  background: 'white',
  minHeight: 200,
  display: 'flex',
  alignItems: 'center' as const,
}

export default function ModalExample() {
  const [openNonClosingModal, setOpenNonClosingModal] = useState(false)
  const [openClosingModal, setClosingModal] = useState(false)
  const [openActionModal, setActionModal] = useState(false)
  const [openModalIcon, setModalIcon] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btnName = event.currentTarget.name
    switch (btnName) {
      case 'type_1':
        setOpenNonClosingModal(true)
        break
      case 'type_2':
        setClosingModal(true)
        break
      case 'type_3':
        setActionModal(true)
        break
      case 'type_5':
        setModalIcon(true)
        break
    }
  }

  // для незакрывающейся модалки с имитацией получения данных(закрытие через 7 секунд)
  useEffect(() => {
    openNonClosingModal &&
      setTimeout(() => {
        setOpenNonClosingModal(false)
      }, 7000)
  }, [openNonClosingModal])

  return (
    <main style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <button
        style={styles}
        onClick={handleClick}
        name="type_1"
      >
        Открыть НЕзакрывающееся модальное окно имитацией полученяи данных (закроется автоматически
        через 7 секунд)
      </button>

      <button
        style={styles}
        onClick={handleClick}
        name="type_2"
      >
        Открыть закрывающееся модальное окно c контентом (по клику вне его)
      </button>

      <button
        style={styles}
        onClick={handleClick}
        name="type_3"
      >
        Открыть закрывающееся модальное окно c контентом (по клику вне его) и вызвать действия после
        его закрытия
      </button>

      <button
        style={styles}
        onClick={handleClick}
        name="type_5"
      >
        Открыть закрывающееся модальное окно c контентом (по клику вне его и по клику на иконку X)
      </button>

      {openNonClosingModal && (
        <ModalLayout nonClosing>
          <div>...Загрузка (спиннер)</div>
        </ModalLayout>
      )}

      {openClosingModal && (
        <ModalLayout onClose={() => setClosingModal(false)}>
          <div style={contentStyle}>Это окно закрывается по клику вне его</div>
        </ModalLayout>
      )}

      {openActionModal && (
        <ModalLayout
          onClose={() => setActionModal(false)}
          actionsOnClose={() => alert('Выполнить действия по закрытию модального окна')}
        >
          <div style={contentStyle}>
            Это окно закрывается по клику вне его и выполнится действие при закрытии (alert), можно
            сделать переадресацию на другую страницу и так далее
          </div>
        </ModalLayout>
      )}

      {openModalIcon && (
        <ModalLayout
          onClose={() => setModalIcon(false)}
          exitIcon
        >
          <div style={contentStyle}>Это окно закрывается по клику вне его и на иконку X</div>
        </ModalLayout>
      )}

      {/* то же самое но с передачей иконки непосредственно в обертку Modal 
      и можем ей задавать свои стили -  например если надо  дополнительную кнопку или иконку*/}
      {/* {openModalIcon && (
        <ModalLayout onClose={() => setModalIcon(false)}>
          <div style={contentStyle}>
            Это окно закрывается по клику вне его и на иконку X
          </div>
          <button onClick={() => setModalIcon(false)}>
              <Icon iconName='close' />
          </button>
        </ModalLayout>
      )} */}
    </main>
  )
}
