import './page.module.scss'
import BookingForm from '@/components/BookingForm/BookingForm'
import PageAnimation from '@/components/PageAnimation/PageAnimation'

export default function RendezVous() {
  return (
    <PageAnimation>
      <main>
        <section className="hero">
          <div className="content">
            <h1>Prendre rendez-vous</h1>
            <p>Découvrez une sélection exclusive de bijoux prête à être adoptés.</p>
          </div>
        </section>
        <BookingForm />
      </main>
    </PageAnimation>
  )
}