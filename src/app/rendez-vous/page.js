'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.scss'
import BookingForm from '@/components/BookingForm/BookingForm'
import PageAnimation from '@/components/PageAnimation/PageAnimation'
import Image from 'next/image'

export default function RendezVous() {
  const [showScrollInvitation, setShowScrollInvitation] = useState(true)

  const scrollToForm = () => {
    const formElement = document.querySelector('[class*="bookingContainer"]')
    if (formElement) {
      const headerHeight = 100 // Hauteur du header
      const elementPosition = formElement.offsetTop - headerHeight
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.querySelector('[class*="bookingContainer"]')
      if (formElement) {
        const headerHeight = 100
        const formPosition = formElement.offsetTop - headerHeight - 100 // 100px d'offset supplémentaire
        const currentScroll = window.scrollY
        
        setShowScrollInvitation(currentScroll < formPosition)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Vérifier au chargement

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   
      <main className={styles.rendezVousPage}>
        {/* Invitation au scroll */}
        {showScrollInvitation && (
          <div className={styles.scrollInvitation} onClick={scrollToForm}>
            <div className={styles.scrollText}>
              Formulaire
            </div>
            <div className={styles.scrollArrow}>
              ↓
            </div>
          </div>
        )}

        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoContent}>
              <div className={styles.textContent}>
                <h2>Notre Atelier</h2>
                <p>
                  Situé au cœur de Bordeaux, notre atelier vous accueille dans un cadre chaleureux 
                  et intimiste. Venez découvrir notre savoir-faire artisanal et nos créations 
                  uniques dans un espace dédié à la joaillerie française.
                </p>
                <div className={styles.address}>
                  <h3>Adresse</h3>
                  <p>81 rue Ducau</p>
                  <p>33000 Bordeaux</p>
                  <p>France</p>
                </div>
                <div className={styles.hours}>
                  <h3>Horaires d&apos;ouverture</h3>
                  <p>Mardi - Samedi : 10h - 19h</p>
                  <p>Lundi : Sur rendez-vous</p>
                </div>
              </div>
              <div className={styles.mapContent}>
                <Image 
                  src="/img/devanture_tournis.webp" 
                  alt="Plan d'accès à notre boutique"
                  className={styles.mapImage}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <BookingForm />
      </main>
  )
}