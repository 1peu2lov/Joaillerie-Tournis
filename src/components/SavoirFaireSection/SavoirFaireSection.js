// src/components/SavoirFaireSection/SavoirFaireSection.jsx
'use client'
import Link from 'next/link'
import styles from './SavoirFaireSection.module.scss'

const savoirFaireList = [
  { title: 'Fabrications', description: 'Conception artisanale de bijoux uniques, façonnés à la main dans notre atelier bordelais.', cta: 'Découvrir', href: '/fabrications', bg: '/img/savoir-faire/fabrications.jpg' },
  { title: 'Transformations', description: 'Redonnez vie à vos bijoux anciens avec une transformation sur-mesure.', cta: 'En savoir plus', href: '/transformations', bg: '/img/savoir-faire/transformations.jpg' },
  { title: 'Réparations', description: 'Un savoir-faire de précision pour réparer vos bijoux abîmés ou cassés.', cta: 'Nos services', href: '/reparations', bg: '/img/savoir-faire/reparations.jpg' },
  { title: 'Collection Pierres', description: 'Découvrez notre sélection de pierres précieuses prêtes à sublimer vos créations.', cta: 'Voir la collection', href: '/pierres', bg: '/img/savoir-faire/pierres.jpg' },
  { title: 'Expertises', description: 'Faites évaluer vos bijoux par des experts de confiance, discrets et rigoureux.', cta: 'Prendre rendez-vous', href: '/expertises', bg: '/img/savoir-faire/expertises.jpg' }
]

export default function SavoirFaireSection() {
  return (
    <section className={styles.savoirFaire}>
      <h2>Nos savoir‑faire</h2>
      <div className={styles.cards}>
        {savoirFaireList.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${idx % 2 === 0 ? styles.left : styles.right}`}
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className={styles.overlay} />
            <div className={`${styles.info} ${idx % 2 === 0 ? styles.rightInfo : styles.leftInfo}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <Link href={item.href} className={styles.cta} aria-label={item.cta}>
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}