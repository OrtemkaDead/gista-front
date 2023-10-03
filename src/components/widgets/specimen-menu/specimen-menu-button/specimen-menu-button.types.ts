import { EditSpecimenProps } from '@/components/features/edit-specimen/edit-specimen.types'

export type SpecimenMenuActionsTypes = 'clear' | 'delete' | 'edit'

// selectList унаследован от EditSpecimenProps
// но нужен ли он (так как список все равно будет disabled)
export interface SpecimenMenuButtonProps extends Partial<Omit<EditSpecimenProps, 'cancel'>> {
  action: SpecimenMenuActionsTypes
  textButton?: string
}
