'use client'
import { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './BookingForm.module.scss'

const allSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

export default function BookingForm({ onSubmit }) {
  const [date, setDate] = useState(null)
  const [times, setTimes] = useState([])
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reasons: [],
    otherReason: '',
    comments: ''
  })

  const confirmationRef = useRef(null)

  useEffect(() => {
    if (date) {
      setTimes(allSlots)
      setSelectedTime('')
    }
  }, [date])

  const reasonsList = ['Conseil création', 'Réparation', 'Transformation', 'Autre']

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (name === 'reasons') {
      setFormData(f => ({
        ...f,
        reasons: checked
          ? [...f.reasons, value]
          : f.reasons.filter(r => r !== value)
      }))
    } else {
      setFormData(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const submissionData = { date, time: selectedTime, ...formData }
    setIsSubmitted(true)
    
    // Scroll vers la section de confirmation
    setTimeout(() => {
      if (confirmationRef.current) {
        confirmationRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)

    if (onSubmit) {
      onSubmit(submissionData)
    }
  }

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.section}>
            <label>Date</label>
            <div className={styles.datepickerGlobal}>
              <DatePicker
                selected={date}
                onChange={setDate}
                inline
                minDate={new Date()}
                className={styles.datepicker}
              />
            </div>
          </div>

          {date && (
            <div className={styles.section}>
              <label>Horaire</label>
              <div className={styles.slotList}>
                {times.map(t => (
                  <button
                    type="button"
                    key={t}
                    className={`${styles.slot} ${selectedTime === t ? styles.selected : ''}`}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.fields}>
            <div>
              <label>Nom</label>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Téléphone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <fieldset className={styles.reasons}>
            <legend>Raison de la prise de rendez-vous</legend>
            {reasonsList.map(r => (
              <label key={r} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="reasons"
                  value={r}
                  checked={formData.reasons.includes(r)}
                  onChange={handleChange}
                />
                {r}
              </label>
            ))}
            {formData.reasons.includes('Autre') && (
              <input
                name="otherReason"
                placeholder="Précisez"
                value={formData.otherReason}
                onChange={handleChange}
              />
            )}
          </fieldset>

          <div className={styles.section}>
            <label>Commentaires</label>
            <textarea name="comments" value={formData.comments} onChange={handleChange} />
          </div>

          <button type="submit" className={styles.submit}>Valider</button>
        </form>
      </div>

      <div className={styles.confirmationWrapper} ref={confirmationRef}>
        {isSubmitted ? (
          <div className={styles.confirmation}>
            <div className={styles.confirmationIcon}>✓</div>
            <h3>Rendez-vous confirmé !</h3>
            <div className={styles.confirmationDetails}>
              <p><strong>Date :</strong> {date?.toLocaleDateString('fr-FR')}</p>
              <p><strong>Heure :</strong> {selectedTime}</p>
              <p><strong>Nom :</strong> {formData.name}</p>
              <p><strong>Email :</strong> {formData.email}</p>
            </div>
            <p className={styles.confirmationMessage}>
              Votre rendez-vous a bien été enregistré. Vous recevrez un email de confirmation sous peu.
            </p>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <h3>Informations</h3>
            <p>
              Prenez rendez-vous facilement en remplissant le formulaire. 
              Nous vous confirmerons votre créneau par email.
            </p>
            <ul>
              <li>Consultation gratuite</li>
              <li>Devis personnalisé</li>
              <li>Conseil d&apos;expert</li>
              <li>Atelier à Bordeaux</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}