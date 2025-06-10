'use client'
import styles from './fabrications.module.scss'
import Image from 'next/image'

export default function FabricationsPage() {
  return (
    <div className={styles.fabricationsPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fabrications</h1>
          <p className={styles.heroSubtitle}>
            Conception artisanale de bijoux uniques, façonnés à la main dans notre atelier bordelais
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/savoir-faire/fabrications.jpg" 
            alt="Atelier de fabrication" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Notre processus de création</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Consultation</h3>
              <p>Échange approfondi pour comprendre vos envies et définir ensemble votre bijou unique.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Conception</h3>
              <p>Création de dessins et maquettes pour visualiser votre futur bijou avant fabrication.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Fabrication</h3>
              <p>Réalisation artisanale dans notre atelier avec les techniques traditionnelles de joaillerie.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Finition</h3>
              <p>Polissage, sertissage et contrôle qualité pour un bijou parfait.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseContent}>
            <div className={styles.textContent}>
              <h2>Un savoir-faire ancestral</h2>
              <p>
                Notre atelier perpétue les techniques traditionnelles de la joaillerie française. 
                Chaque bijou est unique, façonné à la main par nos artisans passionnés.
              </p>
              <p>
                De la création du modèle à la finition, nous maîtrisons chaque étape pour vous 
                offrir un bijou d&apos;exception qui vous ressemble.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <strong>100%</strong>
                  <span>Artisanal</span>
                </div>
                <div className={styles.highlight}>
                  <strong>+20 ans</strong>
                  <span>D&apos;expérience</span>
                </div>
                <div className={styles.highlight}>
                  <strong>Bordeaux</strong>
                  <span>Atelier local</span>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <Image 
                src="/img/savoir-faire/atelier-fabrication.jpg" 
                alt="Artisan au travail" 
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.container}>
          <h2>Matériaux nobles</h2>
          <div className={styles.materialsList}>
            <div className={styles.material}>
              <h3>Or 18 carats</h3>
              <p>Blanc, jaune ou rose selon vos préférences</p>
            </div>
            <div className={styles.material}>
              <h3>Platine</h3>
              <p>Pour une durabilité et une brillance exceptionnelles</p>
            </div>
            <div className={styles.material}>
              <h3>Pierres précieuses</h3>
              <p>Diamants, rubis, saphirs et émeraudes certifiés</p>
            </div>
            <div className={styles.material}>
              <h3>Perles</h3>
              <p>Perles de culture et perles fines sélectionnées</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Créons ensemble votre bijou unique</h2>
          <p>Prenez rendez-vous pour discuter de votre projet</p>
          <a href="/rendez-vous" className={styles.ctaButton}>
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  )
} 