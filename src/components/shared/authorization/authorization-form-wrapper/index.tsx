import { memo } from 'react'

import { Typography } from '@/shared'

import AuthorizationFormWrapperProps from './authorization-form-wrapper.types'
import './styles.scss'

const AuthorizationFormWrapper: React.FC<AuthorizationFormWrapperProps> = ({
  children,
  titleText,
  buttonSide,
}) => {
  //* ClassNames
  const componentClassName = 'authorization-form-wrapper'

  return (
    <div className={componentClassName}>
      <div className={`${componentClassName}__content`}>
        <Typography
          className={`${componentClassName}__title`}
          variant="headline-h2"
          font="ntSomic"
        >
          {titleText}
        </Typography>

        {children}

        <div className={`${componentClassName}__button-wrapper`}>{buttonSide}</div>
      </div>
    </div>
  )
}

export default memo(AuthorizationFormWrapper)
