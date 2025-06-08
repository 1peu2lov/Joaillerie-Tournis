'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.scss'
import Image from 'next/image'



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const routes = [
    { label: 'Nos créations',         href: '/creations' },
    { label: 'Joaillerie e-boutique', href: '/boutique' },     
    { label: 'Service personnalisé',  href: '/services' },
    { label: 'Notre maison',          href: '/maison' },
    { label: 'Mariage',               href: '/mariage' },
    { label: 'Prendre rendez-vous',   href: '/rendez-vous' },
    { label: 'Événements',            href: '/evenements' },
  ]

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Ouvrir le menu"
        >
          <span className={`${styles.burger} ${menuOpen ? styles.open : ''}`} />
        </button>

        <Link href={"/"} className={styles.logo} onClick={() => setMenuOpen(o => {o === false ? o : !o})}>
            <img
              src="/img/logo/logo.svg"
              alt="Logo Tournis"
              className={styles.logoImg}
            />
        </Link>

        <button className={styles.cartButton} aria-label="Voir le panier">
          {/* SVG panier */}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.dropdownMenu}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ul>
              {routes.map(({ label, href }, i) => (
                <li key={i}>
                  <Link href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
