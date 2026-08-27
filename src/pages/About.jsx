import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(-1);
  const PILLARS = t.about.pillars;

  return (
    <>
      <SiteNav />
      <main className="about">
        <div className="about-blob about-blob--lime-top" />
        <div className="about-blob about-blob--teal-1" />
        <div className="about-blob about-blob--deep" />
        <div className="about-blob about-blob--lime-1" />
        <div className="about-blob about-blob--teal-2" />
        <div className="about-blob about-blob--lime-2" />
        <div className="about-radial" />

        <section className="about-hero">
          <div className="about-hero__inner">
            <h1 className="about-hero__title">
              {t.about.heroLead}
              <span className="about-hero__accent">{t.about.heroAccent}</span>
              {t.about.heroTail}
            </h1>
          </div>
        </section>

        <section className="about-section">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-copy">
                <h2 className="about-h2">{t.about.aboutHeading}</h2>
                <p className="about-p"><b>PT MediMax Healthcare</b> {t.about.p1}</p>
                <p className="about-p">{t.about.p2}</p>
                <p className="about-p">{t.about.p3}</p>
              </div>
              <div className="about-map-wrap">
                <div className="about-map">
                  <iframe
                    title="MediMax location"
                    src="https://maps.google.com/maps?q=1.108658129243563,104.08896268611274&z=17&output=embed"
                    className="about-map__frame"
                    loading="lazy"
                  />
                  <a href="https://maps.app.goo.gl/QHriXXxEwn8G9riv5" target="_blank" rel="noreferrer" className="about-map__overlay" />
                </div>
              </div>
            </div>

            <div className="about-pillars">
              <h2 className="about-h2">{t.about.pillarsHeading}</h2>
              <div className="about-pillars__list">
                {PILLARS.map((p, i) => (
                  <div className="about-pillar" key={p.title}>
                    <button className="about-pillar__head" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                      <span className="about-pillar__title">{p.title}</span>
                      <span className="about-pillar__toggle">
                        <span className="about-pillar__toggle-bar" />
                        <span className={`about-pillar__toggle-bar about-pillar__toggle-bar--rot ${openIndex === i ? 'is-open' : ''}`} />
                      </span>
                    </button>
                    <div className={`about-pillar__body ${openIndex === i ? 'is-open' : ''}`}>
                      <p className="about-pillar__desc">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-org">
          <div className="about-org__inner">
            <h2 className="about-h2">{t.about.orgChartHeading}</h2>
            <picture>
              <source media="(max-width: 700px)" srcSet="/assets/organization-chart-4x3.png" />
              <img src="/assets/organization-chart.png" alt={t.about.orgChartAlt} className="org-chart-img" />
            </picture>
          </div>
        </section>

        <section className="about-cta">
          <h2 className="about-cta__title">{t.home.ctaTitle}</h2>
          <p className="about-cta__desc">{t.home.ctaDesc}</p>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn btn--teal btn--shadow">{t.nav.consultation}</Link>
            <a href="https://wa.me/6281266000031" className="wa-cta">
              <img src="/assets/whatsapp-color.svg" alt="" className="wa-cta__icon" />
              {t.nav.chatWhatsapp}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
