import styles from './page.module.scss'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm'
import MapWrapper from '@/components/MapWrapper/MapWrapper'

export default function Contact() {
  return (
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
                    <p>29 Cr de l&apos;Intendance</p>
                    <p>33000 Bordeaux</p>
                    <p>France</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h3>Téléphone</h3>
                    <p>+33 5 57 87 04 71</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h3>Email</h3>
                    <p>contact@tournis.fr</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h3>Horaires</h3>
                    <p>Lundi - Samedi : 10h - 18h30</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialCard}>
                <h3>Suivez-nous</h3>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/joaillerietournis/?hl=fr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Image 
                      src="/icons/instagram.svg" 
                      alt="Instagram" 
                      width={24}
                      height={24}
                    />
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/JoaillerieTournis?locale=fr_FR" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Image 
                      src="/icons/facebook.svg" 
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.linkedin.com/company/joaillerietournis/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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
          <MapWrapper />
        </div>
      </section>
    </main>
  )
} 