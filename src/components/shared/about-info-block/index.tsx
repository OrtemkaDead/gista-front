import classnames from 'classnames'
import Image from 'next/image'
import { memo } from 'react'

import { Typography } from '@/shared'

import AboutImage from '@/assets/images/about-image.png'

import AboutInfoBlockProps from './about-info-block.types'
import './styles.scss'

const AboutInfoBlock: React.FC<AboutInfoBlockProps> = ({ className = '' }) => {
  //* ClassNames
  const componentClassName = 'about-info-block'
  const AboutInfoBlockClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={AboutInfoBlockClassName}>
      <div className={`${componentClassName}__text-wrapper`}>
        <Typography
          className={`${componentClassName}__title`}
          variant="display"
          font="ntSomic400"
          tag="h1"
        >
          Препараты в 4К
        </Typography>

        <Typography
          className={`${componentClassName}__subtitle`}
          variant="title-h3"
          font="ntSomic400"
          tag="h3"
        >
          Самые качественные препараты для изучения гистологии!
        </Typography>
      </div>

      <div className={`${componentClassName}__image-wrapper`}>
        <Image
          className={`${componentClassName}__image`}
          src={AboutImage}
          alt="about-image"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  )
}

export default memo(AboutInfoBlock)
