import Image from 'next/image'
import { FC } from 'react'

import { Button } from '../..'
import { Typography } from '../../typography'
import { FileInputProps } from './file-input.types'
import './styles.scss'

export const FileInput: FC<FileInputProps> = ({
  onChange,
  previewImage = '/default-image.svg',
}) => {
  const componentClassName = 'file-uploader'

  return (
    <div className={componentClassName}>
      <div className={`${componentClassName}__content`}>
        <Typography
          font="lato"
          variant="title-h3"
        >
          Превью
        </Typography>

        <Typography
          font="lato"
          variant="text-14"
          className={`${componentClassName}__description`}
        >
          Загрузите изображание препарата,которое будет использоваться в оглавлении
        </Typography>

        <label htmlFor="file-input">
          <input
            onChange={onChange}
            accept="image/*"
            id="file-input"
            name="files"
            type="file"
            className={`${componentClassName}__input`}
          />
          <Typography
            font="lato"
            variant="text-14"
            className={`${componentClassName}__input-text`}
          >
            Загрузить с устройства
          </Typography>
        </label>
      </div>

      <Image
        src={previewImage}
        alt="default-image"
        width={120}
        height={120}
        className={`${componentClassName}__image`}
      />
    </div>
  )
}
