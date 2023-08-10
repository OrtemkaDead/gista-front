import classnames from 'classnames'
import Image from 'next/image'

import GistaTestImg from '@/assets/images/gista-test.png'

import GistaProps from './gista.types'
import './styles.scss'

export const Gista: React.FC<GistaProps> = ({ className = '' }) => {
  //* ClassNames
  const componentClassName = 'gista'
  const GistaClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={GistaClassName}>
      <Image
        src={GistaTestImg}
        alt="gista-test"
      />
    </div>
  )
}
