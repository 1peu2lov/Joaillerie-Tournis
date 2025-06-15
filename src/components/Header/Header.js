'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const routes = [
    { label: 'Nos créations',         href: '/creations' },
    { label: 'Joaillerie boutique', href: '/boutique' },     
    { label: 'Services',  href: '/services' },
    { label: 'Notre maison',          href: '/maison' },
    { label: 'Mariage',               href: '/mariage' },
    { label: 'Rendez-vous',   href: '/rendez-vous' },
    { label: 'Événements',            href: '/evenements' },
  ]

  const isActive = (href) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Ouvrir le menu"
          >
            <span className={`${styles.burger} ${menuOpen ? styles.open : ''}`} />
          </button>

          <Link href={"/"} className={styles.logo} onClick={() => setMenuOpen(o => {o === false ? o : !o})}>
            <Image
              src="/img/logo/logo.svg"
              alt="Logo Tournis"
              className={styles.logoImg}
              width={120}
              height={40}
            />
          </Link>

          <nav className={styles.desktopNav}>
            {routes.slice(0, 4).map(({ label, href }, i) => (
              <Link 
                key={i} 
                href={href} 
                className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.desktopNav}>
            {routes.slice(4).map(({ label, href }, i) => (
              <Link 
                key={i} 
                href={href} 
                className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerIcons}>
            <Link 
              href="/contact" 
              className={`${styles.iconLink} ${isActive('/contact') ? styles.active : ''}`} 
              aria-label="Contact"
            >
              <Image
                src="/icons/phone.svg"
                alt="Contact"
                width={24}
                height={24}
                className={styles.icon}
              />
            </Link>
            <Link 
              href="/panier" 
              className={`${styles.iconLink} ${isActive('/panier') ? styles.active : ''}`} 
              aria-label="Panier"
            >
              <Image
                src="/icons/cart.svg"
                alt="Panier"
                width={24}
                height={24}
                className={styles.icon}
              />
            </Link>
          </div>
        </div>
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
                  <Link 
                    href={href} 
                    onClick={() => setMenuOpen(false)}
                    className={isActive(href) ? styles.active : ''}
                  >
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
