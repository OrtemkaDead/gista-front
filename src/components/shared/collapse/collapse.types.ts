interface CollapseProps {
  className?: string
  title: string
  children?: React.ReactNode
  type: 'section' | 'subsection'
  editable?: boolean
  isEditPosition?: boolean
  onEditClick?: () => void
  onDeleteClick?: () => void
}

export default CollapseProps
