'use client'

import styles from './page.module.scss' 
import { BarDeFiltre } from '@/components/BarDeFiltre/BarDeFiltre'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { useState, useRef, useEffect } from 'react'
import useWindowWidth from '@/app/hooks/useWindowsWidth'
import Image from 'next/image'

export default function Boutique() {
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
            src="/images/boutique-hero.jpg" 
            alt="Notre e-boutique de joaillerie"
            className={styles.heroImg}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Notre E-Boutique</h1>
              <p className={styles.heroSubtitle}>
                Découvrez notre sélection de bijoux prêts à être adoptés, livrés directement chez vous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section texte descriptif */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionContent}>
            <h3>Une Sélection Curatée</h3>
            <p>
              Notre e-boutique présente une sélection soigneusement choisie de bijoux, 
              chacun portant l&apos;empreinte de notre savoir-faire artisanal. Ces pièces, 
              créées dans notre atelier bordelais, sont prêtes à rejoindre votre collection.
            </p>
            <p>
              De la bague élégante au collier d&apos;exception, chaque bijou raconte une histoire 
              et incarne notre passion pour la joaillerie française. Nous vous garantissons 
              une qualité irréprochable et un service personnalisé, même à distance.
            </p>
          </div>
          <div className={styles.descriptionImage}>
            <Image 
              src="/images/boutique-description.jpg" 
              alt="Notre sélection de bijoux"
              className={styles.descImg}
              width={600}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <div className={styles.mainContent} id="boutique">
        <div className={styles.filterWrapper}>
          <BarDeFiltre 
            gridHeight={gridHeight >= 1600 ? gridHeight : 1600} 
            onFilterChange={filtres => gridRef.current?.applyFilters(filtres)}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(prev => !prev)}
          />
        </div>

        <div className={styles.productsGridWrapper}>
            <ProductsGrid 
              ref={gridRef}
              onHeightChange={setGridHeight}
              isFilterOpen={isFilterOpen}
            />
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
}