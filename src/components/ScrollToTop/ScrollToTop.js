'use client'

import { useState, useEffect } from 'react'
import styles from './ScrollToTop.module.scss'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Vérifier si nous sommes sur la page boutique ou créations
      const boutiqueSection = document.getElementById('boutique')
      const creationsSection = document.getElementById('creations')
      
      if (boutiqueSection || creationsSection) {
        const section = boutiqueSection || creationsSection
        const sectionTop = section.getBoundingClientRect().top
        
        // Le bouton apparaît quand on a dépassé le haut de la section
        if (sectionTop < -100) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } else {
        // Pour les autres pages, utiliser le comportement par défaut
        if (window.scrollY > 1000) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    // Vérifier si nous sommes sur la page boutique ou créations
    const boutiqueSection = document.getElementById('boutique')
    const creationsSection = document.getElementById('creations')
    
    if (boutiqueSection) {
      const offset = 100 // Offset de 100px
      const elementPosition = boutiqueSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else if (creationsSection) {
      const offset = 100 // Offset de 100px
      const elementPosition = creationsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className={styles.scrollToTop}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </>
  )
} 