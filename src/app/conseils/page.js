'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Conseils() {
  return (
    <>
      <main className={styles.conseilsPage}>
        <section className={styles.hero}>
          <div className={styles.heroNavigation}>
            <Link href="/expertises" className={styles.navButton}>
              ← Expertises
            </Link>
            <Link href="/fabrications" className={styles.navButton}>
              Fabrications →
            </Link>
          </div>
          <div className={styles.heroContent}>
            <h1>Nos Conseils et Garanties</h1>
            <p className={styles.heroSubtitle}>
              Depuis 5 générations, nous sommes à vos côtés. Nous attachons une grande importance à garantir la satisfaction de nos clients, c&apos;est pourquoi nous tenons à offrir le meilleur des services en proposant des bijoux et un service après-vente de haute qualité.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/img/expert.jpg" 
              alt="Expert en bijouterie" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className={styles.garanties}>
          <div className={styles.container}>
            <div className={styles.garantiesContent}>
              <div className={styles.garantiesText}>
                <h2>Garanties des bijoux</h2>
                <p>
                  Chaque bijou créé dans notre atelier est accompagné d&apos;une carte d&apos;identité, présentant les caractéristiques exactes de la création.
                </p>
                <p>
                  Nos bijoux bénéficient d&apos;une garantie <strong>contre vice et défaut caché</strong>. Si votre bijou présente un défaut, nous l&apos;analyserons afin d&apos;en connaître la nature. Si cette analyse nous amène à déterminer que le défaut n&apos;est dû ni au port ni à l&apos;usage, une réparation sur votre pièce bien entendu la garantie s&apos;appliquera et nous procéderons à une réparation ou un échange à nos frais.
                </p>
                <p>
                  Attention, un bijou n&apos;est pas indestructible, bien au contraire, c&apos;est une pièce qui doit être <strong>choyée</strong>. Sachez qu&apos;un bijou doit <strong>être entretenu</strong> et surtout, porté avec précaution (éviter de dormir avec, bricoler ou jardiner). Si malheureusement un incident survenait littéralement à cause de l&apos;usure, bien sûr, nous ne prenons pas en charge, mais tous les jours, nous établissons un devis, il est toujours de vous établir un devis.
                </p>
                <p>
                  Enfin, si vous avez apporté votre bijou à un autre professionnel que celui-ci à travaillé sur votre pièce, en aucun cas la garantie ne sera applicable.
                </p>
              </div>
              <div className={styles.garantiesImage}>
                <Image 
                  src="/img/working_hands.jpg" 
                  alt="Travail artisanal" 
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.conseilsSection}>
          <div className={styles.container}>
            <h2>Nos conseils d&apos;entretien</h2>
            
            <div className={styles.conseilsGrid}>
              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/alliance-001.jpeg" 
                    alt="Nettoyage bijoux" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Nettoyage de vos bijoux</h3>
                  <ul>
                    <li>Faire bouillir de l&apos;eau (attention aux émeraudes et pierres fragiles) avec du liquide vaisselle</li>
                    <li>Laisser tremper dans cette eau chaude au moins 20 min</li>
                    <li>Brosser à l&apos;aide d&apos;une petite brosse souple, en insistant sous les pierres</li>
                    <li>Rincer avec soin à l&apos;eau</li>
                    <li>Sécher au sèche-cheveux</li>
                    <li>Nettoyer les parties vernies dans le commerce, ni de dentifrice, cela provoque une usure anticipée.</li>
                  </ul>
                  <p className={styles.warning}>
                    Si vous avez peur, n&apos;hésitez pas à passer à la Joaillerie, nous vous les nettoyons gratuitement avec plaisir.
                  </p>
                </div>
              </div>

              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/boucles-001.jpeg" 
                    alt="Boucles d&apos;oreilles" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Info + pour vos boucles d&apos;oreilles et systèmes</h3>
                  <p>
                    Vos systèmes d&apos;attache de boucles d&apos;oreilles sont composés d&apos;un ressort en acier qui peut s&apos;encrassez. Pour les maintenir en bon état, il faut les nettoyer 1 fois par an dans les ultrasons ou en les faisant bouillir dans de l&apos;eau. Si vous avez peur, n&apos;hésitez pas à passer à la joaillerie nous vous les nettoyons gratuitement sans plaisir.
                  </p>
                </div>
              </div>

              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/alliance-002.jpeg" 
                    alt="Or blanc" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Info + pour l&apos;or blanc</h3>
                  <p>
                    Lorsque vous votre or blanc ternit et patiner avec le temps. Si vous souhaitez recouvrer tout son éclat, rapportez votre bijou à la joaillerie afin d&apos;effectuer un rhodiage. Une fine couche de rhodium sera de nouveau déposée par électrolyse sur votre bijou. La durée de vie du rhodiage se situe entre 1 et 3 ans.
                  </p>
                  <p>Nous vous offrons le premier rhodiage de votre bijou.</p>
                </div>
              </div>

              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/Collier-Pendentif 001.jpeg" 
                    alt="Révision sertissage" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Griffes usées et révision de sertissage</h3>
                  <p>
                    Nous vous conseillons d&apos;être attentif à votre bijou et de vérifier l&apos;état de ses griffes (de son serti).
                  </p>
                  <p>
                    Si vos pierres bougent, ou avant que cela soit le cas, faites une révision de vos bijoux pour leur longévité tous les 2 ans, voire annuellement. Si vous voyez que les griffes sont usées, que l&apos;or est devenu plus sur vos pierres, il est urgent d&apos;avoir pour éviter la casse ou la perte de vos pierres.
                  </p>
                  <p>
                    Si vous avez comme un choc par inadvertance, n&apos;hésitez pas à la faire contrôler.<br/>
                    Au moindre doute, n&apos;hésitez pas à nous demander conseil.
                  </p>
                </div>
              </div>

              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/Bracelet 001.jpeg" 
                    alt="Expertise assurance" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Expertises pour l&apos;assurance</h3>
                  <p>
                    Vos bijoux reçus par héritage ou cadeau, qui n&apos;ont pas de trace, ni facture, nous vous conseillons de faire une expertise pour domicile par votre assurance. Ainsi, vous pourrez bénéficier d&apos;une couverture et de les mentioner pour tous les 10 ans et de vous photographier avec vos bijoux lors d&apos;un repas.
                  </p>
                  <p>
                    Les bijoux sont couverts par votre assurance habitation, vérifier les clauses de votre contrat (l&apos;enveloppe prévue dans votre contrat) objet de valeur dont bijoux? valeur agréée? valeur d&apos;occupation?).
                  </p>
                </div>
              </div>

              <div className={styles.conseilCard}>
                <div className={styles.conseilImage}>
                  <Image 
                    src="/img/products/images/bague-001.jpg" 
                    alt="Choisir son bijou" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.conseilContent}>
                  <h3>Comment choisir son bijou ?</h3>
                  <ul>
                    <li><strong>Qualité de l&apos;or :</strong> 375‰ (9KaraT) 585‰ (14KaraT) 750‰ (18KaraT)</li>
                    <li>A comprendre sur votre or fin plus vous avez dans le temps 375‰ c&apos;est pas réparable, ce sont des bijoux plus fantaisies de 750‰ est plus durable dans le temps</li>
                    <li><strong>Choisir un travail fait main ?</strong> des bijoux 3D? des bijoux industriels ? La qualité du métal, du sertissage, par conséquent la durée de vie du bijou est en lien avec le choix. Demander au vendeur des images la provenance de votre bijou. C&apos;est important de savoir.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.astucesSection}>
          <div className={styles.container}>
            <h2>Astuces pratiques</h2>
            
            <div className={styles.astucesGrid}>
              <div className={styles.astuceCard}>
                <div className={styles.astuceImage}>
                  <Image 
                    src="/img/working_hands_2.webp" 
                    alt="Tour de doigt" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.astuceContent}>
                  <h3>Tour de doigt</h3>
                  <p>
                    Vous souhaitez faire une surprise, et vous ne connaissez pas le tour de doigt :
                  </p>
                  <ul>
                    <li>Empruntez une bague qui lui va au bon doigt, nous prendrons la mesure</li>
                    <li>Essayez l&apos;une de ses bagues, vous faites un repère sur l&apos;un de vos doigts, nous mesurerons le repère</li>
                    <li>Mesurez le diamètre intérieur de sa bague, mais la mesure peut être plus approximative</li>
                  </ul>
                </div>
              </div>

              <div className={styles.astuceCard}>
                <div className={styles.astuceImage}>
                  <Image 
                    src="/img/pierres.jpg" 
                    alt="Choisir les pierres" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.astuceContent}>
                  <h3>Choisir les pierres ?</h3>
                  <p>
                    Pour le diamant vous a-t-on parlé de couleur/pureté/taille ? pour comparer les prix, il faut connaître ces caractéristiques/millimètres poids,
                  </p>
                  <p>
                    Pour les pierres de couleur savez-vous si la pierre est naturelle? non traitée? chauffée? par exemple : la topaze bleue bien connue ou tous : sa couleur bleue vive est le résultat de l&apos;irradiation de topazes incolores par des rayons gamma, ou par des électrons accélérés, par le chauffage.
                  </p>
                  <p><strong>Renseignez-vous</strong></p>
                </div>
              </div>

              <div className={styles.astuceCard}>
                <div className={styles.astuceImage}>
                  <Image 
                    src="/img/atelier.jpg" 
                    alt="Or recyclé" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.astuceContent}>
                  <h3>Or recyclé ?</h3>
                  <p>
                    L&apos;or recyclé provient du rachat d&apos;or auprès de particuliers. Suivant sa qualité, il est soit refondu dans notre atelier, soit recyclé auprès de notre affineur en France. Cela fait plusieurs générations que nous n&apos;achetons pas d&apos;or directement des mines.
                  </p>
                </div>
              </div>

              <div className={styles.astuceCard}>
                <div className={styles.astuceImage}>
                  <Image 
                    src="/img/products/images/Collier-Pendentif 020.jpg" 
                    alt="Renfilage collier de perles" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.astuceContent}>
                  <h3>Le renfilage de votre collier de perles</h3>
                  <p>
                    Nous vous conseillons de refaire enfiler votre collier tous les ans, si vous le portez régulièrement.
                  </p>
                  <p>
                    <strong>Une astuce :</strong> Lorsque vos perles bougent entre les deux nœuds, cela signifie que le fil se fait usé et qu&apos;il faut le refaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Des questions sur vos bijoux ?</h2>
            <p>Notre équipe d&apos;experts est là pour vous conseiller et vous accompagner dans l&apos;entretien de vos bijoux</p>
            <a href="/contact" className={styles.ctaButton}>
              Nous contacter
            </a>
          </div>
        </section>
      </main>
    </>
  )
} 