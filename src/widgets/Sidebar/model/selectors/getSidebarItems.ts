import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'nav-main',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'nav-about',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData?.id),
          Icon: ProfileIcon,
          text: 'nav-profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'nav-articles',
          authOnly: true,
        }
      )
    }

    return sidebarItemsList
  }
)
