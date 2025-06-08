import styles from './HeroSection.module.scss'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>L’excellence joaillière au cœur de Bordeaux</h1>
        <div className={styles.bottom}>
          <p>Depuis 1896, la Maison Tournis sublime l’art du bijou sur-mesure.</p>
          <Link href="/la-maison">
            <button className={styles.cta}>Nous découvrir</button>
          </Link>
        </div>
      </div>
    </section>
  )
}