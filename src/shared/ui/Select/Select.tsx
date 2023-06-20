import React, { type ChangeEvent, memo, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: React.FC<SelectProps> = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly = false,
  } = props

  const onChangeHandler = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  const optionList = useMemo(() => {
    return options?.map(option => (
      <option
        key={option.value}
        value={option.value}
        className={cls.option}
      >{option.content}</option>
    ))
  }, [options])

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  )
}
)
