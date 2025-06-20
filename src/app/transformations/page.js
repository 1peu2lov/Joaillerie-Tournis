'use client'
import styles from './transformations.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function TransformationsPage() {
  const [lightboxTransformation, setLightboxTransformation] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0) // 0 = avant, 1 = après

  const transformations = [
    {
      before: { src: "/img/transformations/bague_1.JPG", alt: "Bague avant transformation" },
      after: { src: "/img/transformations/bague_1_apres.JPG", alt: "Bague après transformation" },
      title: "Modernisation d'une alliance vintage"
    },
    {
      before: { src: "/img/transformations/bague_2.JPG", alt: "Bague avant transformation" },
      after: { src: "/img/transformations/bague_2_apres.JPG", alt: "Bague après transformation" },
      title: "Changement de monture"
    },
    {
      before: { src: "/img/transformations/bijoux_1.JPG", alt: "Bijoux avant transformation" },
      after: { src: "/img/transformations/bijoux_1_apres.JPG", alt: "Bijoux après transformation" },
      title: "Redimensionnement et style"
    },
    {
      before: { src: "/img/transformations/bijoux_2.JPG", alt: "Bijoux avant transformation" },
      after: { src: "/img/transformations/bijoux_2_apres.JPG", alt: "Bijoux après transformation" },
      title: "Fusion de bijoux familiaux"
    }
  ]

  const openLightbox = (transformationIndex) => {
    setLightboxTransformation(transformationIndex)
    setCurrentImageIndex(0) // Commence toujours par "avant"
  }

  const closeLightbox = () => {
    setLightboxTransformation(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? 1 : 0)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 1 ? 0 : 1)
  }

  return (
    <div className={styles.transformationsPage}>
      <section className={styles.hero}>
        <div className={styles.heroNavigation}>
          <Link href="/fabrications" className={styles.navButton}>
            ← Fabrications
          </Link>
          <Link href="/reparations" className={styles.navButton}>
            Réparations →
          </Link>
        </div>
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

      <section className={styles.beforeAfter}>
        <div className={styles.container}>
          <h2>Avant / Après</h2>
          <p className={styles.beforeAfterSubtitle}>
            Découvrez quelques exemples de nos transformations réussies
          </p>
          
          <div className={styles.transformationsList}>
            <div className={styles.transformation}>
              <div className={styles.beforeAfterImages}>
                <div className={styles.beforeImage}>
                  <Image 
                    src="/img/transformations/bague_1.JPG" 
                    alt="Bague avant transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(0)}
                  />
                  <span className={styles.label}>Avant</span>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.afterImage}>
                  <Image 
                    src="/img/transformations/bague_1_apres.JPG" 
                    alt="Bague après transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(0)}
                  />
                  <span className={styles.label}>Après</span>
                </div>
              </div>
              <div className={styles.transformationDescription}>
                <h3>Modernisation d&apos;une alliance vintage</h3>
                <p>Transformation d&apos;une alliance classique en design contemporain avec ajout de diamants sertis.</p>
              </div>
            </div>

            <div className={styles.transformation}>
              <div className={styles.beforeAfterImages}>
                <div className={styles.beforeImage}>
                  <Image 
                    src="/img/transformations/bague_2.JPG"  
                    alt="Bague avant transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(1)}
                  />
                  <span className={styles.label}>Avant</span>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.afterImage}>
                  <Image 
                    src="/img/transformations/bague_2_apres.JPG" 
                    alt="Bague après transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(1)}
                  />
                  <span className={styles.label}>Après</span>
                </div>
              </div>
              <div className={styles.transformationDescription}>
                <h3>Changement de monture</h3>
                <p>Récupération des pierres d&apos;une ancienne bague pour créer un solitaire moderne et élégant.</p>
              </div>
            </div>

            <div className={styles.transformation}>
              <div className={styles.beforeAfterImages}>
                <div className={styles.beforeImage}>
                  <Image 
                    src="/img/transformations/bijoux_1.JPG" 
                    alt="Bijoux avant transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(2)}
                  />
                  <span className={styles.label}>Avant</span>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.afterImage}>
                  <Image 
                    src="/img/transformations/bijoux_1_apres.JPG" 
                    alt="Bijoux après transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(2)}
                  />
                  <span className={styles.label}>Après</span>
                </div>
              </div>
              <div className={styles.transformationDescription}>
                <h3>Redimensionnement et style</h3>
                <p>Ajustement de la taille et modernisation du design pour un port quotidien plus confortable.</p>
              </div>
            </div>

            <div className={styles.transformation}>
              <div className={styles.beforeAfterImages}>
                <div className={styles.beforeImage}>
                  <Image 
                    src="/img/transformations/bijoux_2.JPG" 
                    alt="Bijoux avant transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(3)}
                  />
                  <span className={styles.label}>Avant</span>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.afterImage}>
                  <Image 
                    src="/img/transformations/bijoux_2_apres.JPG" 
                    alt="Bijoux après transformation" 
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openLightbox(3)}
                  />
                  <span className={styles.label}>Après</span>
                </div>
              </div>
              <div className={styles.transformationDescription}>
                <h3>Fusion de bijoux familiaux</h3>
                <p>Création d&apos;une nouvelle bague en combinant l&apos;or et les pierres de plusieurs bijoux hérités.</p>
              </div>
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

      {/* Lightbox */}
      {lightboxTransformation !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>
            
            <button className={styles.navButtonLeft} onClick={prevImage}>
              ←
            </button>
            
            <button className={styles.navButtonRight} onClick={nextImage}>
              →
            </button>
            
            <div className={styles.lightboxImageContainer}>
              <Image 
                src={currentImageIndex === 0 
                  ? transformations[lightboxTransformation].before.src 
                  : transformations[lightboxTransformation].after.src}
                alt={currentImageIndex === 0 
                  ? transformations[lightboxTransformation].before.alt 
                  : transformations[lightboxTransformation].after.alt}
                width={1200}
                height={800}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
              />
              <div className={styles.imageLabel}>
                {currentImageIndex === 0 ? 'Avant' : 'Après'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 