'use client'

import Typography from '@/components/shared/typography'
import classnames from 'classnames'
import { memo, useState } from 'react'

import StudentRow from '../student-row'
import StudentListProps from './student-list.types'
import './styles.scss'

const students = [
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567891',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: false,
  },
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567892',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: false,
  },
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567893',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: false,
  },
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567894',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: false,
  },
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567895',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: false,
  },
  {
    name: 'Абрамова Ева Данииловна',
    id: '1234567896',
    phone: '+7 (800) 555 35-35',
    email: 'sense.nessa@gmail.com',
    isStaff: true,
  },
]

export const StudentList: React.FC<StudentListProps> = ({ className = '', children = '' }) => {
  const [check, setCheck] = useState<boolean>(false)

  //* ClassNames
  const componentClassName = 'student-list'
  const StudentListClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <table className={StudentListClassName}>
      <thead className={`${StudentListClassName}__titles`}>
        <tr>
          <th>
            <Typography
              font="ntSomic"
              variant="title-h3"
              tag="span"
            >
              ФИО
            </Typography>
          </th>
          <th>
            <Typography
              font="ntSomic"
              variant="title-h3"
              tag="span"
            >
              Личный ID
            </Typography>
          </th>
          <th>
            <Typography
              font="ntSomic"
              variant="title-h3"
              tag="span"
            >
              Телефон
            </Typography>
          </th>
          <th>
            <Typography
              font="ntSomic"
              variant="title-h3"
              tag="span"
            >
              Email
            </Typography>
          </th>
          <th>
            <Typography
              font="ntSomic"
              variant="title-h3"
              tag="span"
            >
              Сотрудник
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            id={student.id}
            email={student.email}
            isStaff={student.isStaff}
            name={student.name}
            phone={student.phone}
          />
        ))}
      </tbody>
    </table>
  )
}

export default memo(StudentList)
