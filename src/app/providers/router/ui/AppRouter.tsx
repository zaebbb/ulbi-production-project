import React, { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

const AppRouter: React.FC = () => {
  const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
    const element = (
      <div className={'page-wrapper'}>
        {route.element}
      </div>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
