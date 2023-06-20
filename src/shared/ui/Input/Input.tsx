import React, { type InputHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readonly?: boolean
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
    ...otherProps
  } = props

  const ref = React.useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = React.useState<boolean>(false)
  const [caretPosition, setCaretPosition] = React.useState<number>(0)

  const isCaretVisible = isFocused && !readonly

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  }

  const onSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  React.useEffect((): void => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {
        placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}>`}
          </div>
        )
      }
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span style={{ left: `${caretPosition * 9}px` }} className={cls.caret} />
        )}
      </div>
    </div>
  )
})
