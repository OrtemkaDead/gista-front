'use client'

import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'

import { Button, Collapse, ModalContent, ModalLayout, MultiLevelSelect } from '@/shared'

// пример данных с сервера по разделам/подразделам
const SECTIONS = [
  { name: 'Общая гистология', subsections: ['Мышечная ткань', 'Костная ткань'] },
  {
    name: 'Частная гистология',
    subsections: ['Органы кровотворения и иммуногенеза', 'Органы дыхания'],
  },
]

const buttonModalExamplestyles = {
  padding: '10px',
  marginBottom: 50,
  maxWidth: 300,
  width: '100%',
  fontSize: 16,
  lineHeight: '25px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(123, 123, 250)',
  borderRadius: 10,
}

const sections: Section[] = [
  {
    id: '1',
    name: 'Общая гистология',
  },
  {
    id: '2',
    name: 'Частная гистология',
  },
]

const subsections: SubSection[] = [
  {
    id: '1_1',
    parent_id: '1',
    name: 'Органы кроветворения и иммуногенеза 1',
  },
  {
    id: '1_2',
    parent_id: '1',
    name: 'Органы кроветворения и иммуногенеза 2',
  },
  {
    id: '1_3',
    parent_id: '1',
    name: 'Органы кроветворения и иммуногенеза 3',
  },
]

export default function MainPage(): React.ReactElement {
  const [openModal, setOpenModal] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setOpenModal(true)
  }

  const componentClassName = 'main-page'

  return (
    <main className={componentClassName}>
      {sections.map((section) => (
        <Collapse
          key={section.id}
          title={section.name}
          type="section"
        >
          {subsections.map(
            (subsection) =>
              subsection.parent_id === section.id && (
                <>
                  <Collapse
                    key={subsection.id}
                    title={subsection.name}
                    type="subsection"
                    editable
                  >
                    dsdsd
                    {/* <GistaCard />
                    <GistaCard />
                    <GistaCard /> */}
                  </Collapse>
                </>
              ),
          )}
        </Collapse>
      ))}

      <button
        style={buttonModalExamplestyles}
        onClick={handleClick}
        name="type_2"
      >
        Открыть модальное окно с картинкой в качестве основного контента
      </button>

      {openModal && (
        <ModalLayout
          onClose={() => setOpenModal(false)}
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
              alert('Тариф продлен'), setOpenModal(false)
            }}
            handleCancel={() => setOpenModal(false)}
          />
        </ModalLayout>
      )}

      <MultiLevelSelect
        list={SECTIONS}
        extraButton={
          <Button
            iconName="add"
            size="large"
            type="borderless"
          >
            Добавить подраздел
          </Button>
        }
      />
    </main>
  )
}
