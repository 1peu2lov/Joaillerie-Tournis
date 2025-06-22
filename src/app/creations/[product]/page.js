import styles from './page.module.scss'
import productsData from '@/data/products.json'
import Link from 'next/link'
import ProductImageGallery from '@/components/ProductImageGallery/ProductImageGallery'
import { notFound } from 'next/navigation'

export default function CreationPage({ params }) {
    const product = productsData.find(p => p.id === params.product)

    if (!product) {
        notFound()
    }

    return (
        <div className={styles.creationPage}>
            <Link href="/creations" className={styles.backButton} title="Retour à la page créations">
                ← Retour aux créations
            </Link>

            <div className={styles.creationContent}>
                <ProductImageGallery product={product} />

                <div className={styles.infoSection}>
                    <h1>{product.name}</h1>
                    <p className={styles.description}>{product.description}</p>

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
                    </div>

                    <div className={styles.creationActions}>
                        <p className={styles.contactText}>
                            Cette création vous intéresse ? Contactez-nous pour plus d&apos;informations.
                        </p>
                        <Link href="/rendez-vous" className={styles.contactButton} title="Prendre rendez-vous pour cette création">
                            Prendre rendez-vous
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 