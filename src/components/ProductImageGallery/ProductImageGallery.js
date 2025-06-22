'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './ProductImageGallery.module.scss'

export default function ProductImageGallery({ product }) {
    const [mainImage, setMainImage] = useState(product?.images?.[0] || '')

    // Générer des images placeholder si moins de 4 images
    const getPlaceholderImages = () => {
        const mainImg = product?.images?.[0] || '/images/placeholder-1.jpg'
        return Array(4).fill(mainImg)
    }

    const allImages = product?.images?.length >= 4 
        ? product.images 
        : [...(product?.images || []), ...getPlaceholderImages()].slice(0, 4)

    if (!product) {
        return (
            <div className={styles.loading}>
                <p>Chargement...</p>
            </div>
        )
    }

    return (
        <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
                <Image 
                    src={mainImage || product.images[0]} 
                    alt={product.name}
                    className={styles.mainImage}
                    width={600}
                    height={600}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.thumbnailGallery}>
                {allImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`${styles.thumbnail} ${mainImage === image ? styles.active : ''}`}
                        onClick={() => setMainImage(image)}
                    >
                        <Image 
                            src={image}
                            alt={`${product.name} - Vue ${index + 1}`}
                            width={100}
                            height={100}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 