'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Maison() {
  return (
    <PageAnimation>
      <main className={styles.maisonPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Votre Maison, une histoire de passion et de transmission.</h1>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/img/maison/hero-atelier.jpg" 
              alt="Atelier de joaillerie Tournis" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className={styles.histoire}>
          <div className={styles.container}>
            <h2>129 ans de joaillerie</h2>
            
            <div className={styles.histoireContent}>
              <div className={styles.textContent}>
                <p>
                  <strong>En 1896, André Tournis, premier joaillier du nom, s&apos;installe à son compte, en chambre, au 81 rue Ducau aux Chartrons à Bordeaux.</strong>
                </p>
                
                <p>
                  Rompant avec la tradition d&apos;une famille de maître de chais colossses de près de deux mètres, plus frêle mais déterminé, il décide de délaisser le rouge que lui offre pour forger sa propre destinée, avec la façon de l&apos;or rose, blanc et jaune et des pierres précieuses.
                </p>
                
                <p>
                  Les bruxelles succèdent alors pour lui aux tutelles, une nouvelle aventure familiale commence.
                </p>
                
                <p>
                  Alex, le premier fils, et Pierre son cadet, une fois leur certificat d&apos;étude en poche, rentrent en apprentissage. Le succès et la reconnaissance de la profession envers les joailliers Tournis ne se font pas attendre. Mais la guerre interrompt leur réussite pour 7 et 9 ans, où ils se retrouvent l&apos;un et l&apos;autre sous le calot militaire.
                </p>
                
                <p>
                  Cyclistes amateurs ils deviennent cyclistes du colonel ! Et avec beaucoup de chances et quelques éclats d&apos;obus, les deux retournent avec bonheur à leur atelier. Après l&apos;acier des obus et la coiffe de guerre, ils retrouvent le franc or (pour peu de temps), le carotter, et enfin la belle époque.
                </p>
              </div>
              
              <div className={styles.imageContent}>
                <Image 
                  src="/img/maison/andre-tournis-1896.jpg" 
                  alt="André Tournis, fondateur 1896" 
                  width={400}
                  height={500}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className={styles.histoireContent}>
              <div className={styles.imageContent}>
                <Image 
                  src="/img/maison/atelier-ancien.jpg" 
                  alt="Ancien atelier Tournis" 
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className={styles.textContent}>
                <p>
                  Peu de congés à l&apos;époque, mais rencontrer un client à Paris ou un fournisseur prenait une huitaine de jours, et permettait de belles rencontres et la découverte de nouveaux paysages en chérit.
                </p>
                
                <p>
                  De nombreux compagnons et apprentis partagent le renom de l&apos;Atelier Tournis durant cette époque prospère.
                </p>
                
                <p>
                  D&apos;autres grands joailliers comme Servan et Fontan servent à merveille le métier.
                </p>
                
                <p>
                  La concurrence est rude mais loyale, non dépourvue de malice entre confrères, qui rivalisent d&apos;ingéniosité et de créativité. La pièce « à l&apos;unité » de rigueur marquera d&apos;un trait indélébile une tradition suivie et respectée.
                </p>
                
                <p>
                  C&apos;est dans les ateliers de la maison Tournis que s&apos;en vient en apprentissage un certain Jean Prévot qui fera une carrière éblouissante. De nouvelles heures sombres avec la seconde guerre mondiale viennent stopper l&apos;élan de la profession. C&apos;est le temps du travail à façon, des bijoux conçus de bric et de broc, de longues années de vaches maigres.
                </p>
              </div>
            </div>

            <div className={styles.continuiteSection}>
              <h3>La continuité familiale</h3>
              <p>
                Durant les années 50, André Tournis, troisième du nom, découvre les joies de longues journées à plier sur l&apos;ouvrage, les concours de fin d&apos;année, le poêle à son qu&apos;il faut entretenir, les balayures récupérées et traitées. Il acquiert la maîtrise du geste, la connaissance des pierres précieuses, le contact avec chacun.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.valeurs}>
          <div className={styles.container}>
            <h2>Nos valeurs</h2>
            <div className={styles.valeursGrid}>
              <div className={styles.valeur}>
                <h3>Tradition</h3>
                <p>129 ans de savoir-faire familial transmis de génération en génération.</p>
              </div>
              <div className={styles.valeur}>
                <h3>Excellence</h3>
                <p>Un engagement constant vers la perfection dans chaque création.</p>
              </div>
              <div className={styles.valeur}>
                <h3>Authenticité</h3>
                <p>Des bijoux uniques qui racontent une histoire, votre histoire.</p>
              </div>
              <div className={styles.valeur}>
                <h3>Innovation</h3>
                <p>L&apos;alliance harmonieuse entre techniques ancestrales et créativité moderne.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.atelier}>
          <div className={styles.container}>
            <div className={styles.atelierContent}>
              <div className={styles.textContent}>
                <h2>Notre atelier bordelais</h2>
                <p>
                  Situé au cœur de Bordeaux, notre atelier perpétue la tradition familiale dans le respect des techniques artisanales. Chaque bijou y est conçu et réalisé avec passion, dans la lignée de nos ancêtres joailliers.
                </p>
                <p>
                  Venez découvrir notre univers et rencontrer nos artisans qui donnent vie à vos plus beaux projets.
                </p>
              </div>
              <div className={styles.imageContent}>
                <Image 
                  src="/img/maison/atelier-moderne.jpg" 
                  alt="Atelier Tournis moderne" 
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Découvrez notre univers</h2>
            <p>Prenez rendez-vous pour une visite de notre atelier et découvrez nos créations</p>
            <a href="/rendez-vous" className={styles.ctaButton}>
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </main>
    </PageAnimation>
  )
}