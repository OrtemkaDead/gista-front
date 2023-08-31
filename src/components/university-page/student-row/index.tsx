import { Checkbox } from '@/components/shared'
import Switch from '@/components/shared/switch'
import Typography from '@/components/shared/typography'
import classnames from 'classnames'
import { memo } from 'react'

import StudentRowProps from './student-row.types'
import './styles.scss'

export const StudentRow: React.FC<StudentRowProps> = ({
  className = '',
  isStaff = false,
  name = '',
  id = '',
  phone = '',
  email = '',
}) => {
  //* ClassNames
  const componentClassName = 'student-row'
  const StudentRowClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <tr className={StudentRowClassName}>
      <td className={`${StudentRowClassName}__name`}>
        <Checkbox />
        <Typography
          tag="span"
          variant="text-16"
          font="lato"
        >
          {name}
        </Typography>
      </td>
      <td>
        <Typography
          tag="span"
          variant="text-16"
          font="lato"
        >
          {id}
        </Typography>
      </td>

      <td>
        <Typography
          tag="span"
          variant="text-16"
          font="lato"
        >
          {phone}
        </Typography>
      </td>
      <td>
        <Typography
          tag="span"
          variant="text-16"
          font="lato"
        >
          {email}
        </Typography>
      </td>
      <td>
        <Switch isOn={isStaff} />
      </td>
    </tr>
  )
}

export default memo(StudentRow)
