import classnames from 'classnames'
import Image from 'next/image'
import { memo } from 'react'

import { Icon, Typography } from '@/shared'

import GistaImage from '@/assets/images/Intersect.png'

import GistaCardProps from './gista-card.types'
import './styles.scss'

export const GistaCard: React.FC<GistaCardProps> = ({ className = '', editable = false }) => {
  //* ClassNames
  const componentClassName = 'gista-card'
  const GistaCardClassName = classnames(
    componentClassName,

    className,
  )

  let iconsContent = <Icon iconName="star" />

  if (editable) {
    iconsContent = (
      <>
        <Icon iconName="edit" />
        <Icon iconName="trash" />
      </>
    )
  }

  return (
    <div className={GistaCardClassName}>
      <Image
        src={GistaImage}
        alt="gista"
      />
      <div className={`${componentClassName}__content`}>
        <Typography
          className={`${componentClassName}__title`}
          variant="headline-h2"
        >
          Мазок крови человека – окраска: азур II и эозин
        </Typography>
        <div className={`${componentClassName}__icons`}>{iconsContent}</div>
      </div>
    </div>
  )
}

export default memo(GistaCard)
