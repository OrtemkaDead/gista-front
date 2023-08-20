import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import React from 'react'

import { Collapse } from '@/shared'

import './styles.scss'

const sections: Section[] = [
  {
    id: '1',
    name: 'Раздел 1',
  },
  {
    id: '2',
    name: 'Раздел 2',
  },
  {
    id: '3',
    name: 'Раздел 3',
  },
]

const subsections: SubSection[] = [
  {
    id: '01',
    parent_id: '1',
    name: 'Подраздел 1',
  },
  {
    id: '02',
    parent_id: '2',
    name: 'Подраздел 3',
  },
  {
    id: '03',
    parent_id: '1',
    name: 'Подраздел 2',
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
                    {/* <GistaCard />
                    <GistaCard />
                    <GistaCard /> */}
                  </Collapse>
                </>
              ),
          )}
        </Collapse>
      ))}
    </main>
  )
}
