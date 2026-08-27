import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Services.css';

const SECTION_META = [
  { anchor: 'repair', bg: 'white', reverse: false, img: '/assets/services/repair-maintenance.webp' },
  { anchor: 'procurement', bg: 'cream', reverse: true, img: '/assets/services/equipment-planning-procurement.webp' },
  { anchor: 'distribution', bg: 'white', reverse: false, img: '/assets/services/distribution.webp' },
  { anchor: 'manpower', bg: 'cream', reverse: true, img: '/assets/services/manpower-outsourcing.webp' },
];

const PATTERNS = {
  repair: (
    <>
      <div className="sp-blob sp-repair-1" />
      <div className="sp-blob sp-repair-2" />
      <div className="sp-blob sp-repair-3" />
    </>
  ),
  procurement: (
    <>
      <div className="sp-blob sp-procurement-1" />
      <div className="sp-blob sp-procurement-2" />
      <div className="sp-blob sp-procurement-3" />
      <div className="sp-blob sp-procurement-4" />
    </>
  ),
  distribution: (
    <>
      <div className="sp-blob sp-distribution-1" />
      <div className="sp-blob sp-distribution-2" />
    </>
  ),
  manpower: (
    <>
      <div className="sp-blob sp-manpower-1" />
      <div className="sp-blob sp-manpower-2" />
      <div className="sp-blob sp-manpower-3" />
    </>
  ),
};

export default function Services() {
  const { t, lang } = useLanguage();
  const SECTIONS = SECTION_META
    .map((m) => ({ ...m, ...t.services.sections[m.anchor] }))
    .sort((a, b) => a.title.localeCompare(b.title, lang));

  return (
    <>
      <SiteNav />
      <main className="services">
        {SECTIONS.map((s) => (
          <section id={s.anchor} key={s.anchor} className={`services-full services-full--${s.bg}`}>
            <div className="services-pattern">{PATTERNS[s.anchor]}</div>
            <div className={`services-section__grid ${s.reverse ? 'services-section__grid--reverse' : ''}`}>
              <div className="services-section__copy">
                <h2 className="services-h2">{s.title}</h2>
                <p className="services-desc">{s.desc}</p>
                <div className="services-points">
                  {s.points.map((p) => (
                    <div className="services-point" key={p}>
                      <span className="services-point__icon">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6E8A1C" strokeWidth="3"><path d="M4 12.5l5 5L20 6.5" /></svg>
                      </span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="services-cta-link">{t.services.requestService}</Link>
              </div>
              <div className="services-section__photo">
                <img src={s.img} alt={s.title} />
              </div>
            </div>
          </section>
        ))}

        <section className="services-final">
          <div className="services-final__radial" />
          <div className="services-final__inner">
            <h2 className="services-h2">{t.services.finalTitle}</h2>
            <p className="services-final__desc">{t.services.finalDesc}</p>
            <div className="services-final__actions">
              <Link to="/contact" className="btn btn--teal btn--shadow">{t.nav.consultation}</Link>
              <a href="https://wa.me/6281266000031" className="wa-cta">
                <img src="/assets/whatsapp-color.svg" alt="" className="wa-cta__icon" />
                {t.nav.chatWhatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
