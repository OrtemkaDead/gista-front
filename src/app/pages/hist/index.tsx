import classnames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import { Button, Checkbox, Icon, Typography } from '@/ui-kit'

import GistaTestImg from '@/assets/images/gista-test.png'

import HistProps from './hist.types'
import './styles.scss'

export const Hist: React.FC<HistProps> = ({ className = '' }) => {
  const [checked, setChecked] = useState<boolean>(false)

  //* ClassNames
  const componentClassName = 'hist'
  const HistClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className="gista-page">
      <div className="gista-page__header">
        <Button
          leftIcon={
            <Icon
              color="#007FFF"
              iconName="arrowLeft"
            />
          }
          type="borderless"
        >
          Назад
        </Button>
        <Typography
          className="gista-page__header__title"
          variant="headline-h2"
        >
          Мозжечок крысы - окраска гематоксилин и эозин
        </Typography>
        <div className="gista-page__header__settings">
          <div className="gista-page__header__checkbox">
            <Checkbox
              onClick={() => setChecked(!checked)}
              state={checked}
            />
            <Typography variant="text-16">Показывать в 4К</Typography>
          </div>
          <Icon
            iconName="star"
            color="#FDDD18"
            fill="#FDDD18"
          />
        </div>
      </div>
      <div className="gista-page__img">
        <Image
          src={GistaTestImg}
          alt="gista-test"
        />
      </div>

      <div className="gista-page__footer">
        <div className="gista-page__footer__item">
          <Typography variant="text-16">Молекулярный слой</Typography>
        </div>
        <div className="gista-page__footer__item--active">
          <Typography
            // color="#fff"
            variant="text-16"
          >
            Слой грушевидных нейронов
          </Typography>
        </div>
        <div className="gista-page__footer__item">
          <Typography variant="text-16">Зернистый слой</Typography>
        </div>
        <div className="gista-page__footer__item">
          <Typography variant="text-16">Мозговое вещество</Typography>
        </div>
      </div>
    </div>
  )
}
