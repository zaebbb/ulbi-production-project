import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPage } from '@/pages/AdminPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
  AppRoutes,
  getRouteAbout,
  getRouteAccessDenied,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile,
} from '@/shared/const'
import { type AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage/>,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage/>,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage/>,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPage/>,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.ACCESS_DENIED]: {
    path: getRouteAccessDenied(),
    element: <ForbiddenPage/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage/>,
  },
}
