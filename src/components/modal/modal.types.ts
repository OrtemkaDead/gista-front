import { Dispatch, SetStateAction } from 'react'

interface ModalProps {
  active: boolean
  children: React.ReactNode
  title: string
  setActive: Dispatch<SetStateAction<boolean>>
  onAddButton?: () => void
  onCancelButton?: () => void
  mainButtonTitle: string
}

export default ModalProps
