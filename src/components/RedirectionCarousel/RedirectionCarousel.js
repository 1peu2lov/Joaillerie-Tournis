'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './RedirectionCarousel.module.scss'
import Link from 'next/link'

const items = [
  { title: 'E-boutique', description: 'Découvrez nos créations en ligne, prêtes à être adoptées.', link: '/boutique', cta: 'Voir la boutique', image: '/img/carousel/eboutique.jpg' },
  { title: 'Créations sur mesure', description: 'Un bijou à votre image, façonné dans notre atelier.', link: '/fabrications', cta: 'Découvrir', image: '/img/carousel/sur-mesure.jpg' },
  { title: 'Transformation de bijoux', description: 'Offrez une seconde vie à vos anciens bijoux.', link: '/transformations', cta: 'En savoir plus', image: '/img/carousel/transformation.jpg' },
  { title: 'Réparation de bijoux', description: 'Réparez vos bijoux précieux avec notre expertise.', link: '/reparations', cta: 'Réparer', image: '/img/carousel/reparation.jpg' },
  { title: 'Expertise & Évaluation', description: 'Faites évaluer vos bijoux par nos experts certifiés.', link: '/expertises', cta: 'Expertiser', image: '/img/carousel/expertise.jpg' }
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
  
  const carouselRef = useRef(null)

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
  }

  const handleMove = (clientX) => {
    if (!isDragging) return
    
    setCurrentX(clientX)
    const deltaX = clientX - startX
    const containerWidth = carouselRef.current?.offsetWidth || 0
    const translatePercentage = (deltaX / containerWidth) * 100
    setTranslateOffset(translatePercentage)
  }

  const handleEnd = () => {
    if (!isDragging) return
    
    const deltaX = currentX - startX
    const containerWidth = carouselRef.current?.offsetWidth || 0
    const threshold = containerWidth * 0.2 // 20% of container width
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        goToPrevious()
      } else if (deltaX < 0 && currentIndex < maxIndex) {
        // Swipe left - go to next
        goToNext()
      }
    }
    
    setIsDragging(false)
    setTranslateOffset(0)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Mouse events
  const handleMouseDown = (e) => {
    handleStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
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
  }, [isDragging, startX, currentX])

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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(${finalTranslatePercentage}%)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
            }}
          >
            {items.map((item, index) => (
              <article
                key={index}
                className={styles.card}
              >
                <div 
                  className={styles.cardInner}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link href={item.link} className={styles.cta}>
                    {item.cta}
                  </Link>
                </div>
              </article>
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