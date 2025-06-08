'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './PageTransition.module.scss'

export default function PageTransition({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true)
    }

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setDisplayChildren(children)
        setIsTransitioning(false)
      }, 300) // Délai correspondant à la moitié de la durée totale de transition
    }

    router.events?.on('routeChangeStart', handleRouteChangeStart)
    router.events?.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events?.off('routeChangeStart', handleRouteChangeStart)
      router.events?.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router, children])

  return (
    <div className={styles.wrapper}>
      {displayChildren}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1]
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
} 