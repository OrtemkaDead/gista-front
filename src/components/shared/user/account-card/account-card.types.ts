type AccounCardTypes =
  | 'user-card'
  | 'university-card'
  | 'university-empty-card'
  | 'university-connection-card'

interface AccountCardProps {
  className?: string
  children?: React.ReactNode

  type?: AccounCardTypes
  universityID?: string
}

export default AccountCardProps
