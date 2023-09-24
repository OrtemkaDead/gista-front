/* eslint-disable max-len */
import { EditSubsectionFormProps } from '@/components/shared/modal-forms/edit-subsection-form/edit-subsection.types'

export type IEditSubsectionProps = Pick<
  EditSubsectionFormProps,
  'selectList' | 'sectionName' | 'subsectionName' | 'cancel'
>
