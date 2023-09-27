import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

type InputSize = 's' | 'm' | 'l'

type HTMLInputProps =
  Omit<InputHTMLAttributes<HTMLInputElement>,
  'value' |
  'onChange' |
  'readonly' |
  'size'
  >

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readonly?: boolean
  addonLeft?: React.ReactNode
  addonRight?: React.ReactNode
  size?: InputSize
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly = false,
    addonLeft,
    label,
    addonRight,
    size = 'm',
    ...otherProps
  } = props

  const ref = React.useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = React.useState<boolean>(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  React.useEffect((): void => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        className={cls.input}
        value={value}
        onChange={onChangeHandler}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  )

  if (label) {
    return (
      <HStack isMax gap={8} align={'center'}>
        {label && <Text text={label} className={cls.label} />}
        {input}
      </HStack>
    )
  }

  return input
})
