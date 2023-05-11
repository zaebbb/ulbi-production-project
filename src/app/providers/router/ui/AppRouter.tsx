import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}: RouteProps) => (
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
  );
};

export default AppRouter;
