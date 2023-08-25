import { UniversityFormProps } from '../university-form/university-form.types'

export interface UniversityFormContainerProps extends Pick<UniversityFormProps, 'formType'> {
  universityIsConnected?: boolean
}
