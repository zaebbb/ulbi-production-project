import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const onChangeUsername = React.useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = React.useCallback(() => {
    dispatch(loginByUsername({
      password,
      username,
    }))
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text
          title={t('modal-auth-title')}
        />
        {error && (
          <Text
            text={t('error-auth')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          placeholder={t('input-login')}
          type="text"
          className={cls.input}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t('input-password')}
          type="text"
          className={cls.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('btn-auth')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
