import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import React from 'react'

import { Collapse, GistaCard, TitleCell } from '@/components'
import { Gista } from '@/components/gista-components/gista'

import { Button, Icon } from '@/ui-kit'

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

export default function Home(): React.ReactElement {
  return (
    <main className="home">
      <Gista />
      <Button
        to="/to"
        type="borderless"
        iconSide="left"
        iconName="arrowLeft"
      >
        Link to
      </Button>

      <TitleCell
        textSize="headline-h1"
        leftSideIsBackButton
        rightSideText="ID: 1234567890"
      >
        Абрамова Ева Данииловна
      </TitleCell>
      <TitleCell
        textSize="headline-h2"
        leftSideIconName="profileCircle"
      >
        Личная информация
      </TitleCell>

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
                    <GistaCard />
                    <GistaCard />
                    <GistaCard />
                  </Collapse>
                </>
              ),
          )}
        </Collapse>
      ))}
    </main>
  )
}
