'use client'
import { useState } from 'react'
import styles from './pierres.module.scss'
import Image from 'next/image'

const pierresParCouleur = {
  rouge: {
    title: "Pierres Rouges",
    description: "Symboles de passion et d'amour",
    pierres: [
      { nom: "Rubis", origine: "Birmanie", caracteristique: "Sang-de-pigeon", image: "/img/pierres/rubis.jpg" },
      { nom: "Grenat", origine: "Madagascar", caracteristique: "Rouge feu", image: "/img/pierres/grenat.jpg" },
      { nom: "Tourmaline rouge", origine: "Brésil", caracteristique: "Rouge rosé", image: "/img/pierres/tourmaline-rouge.jpg" },
      { nom: "Spinelle rouge", origine: "Myanmar", caracteristique: "Rouge pur", image: "/img/pierres/spinelle-rouge.jpg" }
    ]
  },
  bleu: {
    title: "Pierres Bleues",
    description: "Évoquent la sérénité et la sagesse",
    pierres: [
      { nom: "Saphir", origine: "Cachemire", caracteristique: "Bleu velours", image: "/img/pierres/saphir-bleu.jpg" },
      { nom: "Aigue-marine", origine: "Brésil", caracteristique: "Bleu océan", image: "/img/pierres/aigue-marine.jpg" },
      { nom: "Tanzanite", origine: "Tanzanie", caracteristique: "Bleu violet", image: "/img/pierres/tanzanite.jpg" },
      { nom: "Topaze bleue", origine: "Brésil", caracteristique: "Bleu ciel", image: "/img/pierres/topaze-bleue.jpg" }
    ]
  },
  vert: {
    title: "Pierres Vertes",
    description: "Représentent la nature et l'harmonie",
    pierres: [
      { nom: "Émeraude", origine: "Colombie", caracteristique: "Vert intense", image: "/img/pierres/emeraude.jpg" },
      { nom: "Péridot", origine: "Pakistan", caracteristique: "Vert olive", image: "/img/pierres/peridot.jpg" },
      { nom: "Tourmaline verte", origine: "Afghanistan", caracteristique: "Vert profond", image: "/img/pierres/tourmaline-verte.jpg" },
      { nom: "Tsavorite", origine: "Kenya", caracteristique: "Vert émeraude", image: "/img/pierres/tsavorite.jpg" }
    ]
  },
  rose: {
    title: "Pierres Roses",
    description: "Symboles de tendresse et de féminité",
    pierres: [
      { nom: "Morganite", origine: "Madagascar", caracteristique: "Rose pêche", image: "/img/pierres/morganite.jpg" },
      { nom: "Tourmaline rose", origine: "Brésil", caracteristique: "Rose bonbon", image: "/img/pierres/tourmaline-rose.jpg" },
      { nom: "Saphir rose", origine: "Sri Lanka", caracteristique: "Rose délicat", image: "/img/pierres/saphir-rose.jpg" },
      { nom: "Quartz rose", origine: "Madagascar", caracteristique: "Rose tendre", image: "/img/pierres/quartz-rose.jpg" }
    ]
  },
  violet: {
    title: "Pierres Violettes",
    description: "Évoquent le mystère et la royauté",
    pierres: [
      { nom: "Améthyste", origine: "Uruguay", caracteristique: "Violet profond", image: "/img/pierres/amethyste.jpg" },
      { nom: "Saphir violet", origine: "Sri Lanka", caracteristique: "Violet royal", image: "/img/pierres/saphir-violet.jpg" },
      { nom: "Charoïte", origine: "Russie", caracteristique: "Violet marbré", image: "/img/pierres/charoite.jpg" },
      { nom: "Iolite", origine: "Madagascar", caracteristique: "Violet bleuté", image: "/img/pierres/iolite.jpg" }
    ]
  },
  jaune: {
    title: "Pierres Jaunes & Oranges",
    description: "Rayonnent de chaleur et d'énergie",
    pierres: [
      { nom: "Citrine", origine: "Brésil", caracteristique: "Jaune doré", image: "/img/pierres/citrine.jpg" },
      { nom: "Saphir jaune", origine: "Sri Lanka", caracteristique: "Jaune canari", image: "/img/pierres/saphir-jaune.jpg" },
      { nom: "Opale de feu", origine: "Mexique", caracteristique: "Orange vif", image: "/img/pierres/opale-feu.jpg" },
      { nom: "Topaze impériale", origine: "Brésil", caracteristique: "Orange rosé", image: "/img/pierres/topaze-imperiale.jpg" }
    ]
  }
}

export default function PierresPage() {
  const [couleurActive, setCouleurActive] = useState('rouge')

  return (
    <div className={styles.pierresPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Collection Pierres</h1>
          <p className={styles.heroSubtitle}>
            Découvrez notre sélection de pierres précieuses organisée par couleurs
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/pierres.jpg" 
            alt="Collection de pierres précieuses" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Section navigation par couleurs */}
      <section className={styles.colorNavigation}>
        <div className={styles.container}>
          <h2>Explorez par couleurs</h2>
          <div className={styles.colorButtons}>
            {Object.entries(pierresParCouleur).map(([couleur, data]) => (
              <button
                key={couleur}
                className={`${styles.colorButton} ${styles[couleur]} ${couleurActive === couleur ? styles.active : ''}`}
                onClick={() => setCouleurActive(couleur)}
              >
                <span className={styles.colorDot}></span>
                {data.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section pierres par couleur */}
      <section className={styles.stonesSection}>
        <div className={styles.container}>
          <div className={styles.colorContent}>
            <div className={styles.colorInfo}>
              <h3>{pierresParCouleur[couleurActive].title}</h3>
              <p>{pierresParCouleur[couleurActive].description}</p>
            </div>
            
            <div className={styles.stonesGrid}>
              {pierresParCouleur[couleurActive].pierres.map((pierre, index) => (
                <div key={index} className={styles.stoneCard}>
                  <div className={styles.stoneImageContainer}>
                    <Image 
                      src={pierre.image} 
                      alt={pierre.nom}
                      width={300}
                      height={200}
                      style={{ objectFit: 'cover' }}
                    
                    />
                  </div>
                  <div className={styles.stoneInfo}>
                    <h4>{pierre.nom}</h4>
                    <div className={styles.stoneDetails}>
                      <span><strong>Origine :</strong> {pierre.origine}</span>
                      <span><strong>Caractéristique :</strong> {pierre.caracteristique}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Diamant spéciale */}
      <section className={styles.diamondSection}>
        <div className={styles.container}>
          <div className={styles.diamondContent}>
            <div className={styles.diamondText}>
              <h2>Le Diamant</h2>
              <p>
                Comment choisir un diamant pour une bague de fiançailles ? Que faut-il savoir avant 
                de se lancer dans un tel achat ?
              </p>
              <div className={styles.diamondCriteria}>
                <h3>Les 4 critères d&apos;évaluation :</h3>
                <ul>
                  <li><strong>CARAT :</strong> Le poids en carats (Carats)</li>
                  <li><strong>CUT :</strong> La taille (Cut)</li>
                  <li><strong>COLOR :</strong> La couleur (Color)</li>
                  <li><strong>CLARITY :</strong> La pureté (Clarity)</li>
                </ul>
              </div>
            </div>
            <div className={styles.diamondImage}>
              <Image 
                src="/img/pierres/diamant-chart.jpg" 
                alt="Guide des 4C du diamant"
                width={500}
                height={400}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Gemmologues */}
      <section className={styles.gemologistSection}>
        <div className={styles.container}>
          <div className={styles.gemologistContent}>
            <div className={styles.gemologistImage}>
              <Image 
                src="/img/gemmologue.jpg" 
                alt="Pierre-Frédéric et Sophie, gemmologues"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.gemologistText}>
              <h2>Une Collection de Gemmes</h2>
              <p>
                Pierre-Frédéric et Sophie sont gemmologues, ils sélectionnent des 
                pierres naturelles et non traitées.
              </p>
              <p>
                Leur connaissance des gemmes permet de vous présenter toutes les 
                nuances et couleurs possibles, à des prix variés.
              </p>
              <div className={styles.expertise}>
                <div className={styles.expertiseItem}>
                  <h4>Expertise</h4>
                  <p>Une gemme est une pierre fine, précieuse ou ornementale ou minérale, 
                  ique ou une substance organique.</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h4>Sélection</h4>
                  <p>Une gemme est taillée. La gemmologie est la science qui étudie les gemmes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Découvrez notre collection</h2>
          <p>Prenez rendez-vous pour découvrir nos pierres précieuses et créer votre bijou unique</p>
          <a href="/rendez-vous" className={styles.ctaButton}>
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  )
} 