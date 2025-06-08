import styles from "./page.module.scss";
import HeroSection from '../components/HeroSection/HeroSection'
import RedirectionCarousel from "@/components/RedirectionCarousel/RedirectionCarousel";
import SavoirFaireSection from '@/components/SavoirFaireSection/SavoirFaireSection'
import Link from "next/link";
import Image from "next/image";
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Home() {
  return (
    <PageAnimation>
      <div>
        <HeroSection />
        <RedirectionCarousel />
        <section className={styles.appointmentSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/home/rdv.webp"
              alt="Rendez-vous avec nos experts"
              fill
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.contentCard}>
            <h2>Prenez rendez-vous avec nos experts</h2>
            <p>Un accompagnement personnalisé pour créer le bijou de vos rêves.</p>
              <div className={styles.separator} />
            <Link href="/rendez-vous" className={styles.cta}>
              Prendre rendez-vous
            </Link>
          </div>

          <div className={styles.text}>
            <p>Chez Tournis, chaque création incarne l&apos;excellence : fabrication sur mesure, transformation précieuse, réparations invisibles, sélection éthique des pierres et expertise gemmologique se conjuguent avec exigence dans notre atelier bordelais.
            </p>
            <br/>
            <p> Un savoir-faire rare, au service de bijoux uniques, conçus pour traverser le temps avec éclat.</p>
          </div>

        </section>
        <SavoirFaireSection />
      </div>
    </PageAnimation>
  );
}
