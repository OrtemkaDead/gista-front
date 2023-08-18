'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import SelectProps from './select.types'
import './styles.scss'

export const Select: React.FC<SelectProps> = memo(function Select({ className, name, id, data }) {
  //* Hooks
  const [selectValue, setSelectValue] = useState<string>('')

  //* ClassNames
  const componentClassName = 'select'
  const SelectClassName = classnames(componentClassName, className)

  return (
    <select
      className={SelectClassName}
      name={name}
      id={id}
      onChange={(e) => setSelectValue(e.target.value)}
    >
      <option
        value=""
        hidden
      >
        Основной раздел
      </option>
      {data.map((item) => (
        <option
          className={`${componentClassName}__option`}
          key={item.id}
          id={item.id}
          value={item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  )
})
