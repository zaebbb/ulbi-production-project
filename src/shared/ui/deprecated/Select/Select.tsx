import React, { type ChangeEvent, useMemo } from 'react'
import cls from './Select.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { TypedMemo } from '@/shared/lib/components/TypedMemo'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

/**
 * @deprecated
 * */
const SelectComponent = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly = false,
  } = props

  const onChangeHandler = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
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

/**
 * @deprecated
 * */
export const Select = TypedMemo(SelectComponent)
