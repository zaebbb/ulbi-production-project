import React from 'react'
import cls from './ArticleDetails.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

export const ArticleDetailsSkeleton = () => (
  <ToggleFeatures
    feature={'isAppRedesigned'}
    off={
      <>
        <SkeletonDeprecated width={100} height={100} border={'50%'} className={cls.avatar} />
        <SkeletonDeprecated width={400} height={32} border={'8px'} className={cls.title} />
        <SkeletonDeprecated width={300} height={24} border={'8px'} className={cls.skeleton} />
        <SkeletonDeprecated width={'100%'} height={100} border={'8px'} className={cls.skeleton} />
        <SkeletonDeprecated width={'100%'} height={100} border={'8px'} className={cls.skeleton} />
      </>
    }
    on={
      <VStack gap={16} isMax>
        <Skeleton width={'100%'} height={32} border={'8px'} />
        <Skeleton width={'100%'} height={24} border={'8px'} />
        <Skeleton width={'100%'} height={400} border={'8px'} />
        <Skeleton width={'100%'} height={100} border={'8px'} />
        <Skeleton width={'100%'} height={100} border={'8px'} />
      </VStack>
    }
  />
)
