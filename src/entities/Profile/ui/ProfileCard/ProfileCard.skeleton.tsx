import React from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

export const ProfileCardSkeleton = React.memo(() => {
  return (
    <Card isMax padding={'24'}>
      <VStack gap={32}>
        <HStack align={'center'} justify={'center'}>
          <Skeleton border={'50%'} width={120} height={120} />
        </HStack>
        <HStack gap={24} isMax>
          <VStack gap={16} isMax>
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
          </VStack>
          <VStack gap={16} isMax>
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
            <Skeleton border={'8px'} width={'100%'} height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
})
