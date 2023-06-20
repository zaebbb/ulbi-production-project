import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  label?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
  const {
    className = '',
    label,
    value,
    onChange,
    readonly = false,
  } = props

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      label={label}
      className={classNames(className, {}, [])}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})
