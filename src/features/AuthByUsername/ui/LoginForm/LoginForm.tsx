import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import cls from './LoginForm.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const {
    className,
    onSuccess,
  } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
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

  const onLoginClick = React.useCallback(async () => {
    const result = await dispatch(loginByUsername({
      password,
      username,
    }))

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

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
