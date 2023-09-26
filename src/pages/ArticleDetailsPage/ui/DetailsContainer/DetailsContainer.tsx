import React, { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'

interface DetailsContainerProps {
  className?: string
  id: string
}

export const DetailsContainer: React.FC<DetailsContainerProps> =
  memo((props: DetailsContainerProps) => {
    const { className, id } = props

    return (
      <Card isMax className={className} borderRadius={'round'} padding={'24'}>
        <ArticleDetails id={id}/>
      </Card>
    )
  })
