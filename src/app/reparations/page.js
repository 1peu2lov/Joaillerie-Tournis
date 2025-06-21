'use client'
import styles from './reparations.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function ReparationsPage() {
  return (
    <>
    <Head>
        <link
          rel="preload"
          as="image"
          href="/img/artisan_2.jpg"
          type="image/jpg"
        />
      </Head>
    <div className={styles.reparationsPage}>
      <section className={styles.hero}>
        <div className={styles.heroNavigation}>
          <Link href="/transformations" className={styles.navButton} title="Page précédente : Transformations">
            ← Transformations
          </Link>
          <Link href="/pierres" className={styles.navButton} title="Page suivante : Collection Pierres">
            Collection Pierres →
          </Link>
        </div>
        <div className={styles.heroContent}>
          <h1>Réparations</h1>
          <p className={styles.heroSubtitle}>
            Un savoir-faire de précision pour réparer vos bijoux abîmés ou cassés
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/artisan_2.jpg" 
            alt="Réparation de bijoux" 
            fill
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Nos services de réparation</h2>
          <div className={styles.servicesList}>
            <div className={styles.service}>
              {/* <div className={styles.icon}>🔧</div> */}
              <h3>Réparation de chaînes</h3>
              <p>Remise en état de chaînes cassées, maillons endommagés, fermoirs défaillants.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.icon}>💎</div> */}
              <h3>Resertissage de pierres</h3>
              <p>Fixation sécurisée de pierres descellées ou remplacement de griffes usées.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.icon}>⚡</div> */}
              <h3>Soudure d&apos;urgence</h3>
              <p>Intervention rapide pour bijoux cassés, anneaux fendus, agrafes détachées.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.icon}>✨</div> */}
              <h3>Remise à neuf</h3>
              <p>Polissage, nettoyage professionnel et traitement des rayures superficielles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseContent}>
            <div className={styles.textContent}>
              <h2>Excellence technique</h2>
              <p>
                Nos artisans maîtrisent les techniques de réparation les plus délicates. 
                Chaque intervention est réalisée avec le plus grand soin pour préserver 
                l&apos;intégrité et la beauté de vos bijoux.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <strong>Diagnostic gratuit</strong>
                  <span>Évaluation complète sans engagement</span>
                </div>
                <div className={styles.feature}>
                  <strong>Devis transparent</strong>
                  <span>Prix fixe avant intervention</span>
                </div>
                <div className={styles.feature}>
                  <strong>Garantie qualité</strong>
                  <span>6 mois sur toutes nos réparations</span>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <Image 
                src="/img/artisan_2.jpg" 
                alt="Atelier de réparation" 
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.urgency}>
        <div className={styles.container}>
          <h2>Service d&apos;urgence</h2>
          <p>Bijou cassé avant un événement important ? Nous proposons un service de réparation express pour vos urgences.</p>
          <div className={styles.urgencyFeatures}>
            <div className={styles.urgencyFeature}>
              <h3>24-48h</h3>
              <p>Délai express pour réparations simples</p>
            </div>
            <div className={styles.urgencyFeature}>
              <h3>7j/7</h3>
              <p>Service client disponible</p>
            </div>
            <div className={styles.urgencyFeature}>
              <h3>Priorité</h3>
              <p>Traitement en urgence de votre dossier</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Réparez vos bijoux précieux</h2>
          <p>Confiez-nous vos bijoux abîmés, nous leur redonnerons leur éclat d&apos;origine</p>
          <a href="/rendez-vous" className={styles.ctaButton} title="Prendre rendez-vous pour une réparation de bijoux">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
    </>
  )
} 