'use client'

import { useState, useRef, useEffect } from 'react'
import { BarDeFiltre } from '@/components/BarDeFiltre/BarDeFiltre'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import useWindowWidth from '@/app/hooks/useWindowsWidth'
import styles from './CreationsFilterSection.module.scss'

export default function CreationsFilterSection() {
  const [gridHeight, setGridHeight] = useState(0)
  const windowWidth = useWindowWidth()
  const [isFilterOpen, setIsFilterOpen] = useState(windowWidth >= 1600)
  const gridRef = useRef(null)
  const [showFilterButton, setShowFilterButton] = useState(false)
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

  // Observer pour afficher le bouton quand la grille est visible
  useEffect(() => {
    const element = productsGridWrapperRef.current
    if (!element) return

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowFilterButton(entry.isIntersecting && entry.intersectionRatio > 0)
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px', // Décale le déclenchement pour coller sous le header
      }
    )
    
    observer.observe(element)
    
    return () => {
      observer.unobserve(element)
    }
  }, [])

  const handleResetFilters = () => {
    if (filterRef.current) {
      filterRef.current.resetFilters()
    }
  }

  return (
    <>
      <div className={styles.catalogHeader}>
        <h2>Explorez Toutes Nos Créations</h2>
        <p>Utilisez les filtres pour découvrir nos créations selon vos préférences</p>
      </div>

      <div className={styles.mainContent} id="creations">
        <div className={styles.filterWrapper}>
          <BarDeFiltre 
            ref={filterRef}
            gridHeight={gridHeight >= 1600 ? gridHeight : 1600} 
            onFilterChange={filtres => gridRef.current?.applyFilters(filtres)}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(prev => !prev)}
            showPriceFilter={false}
            gridVisibilityRef={productsGridWrapperRef}
          />
        </div>

        <div className={styles.productsGridWrapper} ref={productsGridWrapperRef}>
          <ProductsGrid 
            ref={gridRef}
            onHeightChange={setGridHeight}
            isFilterOpen={isFilterOpen}
            showOnlyImages={true}
            onResetFilters={handleResetFilters}
          />
        </div>
      </div>
      
      <ScrollToTop />
    </>
  )
} 