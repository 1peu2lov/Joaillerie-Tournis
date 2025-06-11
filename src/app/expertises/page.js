'use client'
import styles from './expertises.module.scss'
import Image from 'next/image'

export default function ExpertisesPage() {
  return (
    <div className={styles.expertisesPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Expertises</h1>
          <p className={styles.heroSubtitle}>
            Faites évaluer vos bijoux par des experts de confiance, discrets et rigoureux
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/savoir-faire/expertises.jpg" 
            alt="Expertise de bijoux" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Nos services d&apos;expertise</h2>
          <div className={styles.servicesList}>
            <div className={styles.service}>
              {/* <div className={styles.serviceIcon}>🔍</div> */}
              <h3>Évaluation patrimoniale</h3>
              <p>Estimation de la valeur de vos bijoux pour assurance, succession ou simple connaissance.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.serviceIcon}>📋</div> */}
              <h3>Certificat d&apos;authenticité</h3>
              <p>Vérification de l&apos;authenticité et de la qualité de vos pierres et métaux précieux.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.serviceIcon}>⚖️</div> */}
              <h3>Expertise judiciaire</h3>
              <p>Évaluation officielle pour procédures légales, divorces ou litiges d&apos;assurance.</p>
            </div>
            <div className={styles.service}>
              {/* <div className={styles.serviceIcon}>💰</div> */}
              <h3>Rachat de bijoux</h3>
              <p>Évaluation équitable pour rachat de vos bijoux en or, platine et pierres précieuses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseContent}>
            <div className={styles.textContent}>
              <h2>Expert diplômé</h2>
              <p>
                Notre expert diplômé de l&apos;Institut National de Gemmologie possède plus de 15 ans 
                d&apos;expérience dans l&apos;évaluation de bijoux et pierres précieuses.
              </p>
              <div className={styles.credentials}>
                <div className={styles.credential}>
                  <strong>Diplôme ING</strong>
                  <span>Institut National de Gemmologie</span>
                </div>
                <div className={styles.credential}>
                  <strong>Membre CFE</strong>
                  <span>Compagnie Française des Experts</span>
                </div>
                <div className={styles.credential}>
                  <strong>15+ ans</strong>
                  <span>D&apos;expérience professionnelle</span>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <Image 
                src="/img/expert.jpg" 
                alt="Expert en bijoux" 
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Processus d&apos;expertise</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Prise de rendez-vous</h3>
              <p>Consultation gratuite pour définir vos besoins et le type d&apos;expertise souhaité.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Analyse technique</h3>
              <p>Examen détaillé avec instruments de précision : loupe, balance, testeur de métaux.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Recherche documentaire</h3>
              <p>Étude comparative des prix de marché et recherche d&apos;informations historiques.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Rapport d&apos;expertise</h3>
              <p>Remise du certificat officiel avec photos, descriptions détaillées et estimation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guarantees}>
        <div className={styles.container}>
          <h2>Nos garanties</h2>
          <div className={styles.guaranteesList}>
            <div className={styles.guarantee}>
              <h3>Confidentialité absolue</h3>
              <p>Respect total de votre vie privée et de la confidentialité de vos biens.</p>
            </div>
            <div className={styles.guarantee}>
              <h3>Objectivité</h3>
              <p>Évaluation impartiale basée uniquement sur des critères techniques et de marché.</p>
            </div>
            <div className={styles.guarantee}>
              <h3>Validité juridique</h3>
              <p>Nos certificats sont reconnus par les assurances et tribunaux français.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Faites expertiser vos bijoux</h2>
          <p>Connaître la vraie valeur de vos bijoux en toute confiance</p>
          <a href="/rendez-vous" className={styles.ctaButton}>
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  )
} 