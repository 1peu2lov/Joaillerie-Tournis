'use client'

import styles from './page.module.scss' 
import { BarDeFiltre } from '@/components/BarDeFiltre/BarDeFiltre'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { useState, useRef, useEffect } from 'react'
import useWindowWidth from '@/app/hooks/useWindowsWidth'

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
        <section className="hero">
          <div className="content">
            <h1>Nos créations</h1>
            <p>Découvrez une sélection exclusive de bijoux prête à être adoptés.</p>
          </div>
        </section>


      <div className={styles.mainContent}>
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