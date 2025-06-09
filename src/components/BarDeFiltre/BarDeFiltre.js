'use client'
import styles from './BarDeFiltre.module.scss'
import { useState, useEffect } from 'react'
import useWindowWidth from '@/app/hooks/useWindowsWidth'
import Image from 'next/image'

const defaultFiltres = {
    categories: [],
    prix: { min: 0, max: 3500 },
    pierres: [],
    materiaux: [],
    couleurs: []
};

export function BarDeFiltre({ 
    gridHeight, 
    onFilterChange, 
    isOpen, 
    onToggle,
    showPriceFilter = true,
    showCategories = true,
    showStones = true,
    showMaterials = true,
    showColors = true
}) {
    const [filtres, setFiltres] = useState(defaultFiltres);
    const [tempFiltres, setTempFiltres] = useState(defaultFiltres);
    const windowWidth = useWindowWidth();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleChange = (categorie, valeur) => {
        setTempFiltres(prev => {
            const newFiltres = {
                ...prev,
                [categorie]: categorie === 'prix' ? valeur : 
                    prev[categorie].includes(valeur)
                        ? prev[categorie].filter(item => item !== valeur)
                        : [...prev[categorie], valeur]
            };
            return newFiltres;
        });
    };

    const handlePriceChange = (type, value) => {
        setTempFiltres(prev => {
            const newFiltres = {
                ...prev,
                prix: {
                    ...prev.prix,
                    [type]: parseInt(value)
                }
            };
            return newFiltres;
        });
    };

    const handleApplyFilters = () => {
        setFiltres(tempFiltres);
        onFilterChange?.(tempFiltres);
        scrollToTop();
    };

    const handleResetFilters = () => {
        setTempFiltres(defaultFiltres);
        setFiltres(defaultFiltres);
        onFilterChange?.(defaultFiltres);
        scrollToTop();
    };

    return (
        <div className={`${styles.filterWrapper} ${isOpen ? styles.open : styles.closed}`}>
            <form 
                className={styles.barDeFiltreContainer}
                style={windowWidth > 1000 ? {
                    height: `${gridHeight+30}px`,
                    overflowY: 'auto',
                  } : {
                    height: 'auto',
                    overflowY: 'auto',
                  }}
                >
                {showCategories && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer}>
                            <Image src="/images/icon-bague.svg" alt="Catégories" width={30} height={30} />
                            <h3>Catégories</h3>
                        </div>
                        <div className={styles.optionsContainer}>
                            {['alliance', 'bracelet', 'collier', 'boucles','bague'].map(cat => (
                                <label key={cat}>
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleChange('categories', cat)}
                                        checked={tempFiltres.categories.includes(cat)}
                                    />
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {showPriceFilter && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer}>
                            <h3>Prix</h3>
                        </div>
                        <div className={styles.priceRangeContainer}>
                            <div className={styles.priceInputs}>
                                <input
                                    type="number"
                                    value={tempFiltres.prix.min}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    min="0"
                                    max={tempFiltres.prix.max}
                                />
                                <span>€</span>
                                <input
                                    type="number"
                                    value={tempFiltres.prix.max}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    min={tempFiltres.prix.min}
                                    max="3500"
                                />
                                <span>€</span>
                            </div>
                            <div className={styles.rangeSliders}>
                                <input
                                    type="range"
                                    value={tempFiltres.prix.min}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    min="0"
                                    max="3500"
                                />
                                <input
                                    type="range"
                                    value={tempFiltres.prix.max}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    min="0"
                                    max="3500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {showStones && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer}>
                            <Image src="/images/icon-pierre.svg" alt="Catégories" width={30} height={30} />
                            <h3>Pierres</h3>
                        </div>
                        <div className={styles.optionsContainer}>
                            {['Diamant', 'Rubis', 'Saphir', 'Émeraude', 'Perle'].map(pierre => (
                                <label key={pierre}>
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleChange('pierres', pierre)}
                                        checked={tempFiltres.pierres.includes(pierre)}
                                    />
                                    {pierre}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {showMaterials && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer}>
                            <Image src="/images/icon-metal.svg" alt="Catégories" width={30} height={30} />
                            <h3>Matériaux</h3>
                        </div>
                        <div className={styles.optionsContainer}>
                            {[
                                'Or blanc 18 carats',
                                'Or jaune 18 carats',
                                'Or rose 18 carats',
                                'Platine',
                                'Argent 925'
                            ].map(materiau => (
                                <label key={materiau}>
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleChange('materiaux', materiau)}
                                        checked={tempFiltres.materiaux.includes(materiau)}
                                    />
                                    {materiau}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {showColors && (
                    <div className={styles.filtreSection}>
                        <h3>Couleurs</h3>
                        <div className={styles.optionsContainer}>
                            {[
                                { value: '#FFFFFF', label: 'Blanc' },
                                { value: '#FFD700', label: 'Or' },
                                { value: '#C0C0C0', label: 'Argent' },
                                { value: '#FFB6C1', label: 'Rose' },
                                { value: '#FF0000', label: 'Rouge' },
                                { value: '#0000FF', label: 'Bleu' },
                                { value: '#50C878', label: 'Vert' }
                            ].map(couleur => (
                                <label key={couleur.value}>
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleChange('couleurs', couleur.value)}
                                        checked={tempFiltres.couleurs.includes(couleur.value)}
                                    />
                                    <span 
                                        className={styles.colorSwatch} 
                                        style={{ backgroundColor: couleur.value }}
                                    />
                                    {couleur.label}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.filterActions}>
                    <button 
                        type="button"
                        className={`${styles.filterButton} ${styles.applyButton}`}
                        onClick={handleApplyFilters}
                    >
                        Appliquer
                    </button>
                    <button 
                        type="button"
                        className={`${styles.filterButton} ${styles.resetButton}`}
                        onClick={handleResetFilters}
                    >
                        Restaurer
                    </button>
                </div>
            </form>
            <button 
                className={`${styles.isOpenButton} ${isOpen ? styles.open : ''}`}
                onClick={onToggle}
                aria-label={isOpen ? 'Fermer les filtres' : 'Ouvrir les filtres'}
            >
                <span className={styles.buttonIcon}>{isOpen ? '←' : ""}</span>
                <span className={styles.buttonText}>
                    {isOpen ? 'Fermer les filtres' : 'Ouvrir les filtres'}
                </span>
            </button>
        </div>
    )
}

export default BarDeFiltre;