import { classNames } from 'shared/lib/classNames/classNames'

describe('Утилита classNames', () => {
  test(
    'Передача одного параметра',
    () => {
      expect(classNames('classname', {}, [])).toBe('classname')
    })

  test(
    'Передача одного параметра + в третьем аргумента массив из одного значения',
    () => {
      expect(
        classNames('classname', {}, ['class'])
      ).toBe('classname class')
    })

  test(
    'Использование модов',
    () => {
      expect(
        classNames('classname', { check: true }, ['class'])
      ).toBe('classname class check')
    })

  test(
    'Использование модов + 1 мод на false',
    () => {
      expect(
        classNames('classname', { check: true, uncheck: false }, ['class'])
      ).toBe('classname class check')
    })

  test(
    'Использование модов + 1 мод undefined и 1 мод на null',
    () => {
      expect(
        classNames('classname', { check: null, uncheck: undefined }, ['class'])
      ).toBe('classname class')
    })
})
