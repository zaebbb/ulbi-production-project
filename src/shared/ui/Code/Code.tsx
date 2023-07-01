import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Icon } from 'widgets/Icon/Icon'

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
