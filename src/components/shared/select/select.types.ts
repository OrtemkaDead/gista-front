export type SelectItem = {
  id: string
  name: string
  value: string
}

interface SelectProps {
  id: string
  name: string
  data: SelectItem[]
  className?: string
}

export default SelectProps
