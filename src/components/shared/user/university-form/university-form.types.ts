import TextInputProps from '../../inputs/text-input/text-input.types'

type FormTypes = 'request' | 'connection'

export interface UniversityFormProps extends Omit<TextInputProps, 'type'> {
  formType?: FormTypes
}
