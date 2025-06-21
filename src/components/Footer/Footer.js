import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h4>Informations légales</h4>
          <ul>
            <li><Link href="/mentions-legales" title="Mentions légales - Joaillerie Tournis">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" title="Politique de confidentialité - Joaillerie Tournis">Politique de confidentialité</Link></li>
            <li><Link href="/politique-cookies" title="Politique des cookies - Joaillerie Tournis">Politique des cookies</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Service client</h4>
          <ul>
            <li><Link href="/contact" title="Contacter Joaillerie Tournis">Nous contacter</Link></li>
            <li><Link href="/rendez-vous" title="Prendre rendez-vous - Joaillerie Tournis">Prendre rendez-vous</Link></li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.social}>
        <Link href="https://instagram.com" title="Suivez Joaillerie Tournis sur Instagram">
          <Image src="/icons/Instagram.svg" alt="Instagram" width={40} height={40} />
        </Link>
        <Link href="https://facebook.com" title="Suivez Joaillerie Tournis sur Facebook">
          <Image src="/icons/Facebook.svg" alt="Facebook" width={40} height={40} />
        </Link>
        <Link href="https://linkedin.com" title="Suivez Joaillerie Tournis sur LinkedIn">
          <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </Link>
        <Link href="https://pinterest.com" title="Suivez Joaillerie Tournis sur Pinterest">
          <Image src="/icons/Pinterest.svg" alt="Pinterest" width={40} height={40} />
        </Link>
      </div>

      <div className={styles.logo}>
        <Image src="/img/logo/logo_white.svg" alt="Tournis" width={120} height={40} priority />
      </div>
    </footer>
  )
}
