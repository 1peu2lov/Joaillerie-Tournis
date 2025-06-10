'use client'
import styles from './transformations.module.scss'
import Image from 'next/image'

export default function TransformationsPage() {
  return (
    <div className={styles.transformationsPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Transformations</h1>
          <p className={styles.heroSubtitle}>
            Redonnez vie à vos bijoux anciens avec une transformation sur-mesure
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/savoir-faire/transformations.jpg" 
            alt="Transformation de bijoux" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Nos services de transformation</h2>
          <div className={styles.servicesList}>
            <div className={styles.service}>
              <h3>Modernisation</h3>
              <p>Actualisez le style de vos bijoux anciens tout en préservant leur essence et leur valeur sentimentale.</p>
            </div>
            <div className={styles.service}>
              <h3>Redimensionnement</h3>
              <p>Adaptez la taille de vos bagues et bracelets pour un confort parfait.</p>
            </div>
            <div className={styles.service}>
              <h3>Changement de monture</h3>
              <p>Remplacez une monture usée ou démodée tout en conservant vos pierres précieuses.</p>
            </div>
            <div className={styles.service}>
              <h3>Récupération de métaux</h3>
              <p>Réutilisez l&apos;or et les pierres de plusieurs bijoux pour créer une pièce unique.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Le processus de transformation</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Évaluation</h3>
              <p>Analyse complète de votre bijou pour déterminer les possibilités de transformation.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Proposition</h3>
              <p>Présentation de différentes options de transformation avec devis détaillé.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Transformation</h3>
              <p>Réalisation soigneuse de la transformation dans notre atelier.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Remise</h3>
              <p>Livraison de votre bijou transformé avec certificat de qualité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2>Témoignages</h2>
          <div className={styles.testimonialsList}>
            <div className={styles.testimonial}>
              <p>&quot;Ma bague de grand-mère a retrouvé une seconde jeunesse. Le travail est magnifique !&quot;</p>
              <span>Marie L.</span>
            </div>
            <div className={styles.testimonial}>
              <p>&quot;Transformation parfaite de mes anciennes boucles d&apos;oreilles en pendentif moderne.&quot;</p>
              <span>Sophie D.</span>
            </div>
            <div className={styles.testimonial}>
              <p>&quot;Service professionnel et résultat au-delà de mes attentes.&quot;</p>
              <span>Jean-Pierre M.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Transformez vos bijoux</h2>
          <p>Consultez-nous pour donner une nouvelle vie à vos bijoux précieux</p>
          <a href="/rendez-vous" className={styles.ctaButton}>
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  )
} 