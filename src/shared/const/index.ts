export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  ACCESS_DENIED = 'access_denied',
  NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create/'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdminPanel = () => '/admin-panel'
export const getRouteAccessDenied = () => '/access-denied'
export const getRouteNotFound = () => '*'

export { Theme } from '@/shared/const/theme'
