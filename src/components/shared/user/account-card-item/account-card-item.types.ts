import TitleCellProps from '../../title-cell/title-cell.types'

interface AccountCardItemProps extends Pick<TitleCellProps, 'titleTag'> {
  className?: string
  children?: React.ReactNode
  title?: string
}

export default AccountCardItemProps
