/* eslint-disable max-len */
import { EditSubsectionFormProps } from '@/components/shared/modal-forms/edit-subsection-form/edit-subsection.types'

export type SubsectionMenuActionsTypes = 'delete' | 'edit'

export interface SubsectionMenuButtonProps extends Partial<EditSubsectionFormProps> {
  action: SubsectionMenuActionsTypes
}
