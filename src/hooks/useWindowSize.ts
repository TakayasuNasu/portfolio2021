import { useState, useEffect } from 'react'

interface Size {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== `undefined`) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    if (typeof window !== `undefined`) {
      window.addEventListener('resize', handleResize)
      handleResize()
    }

    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
