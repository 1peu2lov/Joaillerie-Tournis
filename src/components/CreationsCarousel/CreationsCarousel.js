'use client'

import styles from './CreationsCarousel.module.scss'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/data/products.json'

export default function CreationsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [featuredProducts, setFeaturedProducts] = useState([])
    const carouselRef = useRef(null)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [cardsPerView, setCardsPerView] = useState(1)
    
    // Touch/drag functionality
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [currentX, setCurrentX] = useState(0)
    const [translateOffset, setTranslateOffset] = useState(0)
    const [justDragged, setJustDragged] = useState(false)

    // Refs pour maintenir les valeurs à jour dans les écouteurs d'événements
    const isDraggingRef = useRef(false)
    const startXRef = useRef(0)
    const currentXRef = useRef(0)

    // Sélectionner les 8 premiers produits comme produits vedettes
    useEffect(() => {
        const featured = productsData.slice(0, 8)
        setFeaturedProducts(featured)
    }, [])

    // Déterminer le nombre de cartes visibles selon la taille d'écran
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth >= 1400) {
                setCardsPerView(4)
            } else if (window.innerWidth >= 1024) {
                setCardsPerView(3)
            } else if (window.innerWidth >= 992) {
                setCardsPerView(2)
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2)
            } else {
                setCardsPerView(1)
            }
        }

        updateCardsPerView()
        window.addEventListener('resize', updateCardsPerView)
        return () => window.removeEventListener('resize', updateCardsPerView)
    }, [])

    // Calculer le nombre maximum d'index
    const maxIndex = Math.max(0, featuredProducts.length - cardsPerView)

    // Auto-play du carrousel
    useEffect(() => {
        if (!isAutoPlaying || maxIndex === 0 || isDragging) return

        const interval = setInterval(() => {
            setCurrentIndex(prev => 
                prev >= maxIndex ? 0 : prev + 1
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [maxIndex, isAutoPlaying, isDragging])

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex))
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrevious = () => {
        setCurrentIndex(prev => 
            prev <= 0 ? maxIndex : prev - 1
        )
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToNext = () => {
        setCurrentIndex(prev => 
            prev >= maxIndex ? 0 : prev + 1
        )
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    // Touch/Mouse event handlers
    const handleStart = (clientX) => {
        setIsDragging(true)
        setStartX(clientX)
        setCurrentX(clientX)
        setIsAutoPlaying(false)
        
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
        const threshold = containerWidth * 0.2
        
        // Seuil plus élevé pour mobile pour permettre les clics
        const dragThreshold = window.innerWidth < 768 ? 15 : 5
        const hasDragged = Math.abs(deltaX) > dragThreshold
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0 && currentIndex > 0) {
                setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
            } else if (deltaX < 0 && currentIndex < maxIndex) {
                setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
            }
        }
        
        if (hasDragged) {
            setJustDragged(true)
            setTimeout(() => setJustDragged(false), 100)
        }
        
        setIsDragging(false)
        setTranslateOffset(0)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 5000)
        
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
        } else {
            setIsAutoPlaying(true)
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

    if (featuredProducts.length === 0) {
        return <div className={styles.loading}>Chargement...</div>
    }

    // Calculer le pourcentage de déplacement avec offset de drag
    const baseTranslatePercentage = -(currentIndex * (100 / cardsPerView))
    const finalTranslatePercentage = baseTranslatePercentage + translateOffset

    return (
        <div className={styles.carouselWrapper}>
            <div 
                className={styles.carousel}
                ref={carouselRef}
                onMouseEnter={() => !isDragging && setIsAutoPlaying(false)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
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
                    {featuredProducts.map((product, index) => (
                        <div 
                            key={product.id} 
                            className={styles.carouselCard}
                            style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                        >
                            <Link href={`/creations/${product.id}`} className={styles.productLink} onClick={handleLinkClick} title={`${product.name} - Découvrir cette création`}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className={styles.productImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        priority={index < cardsPerView}
                                    />
                                    {product.isRecycled && (
                                        <span className={styles.recycledBadge}>♻️</span>
                                    )}
                                    <div className={styles.overlay}>
                                        <div className={styles.productInfo}>
                                            <h3 className={styles.productName}>{product.name}</h3>
                                            <p className={styles.productMaterial}>{product.materials[0]}</p>
                                            <span className={styles.viewDetails}>Découvrir</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation boutons - Only visible on desktop */}
            {maxIndex > 0 && (
                <>
                    <button 
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={goToPrevious}
                        aria-label="Produits précédents"
                    >
                        ‹
                    </button>
                    <button 
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={goToNext}
                        aria-label="Produits suivants"
                    >
                        ›
                    </button>
                </>
            )}

            {/* Indicateurs de slides */}
            {maxIndex > 0 && (
                <div className={styles.indicators}>
                    {Array.from({ length: maxIndex + 1 }, (_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${
                                index === currentIndex ? styles.active : ''
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Aller à la section ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}