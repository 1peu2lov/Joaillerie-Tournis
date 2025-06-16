'use client'

import { useParams } from 'next/navigation'
import styles from './page.module.scss'
import Image from 'next/image'
import productsData from '@/data/products.json'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [mainImage, setMainImage] = useState('')
    const { addItem } = useCart()
    const [isAdding, setIsAdding] = useState(false)

    useEffect(() => {
        const productData = productsData.find(p => p.id === params.product)
        setProduct(productData)
        if (productData?.images?.[0]) {
            setMainImage(productData.images[0])
        }
    }, [params.product])

    // Générer des images placeholder si moins de 4 images
    const getPlaceholderImages = () => {
        const mainImg = product?.images?.[0] || '/images/placeholder-1.jpg'
        return Array(4).fill(mainImg)
    }

    const allImages = product?.images?.length >= 4 
        ? product.images 
        : [...(product?.images || []), ...getPlaceholderImages()].slice(0, 4)

    const handleAddToCart = async () => {
        if (!product) return
        
        setIsAdding(true)
        try {
            addItem(product)
            // Petit délai pour l'animation
            setTimeout(() => {
                setIsAdding(false)
            }, 800)
        } catch (error) {
            console.error('Erreur lors de l\'ajout au panier:', error)
            setIsAdding(false)
        }
    }

    if (!product) {
        return (
            <div className={styles.loading}>
                <p>Chargement...</p>
            </div>
        )
    }

    return (
        <div className={styles.productPage}>
            <Link href="/boutique" className={styles.backButton}>
                ← Retour à la boutique
            </Link>

            <div className={styles.productContent}>
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

                <div className={styles.infoSection}>
                    <h1>{product.name}</h1>
                    <p className={styles.description}>{product.description}</p>
                    
                    <div className={styles.price}>
                        {product.price} €
                    </div>

                    <div className={styles.details}>
                        <div className={styles.detailGroup}>
                            <h3>Matériaux</h3>
                            <ul>
                                {product.materials.map(material => (
                                    <li key={material}>{material}</li>
                                ))}
                            </ul>
                        </div>

                        {product.stones.length > 0 && (
                            <div className={styles.detailGroup}>
                                <h3>Pierres</h3>
                                <ul>
                                    {product.stones.map(stone => (
                                        <li key={stone}>{stone}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className={styles.detailGroup}>
                            <h3>Couleurs</h3>
                            <div className={styles.colors}>
                                {product.colors.map(color => (
                                    <span 
                                        key={color}
                                        className={styles.colorSwatch}
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {product.isRecycled && (
                            <div className={styles.recycled}>
                                ♻️ Matériaux recyclés
                            </div>
                        )}
                    </div>

                    <button 
                        className={styles.addToCart}
                        onClick={handleAddToCart}
                        disabled={isAdding}
                    >
                        {isAdding ? 'Ajout en cours...' : 'Ajouter au panier'}
                    </button>
                </div>
            </div>
        </div>
    )
} 