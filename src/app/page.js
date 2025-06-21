import styles from "./page.module.scss";
import HeroSection from '../components/HeroSection/HeroSection'
import RedirectionCarousel from "@/components/RedirectionCarousel/RedirectionCarousel";
import SavoirFaireSection from '@/components/SavoirFaireSection/SavoirFaireSection'
import Link from "next/link";
import Image from "next/image";
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Home() {
  return (
      <div>
        <HeroSection />
        
        {/* Section SEO avant le carrousel */}
        <section className={styles.seoSection}>
          <div className={styles.seoContainer}>
            <h2>Joaillerie d&apos;exception à Bordeaux depuis 1896</h2>
            <p>
              Découvrez l&apos;excellence de la joaillerie française avec la Maison Tournis, installée au cœur de Bordeaux depuis plus de 125 ans. 
              Notre atelier familial perpétue la tradition artisanale française en proposant des créations sur mesure, 
              des transformations de bijoux anciens, des réparations de haute précision et des expertises de confiance.
            </p>
            <p>
              Que vous recherchiez une bague de fiançailles unique, souhaitiez transformer un bijou de famille ou faire expertiser 
              vos précieux, nos maîtres joailliers mettent leur savoir-faire ancestral à votre service. 
              Chaque création est façonnée à la main dans notre atelier bordelais, alliant techniques traditionnelles et design contemporain.
            </p>
          </div>
        </section>

        <RedirectionCarousel />
        <section className={styles.appointmentSection}>
          <div className={styles.appointmentContainer}>
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
              <Link href="/rendez-vous" className={styles.cta} title="Prendre rendez-vous avec nos experts joailliers">
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          <div className={styles.text}>
            <p>Chez Tournis, chaque création incarne l&apos;excellence : fabrication sur mesure, transformation précieuse, réparations invisibles, sélection éthique des pierres et expertise gemmologique se conjuguent avec exigence dans notre atelier bordelais.
            </p>
            <br/>
            <p> Un savoir-faire rare, au service de bijoux uniques, conçus pour traverser le temps avec éclat.</p>
          </div>

        </section>
        <SavoirFaireSection />

        {/* Section Témoignages clients */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsContainer}>
            <h2>Ils nous font confiance</h2>
            <p className={styles.testimonialsSubtitle}>
              Découvrez les témoignages de nos clients qui ont fait confiance à notre savoir-faire
            </p>
            <div className={styles.testimonialsList}>
              <div className={styles.testimonial}>
                <p>&quot;Un travail d&apos;exception pour ma bague de fiançailles sur mesure. L&apos;équipe a su parfaitement comprendre mes attentes et les dépasser.&quot;</p>
                <span>Amélie R.</span>
              </div>
              <div className={styles.testimonial}>
                <p>&quot;Transformation parfaite de la bague de ma grand-mère en collier moderne. Le résultat est magnifique et l&apos;émotion intacte.&quot;</p>
                <span>Thomas M.</span>
              </div>
              <div className={styles.testimonial}>
                <p>&quot;Service impeccable et expertise de haut niveau. Je recommande vivement cette maison familiale bordelaise.&quot;</p>
                <span>Catherine L.</span>
              </div>
              <div className={styles.testimonial}>
                <p>&quot;Réparation invisible sur mon ancien collier. Un savoir-faire rare et un accueil chaleureux.&quot;</p>
                <span>Pierre D.</span>
              </div>
              <div className={styles.testimonial}>
                <p>&quot;Création de mes alliances de mariage : un processus passionnant avec des artisans passionnés. Résultat parfait !&quot;</p>
                <span>Sarah & Julien</span>
              </div>
              <div className={styles.testimonial}>
                <p>&quot;Expertise de mes bijoux de famille avec une transparence et une honnêteté remarquables. Merci pour votre professionnalisme.&quot;</p>
                <span>Marie-Claire P.</span>
              </div>
            </div>
            <div className={styles.testimonialsFooter}>
              <p>Plus de 125 ans d&apos;excellence et de confiance</p>
              <Link href="/creations" className={styles.testimonialsCtaButton} title="Découvrir nos créations de joaillerie">
                Découvrir nos créations
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
