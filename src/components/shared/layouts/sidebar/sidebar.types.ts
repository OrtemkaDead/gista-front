import { IconNameTypes } from '@/shared/icon/icon-paths'

export type SidebarLinkType = {
  id: number
  title: string
  iconName: IconNameTypes
  to: string
}

interface SidebarProps {
  className?: string
}

export default SidebarProps
