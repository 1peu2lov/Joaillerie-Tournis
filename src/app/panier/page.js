'use client'

import { useCart } from '@/contexts/CartContext'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PanierPage() {
    const { items, removeItem, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()
    const [isClearing, setIsClearing] = useState(false)

    const handleClearCart = async () => {
        setIsClearing(true)
        setTimeout(() => {
            clearCart()
            setIsClearing(false)
        }, 300)
    }

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(productId)
        } else {
            updateQuantity(productId, newQuantity)
        }
    }

    if (items.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <div className={styles.emptyCartContent}>
                    <div className={styles.emptyCartIcon}>🛒</div>
                    <h1>Votre panier est vide</h1>
                    <p>Découvrez nos créations et ajoutez vos bijoux préférés à votre panier</p>
                    <Link href="/boutique" className={styles.continueShopping}>
                        Découvrir la boutique
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.cartHeader}>
                <h1>Mon Panier</h1>
                <p>{getCartCount()} article{getCartCount() > 1 ? 's' : ''}</p>
            </div>

            <div className={styles.cartContent}>
                <div className={styles.cartItems}>
                    {items.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <Link href={`/boutique/${item.id}`} className={styles.itemImage}>
                                <Image 
                                    src={item.images[0]} 
                                    alt={item.name}
                                    width={120}
                                    height={120}
                                    style={{ objectFit: 'cover' }}
                                />
                            </Link>

                            <div className={styles.itemDetails}>
                                <Link href={`/boutique/${item.id}`} className={styles.itemName}>
                                    <h3>{item.name}</h3>
                                </Link>
                                <p className={styles.itemDescription}>{item.description}</p>
                                
                                <div className={styles.itemMaterials}>
                                    <span>Matériaux: </span>
                                    {item.materials.slice(0, 2).join(', ')}
                                    {item.materials.length > 2 && '...'}
                                </div>
                            </div>

                            <div className={styles.itemActions}>
                                <div className={styles.quantityControls}>
                                    <button 
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        className={styles.quantityBtn}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button 
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        className={styles.quantityBtn}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.itemPrice}>
                                    {(item.price * item.quantity).toLocaleString('fr-FR')} €
                                </div>

                                <button 
                                    onClick={() => removeItem(item.id)}
                                    className={styles.removeBtn}
                                    aria-label="Supprimer cet article"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cartSummary}>
                    <div className={styles.summaryContent}>
                        <h3>Récapitulatif</h3>
                        
                        <div className={styles.summaryLine}>
                            <span>Sous-total ({getCartCount()} article{getCartCount() > 1 ? 's' : ''})</span>
                            <span>{getCartTotal().toLocaleString('fr-FR')} €</span>
                        </div>

                        <div className={styles.summaryLine}>
                            <span>Livraison</span>
                            <span>Gratuite</span>
                        </div>

                        <div className={`${styles.summaryLine} ${styles.total}`}>
                            <span>Total</span>
                            <span>{getCartTotal().toLocaleString('fr-FR')} €</span>
                        </div>

                        <button className={styles.checkoutBtn}>
                            Procéder au paiement
                        </button>

                        <button 
                            onClick={handleClearCart}
                            className={styles.clearCartBtn}
                            disabled={isClearing}
                        >
                            {isClearing ? 'Vidage...' : 'Vider le panier'}
                        </button>

                        <Link href="/boutique" className={styles.continueShopping}>
                            Continuer mes achats
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 