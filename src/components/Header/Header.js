'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const pathname = usePathname()
  const { getCartCount } = useCart()

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const routes = [
    { label: 'Nos créations',         href: '/creations' },
    { label: 'E-boutique', href: '/boutique' },     
    { label: 'Nos services',  href: '/services' },
    { label: 'Notre maison',          href: '/maison' },
    { label: 'Mariage',               href: '/mariage' },
    { label: 'Rendez-vous',   href: '/rendez-vous' },
    { label: 'Événements',            href: '/evenements' },
  ]

  const servicesRoutes = [
    { label: 'Fabrications', href: '/fabrications' },
    { label: 'Transformations', href: '/transformations' },
    { label: 'Réparations', href: '/reparations' },
    { label: 'Collection Pierres', href: '/pierres' },
    { label: 'Expertises', href: '/expertises' },
    { label: 'Conseils & Garanties', href: '/conseils' },
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

          <Link href={"/"} className={styles.logo} onClick={() => setMenuOpen(o => {o === false ? o : !o})} title="Accueil - Joaillerie Tournis">
            <Image
              src="/img/logo/logo.svg"
              alt="Logo Tournis"
              className={styles.logoImg}
              width={120}
              height={40}
            />
          </Link>

          <nav className={styles.desktopNav}>
            {routes.slice(0, 4).map(({ label, href }, i) => {
              if (label === 'Nos services') {
                return (
                  <div 
                    key={i}
                    className={styles.servicesDropdown}
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <Link 
                      href={href} 
                      className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
                      title={`${label} - Joaillerie Tournis`}
                    >
                      {label}
                    </Link>
                    <AnimatePresence>
                      {servicesMenuOpen && (
                        <motion.div
                          className={styles.servicesMenu}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {servicesRoutes.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className={`${styles.serviceLink} ${isActive(service.href) ? styles.active : ''}`}
                              onClick={() => setServicesMenuOpen(false)}
                              title={`${service.label} - Services Joaillerie Tournis`}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
              <Link 
                key={i} 
                href={href} 
                className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
                title={`${label} - Joaillerie Tournis`}
              >
                {label}
              </Link>
              )
            })}
          </nav>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.desktopNav}>
            {routes.slice(4).map(({ label, href }, i) => (
              <Link 
                key={i} 
                href={href} 
                className={`${styles.navLink} ${isActive(href) ? styles.active : ''}`}
                title={`${label} - Joaillerie Tournis`}
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
              title="Contacter Joaillerie Tournis"
            >
              <Image
                src="/icons/tel.svg"
                alt="Contact"
                width={30}
                height={30}
                className={styles.icon}
              />
            </Link>
            <Link 
              href="/panier" 
              className={`${styles.iconLink} ${isActive('/panier') ? styles.active : ''}`} 
              aria-label="Panier"
              title="Mon panier - Joaillerie Tournis"
            >
              <div className={styles.cartIconWrapper}>
                <Image
                  src="/icons/panier_2.svg"
                  alt="Panier"
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                {getCartCount() > 0 && (
                  <span className={styles.cartBadge}>
                    {getCartCount()}
                  </span>
                )}
              </div>
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
            <div className={styles.mobileMenuContent}>
              {/* Section principale */}
              <div className={styles.mainRoutes}>
                {routes.filter(route => route.label !== 'Services').map(({ label, href }, i) => (
                  <Link 
                    key={i}
                    href={href} 
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${isActive(href) ? styles.active : ''}`}
                    title={`${label} - Joaillerie Tournis`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Section Services */}
              <div className={styles.servicesSection}>
                <div className={styles.servicesSectionHeader}>
                  <Link 
                    href="/services" 
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.servicesMainLink} ${isActive('/services') ? styles.active : ''}`}
                    title="Services - Joaillerie Tournis"
                  >
                    Services
                  </Link>
                </div>
                <div className={styles.servicesGrid}>
                  {servicesRoutes.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className={`${styles.mobileServiceLink} ${isActive(service.href) ? styles.active : ''}`}
                      onClick={() => setMenuOpen(false)}
                      title={`${service.label} - Services Joaillerie Tournis`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
