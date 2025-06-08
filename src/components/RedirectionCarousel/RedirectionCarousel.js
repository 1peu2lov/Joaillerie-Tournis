'use client'
import styles from './RedirectionCarousel.module.scss'
import Link from 'next/link'

const items = [
  { title: 'E-boutique', description: 'Découvrez nos créations en ligne, prêtes à être adoptées.', link: '/boutique', cta: 'Voir la boutique', image: '/img/carousel/eboutique.jpg' },
  { title: 'Créations sur mesure', description: 'Un bijou à votre image, façonné dans notre atelier.', link: '/sur-mesure', cta: 'Découvrir', image: '/img/carousel/sur-mesure.jpg' },
  { title: 'Transformation de bijoux', description: 'Offrez une seconde vie à vos anciens bijoux.', link: '/transformation', cta: 'En savoir plus', image: '/img/carousel/transformation.jpg' }
]

export default function RedirectionCarousel() {
  return (
    <section className={styles.carousel}>
      <div className={styles.scrollContainer}>
        {items.map((item, index) => (
          <article
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlay} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link href={item.link} className={styles.cta}>
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}