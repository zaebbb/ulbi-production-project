import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRouter } from './providers/router'
import { getUserMounted, userActions } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'

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
