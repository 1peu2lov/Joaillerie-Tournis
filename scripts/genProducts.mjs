// scripts/genProducts.js
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import path from 'path'

// Plage de prix par catégorie (à adapter)
const priceRanges = {
  bagues:    [500, 5000],
  bracelets: [300, 3000],
  colliers:  [400, 4000],
  boucles:   [200, 2000],
  montres:   [800, 8000]
}

// Options de métaux, pierres, couleurs
const materialOptions = ['Or jaune', 'Or rose', 'Argent 925', 'Platine']
const stoneOptions    = ['Diamant', 'Saphir', 'Rubis', 'Émeraude']
const colorOptions    = ['#ffd700', '#c0c0c0', '#b76e79', '#000000']

function randomIn([min, max]) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10
}

// Récupère tous les fichiers images
const productsDir = path.resolve('./public/img/products')
const files = existsSync(productsDir)
  ? readdirSync(productsDir).filter(f => /\.(jpe?g|png|webp)$/.test(f))
  : []

// Génère le tableau
const products = files.map((file, idx) => {
  const [categoryRaw] = file.split('-')
  const category       = categoryRaw.toLowerCase()
  const price          = priceRanges[category]
    ? randomIn(priceRanges[category])
    : randomIn([100, 1000])

  // Mélange possible pour matériaux, pierres, couleurs
  const materials = [
    materialOptions[Math.floor(Math.random() * materialOptions.length)]
  ]
  const stones    = Math.random() < 0.5
    ? [ stoneOptions[Math.floor(Math.random() * stoneOptions.length)] ]
    : []
  const colors    = [
    colorOptions[Math.floor(Math.random() * colorOptions.length)]
  ]
  const isRecycled = Math.random() < 0.2 // 20% de chance

  return {
    id:          `prod-${idx + 1}`,
    name:        `${category.charAt(0).toUpperCase() + category.slice(1)} ${idx + 1}`,
    description: `Description pour ${category} ${idx + 1}`,
    price,
    currency:    'EUR',
    images:      [`/img/products/${file}`],
    category,
    availability: true,

    // NOUVEAUX CHAMPS
    materials,
    stones,
    colors,
    isRecycled
  }
})

// Crée le dossier data/ s’il n’existe pas
const outDir = path.resolve('./data')
if (!existsSync(outDir)) mkdirSync(outDir)

// Écrit le JSON
writeFileSync(
  path.join(outDir, 'products.json'),
  JSON.stringify(products, null, 2),
  'utf-8'
)

console.log(`✅ Génération terminée : ${products.length} produits créés dans data/products.json`)
