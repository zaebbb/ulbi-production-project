import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/Popups'
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
  const { t } = useTranslation()

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <ListBox
      label={label}
      className={classNames(className, {}, [])}
      items={options}
      value={value}
      onChange={onChangeHandler}
      defaultValue={t('profile-change-currency')}
      readonly={readonly}
      direction={'top-left'}
    />
  )
})
