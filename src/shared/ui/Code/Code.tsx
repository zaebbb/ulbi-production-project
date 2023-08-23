import React, { memo } from 'react'
import { Button } from '../Button/Button'
import { Icon } from '../Icon'
import cls from './Code.module.scss'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

interface CodeProps {
  className?: string
  codeData: string
}

export const Code: React.FC<CodeProps> = memo((props: CodeProps) => {
  const { className, codeData } = props

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(codeData)
  }, [codeData])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copy} onClick={onCopy}>
        <Icon Svg={CopyIcon} type={'stroke'} />
      </Button>
      <code>
        {codeData}
      </code>
    </pre>
  )
})
