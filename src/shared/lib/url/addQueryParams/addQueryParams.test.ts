import { getQueryParams } from './addQueryParams'

describe('Тест addQueryParams.test', () => {
  test(
    'test with one param',
    () => {
      const param = getQueryParams({
        test: 'tester',
      })

      expect(param).toEqual('?test=tester')
    }
  )

  test(
    'test with multiple params',
    () => {
      const param = getQueryParams({
        test: 'tester',
        search: 'hello_world',
        mock: 'sok',
      })

      expect(param).toEqual('?test=tester&search=hello_world&mock=sok')
    }
  )

  test(
    'test with undefined',
    () => {
      const param = getQueryParams({
        test: 'tester',
        search: undefined,
      })

      expect(param).toEqual('?test=tester')
    }
  )
})
