import React, { memo, Suspense, useMemo } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

const AppRouter: React.FC = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      return !(route.authOnly && !isAuth)
    })
  }, [isAuth])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }: RouteProps) => (
          <Route
            key={path}
            path={path}
            element={
              <div className={'page-wrapper'}>
                {element}
              </div>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
