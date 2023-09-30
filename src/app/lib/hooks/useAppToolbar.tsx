import React from 'react'
import { AppRoutes } from '@/shared/const'
import { useRouteChange } from '@/shared/lib/router'
import { Toolbar } from '@/widgets/Toolbar'

export const useAppToolbar = () => {
  const appRoute = useRouteChange()

  const toolbarByAppRoute: OptionalRecord<AppRoutes, React.ReactElement> = {
    [AppRoutes.ARTICLES]: <Toolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <Toolbar />,
    [AppRoutes.MAIN]: <Toolbar />,
    [AppRoutes.ABOUT]: <Toolbar />,
  }

  return toolbarByAppRoute[appRoute]
}
