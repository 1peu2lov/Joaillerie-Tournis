'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './RedirectionCarousel.module.scss'
import Link from 'next/link'

const items = [
  { title: 'E-boutique', 
    description: 'Découvrez nos créations en ligne, prêtes à être adoptées.', 
    link: '/boutique', 
    cta: 'Voir la boutique', 
    image: '/img/boutique_head.jpeg' },

  { title: 'Nos Créations', 
    description: "L'art de la joaillerie française, entre tradition et modernité", 
    link: '/creations', 
    cta: 'Découvrir', 
    image: '/img/creation_head.jpeg' },

  { title: 'Événements', 
    description: 'Découvrez nos événements et nos actualités.', 
    link: '/evenements', 
    cta: 'En savoir plus', 
    image: '/img/evenements_head.jpg' },

  { title: 'Maison Tournis', 
    description: 'Découvrez l\'histoire de notre maison.', 
    link: '/maison', 
    cta: 'Découvrir', 
    image: '/img/histoire/hero-img.JPG' },

  { title: 'Mariage', 
    description: 'Créations uniques pour votre jour J, alliances et bijoux sur mesure.', 
    link: '/mariage',
     cta: 'Découvrir', 
     image: '/img/mariage.jpeg' }
]

export default function RedirectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(1)
  
  // Touch/drag functionality
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [translateOffset, setTranslateOffset] = useState(0)
  const [justDragged, setJustDragged] = useState(false)
  
  const carouselRef = useRef(null)

  // Refs pour maintenir les valeurs à jour dans les écouteurs d'événements
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const currentXRef = useRef(0)

  // Detect screen size and set items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, items.length - itemsPerView)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay || maxIndex === 0 || isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, maxIndex, isDragging])

  const goToSlide = (index) => {
    const clampedIndex = Math.min(index, maxIndex)
    setCurrentIndex(clampedIndex)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  // Touch/Mouse event handlers
  const handleStart = (clientX) => {
    setIsDragging(true)
    setStartX(clientX)
    setCurrentX(clientX)
    setIsAutoPlay(false)
    
    // Mettre à jour les refs
    isDraggingRef.current = true
    startXRef.current = clientX
    currentXRef.current = clientX
  }

  const handleMove = (clientX) => {
    if (!isDraggingRef.current) return
    
    setCurrentX(clientX)
    currentXRef.current = clientX
    
    const deltaX = clientX - startXRef.current
    const containerWidth = carouselRef.current?.offsetWidth || 0
    const translatePercentage = (deltaX / containerWidth) * 100
    setTranslateOffset(translatePercentage)
  }

  const handleEnd = () => {
    if (!isDraggingRef.current) return
    
    const deltaX = currentXRef.current - startXRef.current
    const containerWidth = carouselRef.current?.offsetWidth || 0
    const threshold = containerWidth * 0.2 // 20% of container width
    
    // Seuil plus élevé pour mobile pour permettre les clics
    const dragThreshold = window.innerWidth < 768 ? 15 : 5
    const hasDragged = Math.abs(deltaX) > dragThreshold
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        goToPrevious()
      } else if (deltaX < 0 && currentIndex < maxIndex) {
        // Swipe left - go to next
        goToNext()
      }
    }
    
    // Si il y a eu un drag, même petit, on empêche la navigation
    if (hasDragged) {
      setJustDragged(true)
      setTimeout(() => setJustDragged(false), 100)
    }
    
    setIsDragging(false)
    setTranslateOffset(0)
    setTimeout(() => setIsAutoPlay(true), 5000)
    
    // Mettre à jour les refs
    isDraggingRef.current = false
  }

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return
    
    setCurrentX(e.clientX)
    currentXRef.current = e.clientX
    
    const deltaX = e.clientX - startXRef.current
    const containerWidth = carouselRef.current?.offsetWidth || 0
    const translatePercentage = (deltaX / containerWidth) * 100
    setTranslateOffset(translatePercentage)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
    }
  }

  // Fonction pour gérer les clics sur les liens
  const handleLinkClick = (e) => {
    if (justDragged) {
      e.preventDefault()
      return false
    }
  }

  // Add mouse move/up listeners globally when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Add touch event listeners with passive: false
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleTouchStartNative = (e) => {
      handleStart(e.touches[0].clientX)
    }

    const handleTouchMoveNative = (e) => {
      if (isDraggingRef.current) {
        e.preventDefault()
      }
      handleMove(e.touches[0].clientX)
    }

    const handleTouchEndNative = () => {
      handleEnd()
    }

    carousel.addEventListener('touchstart', handleTouchStartNative, { passive: false })
    carousel.addEventListener('touchmove', handleTouchMoveNative, { passive: false })
    carousel.addEventListener('touchend', handleTouchEndNative, { passive: false })

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStartNative)
      carousel.removeEventListener('touchmove', handleTouchMoveNative)
      carousel.removeEventListener('touchend', handleTouchEndNative)
    }
  }, [handleStart, handleMove, handleEnd])

  // Simple percentage-based translation (like CreationsCarousel)
  const baseTranslatePercentage = -(currentIndex * (100 / itemsPerView))
  const finalTranslatePercentage = baseTranslatePercentage + translateOffset

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {/* Navigation arrows */}
        {maxIndex > 0 && (
          <>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              ‹
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              aria-label="Image suivante"
            >
              ›
            </button>
          </>
        )}
        
        <div 
          className={styles.scrollContainer}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: isDragging ? 'none' : 'auto',
            WebkitUserSelect: isDragging ? 'none' : 'auto',
            touchAction: 'pan-y pinch-zoom'
          }}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(${finalTranslatePercentage}%)`,
              transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'transform'
            }}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={styles.card}
                onClick={handleLinkClick}
              >
                <div 
                  className={styles.cardInner}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span className={styles.cta}>
                    {item.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Dots navigation - Only show if there are multiple pages */}
      {maxIndex > 0 && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}