import styles from './page.module.scss'
import Image from 'next/image'
import PageAnimation from '@/components/PageAnimation/PageAnimation'
import Head from 'next/head'

export default function Evenements() {
  return (
    <>
    <Head>
        <link
          rel="preload"
          as="image"
          href="/img/salon_mariage.webp"
          type="image/webp"
        />
      </Head>
      <main className={styles.evenementsPage}>
        {/* Section Hero avec image */}
        <section className={styles.heroSection}>
          <div className={styles.heroImage}>
            <Image 
              src="/img/salon_mariage.webp" 
              alt="Nos événements joaillerie"
              className={styles.heroImg}
              fill
              priority={true}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroOverlay}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Nos Événements</h1>
                <p className={styles.heroSubtitle}>
                  Découvrez nos événements exclusifs et notre actualité joaillière
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Événement 1 - Image à gauche */}
        <section className={styles.eventSection}>
          <div className={styles.eventContainer}>
            <div className={styles.eventImage}>
              <Image 
                src="/img/evenements_head.jpg" 
                alt="Événement 1"
                className={styles.eventImg}
                width={600}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.eventContent}>
              <h2>Exposition Nuit Etoilée</h2>
              <p className={styles.eventDate}>15 Juin - 30 Juillet 2025</p>
              <p>
                Découvrez notre nouvelle collection printemps-été dans une exposition exclusive. 
                Nos dernières créations seront présentées dans un écrin d&apos;exception,
                mêlant tradition joaillière et innovation contemporaine. 
                Cette exposition met à l&apos;honneur les pierres colorées et les métaux précieux, 
                dans des créations uniques pensées pour sublimer la saison des renouveau.
              </p>
              <button className={styles.eventCta}>En savoir plus</button>
            </div>
          </div>
        </section>

        {/* Section Événement 2 - Image à droite */}
        <section className={styles.eventSection}>
          <div className={`${styles.eventContainer} ${styles.reverse}`}>
            <div className={styles.eventImage}>
              <Image 
                src="/img/atelier.jpg" 
                alt="Événement 2"
                className={styles.eventImg}
                width={600}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.eventContent}>
              <h2>Atelier Découverte</h2>
              <p className={styles.eventDate}>Tous les premiers samedis du mois</p>
              <p>
                Participez à nos ateliers découverte et plongez dans l&apos;univers fascinant 
                de la joaillerie. Apprenez les techniques traditionnelles aux côtés de nos maîtres artisans.
              </p>
              <p>
                De la conception à la réalisation, découvrez tous les secrets de la création 
                de bijoux dans notre atelier bordelais.
              </p>
              <button className={styles.eventCta}>Réserver</button>
            </div>
          </div>
        </section>

        {/* Section Événement 3 - Image à gauche */}
        <section className={styles.eventSection}>
          <div className={styles.eventContainer}>
            <div className={styles.eventImage}>
              <Image 
                src="/img/bijorcha.jpg" 
                alt="Événement 3"
                className={styles.eventImg}
                width={600}
                height={500}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
            <div className={styles.eventContent}>
              <h2>Salon International Bijorcha</h2>
              <p className={styles.eventDate}>10-15 Septembre 2025</p>
              <p>
                Retrouvez-nous au Salon International de la Joaillerie de Paris, 
                où nous présenterons nos dernières innovations et créations d&apos;exception.
              </p>
              <p>
                Une occasion unique de découvrir l&apos;excellence française de la joaillerie 
                et de rencontrer nos artisans passionnés.
              </p>
              <button className={styles.eventCta}>Nous y retrouver</button>
            </div>
          </div>
        </section>

        {/* Section Actualités */}
        {/* <section className={styles.newsSection}>
          <div className={styles.newsContainer}>
            <h2>Actualités</h2>
            <div className={styles.newsGrid}>
              <article className={styles.newsCard}>
                <div className={styles.newsImageContainer}>
                  <Image 
                    src="/img/news/news1.jpg" 
                    alt="Actualité 1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.newsContent}>
                  <h3>Nouvelle Collection Automne</h3>
                  <p className={styles.newsDate}>5 Janvier 2024</p>
                  <p>Découvrez notre nouvelle collection automne inspirée des couleurs chaudes de la saison...</p>
                </div>
              </article>

              <article className={styles.newsCard}>
                <div className={styles.newsImageContainer}>
                  <Image 
                    src="/img/news/news2.jpg" 
                    alt="Actualité 2"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.newsContent}>
                  <h3>Prix de l&apos;Excellence Artisanale</h3>
                  <p className={styles.newsDate}>12 Décembre 2023</p>
                  <p>Nous sommes fiers d&apos;avoir reçu le Prix de l&apos;Excellence Artisanale pour notre engagement...</p>
                </div>
              </article>

              <article className={styles.newsCard}>
                <div className={styles.newsImageContainer}>
                  <Image 
                    src="/img/news/news3.jpg" 
                    alt="Actualité 3"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.newsContent}>
                  <h3>Ouverture Atelier Visites</h3>
                  <p className={styles.newsDate}>20 Novembre 2023</p>
                  <p>Venez découvrir les coulisses de notre atelier lors de visites guidées exceptionnelles...</p>
                </div>
              </article>
            </div>
          </div>
        </section> */}
      </main>
    </>
  )
}