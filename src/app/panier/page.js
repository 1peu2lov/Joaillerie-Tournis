'use client'

import { useCart } from '@/contexts/CartContext'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PanierPage() {
    const { items, removeItem, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()
    const [isClearing, setIsClearing] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const [orderData, setOrderData] = useState({
        shipping: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: '',
            country: 'France'
        },
        payment: {
            method: 'card',
            cardNumber: '',
            cardExpiry: '',
            cardCVC: '',
            cardName: ''
        }
    })

    const steps = [
        { id: 1, title: 'Panier', description: 'Vérifiez vos articles' },
        { id: 2, title: 'Livraison', description: 'Adresse de livraison' },
        { id: 3, title: 'Paiement', description: 'Mode de paiement' },
        { id: 4, title: 'Confirmation', description: 'Finaliser la commande' }
    ]

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

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleStepClick = (stepId) => {
        setCurrentStep(stepId)
    }

    const updateOrderData = (section, data) => {
        setOrderData(prev => ({
            ...prev,
            [section]: { ...prev[section], ...data }
        }))
    }

    if (items.length === 0 && currentStep === 1) {
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
                <h1>Finaliser ma commande</h1>
                <p>Suivez les étapes pour compléter votre achat</p>
            </div>

            {/* Navigation des étapes */}
            <div className={styles.stepsNavigation}>
                {steps.map((step, index) => (
                    <div 
                        key={step.id}
                        className={`${styles.step} ${currentStep === step.id ? styles.active : ''} ${currentStep > step.id ? styles.completed : ''}`}
                        onClick={() => handleStepClick(step.id)}
                    >
                        <div className={styles.stepNumber}>{step.id}</div>
                        <div className={styles.stepInfo}>
                            <div className={styles.stepTitle}>{step.title}</div>
                            <div className={styles.stepDescription}>{step.description}</div>
                        </div>
                        {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
                    </div>
                ))}
            </div>

            {/* Contenu de l'étape actuelle */}
            <div className={styles.stepContent}>
                {currentStep === 1 && (
                    <CartStep 
                        items={items}
                        removeItem={removeItem}
                        updateQuantity={updateQuantity}
                        clearCart={handleClearCart}
                        isClearing={isClearing}
                        getCartTotal={getCartTotal}
                        getCartCount={getCartCount}
                        handleQuantityChange={handleQuantityChange}
                        onNext={handleNextStep}
                    />
                )}

                {currentStep === 2 && (
                    <ShippingStep 
                        shippingData={orderData.shipping}
                        onUpdate={(data) => updateOrderData('shipping', data)}
                        onNext={handleNextStep}
                        onPrev={handlePrevStep}
                    />
                )}

                {currentStep === 3 && (
                    <PaymentStep 
                        paymentData={orderData.payment}
                        onUpdate={(data) => updateOrderData('payment', data)}
                        onNext={handleNextStep}
                        onPrev={handlePrevStep}
                        total={getCartTotal()}
                    />
                )}

                {currentStep === 4 && (
                    <ConfirmationStep 
                        orderData={orderData}
                        items={items}
                        total={getCartTotal()}
                        onPrev={handlePrevStep}
                        onConfirm={() => {
                            // Ici on traiterait la commande
                            alert('Commande confirmée ! (Simulation)')
                            clearCart()
                            setCurrentStep(1)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

// Composant pour l'étape Panier
function CartStep({ items, removeItem, updateQuantity, clearCart, isClearing, getCartTotal, getCartCount, handleQuantityChange, onNext }) {
    return (
        <div className={styles.cartContent}>
            <div className={styles.cartItems}>
                {items.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        {/* Layout mobile */}
                        <div className={styles.mobileProductInfo}>
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
                        </div>

                        <div className={styles.mobileActions}>
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

                        {/* Layout desktop (masqué sur mobile) */}
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

                    <button className={styles.checkoutBtn} onClick={onNext}>
                        Procéder à la livraison
                    </button>

                    <button 
                        onClick={clearCart}
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
    )
}

// Composant pour l'étape Livraison
function ShippingStep({ shippingData, onUpdate, onNext, onPrev }) {
    const [formData, setFormData] = useState(shippingData)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        onUpdate({ [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <div className={styles.shippingStep}>
            <h2>Adresse de livraison</h2>
            <form onSubmit={handleSubmit} className={styles.shippingForm}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">Prénom *</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Nom *</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="address">Adresse *</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">Ville *</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="zipCode">Code postal *</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="country">Pays *</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Suisse">Suisse</option>
                        <option value="Luxembourg">Luxembourg</option>
                    </select>
                </div>

                <div className={styles.stepButtons}>
                    <button type="button" onClick={onPrev} className={styles.prevBtn}>
                        ← Retour au panier
                    </button>
                    <button type="submit" className={styles.nextBtn}>
                        Continuer au paiement →
                    </button>
                </div>
            </form>
        </div>
    )
}

// Composant pour l'étape Paiement
function PaymentStep({ paymentData, onUpdate, onNext, onPrev, total }) {
    const [formData, setFormData] = useState(paymentData)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        onUpdate({ [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    return (
        <div className={styles.paymentStep}>
            <h2>Mode de paiement</h2>
            
            <div className={styles.paymentMethods}>
                <div className={styles.paymentMethod}>
                    <input
                        type="radio"
                        id="card"
                        name="method"
                        value="card"
                        checked={formData.method === 'card'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="card">
                        Carte bancaire
                    </label>
                </div>
                
                <div className={styles.paymentMethod}>
                    <input
                        type="radio"
                        id="paypal"
                        name="method"
                        value="paypal"
                        checked={formData.method === 'paypal'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="paypal">
                        PayPal
                    </label>
                </div>
            </div>

            {formData.method === 'card' && (
                <form onSubmit={handleSubmit} className={styles.paymentForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="cardName">Nom sur la carte *</label>
                        <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cardNumber">Numéro de carte *</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardExpiry">Expiration *</label>
                            <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                placeholder="MM/AA"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardCVC">CVC *</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                value={formData.cardCVC}
                                onChange={handleInputChange}
                                placeholder="123"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.orderSummary}>
                        <h3>Récapitulatif de la commande</h3>
                        <div className={styles.summaryTotal}>
                            Total à payer : <strong>{total.toLocaleString('fr-FR')} €</strong>
                        </div>
                    </div>

                    <div className={styles.stepButtons}>
                        <button type="button" onClick={onPrev} className={styles.prevBtn}>
                            ← Retour livraison
                        </button>
                        <button type="submit" className={styles.nextBtn}>
                            Confirmer la commande →
                        </button>
                    </div>
                </form>
            )}

            {formData.method === 'paypal' && (
                <div className={styles.paypalSection}>
                    <div className={styles.orderSummary}>
                        <h3>Récapitulatif de la commande</h3>
                        <div className={styles.summaryTotal}>
                            Total à payer : <strong>{total.toLocaleString('fr-FR')} €</strong>
                        </div>
                    </div>
                    
                    <div className={styles.stepButtons}>
                        <button type="button" onClick={onPrev} className={styles.prevBtn}>
                            ← Retour livraison
                        </button>
                        <button onClick={onNext} className={styles.nextBtn}>
                            Payer avec PayPal →
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

// Composant pour l'étape Confirmation
function ConfirmationStep({ orderData, items, total, onPrev, onConfirm }) {
    return (
        <div className={styles.confirmationStep}>
            <h2>Confirmation de commande</h2>
            
            <div className={styles.confirmationContent}>
                <div className={styles.orderDetails}>
                    <div className={styles.section}>
                        <h3>Livraison</h3>
                        <div className={styles.addressBlock}>
                            <p><strong>{orderData.shipping.firstName} {orderData.shipping.lastName}</strong></p>
                            <p>{orderData.shipping.address}</p>
                            <p>{orderData.shipping.zipCode} {orderData.shipping.city}</p>
                            <p>{orderData.shipping.country}</p>
                            <p>Email: {orderData.shipping.email}</p>
                            {orderData.shipping.phone && <p>Tél: {orderData.shipping.phone}</p>}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Paiement</h3>
                        <div className={styles.paymentInfo}>
                            <p>Mode: {orderData.payment.method === 'card' ? 'Carte bancaire' : 'PayPal'}</p>
                            {orderData.payment.method === 'card' && (
                                <p>Carte: **** **** **** {orderData.payment.cardNumber.slice(-4)}</p>
                            )}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Articles commandés</h3>
                        <div className={styles.orderItems}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.orderItem}>
                                    <Image 
                                        src={item.images[0]} 
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className={styles.itemInfo}>
                                        <h4>{item.name}</h4>
                                        <p>Quantité: {item.quantity}</p>
                                    </div>
                                    <div className={styles.itemTotal}>
                                        {(item.price * item.quantity).toLocaleString('fr-FR')} €
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.finalSummary}>
                    <h3>Total de la commande</h3>
                    <div className={styles.finalTotal}>
                        <strong>{total.toLocaleString('fr-FR')} €</strong>
                    </div>
                    
                    <div className={styles.stepButtons}>
                        <button onClick={onPrev} className={styles.prevBtn}>
                            ← Modifier le paiement
                        </button>
                        <button onClick={onConfirm} className={styles.confirmBtn}>
                            Confirmer la commande
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 