'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Maison() {
  return (
    <>
      <main className={styles.maisonPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Votre Maison, une histoire de passion et de transmission.</h1>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/img/histoire/hero-img.jpg" 
              alt="Atelier de joaillerie Tournis" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className={styles.familleSection}>
          <div className={styles.container}>
            <h2 className={styles.familleTitle}>
              HÉRITIERS D&apos;UNE LONGUE TRADITION DE JOAILLIERS,<br />
              <span>LA FAMILLE TOURNIS, AUJOURD&apos;HUI</span>
            </h2>
            <div className={styles.familleText}>
              <p><strong className={styles.familleHighlight}>Pierre-Frédéric Tournis</strong> appartient à la quatrième génération d&apos;une famille d&apos;artisans joailliers installés à Bordeaux depuis 1896. Vingt-cinq années d&apos;expérience, dont 10 passées dans les ateliers de la place Vendôme, nourrissent ses créations aujourd&apos;hui.</p>
              <p>Il fait ses « gammes », dans les années 80, au sein de l&apos;atelier familial avant de réaliser sa maîtrise de compagnon à Paris, chez Pery et Langlois, fournisseurs attitrés de Van Cleef et Arpels. Au cours de ce long séjour d&apos;une dizaine d&apos;années, il découvre la taille et l&apos;étude des pierres gemmes, et obtient le diplôme de l&apos;Institut National de Gemmologie.<br />Mais même si on lui propose une belle carrière parisienne de chef d&apos;atelier, il préfère réintégrer l&apos;entreprise bordelaise dont il prend la direction en 1997.<br />En 2005, il transfère atelier et boutique au centre-ville, au 29 Cours de l&apos;Intendance, à deux pas du Grand Théâtre et du Triangle d&apos;or.</p>
              <p>Son épouse, <strong className={styles.familleHighlight}>Nathalie Tournis</strong>, animée de la même passion est à ses côtés à la boutique pour accueillir et conseiller les clients.</p>
              <p>Depuis 2016, leurs trois enfants, la 5ème génération, les rejoignent tour à tour pour préparer les créations d&apos;aujourd&apos;hui et de demain.</p>
              <p>Artisan, bijoutier, joaillier, <strong className={styles.familleHighlight}>Alexandre Tournis</strong> exerce à son tour la passion de la joaillerie au sein de l&apos;entreprise familiale.<br />Il apprend le métier aux côtés de son père et obtient ses CAP de joaillier et de bijoutier en 2016. Son savoir-faire et sa créativité contribuent à la notoriété de la maison familiale.</p>
              <p><strong className={styles.familleHighlight}>Sophie Tournis</strong>, est experte gemmologue. Titulaire du diplôme d&apos;État de l&apos;Institut National de Gemmologie et du diplôme européen de gemmologie FEEG, elle partage avec vous ses connaissances des gemmes, et vous accompagne dans le choix des pierres et des créations personnalisées.</p>
              <p><strong className={styles.familleHighlight}>Morgane Tournis</strong>, bijoutière, joaillière, a également rejoint l&apos;atelier aux côtés de son frère et de son père, depuis 2023.</p>
              <p><strong className={styles.familleHighlight}>Léna Domenc</strong>, en alternance à l&apos;ISG Luxury Management, est arrivée aux côtés de Sophie et Nathalie à la boutique, en 2023, pour les créations et la communication.</p>
            </div>
            <div className={styles.famillePortraits}>
              <div className={styles.famillePortrait}>
                <Image src="/img/histoire/pierre.jpg" alt="Pierre-Frédéric Tournis" width={200} height={200} />
                <span>Pierre-Frédéric Tournis</span>
              </div>
              <div className={styles.famillePortrait}>
                <Image src="/img/histoire/Alexandre.jpg" alt="Alexandre Tournis" width={200} height={200} />
                <span>Alexandre Tournis</span>
              </div>
              <div className={styles.famillePortrait}>
                <Image src="/img/histoire/Sophie.jpg" alt="Sophie Tournis" width={200} height={200} />
                <span>Sophie Tournis</span>
              </div>
              <div className={styles.famillePortrait}>
                <Image src="/img/histoire/Morgane.jpg" alt="Morgane Tournis" width={200} height={200} />
                <span>Morgane Tournis</span>
              </div>
              <div className={styles.famillePortrait}>
                <Image src="/img/histoire/Lena.jpg" alt="Léna Domenç" width={200} height={200} />
                <span>Léna Domenc</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.histoire}>
          <div className={styles.container}>
            <div className={styles.titleWrapper}>
              <h2>129 ans de joaillerie</h2>
            </div>
            
            <div className={styles.histoireContent}>
              <div className={styles.imageContent}>
                <div className={styles.historicalImage}>
                  <Image 
                    src="/img/histoire/andre-tournis.jpg" 
                    alt="André Tournis, fondateur en 1896" 
                    width={400}
                    height={500}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageName}>
                    André Tournis
                  </div>
                </div>
              </div>
              
              <div className={styles.textContent}>
                <div className={styles.dateSection}>
                  <h3>1896 - Les origines</h3>
                  <p>
                    <strong>En 1896, André Tournis, premier joaillier du nom, s&apos;installe à son compte, en chambre, au 81 rue Ducau aux Chartrons à Bordeaux.</strong>
                  </p>
                  
                  <p>
                    Rompant avec la tradition familiale de maîtres de chais colosses de près de deux mètres, plus frêle mais déterminé, il décide de délaisser le rouge du vin pour forger sa propre destinée avec l&apos;or rose, blanc et jaune ainsi que les pierres précieuses.
                  </p>
                  
                  <p>
                    Les brucelles succèdent alors aux tonneaux, une nouvelle aventure familiale commence.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.histoireContent}>
              <div className={styles.textContent}>
                <div className={styles.dateSection}>
                  <h3>1914-1945 - Deux générations, deux guerres</h3>
                  <p>
                                         <strong>Alex</strong>, le fils aîné, et <strong>Pierre</strong> son cadet, une fois leur certificat d&apos;études en poche, entrent en apprentissage. Le succès et la reconnaissance de la profession envers les joailliers Tournis ne se font pas attendre. Mais la Première Guerre mondiale interrompt leur réussite pendant 7 et 9 ans, où ils se retrouvent l&apos;un et l&apos;autre sous le calot militaire.
                  </p>
                  
                  <p>
                                         Cyclistes amateurs, ils deviennent cyclistes du colonel ! Avec beaucoup de chance et quelques éclats d&apos;obus, ils retournent avec bonheur à leur atelier. Après l&apos;acier des obus et la coiffe de guerre, ils retrouvent l&apos;or fin, le chagrin, et enfin la belle époque.
                  </p>
                  
                  <p>
                    Peu de congés à l&apos;époque, mais rencontrer un client à Paris ou un fournisseur prenait une huitaine de jours, et permettait de belles rencontres et la découverte de nouveaux horizons en chemin.
                  </p>
                  
                  <p>
                    De nombreux compagnons et apprentis partagent le renom de l&apos;Atelier Tournis durant cette époque prospère. D&apos;autres grands joailliers comme Servan et Fontan honorent à merveille le métier.
                  </p>
                  
                  <p>
                    La concurrence est rude mais loyale, non dépourvue de malice entre confrères, qui rivalisent d&apos;ingéniosité et de créativité. La pièce « à l&apos;unité » de rigueur marquera d&apos;un trait indélébile une tradition suivie et respectée.
                  </p>
                  
                  <p>
                    C&apos;est dans les ateliers de la maison Tournis que vient en apprentissage un certain Jean Prévot qui fera une carrière éblouissante. De nouvelles heures sombres avec la Seconde Guerre mondiale viennent stopper l&apos;élan de la profession. C&apos;est le temps du travail à façon, des bijoux conçus de bric et de broc, de longues années de vaches maigres.
                  </p>
                </div>
              </div>
              
              <div className={styles.imageContent}>
                <div className={styles.brothersImages}>
                  <div className={styles.historicalImage}>
                    <Image 
                      src="/img/histoire/Alex.jpg" 
                      alt="Alex Tournis, deuxième génération" 
                      width={300}
                      height={250}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.imageName}>
                      Alex Tournis
                    </div>
                  </div>
                  <div className={styles.historicalImage}>
                    <Image 
                      src="/img/histoire/Pierre_ancien.jpg" 
                      alt="Pierre Tournis, deuxième génération" 
                      width={300}
                      height={250}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.imageName}>
                      Pierre Tournis
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.continuiteSection}>
              <h3>1950-1980 - La transmission du savoir</h3>
              <p>
                  Durant les années 50, <strong>André Tournis, troisième du nom</strong>, découvre les joies de longues journées à peiner sur l&apos;ouvrage, les concours de fin d&apos;année, le poêle au charbon qu&apos;il faut entretenir, les balayures récupérées et traitées. Il acquiert la maîtrise du geste, la connaissance des pierres précieuses, le contact avec la clientèle.   
              </p>
              <br />
              <p>À son tour, il initie de nombreux apprentis en pesant sur ces « drôles », ainsi qu&apos;on appelle les jeunes à Bordeaux, qui ne veulent rien écouter !... et celui qui assurera le relais, Pierre-Frédéric.</p>  
              <br />
              <p>Dans les années 80, Pierre-Frédéric monte à Paris parfaire sa technique dans plusieurs grands ateliers, préparer un diplôme de gemmologue, avant de reprendre le flambeau aux Chartrons.</p>
              <br />
              <p>Le respect des traditions allié aux évolutions apportées par les nouvelles générations pérennisera plus d&apos;un siècle d&apos;artisanat au service de clients devenus des amis. À cette belle histoire collabore maintenant la cinquième génération…</p>
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
                  src="/img/histoire/atelier.jpg" 
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
    </>
  )
}