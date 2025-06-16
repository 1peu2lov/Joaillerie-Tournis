'use client'

import styles from './page.module.scss' 
import { BarDeFiltre } from '@/components/BarDeFiltre/BarDeFiltre'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { useState, useRef, useEffect } from 'react'
import useWindowWidth from '@/app/hooks/useWindowsWidth'
import Image from 'next/image'

export default function Mariage() {
  const [gridHeight, setGridHeight] = useState(0)
  const windowWidth = useWindowWidth()
  const [isFilterOpen, setIsFilterOpen] = useState(windowWidth >= 1600)
  const gridRef = useRef(null)
  const productsGridWrapperRef = useRef(null)
  const filterRef = useRef(null)

  // Effet pour ajuster l'état de la barre selon la largeur d'écran
  useEffect(() => {
    if (windowWidth >= 1600) {
      setIsFilterOpen(true)
    } else {
      setIsFilterOpen(false)
    }
  }, [windowWidth])

  console.log('Current height bar de filtre Element:', gridHeight)

  const handleResetFilters = () => {
    if (filterRef.current) {
      filterRef.current.resetFilters()
    }
  }

  return (
    <>
      {/* Section Hero avec image */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image 
            src="/img/mariage.jpeg" 
            alt="Bijoux de mariage sur mesure"
            className={styles.heroImg}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Bijoux de Mariage</h1>
              <p className={styles.heroSubtitle}>
                Découvrez notre collection exclusive de bijoux de mariage, créés pour sublimer votre jour J
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section texte descriptif */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h3>Pour Votre Jour J</h3>
            <p>
              Notre collection mariage présente une sélection exceptionnelle de bijoux, 
              spécialement conçus pour sublimer les moments les plus précieux de votre vie. 
              Chaque pièce, créée dans notre atelier bordelais, reflète l&apos;élégance et la sophistication.
            </p>
            <p>
              Des alliances classiques aux parures somptueuses, chaque bijou est pensé pour 
              accompagner votre histoire d&apos;amour. Nous vous offrons une qualité exceptionnelle 
              et un service personnalisé pour que votre mariage soit inoubliable.
            </p>
          </div>
          <div className={styles.descriptionImage}>
            <Image 
              src="/img/mariage_hands.jpeg" 
              alt="Notre sélection de bijoux de mariage"
              className={styles.descImg}
              width={600}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <div className={styles.catalogHeader}>
        <h2>Explorez Nos Bijoux De Mariage</h2>
        <p>Utilisez les filtres pour découvrir nos bijoux de mariage selon vos préférences</p>
      </div>

      <div className={styles.mainContent} id="mariage">
        <div className={styles.filterWrapper}>
          <BarDeFiltre 
            ref={filterRef}
            gridHeight={gridHeight >= 1600 ? gridHeight : 1600} 
            onFilterChange={filtres => gridRef.current?.applyFilters(filtres)}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(prev => !prev)}
            gridVisibilityRef={productsGridWrapperRef}
          />
        </div>

        <div className={styles.productsGridWrapper} ref={productsGridWrapperRef}>
            <ProductsGrid 
              ref={gridRef}
              onHeightChange={setGridHeight}
              isFilterOpen={isFilterOpen}
              onResetFilters={handleResetFilters}
            />
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
}