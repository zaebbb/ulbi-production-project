import React, { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth'
import { routeConfig } from '@/app/providers/router/config/routeConfig'
import { type AppRoutesProps } from '@/shared/types/router'

const AppRouter: React.FC = () => {
  const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
    const element = (
      <>
        {route.element}
      </>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
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
