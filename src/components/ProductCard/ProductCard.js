'use client'

import styles from './ProductCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function ProductCard({ product, isPremium = false, variant = 'normal' }) {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    if (!isVisible) {
        return <div ref={cardRef} className={styles.placeholder} data-variant={variant} />
    }

    if (variant === 'special') {
        return (
            <Link 
                ref={cardRef}
                href={`/boutique/${product.id}`}
                className={`${styles.productCard} ${styles.specialCard}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                data-variant={variant}
            >
                <div className={styles.imageContainer}>
                    <Image 
                        src={product.images[0]} 
                        alt={product.name}
                        className={styles.productImage}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                        loading="eager"
                        quality={85}
                    />
                    {product.isRecycled && (
                        <span className={styles.recycledBadge}>♻️</span>
                    )}
                    <div className={`${styles.specialOverlay} ${isHovered ? styles.visible : ''}`}>
                        <div className={styles.specialContent}>
                            <h3 className={styles.specialProductName}>{product.name}</h3>
                            <span className={styles.specialPrice}>{product.price} €</span>
                            <span className={styles.viewDetails}>
                                Voir le produit
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <Link 
            ref={cardRef}
            href={`/boutique/${product.id}`}
            className={`${styles.productCard} ${isPremium ? styles.featured : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-variant={variant}
        >
            <div className={styles.imageContainer}>
                <Image 
                    src={product.images[0]} 
                    alt={product.name}
                    className={styles.productImage}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isPremium}
                    loading={isPremium ? "eager" : "lazy"}
                    quality={isPremium ? 85 : 75}
                />
                {product.isRecycled && (
                    <span className={styles.recycledBadge}>♻️</span>
                )}
                <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
                    <span className={styles.viewDetails}>
                        Voir le produit
                    </span>
                </div>
            </div>

            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.productDetails}>
                    <span className={styles.price}>{product.price} €</span>
                    <div className={styles.materials}>
                        {product.materials[0]}
                    </div>
                </div>

                <div className={styles.detailsSection}>
                    {product.stones.length > 0 && (
                        <div className={styles.stones}>
                            {product.stones.map((stone, index) => (
                                <span key={stone} className={styles.stone}>
                                    {stone}
                                    {index < product.stones.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className={styles.colors}>
                        {product.colors.map(color => (
                            <span 
                                key={color}
                                className={styles.colorDot}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}