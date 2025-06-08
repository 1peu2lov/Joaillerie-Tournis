import './page.module.scss'
import SavoirFaireSection from '@/components/SavoirFaireSection/SavoirFaireSection'
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Services() {
  return (
    <PageAnimation>
      <main>
        <section className="hero">
          <div className="content">
            <h1>Nos services</h1>
            <p>Découvrez une sélection exclusive de bijoux prête à être adoptés.</p>
          </div>
        </section>
        <SavoirFaireSection />
      </main>
    </PageAnimation>
  )
}