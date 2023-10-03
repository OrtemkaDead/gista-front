export interface MultiLevelSelectProps {
  isOpen?: boolean
  // типизировать согласно данным с бекенда
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectList: any[]
  defaultValue?: string
  extraButton?: React.ReactNode
  placeholder?: string
  disabled?: boolean
}
