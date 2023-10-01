'use client'

import { createContext } from 'react'

import { Gist } from '@/shared/api'

interface GistContextData {
  value: Gist[]
  serverFunc?: () => void
  editFunc?: (id: number, name: string) => void
}

const GistContext = createContext<GistContextData>({ value: [] })

export const GistContextProvider = ({
  serverFunc,
  editFunc,
  initialValue,
  children,
}: {
  serverFunc: () => void
  editFunc: (id: number, name: string) => void
  initialValue: Gist[]
  children: React.ReactNode
}) => {
  const value = {
    value: initialValue,
    serverFunc,
    editFunc,
  }
  return <GistContext.Provider value={value}>{children}</GistContext.Provider>
}
export default GistContext
