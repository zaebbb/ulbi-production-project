import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('input-login')}
        type="text" className={cls.input}
        autoFocus
      />
      <Input
        placeholder={t('input-password')}
        type="text" className={cls.input}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
      >
        {t('btn-auth')}
      </Button>
    </div>
  )
}
