import type React from 'react'
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

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: getRouteProfile(':id'),
    Icon: ProfileIcon,
    text: 'nav-profile',
    authOnly: true,
  },
  {
    path: getRouteArticles(),
    Icon: ArticleIcon,
    text: 'nav-articles',
    authOnly: true,
  },
]
