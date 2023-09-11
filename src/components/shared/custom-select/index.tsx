'use client'

import { FC, memo, useCallback, useState } from 'react'
import Select, { OnChangeValue } from 'react-select'

import { CustomSelectProps, GroupedOption, ISelectOption } from './custom-select.types'
import './styles.scss'

const formatGroupLabel = (data: GroupedOption) => (
  <div className="custom-select__option-group">
    <span className="custom-select__section">{data.label}</span>
    <span className="custom-select__subsection-count">{data.options.length}</span>
  </div>
)

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  defaultValue = '',
  placeholder,
  isLoading,
  isSearchable,
  isOpen,
}) => {
  const [selectValue, setSelectValue] = useState(defaultValue)

  const getValue = useCallback(() => {
    return selectValue
      ? (options as ISelectOption[]).find((option) => option.value === selectValue)
      : []
  }, [options, selectValue])

  const onChange = useCallback((newValue: OnChangeValue<ISelectOption, boolean>) => {
    setSelectValue((newValue as ISelectOption).value)
    // dispatch(....)
  }, [])

  return (
    <label>
      <Select
        options={options}
        formatGroupLabel={'options' in options[0] ? formatGroupLabel : undefined}
        value={getValue()}
        placeholder={placeholder}
        onChange={onChange}
        isLoading={isLoading}
        classNamePrefix="custom-select"
        instanceId="custom-select"
        isSearchable={isSearchable}
        menuIsOpen={isOpen}
      />
    </label>
  )
}

export default memo(CustomSelect)
