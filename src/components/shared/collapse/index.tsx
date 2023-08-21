'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { Icon, Typography } from '@/shared'

import CollapseProps from './collapse.types'
import './styles.scss'

const Collapse: React.FC<CollapseProps> = ({
  title = '',
  children,
  className = '',
  type = 'section',
  isEditPosition = false,
  editable = false,

  onEditClick,
  onDeleteClick,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

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
        >
          <div className={`${componentClassName}__container`}>
            {editable && isEditPosition && <Icon iconName="hamburger" />}
            <Typography
              font="ntSomic400"
              variant={type === 'section' ? 'headline-h1' : 'title-h1'}
            >
              {title}
            </Typography>
          </div>
          <div className={`${componentClassName}__icons`}>
            {editable && (
              <div className={`${componentClassName}__edit-icons`}>
                <Icon
                  onClick={onEditClick}
                  iconName="edit"
                />
                <Icon
                  onClick={onDeleteClick}
                  iconName="trash"
                />
              </div>
            )}
            <Icon
              className={`${componentClassName}__icon`}
              iconName={isOpened ? 'arrowUp' : 'arrowDown'}
            />
          </div>
        </div>
      </div>
      {children && isOpened && <div className={`${componentClassName}__content`}>{children}</div>}
    </>
  )
}

export default memo(Collapse)
