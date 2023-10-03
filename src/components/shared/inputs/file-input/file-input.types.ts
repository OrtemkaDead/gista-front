import { ChangeEventHandler } from 'react'

export interface FileInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  previewImage: string
}
