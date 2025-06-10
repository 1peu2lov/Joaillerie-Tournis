'use client'
import styles from './pierres.module.scss'
import Image from 'next/image'

export default function PierresPage() {
  return (
    <div className={styles.pierresPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Collection Pierres</h1>
          <p className={styles.heroSubtitle}>
            Découvrez notre sélection de pierres précieuses prêtes à sublimer vos créations
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/img/savoir-faire/pierres.jpg" 
            alt="Collection de pierres précieuses" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.container}>
          <h2>Nos pierres précieuses</h2>
          <div className={styles.stonesList}>
            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/diamant.jpg" 
                  alt="Diamant" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Diamants</h3>
              <p>Symbole d&apos;éternité, nos diamants sont certifiés et sélectionnés pour leur éclat exceptionnel.</p>
              <div className={styles.specs}>
                <span>Certification GIA</span>
                <span>Tailles variées</span>
                <span>Qualité premium</span>
              </div>
            </div>
            
            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/rubis.jpg" 
                  alt="Rubis" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Rubis</h3>
              <p>Pierre de la passion, nos rubis birmans offrent une couleur rouge intense et profonde.</p>
              <div className={styles.specs}>
                <span>Origine Birmanie</span>
                <span>Non chauffés</span>
                <span>Couleur sang-de-pigeon</span>
              </div>
            </div>

            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/saphir.jpg" 
                  alt="Saphir" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Saphirs</h3>
              <p>Disponibles dans un arc-en-ciel de couleurs, nos saphirs apportent élégance et distinction.</p>
              <div className={styles.specs}>
                <span>Toutes couleurs</span>
                <span>Cachemire & Ceylan</span>
                <span>Taille sur mesure</span>
              </div>
            </div>

            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/emeraude.jpg" 
                  alt="Émeraude" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Émeraudes</h3>
              <p>Joyaux verts d&apos;une beauté saisissante, nos émeraudes colombiennes sont d&apos;une pureté rare.</p>
              <div className={styles.specs}>
                <span>Origine Colombie</span>
                <span>Clarté exceptionnelle</span>
                <span>Vert intense</span>
              </div>
            </div>

            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/perles.jpg" 
                  alt="Perles" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Perles</h3>
              <p>Perles de culture et perles fines d&apos;eau douce et d&apos;eau salée, symboles d&apos;élégance intemporelle.</p>
              <div className={styles.specs}>
                <span>Akoya & Tahiti</span>
                <span>Lustre miroir</span>
                <span>Formes variées</span>
              </div>
            </div>

            <div className={styles.stone}>
              <div className={styles.stoneImage}>
                <Image 
                  src="/img/pierres/semi-precieuses.jpg" 
                  alt="Pierres semi-précieuses" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Pierres semi-précieuses</h3>
              <p>Large collection de tourmalines, tanzanites, grenats et autres gemmes d&apos;exception.</p>
              <div className={styles.specs}>
                <span>Variété unique</span>
                <span>Couleurs rares</span>
                <span>Prix accessibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Nos services</h2>
          <div className={styles.servicesList}>
            <div className={styles.service}>
              <h3>Conseil personnalisé</h3>
              <p>Notre expert gemmologue vous accompagne dans le choix de vos pierres selon vos projets.</p>
            </div>
            <div className={styles.service}>
              <h3>Certification</h3>
              <p>Toutes nos pierres sont accompagnées de certificats d&apos;authenticité reconnus internationalement.</p>
            </div>
            <div className={styles.service}>
              <h3>Taille sur mesure</h3>
              <p>Service de taille personnalisée pour s&apos;adapter parfaitement à vos créations.</p>
            </div>
            <div className={styles.service}>
              <h3>Sertissage</h3>
              <p>Mise en valeur de vos pierres avec un sertissage professionnel dans notre atelier.</p>
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