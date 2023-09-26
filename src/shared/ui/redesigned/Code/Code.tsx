import React, { memo } from 'react'
import { Icon } from '../Icon'
import cls from './Code.module.scss'
import IconCopy from '@/shared/assets/icons/redesigned/IconCopy.svg'
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
      <Icon
        clickable
        onClick={onCopy}
        className={cls.copy}
        Svg={IconCopy}
      />
      <code>
        {codeData}
      </code>
    </pre>
  )
})
