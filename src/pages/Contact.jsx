import { useState } from 'react';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const SERVICE_OPTIONS = Object.values(t.contact.serviceOptions);
  const [service, setService] = useState(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <SiteNav />
      <main className="contact">
        <div className="contact-blob contact-blob--lime-top" />
        <div className="contact-blob contact-blob--teal-1" />
        <div className="contact-blob contact-blob--deep" />
        <div className="contact-blob contact-blob--lime-1" />
        <div className="contact-blob contact-blob--teal-2" />

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-side">
              <a href="https://wa.me/6281266000031" className="contact-whatsapp-card">
                <span className="contact-whatsapp-card__head">
                  <img src="/assets/whatsapp-color.svg" alt="WhatsApp" className="contact-whatsapp-card__icon" />
                  <span className="contact-whatsapp-card__title">{t.contact.whatsappTitle}</span>
                </span>
                <span className="contact-whatsapp-card__number">+62 812 6600 0031</span>
              </a>

              <div className="contact-info-card">
                <span className="contact-info-card__title">{t.contact.infoTitle}</span>

                <div className="contact-info-row">
                  <span className="contact-info-row__icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#117A85" strokeWidth="1.8"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  </span>
                  <span>
                    <span className="contact-info-row__label">{t.contact.officeAddress}</span>
                    <span className="contact-info-row__value">
                      PT MediMax Healthcare Indonesia<br />
                      Komplek Botania Block B23 No 2A,<br />
                      Belian, Batam Kota,<br />
                      Kepulauan Riau, Indonesia
                    </span>
                  </span>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-row__icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#117A85" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </span>
                  <span>
                    <span className="contact-info-row__label">{t.contact.email}</span>
                    <a href="mailto:sales@medimaxglobal.com" className="contact-info-row__link">sales@medimaxglobal.com</a>
                  </span>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-row__icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#117A85" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
                  </span>
                  <span>
                    <span className="contact-info-row__label">{t.contact.phoneWhatsapp}</span>
                    <a href="tel:+6281266000031" className="contact-info-row__link">+62 812 6600 0031</a>
                  </span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <span className="contact-form__title">{t.contact.formTitle}</span>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.fullName} <span className="contact-field__required">*</span></span>
                  <input type="text" required className="contact-field__input" />
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.hospital} <span className="contact-field__required">*</span></span>
                  <input type="text" required className="contact-field__input" />
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.emailAddress} <span className="contact-field__required">*</span></span>
                  <input type="email" required className="contact-field__input" />
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.phoneNumber}</span>
                  <input type="tel" className="contact-field__input" />
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.serviceType}</span>
                  <div className="contact-dropdown">
                    <button
                      type="button"
                      onClick={() => setServiceOpen((o) => !o)}
                      className="contact-dropdown__button"
                      style={{ color: service ? 'var(--color-deep-teal)' : '#9DAFA0' }}
                    >
                      {service || t.contact.selectService}
                    </button>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FA089" strokeWidth="2" strokeLinecap="round"
                      className="contact-dropdown__chevron"
                      style={{ transform: serviceOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    {serviceOpen && (
                      <div className="contact-dropdown__panel">
                        {SERVICE_OPTIONS.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => { setService(opt); setServiceOpen(false); }}
                            className={`contact-dropdown__option ${opt === service ? 'is-selected' : ''}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </label>
                <label className="contact-field">
                  <span className="contact-field__label">{t.contact.estimatedQty}</span>
                  <input type="text" className="contact-field__input" />
                </label>
                <label className="contact-field contact-field--full">
                  <span className="contact-field__label">{t.contact.message} <span className="contact-field__required">*</span></span>
                  <textarea rows={5} required className="contact-field__input contact-field__input--textarea" />
                </label>
              </div>
              <button
                type="submit"
                className="contact-submit"
                style={{ background: sent ? 'var(--color-lime)' : 'var(--color-teal)', color: sent ? 'var(--color-deep-teal)' : 'var(--color-white)' }}
              >
                {sent ? t.contact.sent : t.contact.send}
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
