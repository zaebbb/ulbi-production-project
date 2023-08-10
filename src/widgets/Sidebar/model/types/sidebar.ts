import type React from 'react'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import AboutIcon from '@/shared/assets/icons/about.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'nav-profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'nav-articles',
    authOnly: true,
  },
]
