'use client'
import styles from './page.module.scss'
import PageAnimation from '@/components/PageAnimation/PageAnimation'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 44.8563, // Coordonnées de Bordeaux
  lng: -0.5714
}

export default function Contact() {
  return (
    <PageAnimation>
      <main className={styles.contactPage}>

        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.infoCard}>
                  <h2>Nos Coordonnées</h2>
                  <div className={styles.infoContent}>
                    <div className={styles.infoItem}>
                      <h3>Adresse</h3>
                      <p>81 rue Ducau</p>
                      <p>33000 Bordeaux</p>
                      <p>France</p>
                    </div>
                    <div className={styles.infoItem}>
                      <h3>Téléphone</h3>
                      <p>+33 5 56 00 00 00</p>
                    </div>
                    <div className={styles.infoItem}>
                      <h3>Email</h3>
                      <p>contact@tournis.fr</p>
                    </div>
                    <div className={styles.infoItem}>
                      <h3>Horaires</h3>
                      <p>Mardi - Samedi : 10h - 19h</p>
                      <p>Lundi : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialCard}>
                  <h3>Suivez-nous</h3>
                  <div className={styles.socialLinks}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <Image 
                        src="/icons/instagram.svg" 
                        alt="Instagram" 
                        width={24}
                        height={24}
                      />
                      <span>Instagram</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <Image 
                        src="/icons/facebook.svg" 
                        alt="Facebook"
                        width={24}
                        height={24}
                      />
                      <span>Facebook</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <Image 
                        src="/icons/linkedin.svg" 
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <Image 
                        src="/icons/pinterest.svg" 
                        alt="Pinterest"
                        width={24}
                        height={24}
                      />
                      <span>Pinterest</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h2>Envoyez-nous un message</h2>
                <p className={styles.formIntro}>
                  Vous avez une question sur nos créations ou nos services ? 
                  N&apos;hésitez pas à nous contacter via le formulaire ci-dessous.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </section>
      </main>
    </PageAnimation>
  )
} 