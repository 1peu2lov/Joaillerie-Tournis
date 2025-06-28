import styles from './HeroSection.module.scss'
import Link from 'next/link'
import Head from 'next/head'

export default function HeroSection() {
  return (
    <>
    <Head>
      <link
        rel="preload"
        as="image"
        href="/img/home/hero-bg.jpeg"
        type="image/jpeg"
      />

      <link
          rel="preload"
          as="video"
          href="/img/home/video-home.mp4"
          type="video/mp4"
        />
    </Head>
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Joaillerie Tournis l&apos;excellence au cœur de Bordeaux</h1>
          <div className={styles.bottom}>
            <p>Depuis 1896, la Maison Tournis sublime l&apos;art du bijou sur-mesure.</p>
            <Link href="services" className={styles.linkWrapper}>
              <button className={styles.cta}>Nous découvrir</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroVideo}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className={styles.video}
            priority="true"
            poster="/img/home/hero-bg.jpeg"
          >
            <source src="/img/home/video-home.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    </>
  )
}