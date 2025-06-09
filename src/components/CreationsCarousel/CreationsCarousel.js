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

    // Sélectionner les 8 premiers produits comme produits vedettes
    useEffect(() => {
        const featured = productsData.slice(0, 8)
        setFeaturedProducts(featured)
    }, [])

    // Déterminer le nombre de cartes visibles selon la taille d'écran
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth >= 1200) {
                setCardsPerView(4) // Desktop large
            } else if (window.innerWidth >= 992) {
                setCardsPerView(3) // Desktop
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2) // Tablet
            } else {
                setCardsPerView(1) // Mobile
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
        if (!isAutoPlaying || maxIndex === 0) return

        const interval = setInterval(() => {
            setCurrentIndex(prev => 
                prev >= maxIndex ? 0 : prev + 1
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [maxIndex, isAutoPlaying])

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

    if (featuredProducts.length === 0) {
        return <div className={styles.loading}>Chargement...</div>
    }

    // Calculer le pourcentage de déplacement
    const translatePercentage = -(currentIndex * (100 / cardsPerView))

    return (
        <div className={styles.carouselWrapper}>
            <div 
                className={styles.carousel}
                ref={carouselRef}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <div 
                    className={styles.carouselTrack}
                    style={{
                        transform: `translateX(${translatePercentage}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
                    }}
                >
                    {featuredProducts.map((product, index) => (
                        <div 
                            key={product.id} 
                            className={styles.carouselCard}
                            style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                        >
                            <Link href={`/creations/${product.id}`} className={styles.productLink}>
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

            {/* Navigation boutons */}
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