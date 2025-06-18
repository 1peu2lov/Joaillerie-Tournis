'use client'
import { useState, useMemo } from 'react'
import products from '@/data/products.json'
import ProductCard from '@/components/ProductCard/ProductCard'
import styles from './FiltreBoutique.module.scss'

export default function FiltreBoutique() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [metals, setMetals] = useState([])
  const [stones, setStones] = useState([])
  const [recycled, setRecycled] = useState(false)
  const [colors, setColors] = useState([])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map(p => p.category)))
    return ['all', ...cats]
  }, [])

  const metalOptions = ['Or jaune', 'Or rose', 'Argent', 'Platine']
  const stoneOptions = ['Diamant', 'Saphir', 'Rubis', 'Émeraude']
  const colorOptions = ['#ffd700', '#c0c0c0', '#b76e79', '#000000']

  const toggleArray = (arr, setArr, value) => {
    setArr(prev => prev.includes(value)
      ? prev.filter(item => item !== value)
      : [...prev, value]
    )
  }

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (!p.name.toLowerCase().includes(search.toLowerCase())) return false
      if (category !== 'all' && p.category !== category) return false
      if (minPrice && p.price < +minPrice) return false
      if (maxPrice && p.price > +maxPrice) return false
      if (metals.length && !metals.some(m => p.materials.includes(m))) return false
      if (stones.length && !stones.some(s => p.materials.includes(s))) return false
      if (recycled && !p.isRecycled) return false
      if (colors.length && !colors.some(c => p.colors.includes(c))) return false
      return true
    })
  }, [search, category, minPrice, maxPrice, metals, stones, recycled, colors])

  return (
    <section className={styles.container}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Rechercher un bijou…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.search}
        />

        <div className={styles.filterGroup}>
          <label>Prix (€)</label>
          <div className={styles.priceInputs}>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
            />
            <span>–</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Catégorie</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Métal</label>
          <div className={styles.checkboxGroup}>
            {metalOptions.map(m => (
              <label key={m} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={metals.includes(m)}
                  onChange={() => toggleArray(metals, setMetals, m)}
                /> {m}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label>Pierres</label>
          <div className={styles.checkboxGroup}>
            {stoneOptions.map(s => (
              <label key={s} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={stones.includes(s)}
                  onChange={() => toggleArray(stones, setStones, s)}
                /> {s}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={recycled}
              onChange={e => setRecycled(e.target.checked)}
            /> Recyclé
          </label>
        </div>

        <div className={styles.filterGroup}>
          <label>Couleurs</label>
          <div className={styles.colorSwatches}>
            {colorOptions.map(color => (
              <button
                key={color}
                className={styles.swatch}
                style={{ backgroundColor: color }}
                onClick={() => toggleArray(colors, setColors, color)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
