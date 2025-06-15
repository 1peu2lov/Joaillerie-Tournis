'use client'
import styles from './page.module.scss'
import BookingForm from '@/components/BookingForm/BookingForm'
import PageAnimation from '@/components/PageAnimation/PageAnimation'
import Image from 'next/image'

export default function RendezVous() {
  return (
    <PageAnimation>
      <main className={styles.rendezVousPage}>

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
                  src="/images/plan-boutique.jpg" 
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
    </PageAnimation>
  )
}