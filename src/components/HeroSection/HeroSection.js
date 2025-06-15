import styles from './HeroSection.module.scss'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>L&apos;excellence joaillière au cœur de Bordeaux</h1>
          <div className={styles.bottom}>
            <p>Depuis 1896, la Maison Tournis sublime l&apos;art du bijou sur-mesure.</p>
            <Link href="/la-maison" className={styles.linkWrapper}>
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
            poster="/img/home/hero-bg.jpeg"
          >
            <source src="/img/home/video-home.mov" type="video/quicktime" />
            <source src="/img/home/video-home.mp4" type="video/mp4" />
            <source src="/img/home/video-home.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}