import React, { Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }: RouteProps) => (
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

export default AppRouter
