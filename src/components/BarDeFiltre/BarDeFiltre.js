'use client'
import styles from './BarDeFiltre.module.scss'
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useWindowWidth from '@/app/hooks/useWindowsWidth'
import Image from 'next/image'

const defaultFiltres = {
    categories: [],
    prix: { min: 0, max: 3500 },
    pierres: [],
    materiaux: [],
    couleurs: []
};

export const BarDeFiltre = forwardRef(({ 
    gridHeight, 
    onFilterChange, 
    isOpen, 
    onToggle,
    showPriceFilter = true,
    showCategories = true,
    showStones = true,
    showMaterials = true,
    showColors = true,
    gridVisibilityRef
}, ref) => {
    const [filtres, setFiltres] = useState(defaultFiltres);
    const [tempFiltres, setTempFiltres] = useState(defaultFiltres);
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 1024;
    const [showStickyButton, setShowStickyButton] = useState(false);
    const filterWrapperRef = useRef(null);
    
    // États pour les sections déroulantes
    const [sectionsOpen, setSectionsOpen] = useState({
        prix: false,
        categories: false,
        pierres: false,
        materiaux: false,
        couleurs: false
    });

    const scrollToGrid = () => {
        if (gridVisibilityRef?.current) {
            const element = gridVisibilityRef.current;
            const elementTop = element.offsetTop;
            const offset = 120; // Ajuste ce nombre pour plus ou moins d'espace
            
            window.scrollTo({
                top: elementTop - offset,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
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
        scrollToGrid();
    };

    const handleResetFilters = () => {
        setTempFiltres(defaultFiltres);
        setFiltres(defaultFiltres);
        onFilterChange?.(defaultFiltres);
        scrollToGrid();
    };

    const toggleSection = (sectionName) => {
        setSectionsOpen(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    useImperativeHandle(ref, () => ({
        resetFilters: handleResetFilters
    }));

    useEffect(() => {
        if (!gridVisibilityRef?.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setShowStickyButton(entry.isIntersecting && entry.intersectionRatio > 0);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-100px 0px 0px 0px',
            }
        );
        observer.observe(gridVisibilityRef.current);
        return () => observer.disconnect();
    }, [gridVisibilityRef]);

    // Fermer le filtre quand on clique à l'extérieur (seulement en mobile)
    useEffect(() => {
        if (!isMobile || !isOpen) return;

        const handleClickOutside = (event) => {
            if (filterWrapperRef.current && !filterWrapperRef.current.contains(event.target)) {
                onToggle();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, isOpen, onToggle]);

    return (
        <div className={`${styles.filterWrapper} ${isOpen ? styles.open : styles.closed}`} ref={filterWrapperRef}>
            {/* Overlay cliquable pour fermer le filtre */}
            {isMobile && isOpen && (
                <div className={styles.overlay} onClick={onToggle} />
            )}
            <form 
                className={styles.barDeFiltreContainer}
                style={windowWidth > 1000 ? {
                    height: `${gridHeight+800}px`,
                    overflowY: 'auto',
                  } : {
                    height: 'auto',
                    overflowY: 'auto',
                  }}
                >
                {showPriceFilter && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer} onClick={() => toggleSection('prix')}>
                            <h3>Prix</h3>
                            <span className={`${styles.arrow} ${sectionsOpen.prix ? styles.open : ''}`}>
                                &gt;
                            </span>
                        </div>
                        <AnimatePresence>
                            {sectionsOpen.prix && (
                                <motion.div 
                                    className={styles.priceRangeContainer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {showCategories && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer} onClick={() => toggleSection('categories')}>
                            <Image src="/icons/filtre/bague.svg" alt="Catégories" width={30} height={30} />
                            <h3>Catégories</h3>
                            <span className={`${styles.arrow} ${sectionsOpen.categories ? styles.open : ''}`}>
                                &gt;
                            </span>
                        </div>
                        <AnimatePresence>
                            {sectionsOpen.categories && (
                                <motion.div 
                                    className={styles.optionsContainer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {showStones && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer} onClick={() => toggleSection('pierres')}>
                            <Image src="/icons/filtre/pierre.svg" alt="Catégories" width={30} height={30} />
                            <h3>Pierres</h3>
                            <span className={`${styles.arrow} ${sectionsOpen.pierres ? styles.open : ''}`}>
                                &gt;
                            </span>
                        </div>
                        <AnimatePresence>
                            {sectionsOpen.pierres && (
                                <motion.div 
                                    className={styles.optionsContainer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {showMaterials && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer} onClick={() => toggleSection('materiaux')}>
                            <Image src="/icons/filtre/metal.svg" alt="Catégories" width={30} height={30} />
                            <h3>Matériaux</h3>
                            <span className={`${styles.arrow} ${sectionsOpen.materiaux ? styles.open : ''}`}>
                                &gt;
                            </span>
                        </div>
                        <AnimatePresence>
                            {sectionsOpen.materiaux && (
                                <motion.div 
                                    className={styles.optionsContainer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {showColors && (
                    <div className={styles.filtreSection}>
                        <div className={styles.titleContainer} onClick={() => toggleSection('couleurs')}>
                            <h3>Couleurs</h3>
                            <span className={`${styles.arrow} ${sectionsOpen.couleurs ? styles.open : ''}`}>
                                &gt;
                            </span>
                        </div>
                        <AnimatePresence>
                            {sectionsOpen.couleurs && (
                                <motion.div 
                                    className={styles.optionsContainer}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
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
                                </motion.div>
                            )}
                        </AnimatePresence>
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
            {isMobile && (
                <button
                    className={`${styles.isOpenButton} ${isOpen ? styles.open : ''} ${showStickyButton ? styles.isVisible : ''}`}
                    onClick={onToggle}
                    aria-label={isOpen ? 'Fermer les filtres' : 'Ouvrir les filtres'}
                >
                    <span className={styles.buttonIcon}>{isOpen ? '←' : ""}</span>
                    <span className={styles.buttonText}>
                        {isOpen ? 'Fermer les filtres' : 'Ouvrir les filtres'}
                    </span>
                </button>
            )}
        </div>
    )
});

BarDeFiltre.displayName = 'BarDeFiltre';

export default BarDeFiltre;