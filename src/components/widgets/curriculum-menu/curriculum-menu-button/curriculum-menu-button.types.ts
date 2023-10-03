/* eslint-disable max-len */
import {
  CurriculumFormProps,
  ModalFormTypes,
} from '@/components/shared/modal-forms/curriculum-form/curriculum-form.types'

export interface CurriculumMenuButtonProps extends Pick<CurriculumFormProps, 'selectList'> {
  buttonFor: ModalFormTypes
}
