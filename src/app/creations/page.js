import './page.module.scss'
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function Créations() {
  return (
    <PageAnimation>
      <main>
        <section className="hero">
          <div className="content">
            <h1>Nos créations</h1>
            <p>Découvrez une sélection exclusive de bijoux prête à être adoptés.</p>
          </div>
        </section>
      </main>
    </PageAnimation>
  )
}