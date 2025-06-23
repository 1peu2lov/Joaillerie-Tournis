# 💎 Site Web Joaillerie Tournis

**Site web officiel de la Joaillerie Tournis - Bordeaux depuis 1896**

Un site vitrine et e-commerce moderne développé avec Next.js 15, présentant le savoir-faire artisanal d'une maison de joaillerie bordelaise centenaire.

---

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Fonctionnalités](#fonctionnalités)
- [Architecture technique](#architecture-technique)
- [Structure du projet](#structure-du-projet)
- [Installation et développement](#installation-et-développement)
- [Pages du site](#pages-du-site)
- [Composants principaux](#composants-principaux)
- [Gestion des données](#gestion-des-données)
- [SEO et performance](#seo-et-performance)
- [Déploiement](#déploiement)

---

## 🎯 Vue d'ensemble

### À propos de Tournis

La Joaillerie Tournis est une maison familiale bordelaise fondée en 1896, spécialisée dans :

- **Créations sur mesure** : Bijoux uniques conçus selon vos désirs
- **Transformations** : Redonnez vie à vos bijoux anciens
- **Réparations** : Interventions de précision par nos maîtres joailliers
- **Expertises** : Évaluations professionnelles de bijoux
- **E-boutique** : Sélection de bijoux prêts à être adoptés

### Le site web

Ce site présente l'excellence artisanale française à travers une interface moderne et élégante, offrant :

- Une vitrine digitale complète des services
- Une boutique en ligne avec système de panier
- Un système de prise de rendez-vous
- Une galerie des créations sur mesure
- Du contenu éducatif sur les pierres et métaux précieux

---

## ⚡ Fonctionnalités

### 🛍️ E-commerce

- **Catalogue produits** avec filtres avancés (catégorie, matériaux, pierres, prix, couleurs)
- **Système de panier** persistant avec localStorage
- **Fiches produits** détaillées avec galerie d'images
- **Gestion des disponibilités** et des stocks

### 🎨 Expérience utilisateur

- **Design responsive** adapté à tous les écrans
- **Animations fluides** avec Framer Motion
- **Navigation intuitive** avec menu dropdown pour les services
- **Carrousels interactifs** pour présenter les créations
- **Optimisation mobile** complète

### 📱 Interface moderne

- **Menu hamburger** pour mobile avec animations
- **Sticky header** avec indicateurs de section active
- **Scroll to top** automatique
- **Transitions de page** élégantes
- **Filtres interactifs** pour la boutique

### 🎯 Fonctionnalités métier

- **Prise de rendez-vous** avec formulaire dédié
- **Formulaire de contact** professionnel
- **Galerie créations** avec catégorisation
- **Pages services** détaillées (fabrication, transformation, réparation, expertise)
- **Section mariage** spécialisée

---

## 🏗️ Architecture technique

### Stack technologique

- **Framework** : Next.js 15 (App Router)
- **Langage** : JavaScript (ES6+)
- **Styling** : SCSS avec modules CSS
- **Animations** : Framer Motion
- **Carrousels** : Keen Slider
- **Cartes** : Google Maps API
- **Formulaires** : React DatePicker, date-fns
- **State Management** : React Context API

### Structure App Router

```
src/app/
├── layout.js              # Layout racine avec Header/Footer
├── page.js                # Page d'accueil
├── boutique/              # E-boutique avec filtres
├── creations/             # Galerie des créations
├── services/              # Page services générale
├── fabrications/          # Service fabrication
├── transformations/       # Service transformation
├── reparations/           # Service réparations
├── expertises/            # Service expertises
├── pierres/               # Collection pierres
├── conseils/              # Conseils et garanties
├── mariage/               # Section mariage
├── maison/                # Histoire de la maison
├── contact/               # Contact et localisation
├── rendez-vous/           # Prise de rendez-vous
├── evenements/            # Événements
└── panier/                # Gestion du panier
```

### Composants réutilisables

```
src/components/
├── Header/                # Navigation principale
├── Footer/                # Pied de page
├── ProductsGrid/          # Grille produits avec filtres
├── ProductCard/           # Carte produit individuelle
├── ProductImageGallery/   # Galerie images produit
├── BarDeFiltre/           # Barre de filtres boutique
├── CreationsCarousel/     # Carrousel créations
├── RedirectionCarousel/   # Carrousel services
├── SavoirFaireSection/    # Section savoir-faire
├── HeroSection/           # Section hero accueil
├── BookingForm/           # Formulaire rendez-vous
├── ContactForm/           # Formulaire contact
└── GoogleMapComponent/    # Intégration Google Maps
```

---

## 📁 Structure du projet

### Dossiers principaux

```
tournis/
├── public/                    # Assets statiques
│   ├── img/                  # Images du site
│   │   ├── home/            # Images page d'accueil
│   │   ├── products/        # Images produits
│   │   ├── histoire/        # Photos équipe
│   │   ├── savoir-faire/    # Images services
│   │   └── logo/            # Logos et branding
│   └── icons/               # Icônes SVG
├── src/
│   ├── app/                 # Pages (App Router)
│   ├── components/          # Composants réutilisables
│   ├── contexts/            # Contexts React (Panier)
│   ├── data/               # Données JSON (produits)
│   └── styles/             # Styles globaux SCSS
└── scripts/                # Scripts utilitaires
```

### Données

**Produits** (`src/data/products.json`) :

- **125 bijoux** répertoriés avec métadonnées complètes
- **Catégories** : alliances, bracelets, colliers, boucles d'oreilles
- **Propriétés** : prix, matériaux, pierres, couleurs, disponibilité
- **Images** haute résolution pour chaque produit

**Structure d'un produit** :

```json
{
  "id": "alliance-001",
  "name": "Alliance Épure",
  "description": "Alliance minimaliste en or blanc...",
  "price": 590,
  "currency": "EUR",
  "images": ["/img/products/images/alliance-001.jpeg"],
  "category": "alliance",
  "availability": true,
  "materials": ["Or blanc 18 carats"],
  "stones": ["Diamant"],
  "colors": ["#FFFFFF"],
  "isRecycled": true
}
```

---

## 🚀 Installation et développement

### Prérequis

- **Node.js** 18.17+
- **npm** ou **yarn**

### Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd tournis

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles

```bash
npm run dev          # Serveur de développement (avec Turbopack)
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

### Variables d'environnement

Créer un fichier `.env.local` :

```env
# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Configuration de production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tournis.netlify.app
```

---

## 📄 Pages du site

### 🏠 Page d'accueil (`/`)

- **Section hero** avec vidéo d'ambiance
- **Section SEO** présentant l'histoire depuis 1896
- **Carrousel de redirection** vers les services principaux
- **Section rendez-vous** avec call-to-action
- **Section savoir-faire** avec 5 expertises
- **Témoignages clients** authentiques

### 🛍️ E-boutique (`/boutique`)

- **Section hero** avec image d'ambiance
- **Description curatée** de la sélection
- **Filtres avancés** : catégorie, matériaux, pierres, prix, couleurs
- **Grille responsive** avec pagination intelligente
- **125 produits** avec fiches détaillées

### 🎨 Créations (`/creations`)

- **Galerie portfolio** des réalisations sur mesure
- **Filtres par catégorie** (bagues, colliers, bracelets, etc.)
- **Carrousel interactif** avec descriptions détaillées
- **Call-to-action** vers prise de rendez-vous

### 🔧 Services spécialisés

- **`/fabrications`** : Processus de création sur mesure
- **`/transformations`** : Avant/après des transformations
- **`/reparations`** : Expertise en réparations de précision
- **`/expertises`** : Évaluations professionnelles
- **`/pierres`** : Collection et guide des pierres précieuses
- **`/conseils`** : Conseils d'entretien et garanties

### 💍 Mariage (`/mariage`)

- **Section dédiée** aux créations de mariage
- **Alliances sur mesure** et bagues de fiançailles
- **Processus de création** expliqué étape par étape
- **Galerie inspirations** pour couples

### 🏛️ Notre maison (`/maison`)

- **Histoire familiale** depuis 1896 (4 générations)
- **Présentation de l'équipe** avec photos
- **Valeurs et savoir-faire** de la maison
- **Atelier bordelais** et process artisanal

### 📞 Contact (`/contact`)

- **Formulaire de contact** complet
- **Informations pratiques** (adresse, horaires, téléphone)
- **Carte Google Maps** interactive
- **Réseaux sociaux** et moyens de contact

### 📅 Rendez-vous (`/rendez-vous`)

- **Formulaire de prise de rendez-vous** avec DatePicker
- **Choix du type de service** (création, transformation, réparation, expertise)
- **Sélection créneaux horaires** disponibles
- **Confirmation automatique** par email

### 🛒 Panier (`/panier`)

- **Gestion complète du panier** avec localStorage
- **Modification des quantités** en temps réel
- **Calcul automatique** des totaux
- **Processus de commande** (à finaliser avec paiement)

---

## 🧩 Composants principaux

### Header (`/components/Header/`)

**Fonctionnalités** :

- Navigation responsive avec menu hamburger mobile
- Menu dropdown pour les services (hover desktop)
- Indicateurs visuels de page active
- Compteur panier en temps réel
- Logo cliquable vers accueil

**Technologies** : Framer Motion pour animations, Next.js Image pour optimisation

### ProductsGrid (`/components/ProductsGrid/`)

**Fonctionnalités** :

- Affichage en grille responsive (1-4 colonnes)
- Filtrage en temps réel par multiple critères
- Pagination automatique par hauteur
- Reset des filtres
- Gestion des états de chargement

**Intégration** : Communication avec BarDeFiltre via refs

### BarDeFiltre (`/components/BarDeFiltre/`)

**Fonctionnalités** :

- Filtres par catégorie (alliance, bracelet, collier, boucles)
- Filtres par matériaux (or, argent, platine, etc.)
- Filtres par pierres (diamant, rubis, saphir, émeraude, etc.)
- Filtre par gamme de prix avec slider
- Filtres par couleurs avec sélecteur visuel
- Mode sticky sur desktop, overlay sur mobile

### CartContext (`/contexts/CartContext.js`)

**Fonctionnalités** :

- State management du panier avec useReducer
- Persistance localStorage automatique
- Actions : ajouter, supprimer, modifier quantité, vider
- Calculs : total prix, nombre d'items
- Gestion des erreurs et validation

---

## 🎨 Design et styles

### Système de design

- **Palette** : Bleus profonds (#1E2846), ors élégants, blancs purs
- **Typographie** : Geist (moderne), Galter (élégante pour titres)
- **Breakpoints** : Mobile-first avec 4 points de rupture
- **Composants** : SCSS modules pour isolation des styles

### Structure SCSS

```
src/styles/
├── globals.scss           # Styles globaux et reset
├── abstracts/
│   ├── _variables.scss    # Variables couleurs, tailles, etc.
│   ├── _breakpoints.scss  # Points de rupture responsive
│   └── _typography.scss   # Styles typographiques
```

### Animations

- **Framer Motion** pour transitions de page et composants
- **CSS transforms** pour micro-interactions
- **Keen Slider** pour carrousels fluides
- **Transitions hover** subtiles sur les éléments interactifs

---

## 🔍 SEO et performance

### Optimisation SEO

- **Métadonnées complètes** avec Open Graph et Twitter Cards
- **JSON-LD structuré** pour les moteurs de recherche
- **URLs sémantiques** et breadcrumbs
- **Images optimisées** avec alt-text descriptifs
- **Balises h1-h6** hiérarchisées correctement

### Performance

- **Next.js Image** avec lazy loading et responsive
- **Preload** des images critiques (hero sections)
- **SCSS modules** pour CSS optimisé
- **Code splitting** automatique avec App Router
- **Fonts optimisées** avec next/font

### Métadonnées exemple

```javascript
export const metadata = {
  title: "Joaillerie Tournis Bordeaux - Bijoux sur mesure depuis 1896",
  description:
    "Joaillerie Tournis Bordeaux : bijoux sur mesure, alliances uniques et expertises depuis 1896.",
  keywords:
    "joaillerie, bijoux, Bordeaux, création sur mesure, transformation bijoux",
  // ... métadonnées complètes
};
```

---

## 🚀 Déploiement

### Environnements

- **Développement** : `http://localhost:3000`
- **Production** : `https://tournis.netlify.app`

### Configuration Netlify

1. **Build command** : `npm run build`
2. **Publish directory** : `out` (si export statique) ou `.next`
3. **Environment variables** : Configurer les clés API Google Maps
4. **Headers** : Configuration dans `public/_headers`

### Optimisations production

- **Compression Gzip** automatique
- **Cache des assets** optimisé
- **CDN** pour images et assets statiques
- **HTTPS** et certificats SSL automatiques

---

## 🛠️ Maintenance et évolution

### Scripts utilitaires

- **`scripts/genProducts.mjs`** : Génération automatique de produits depuis les images

### Bonnes pratiques

- **Commits conventionnels** avec préfixes (feat, fix, docs, etc.)
- **Tests** recommandés pour les fonctionnalités critiques
- **Backup régulier** des données produits
- **Monitoring** des performances et erreurs

### Évolutions futures possibles

- **Système de paiement** (Stripe, PayPal)
- **Compte client** avec historique commandes
- **Notifications email** automatiques
- **CMS** pour gestion du contenu par les clients
- **Multi-langue** (anglais, espagnol)
- **Progressive Web App** avec notifications push

---

## 📧 Support et contact

**Développement technique** : Contact via les issues GitHub
**Contenu métier** : équipe@tournis.fr
**Site en production** : [https://tournis.netlify.app](https://tournis.netlify.app)

---

_Documentation rédigée pour la Joaillerie Tournis - Bordeaux depuis 1896_
_Dernière mise à jour : Décembre 2024_
