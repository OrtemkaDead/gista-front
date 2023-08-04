export interface Section {
  id: string
  name: string
}
export interface SubSection {
  id: string
  name: string
  parent_id: string
}

interface SectionsState {
  sections: Section[]
  subsections: SubSection[]
}

const initialState: SectionsState = {
  sections: [],
  subsections: [],
}

export default initialState
