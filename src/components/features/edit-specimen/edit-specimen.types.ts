/* eslint-disable max-len */
import { CurriculumFormProps } from '@/components/shared/modal-forms/curriculum-form/curriculum-form.types'
import { EditSpecimenFormProps } from '@/components/shared/modal-forms/edit-specimen-form/edit-specimen-form.types'

export type EditSpecimenProps = Omit<EditSpecimenFormProps, 'onSubmit'>
