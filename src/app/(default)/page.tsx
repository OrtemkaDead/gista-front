'use client'

import { Section, SubSection } from '@/store/reducers/sections-reducer/initial-state'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Collapse, TextInput } from '@/shared'

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
type FormValues = {
  lastName?: string
}

export default function MainPage(): React.ReactElement {
  const componentClassName = 'main-page'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    console.log(data.lastName)
    console.log(errors)
  })

  return (
    <main className={componentClassName}>
      <form onSubmit={onSubmit}>
        <TextInput
          name="asdasd"
          register={register}
          type="text"
          placeholder="Фамилия"
          options={{
            required: {
              value: true,
              message: `Поле "Фамилия" является обязательным`,
            },
            minLength: {
              value: 2,
              message: 'Должно быть не менее 2 символов',
            },
            pattern: {
              message: 'Фамилия не валидна',
              value: /^[А-ЯЁ][а-яё]*$/,
            },
          }}
          hintText={errors.lastName?.message}
        />
        <Button as="submit">Submit</Button>
      </form>
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
