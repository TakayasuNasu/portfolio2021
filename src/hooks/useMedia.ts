import { useState, useEffect } from 'react'

const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  const mediaQueryLists = queries.map(q => window.matchMedia(q))

  // Function that gets value based on matching media query
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return values?.[index] || defaultValue
  }

  const [value, setValue] = useState<T>(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler))
    return () =>
      mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler))
  }, [])

  return value
}

export default useMedia
