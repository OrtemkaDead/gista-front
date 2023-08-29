import classnames from 'classnames'
import { FC, memo, useMemo } from 'react'

import { Button, TextInput } from '@/shared'

import './styles.scss'
import { UniversityFormProps } from './university-form.types'

export const UniversityForm: FC<UniversityFormProps> = ({
  formType = 'connection',
  setValue,
  value,
  sendRequest,
  connectUniversity,
}) => {
  const requestForm = formType === 'request'

  const componentClassName = 'university-form'

  const FormClassName = classnames(componentClassName, {
    [`${componentClassName}--connection`]: !requestForm,
    [`${componentClassName}--request`]: requestForm,
  })

  const ButtonClassName = classnames({
    [`${componentClassName}__button--connect`]: !requestForm,
    [`${componentClassName}__button--request`]: requestForm,
  })

  const form = useMemo(() => {
    return (
      <form
        className={FormClassName}
        onSubmit={requestForm ? sendRequest : connectUniversity}
      >
        {/* для семантики лучше чтобы инпут был в теге label, сейчас он просто в диве + 
        опять нет возможности задать вариант тега для заголовка инпута */}
        {/* необходимо ввести 10 значный код - только циры? или это любые символы? (тип инпута?) */}
        <TextInput
          type="text"
          value={value}
          setValue={setValue}
          placeholder={requestForm ? 'Введите название учреждения' : 'Введите 10-значный код'}
        />

        <Button
          size="large"
          className={ButtonClassName}
          type={requestForm ? 'secondary' : 'primary'}
        >
          {requestForm ? 'Отправить' : 'Подключиться'}
        </Button>
      </form>
    )
  }, [ButtonClassName, FormClassName, connectUniversity, requestForm, sendRequest, setValue, value])

  return <>{form}</>
}

export default memo(UniversityForm)
