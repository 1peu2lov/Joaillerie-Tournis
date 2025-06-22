import styles from './page.module.scss'
import SavoirFaireSection from '@/components/SavoirFaireSection/SavoirFaireSection'
import PageAnimation from '@/components/PageAnimation/PageAnimation'
import Image from 'next/image'
import Head from 'next/head'

export default function Services() {
  return (
    <>
    <Head>
        <link
          rel="preload"
          as="image"
          href="/img/savoir-faire/transformations.jpg"
          type="image/jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/savoir-faire/reparations.jpg"
          type="image/jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/savoir-faire/expertises.jpg"
          type="image/jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/savoir-faire/pierres.jpg"
          type="image/jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/img/savoir-faire/fabrications.jpg"
          type="image/jpg"
        />
      </Head>
      <main className={styles.servicesPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Nos services</h1>
            <p className={styles.heroSubtitle}>
              De la création sur mesure à l&apos;expertise, découvrez l&apos;étendue de notre savoir-faire artisanal
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImagesGrid}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/img/savoir-faire/transformations.jpg" 
                  alt="Service de création de bijoux" 
                  fill
                  priority={true}
                  style={{ objectFit: 'cover', backgroundImage: 'url(/img/savoir-faire/transformations.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/img/savoir-faire/reparations.jpg" 
                  alt="Service de réparation" 
                  fill
                  priority={true}
                  style={{ objectFit: 'cover', backgroundImage: 'url(/img/savoir-faire/reparations.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/img/savoir-faire/expertises.jpg" 
                  alt="Service d'expertise" 
                  fill
                  priority={true}
                  style={{ objectFit: 'cover', backgroundImage: 'url(/img/savoir-faire/expertises.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/img/savoir-faire/pierres.jpg" 
                  alt="Service de transformation" 
                  fill
                  priority={true}
                  style={{ objectFit: 'cover', backgroundImage: 'url(/img/savoir-faire/pierres.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/img/savoir-faire/fabrications.jpg" 
                  alt="Service de conseil" 
                  fill
                  priority={true}
                  style={{ objectFit: 'cover', backgroundImage: 'url(/img/savoir-faire/fabrications.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introduction}>
          <div className={styles.container}>
            <div className={styles.introContent}>
              <div className={styles.textContent}>
                <h2>Un accompagnement sur mesure</h2>
                <p>
                  Depuis 129 ans, notre maison vous accompagne dans tous vos projets bijoutiers. 
                  Que vous souhaitiez créer, transformer, réparer ou faire expertiser vos bijoux, 
                  nos artisans mettent leur savoir-faire à votre service.
                </p>
                <p>
                  Chaque service est pensé pour répondre à vos besoins spécifiques, 
                  avec la garantie d&apos;un travail artisanal d&apos;exception et d&apos;un suivi personnalisé.
                </p>
              </div>
              <div className={styles.imageContent}>
                <Image 
                  src="/img/artisan.jpg" 
                  alt="Artisan au travail" 
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.engagement}>
          <div className={styles.container}>
            <h2>Notre engagement qualité</h2>
            <div className={styles.engagementsList}>
              <div className={styles.engagementItem}>
                {/* <div className={styles.icon}>🎯</div> */}
                <h3>Sur mesure</h3>
                <p>Chaque projet est unique et mérite une attention particulière adaptée à vos souhaits.</p>
              </div>
              <div className={styles.engagementItem}>
                {/* <div className={styles.icon}>⏱️</div> */}
                <h3>Respect des délais</h3>
                <p>Nous nous engageons sur des délais précis et respectons nos promesses.</p>
              </div>
              <div className={styles.engagementItem}>
                {/* <div className={styles.icon}>✅</div> */}
                <h3>Garantie qualité</h3>
                <p>Tous nos services sont garantis et répondent aux plus hauts standards.</p>
              </div>
              <div className={styles.engagementItem}>
                {/* <div className={styles.icon}>🤝</div> */}
                <h3>Conseil expert</h3>
                <p>Nos experts vous guident à chaque étape de votre projet bijoutier.</p>
              </div>
            </div>
          </div>
        </section>

        <SavoirFaireSection />

        <section className={styles.processus}>
          <div className={styles.container}>
            <h2>Notre processus</h2>
            <div className={styles.processusList}>
              <div className={styles.processusStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Consultation</h3>
                <p>Rendez-vous personnalisé pour comprendre vos besoins et envies</p>
              </div>
              <div className={styles.processusStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Proposition</h3>
                <p>Présentation détaillée du projet avec devis transparent</p>
              </div>
              <div className={styles.processusStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Réalisation</h3>
                <p>Création artisanale dans notre atelier avec suivi régulier</p>
              </div>
              <div className={styles.processusStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Livraison</h3>
                <p>Remise de votre bijou avec certificat et conseils d&apos;entretien</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Démarrez votre projet</h2>
            <p>Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner</p>
            <a href="/rendez-vous" className={styles.ctaButton} title="Prendre rendez-vous pour nos services">
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </main>
    </>
  )
}