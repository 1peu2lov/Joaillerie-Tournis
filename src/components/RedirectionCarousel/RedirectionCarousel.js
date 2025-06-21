'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styles from './RedirectionCarousel.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const items = [
  {
    title: 'E-boutique',
    description: 'Découvrez nos créations en ligne, prêtes à être adoptées.',
    link: '/boutique',
    cta: 'Voir la boutique',
    image: '/img/boutique_head.webp'
  },
  {
    title: 'Nos Créations',
    description: "L'art de la joaillerie française, entre tradition et modernité",
    link: '/creations',
    cta: 'Découvrir',
    image: '/img/creation_head.webp'
  },
  {
    title: 'Événements',
    description: 'Découvrez nos événements et nos actualités.',
    link: '/evenements',
    cta: 'En savoir plus',
    image: '/img/evenements_head.jpg'
  },
  {
    title: 'Maison Tournis',
    description: 'Découvrez l\'histoire de notre maison.',
    link: '/maison',
    cta: 'Découvrir',
    image: '/img/histoire/hero-img.JPG'
  },
  {
    title: 'Mariage',
    description: 'Créations uniques pour votre jour J, alliances et bijoux sur mesure.',
    link: '/mariage',
    cta: 'Découvrir',
    image: '/img/mariage.webp'
  }
]

export default function RedirectionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    rubberband: true,
    defaultAnimation: {
      duration: 1000, // ← ralentit la transition pour plus de fluidité
      easing: t => 1 - Math.pow(1 - t, 3) // easeOutCubic pour un effet smooth
    },
    slides: {
      perView: 1,
      spacing: 10
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 3, spacing: 18 },
      },
      '(min-width: 1700px)': {
        slides: { perView: 4, spacing: 15 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  // Auto play
  useEffect(() => {
    if (isHovered) return // ← stop autoplay si souris dessus
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next()
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef, isHovered])

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.carouselWrapper}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {items.map((item, i) => (
            <div className={`keen-slider__slide ${styles.carouselSlide}`} key={i}>
              <Link href={item.link} className={styles.cardLink} title={`${item.title} - ${item.description}`}>
                <div className={styles.card}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i <= 2}
                    draggable={false}
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardTop}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <span className={styles.cta}>{item.cta}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dotsContainer}>
          {Array.from({ length: items.length }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentSlide ? styles.active : ''}`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}