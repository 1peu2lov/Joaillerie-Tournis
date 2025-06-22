import Link from 'next/link'
import styles from './not-found.module.scss'
import Image from 'next/image'

export default function NotFound() {
  const siteMap = [
    {
      category: "Navigation Principale",
      links: [
        { name: "Accueil", href: "/", description: "Page d'accueil de Tournis Joaillerie" },
        { name: "Nos Créations", href: "/creations", description: "Découvrez notre collection de bijoux uniques" },
        { name: "E-Boutique", href: "/boutique", description: "Achetez nos bijoux en ligne" },
        { name: "Mariage", href: "/mariage", description: "Alliances et bijoux pour votre jour J" },
        { name: "Notre Maison", href: "/maison", description: "L'histoire et les valeurs de Tournis" }
      ]
    },
    {
      category: "Services Spécialisés",
      links: [
        { name: "Services", href: "/services", description: "Nos services de joaillerie sur mesure" },
        { name: "Rendez-vous", href: "/rendez-vous", description: "Prenez rendez-vous dans notre atelier" },
        { name: "Événements", href: "/evenements", description: "Nos événements et expositions" }
      ]
    },
    {
      category: "Espace Client",
      links: [
        { name: "Contact", href: "/contact", description: "Nous contacter pour toute demande" },
        { name: "Mon Panier", href: "/panier", description: "Vos articles sélectionnés" }
      ]
    }
  ]

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        {/* Section Hero avec logo et message d'erreur */}
        <div className={styles.heroSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/img/logo/logo.svg"
              alt="Logo Tournis"
              width={200}
              height={80}
              className={styles.logo}
            />
          </div>
          
          <div className={styles.errorContent}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorTitle}>Page non trouvée</h2>
            <p className={styles.errorMessage}>
              Désolé, la page que vous recherchez semble avoir disparu comme un diamant dans la nuit.
            </p>
          </div>
        </div>

        {/* Section Navigation */}
        <div className={styles.navigationSection}>
          <h3 className={styles.sectionTitle}>Où souhaitez-vous aller ?</h3>
          <p className={styles.sectionSubtitle}>
            Explorez notre site à travers cette carte de navigation
          </p>

          <div className={styles.siteMap}>
            {siteMap.map((section, index) => (
              <div key={index} className={styles.mapSection}>
                <h4 className={styles.categoryTitle}>{section.category}</h4>
                <div className={styles.linksGrid}>
                  {section.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex} 
                      href={link.href} 
                      className={styles.siteLink}
                    >
                      <div className={styles.linkContent}>
                        <h5 className={styles.linkName}>{link.name}</h5>
                        <p className={styles.linkDescription}>{link.description}</p>
                      </div>
                      <div className={styles.linkArrow}>→</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Actions rapides */}
        <div className={styles.quickActions}>
          <h3 className={styles.actionsTitle}>Actions rapides</h3>
          <div className={styles.actionButtons}>
                          <Link href="/" className={`${styles.actionBtn} ${styles.primary}`} title="Retour à l'accueil - Joaillerie Tournis">
                Retour à l&apos;accueil
              </Link>
            <Link href="/creations" className={`${styles.actionBtn} ${styles.secondary}`} title="Voir nos créations de joaillerie">
              Voir nos créations
            </Link>
            <Link href="/boutique" className={`${styles.actionBtn} ${styles.secondary}`} title="Découvrir notre boutique en ligne">
              Découvrir la boutique
            </Link>
            <Link href="/contact" className={`${styles.actionBtn} ${styles.outline}`} title="Contacter Joaillerie Tournis">
               Nous contacter
            </Link>
          </div>
        </div>

        {/* Section Recherche */}
        <div className={styles.searchSection}>
          <div className={styles.searchTip}>
            <h4>Conseil de navigation</h4>
            <p>
              Utilisez le menu principal en haut de page ou le bouton &ldquo;Nous contacter&rdquo; 
               si vous ne trouvez pas ce que vous cherchez.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 