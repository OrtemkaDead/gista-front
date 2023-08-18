import React from 'react'

type TitleCellSize = 'small' | 'medium' | 'large'

interface TitleCellProps {
  className?: string
  children?: string

  before?: React.ReactNode
  after?: React.ReactNode

  size?: TitleCellSize
}

export default TitleCellProps
