'use client'

import classnames from 'classnames'
import React, { useState } from 'react'

import { Icon, Typography } from '@/ui-kit'

import CollapseProps from './collapse.types'
import './styles.scss'

export const Collapse: React.FC<CollapseProps> = ({
  title = 'title',
  children = 'some...',
  className = '',
  type = 'section',
  isEditPosition = false,
  editable = false,

  onEditClick,
  onDeleteClick,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [hover, setHover] = useState<boolean>(false)

  //* ClassNames
  const componentClassName = 'collapse'
  const CollapseClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <>
      <div className={CollapseClassName}>
        <div
          className={`${componentClassName}__wrapper`}
          onClick={() => setIsOpened(!isOpened)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className={`${componentClassName}__container`}>
            {editable && isEditPosition && <Icon iconName="hamburger" />}
            <Typography
              className={
                type === 'section'
                  ? `${componentClassName}__title--bold`
                  : `${componentClassName}__title`
              }
              variant={type === 'section' ? 'headline-h1' : 'title-h1'}
            >
              {title}
            </Typography>
          </div>
          <div className={`${componentClassName}__icons`}>
            {hover && editable && (
              <>
                <Icon
                  onClick={onEditClick}
                  iconName="edit"
                />
                <Icon
                  onClick={onDeleteClick}
                  iconName="trash"
                />
              </>
            )}
            <Icon
              color="#000000"
              iconName={isOpened ? 'arrowUp' : 'arrowDown'}
            />
          </div>
        </div>
      </div>
      {children && isOpened && (
        <div className={`${componentClassName}__content`}>{isOpened && children}</div>
      )}
    </>
  )
}
