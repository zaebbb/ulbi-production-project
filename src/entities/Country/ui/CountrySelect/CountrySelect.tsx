import React from 'react'
import { Country } from '../../model/types/country'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Country) => void
  label?: string
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Armenia, content: Country.Armenia },
]

export const CountrySelect: React.FC<CountrySelectProps> = (props) => {
  const {
    className,
    readonly,
    value,
    onChange,
    label,
  } = props

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (<ToggleFeatures
    feature={'isAppRedesigned'}
    off={
      <ListBoxDeprecated
        className={classNames(
          '', {}, [className]
        )}
        label={label}
        value={value}
        readonly={readonly}
        onChange={onChangeHandler}
        items={options}
        direction={'top-left'}
      />
    }
    on={
      <ListBox
        className={classNames(
          '', {}, [className]
        )}
        label={label}
        value={value}
        readonly={readonly}
        onChange={onChangeHandler}
        items={options}
        direction={'top-left'}
      />
    }
  />

  )
}
