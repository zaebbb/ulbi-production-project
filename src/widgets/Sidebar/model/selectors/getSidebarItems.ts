import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { RoutePath } from '@/shared/const'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'nav-main',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'nav-about',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          Icon: ProfileIcon,
          text: 'nav-profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'nav-articles',
          authOnly: true,
        }
      )
    }

    return sidebarItemsList
  }
)
