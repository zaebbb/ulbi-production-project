import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMounted, userActions } from 'entities/User'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export const App: React.FC = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const mounted = useSelector(getUserMounted)

  React.useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {mounted && <AppRouter/>}
        </div>
      </Suspense>
    </div>
  )
}
