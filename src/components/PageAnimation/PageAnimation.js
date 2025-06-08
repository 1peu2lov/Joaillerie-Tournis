'use client'
import { motion } from 'framer-motion'
import styles from './PageAnimation.module.scss'

export default function PageAnimation({ children }) {
  return (
    <motion.div
      className={styles.pageAnimation}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }}
    >
      {children}
    </motion.div>
  )
} 