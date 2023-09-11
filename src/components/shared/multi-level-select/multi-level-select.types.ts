export interface MultiLevelSelectProps {
  isOpen?: boolean
  // типизировать согласно данным с бекенда
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: any[]
  extraButton?: React.ReactNode
  placeholder?: string
}
