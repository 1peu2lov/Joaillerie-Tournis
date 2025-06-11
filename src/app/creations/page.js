'use client'

import styles from './page.module.scss'
import Image from 'next/image' 
import { BarDeFiltre } from '@/components/BarDeFiltre/BarDeFiltre'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import CreationsCarousel from '@/components/CreationsCarousel/CreationsCarousel'
import { useState, useRef, useEffect } from 'react'
import useWindowWidth from '@/app/hooks/useWindowsWidth'

export default function Créations() {
  const [gridHeight, setGridHeight] = useState(0)
  const windowWidth = useWindowWidth()
  const [isFilterOpen, setIsFilterOpen] = useState(windowWidth >= 1600)
  const gridRef = useRef(null)

  // Effet pour ajuster l'état de la barre selon la largeur d'écran
  useEffect(() => {
    if (windowWidth >= 1600) {
      setIsFilterOpen(true)
    } else {
      setIsFilterOpen(false)
    }
  }, [windowWidth])

  console.log('Current height bar de filtre Element:', gridHeight)

  return (
    <>
      {/* Section Hero avec image */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/creations-hero.jpg" 
            alt="Nos créations artisanales"
            className={styles.heroImg}
            fill
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
              src="/images/artisan-work.jpg" 
              alt="Artisan au travail"
              className={styles.descImg}
              width={600}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Section existante avec filtres et grille */}
      <section className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <h2>Explorez Toutes Nos Créations</h2>
          <p>Utilisez les filtres pour découvrir nos créations selon vos préférences</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.filterWrapper}>
            <BarDeFiltre 
              gridHeight={gridHeight >= 1600 ? gridHeight : 1600} 
              onFilterChange={filtres => gridRef.current?.applyFilters(filtres)}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(prev => !prev)}
              showPriceFilter={false}
            />
          </div>

          <div className={styles.productsGridWrapper}>
              <ProductsGrid 
                ref={gridRef}
                onHeightChange={setGridHeight}
                isFilterOpen={isFilterOpen}
                showOnlyImages={true}
              />
          </div>
        </div>
      </section>
      
      <ScrollToTop />
    </>
  )
}