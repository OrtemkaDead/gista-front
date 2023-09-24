'use client'

import classnames from 'classnames'
import {
  FC,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { Icon, TextInput } from '..'
import { Typography } from '../typography'
import { MultiLevelSelectProps } from './multi-level-select.types'
import './styles.scss'

const MultiLevelSelect: FC<MultiLevelSelectProps> = ({
  isOpen = false,
  selectList,
  placeholder,
  extraButton,
  defaultValue = '',
  disabled = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  const [value, setValue] = useState(defaultValue)
  const [isActive, setIsActive] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])

  const handleOpen = useCallback(() => {
    if (disabled) return
    setIsDropdownOpen(!isDropdownOpen)
  }, [disabled, isDropdownOpen])

  const handleChoose = useCallback((event: MouseEvent<HTMLElement>) => {
    setValue(event.currentTarget.innerText)
    setIsActive(true)
  }, [])

  const handleChooseByKey = useCallback((event: KeyboardEvent<HTMLElement>) => {
    event.code === 'Enter' && (setValue(event.currentTarget.innerText), setIsActive(true))
  }, [])

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      if (disabled) return
      setIsFocused(true)
    },
    [disabled],
  )

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      if (disabled) return
      setIsFocused(false)
    },
    [disabled],
  )

  const componentClassName = 'dropdown'

  const DropdownListClassName = 'dropdown-list'

  const ButtonClassName = classnames(`${componentClassName}__button`, {
    [`${componentClassName}__button--active`]: isActive,
    [`${componentClassName}__button--focus`]: isFocused,
    [`${componentClassName}__button--disabled`]: disabled,
  })

  return (
    <div className={componentClassName}>
      <div
        onClick={handleOpen}
        className={ButtonClassName}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={(event: KeyboardEvent) => {
          event.code === 'Enter' && setIsDropdownOpen(!isDropdownOpen)
        }}
      >
        <TextInput
          type="text"
          placeholder={placeholder}
          value={value}
          disabled
        />

        <Icon
          iconName="arrowDown"
          className={`${componentClassName}__icon`}
        />
      </div>

      {isDropdownOpen && (
        <div className={`${componentClassName}__listContainer`}>
          <div
            className={`${componentClassName}__list`}
            onClick={() => setIsDropdownOpen(false)}
            onKeyUp={(event: KeyboardEvent) => {
              event.code === 'Enter' && setIsDropdownOpen(false)
            }}
          >
            <ul className={`${DropdownListClassName}`}>
              {extraButton}

              {selectList.map((section, index) => (
                <li key={index + 1}>
                  <div
                    className={`${DropdownListClassName}__section`}
                    onClick={handleChoose}
                    onKeyUp={handleChooseByKey}
                    tabIndex={0}
                  >
                    <Typography
                      tag="span"
                      font="ntSomic"
                      variant="title-h2"
                    >
                      {section.name}
                    </Typography>
                  </div>
                  {section.subsections && section.subsections.length && (
                    <ul>
                      {section.subsections.map((subsection: string, index: number) => (
                        <li
                          key={index + 1}
                          className={`${DropdownListClassName}__subsection`}
                          onClick={handleChoose}
                          onKeyUp={handleChooseByKey}
                          tabIndex={0}
                        >
                          {subsection}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(MultiLevelSelect)
