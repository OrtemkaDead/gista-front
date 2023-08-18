export type Layer = {
  id: string
  title: string
}

interface GistaLayersProps {
  className?: string
  layers: Layer[]
}

export default GistaLayersProps
