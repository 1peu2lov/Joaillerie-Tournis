'use client'

import styles from './ProductsGrid.module.scss'
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import productsData from '../../data/products.json'
import { useElementHeight } from '../hooks/useElementHeight'

const INITIAL_LOAD = 8;
const LOAD_MORE_INCREMENT = 8;

const ProductsGrid = forwardRef(({ onHeightChange, isFilterOpen }, ref) => {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [visibleProducts, setVisibleProducts] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const { ref: gridRef, height: gridHeight } = useElementHeight();
  const loadingRef = useRef(null);

  useImperativeHandle(ref, () => ({
    applyFilters: (filtres) => {
      let filtered = productsData;

      if (filtres.categories.length > 0) {
        filtered = filtered.filter(product => 
          filtres.categories.includes(product.category)
        );
      }

      filtered = filtered.filter(product => 
        product.price >= filtres.prix.min && product.price <= filtres.prix.max
      );

      if (filtres.pierres.length > 0) {
        filtered = filtered.filter(product => 
          product.stones.some(stone => filtres.pierres.includes(stone))
        );
      }

      if (filtres.materiaux.length > 0) {
        filtered = filtered.filter(product => 
          product.materials.some(material => filtres.materiaux.includes(material))
        );
      }

      if (filtres.couleurs.length > 0) {
        filtered = filtered.filter(product => 
          product.colors.some(color => filtres.couleurs.includes(color))
        );
      }

      setFilteredProducts(filtered);
      setVisibleProducts(INITIAL_LOAD);
    }
  }));

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(gridHeight);
    }
  }, [gridHeight, onHeightChange]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && visibleProducts < filteredProducts.length) {
          handleLoadMore();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [visibleProducts, filteredProducts.length, isLoading]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => Math.min(prev + LOAD_MORE_INCREMENT, filteredProducts.length));
      setIsLoading(false);
    }, 300);
  };

  const shouldBeSpecial = (index) => {
    // On ne commence pas avant l'index 7
    if (index < 7) return false;
    
    // On veut une carte spéciale tous les 8-16 positions
    // (7-15 cartes normales + 1 carte spéciale)
    return (index + 1) % 8 === 0;
  };

  return (
    <div className={`${styles.productsGridContainer} ${!isFilterOpen ? styles.fullWidth : ''}`}>
      <div ref={gridRef} className={styles.productsGrid}>
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            variant={shouldBeSpecial(index) ? 'special' : 'normal'}
          />
        ))}
      </div>

      {visibleProducts < filteredProducts.length && (
        <div ref={loadingRef} className={styles.loadingContainer}>
          {isLoading ? (
            <div className={styles.loadingSpinner}>Chargement...</div>
          ) : (
            <button 
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
            >
              Voir plus de produits
            </button>
          )}
        </div>
      )}
    </div>
  );
});

ProductsGrid.displayName = 'ProductsGrid';

export default ProductsGrid;
