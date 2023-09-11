import CustomSelect from '@/components/shared/custom-select'
import { GroupedOption, ISelectOption } from '@/components/shared/custom-select/custom-select.types'
import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import React from 'react'

import { Collapse } from '@/shared'

// имитация БД
const SECTIONS = [
  {
    name: 'Общая гистология',
    subsections: [
      { value: '1', label: 'Кровь, мезенхима' },
      { value: '2', label: 'Мышечные ткани' },
    ],
  },
  {
    name: 'Частная гистология',
    subsections: [
      { value: '3', label: 'Органы кровотворения и иммуногенеза' },
      { value: '4', label: 'Органы пищеварения' },
      { value: '5', label: 'Органы эндокринной системы' },
    ],
  },
  {
    name: 'Патогистология',
    subsections: [],
  },
]

// функция преобразования массива SECTIONS с сервера в массив соответсвующий пропсу CustomSelect
function getCustomSelectList() {
  const result: GroupedOption[] = []
  for (const section of SECTIONS) {
    const initialSection: GroupedOption = { label: '', options: [] }
    initialSection.label = section.name
    initialSection.options = section.subsections
    result.push(initialSection)
  }
  return result
}

const MODIFIED_SECTIONS = getCustomSelectList()

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

      <CustomSelect
        options={MODIFIED_SECTIONS}
        placeholder="Раздел"
      />
    </main>
  )
}
