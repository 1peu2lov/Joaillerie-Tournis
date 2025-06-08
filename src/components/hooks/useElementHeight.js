'use client'

import { useState, useEffect, useRef } from 'react'

export function useElementHeight() {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const updateHeight = () => {
      const newHeight = element.offsetHeight
      setHeight(prev => (prev !== newHeight ? newHeight : prev))
    }

    updateHeight() // Mesure initiale

    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)

    window.addEventListener('resize', updateHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [ref.current]) // 👈 c’est important !

  console.log('Current height:', height)

  return { ref, height }
}

export default useElementHeight