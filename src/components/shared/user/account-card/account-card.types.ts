type AccounCardTypes =
  | 'user-card'
  | 'university-card'
  | 'university-empty-card'
  | 'university-non-connection-card'
  | 'university-isconnected-card'

interface AccountCardProps {
  className?: string
  children: React.ReactNode

  type?: AccounCardTypes
  universityID?: string
  universityName?: string
}

export default AccountCardProps
