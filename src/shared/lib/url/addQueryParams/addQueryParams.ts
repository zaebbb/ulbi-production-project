export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params)
    .forEach(([param, value]) => {
      if (value) {
        searchParams.set(param, value)
      }
    })

  return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров строки запросов  URL
 * @param params
*/
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(
    null,
    '',
    getQueryParams(params)
  )
}
