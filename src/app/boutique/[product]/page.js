'use client'

import { useParams } from 'next/navigation'
import styles from './page.module.scss'
import productsData from '@/data/products.json'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const productData = productsData.find(p => p.id === params.product)
        setProduct(productData)
    }, [params.product])

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
                    <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className={styles.mainImage}
                    />
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

                    <button className={styles.addToCart}>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    )
} 