import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import React from 'react'

import { Collapse } from '@/shared'

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
    </main>
  )
}
