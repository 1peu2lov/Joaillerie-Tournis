import styles from './page.module.scss'
import Image from 'next/image' 
import Head from 'next/head'
import CreationsCarousel from '@/components/CreationsCarousel/CreationsCarousel'
import CreationsFilterSection from '@/components/CreationsFilterSection/CreationsFilterSection'

export default function Créations() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/img/creation_head.webp"
          type="image/webp"
        />
      </Head>
      
      {/* Section Hero avec image */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image 
            src="/img/creation_head.webp" 
            alt="Nos créations artisanales"
            className={styles.heroImg}
            fill
            priority={true}
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Nos Créations</h1>
              <p className={styles.heroSubtitle}>
                L&apos;art de la joaillerie française, entre tradition et modernité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carrousel des meilleures créations */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselContainer}>
          <h2 className={styles.carouselTitle}>Nos Dernières Créations</h2>
          <p className={styles.carouselSubtitle}>
            Découvrez nos pièces les plus récentes, alliant savoir-faire traditionnel et design contemporain
          </p>
          <CreationsCarousel />
        </div>
      </section>

      {/* Section texte descriptif */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h3>L&apos;Excellence Artisanale</h3>
            <p>
              Chaque création naît de la rencontre entre l&apos;inspiration de nos artisans et la beauté 
              des matériaux nobles. Notre atelier perpétue les techniques traditionnelles de la joaillerie 
              française tout en s&apos;ouvrant aux innovations contemporaines.
            </p>
            <p>
              De la conception à la réalisation, chaque bijou est unique, pensé et créé avec passion pour 
              sublimer les moments précieux de votre vie. Nos créations racontent des histoires, 
              portent des émotions et traversent le temps.
            </p>
          </div>
          <div className={styles.descriptionImage}>
            <Image 
              src="/img/working_hands_2.webp" 
              alt="Artisan au travail"
              className={styles.descImg}
              width={600}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section avec filtres et grille - Client Component */}
      <section className={styles.catalogSection}>
        <CreationsFilterSection />
      </section>
    </>
  )
}