export interface ISelectOption {
  readonly value: string
  readonly label: string
}

export interface GroupedOption {
  label: string
  options: readonly ISelectOption[]
}

export interface CustomSelectProps {
  options: ISelectOption[] | GroupedOption[]
  defaultValue?: string // типизация!
  placeholder?: React.ReactNode
  isLoading?: boolean
  isSearchable?: boolean
  isOpen?: boolean
}
