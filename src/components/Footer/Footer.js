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
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/politique-cookies">Politique des cookies</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Service client</h4>
          <ul>
            <li><Link href="/nous-contacter">Nous contacter</Link></li>
            <li><Link href="/rendez-vous">Prendre rendez-vous</Link></li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.social}>
        <Link href="https://instagram.com">
          <Image src="/icons/Instagram.svg" alt="Instagram" width={40} height={40} />
        </Link>
        <Link href="https://facebook.com">
          <Image src="/icons/Facebook.svg" alt="Facebook" width={40} height={40} />
        </Link>
        <Link href="https://linkedin.com">
          <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </Link>
        <Link href="https://pinterest.com">
          <Image src="/icons/Pinterest.svg" alt="Pinterest" width={40} height={40} />
        </Link>
      </div>

      <div className={styles.logo}>
        <Image src="/img/logo/logo_white.svg" alt="Tournis" width={120} height={40} priority />
      </div>
    </footer>
  )
}
