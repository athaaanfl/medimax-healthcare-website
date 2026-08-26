import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './About.css';

const PILLARS = [
  { title: 'Experience', desc: 'With years of experience in the medical equipment maintenance and repair industry, we have earned a reputation for excellence and reliability. Our team has encountered a wide range of equipment issues and excels in resolving them promptly.' },
  { title: 'Quality Service', desc: 'Our commitment to quality service sets us apart. We use the latest diagnostic tools and follow industry best practices to ensure accurate assessments and timely repair, minimizing downtime for your equipment.' },
  { title: 'Reliable Distribution Network', desc: 'As a CDAKB-certified distributor, we manage end-to-end supply chain logistics for medical devices and consumables — from sourcing global-brand equipment to last-mile delivery across hospitals, clinics, and puskesmas nationwide.' },
  { title: 'Strategic Equipment Planning', desc: 'We guide healthcare facilities through the full capital equipment acquisition cycle — needs assessment, technical specifications, and e-catalog procurement support aligned with Kemenkes and LKPP regulations.' },
  { title: 'Quick Response Time', desc: 'Medical equipment failures can disrupt your operation, impacting patient care. Our team understands the urgency of these situations, and we strive to provide fast response times to get your equipment back up and running.' },
  { title: 'Cost-Effective Solution', desc: 'We understand the challenges healthcare facilities face in managing budgets. Our cost-effective solutions help you optimize your equipment’s lifespan and reduce the need for costly replacements.' },
  { title: 'Compliance and Safety', desc: 'We adhere to all relevant industry standards and regulations to ensure the safety and compliance of your medical equipment. Our technicians are up-to-date with the latest advancements and follow rigorous safety protocols during maintenance and repair processes.' },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(-1);

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
              Our mission is to support healthcare institutions in providing outstanding patient care by offering the{' '}
              <span className="about-hero__accent">best quality</span> of goods &amp; services.
            </h1>
          </div>
        </section>

        <section className="about-section">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-copy">
                <h2 className="about-h2">About Us</h2>
                <p className="about-p"><b>PT MediMax Healthcare</b> Indonesia started it's journey in 2023, with the vision to help the healthcare organizations and providers in Indonesia to deliver exceptional patient care.</p>
                <p className="about-p">We understand the critical role medical equipment, devices and consumables plays in saving lives and improving patient outcomes.</p>
                <p className="about-p">That's why we go extra mile to offer efficient, effective, and cost-friendly solutions to keep your organization to be one step ahead in patient care.</p>
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
              <h2 className="about-h2">What Sets Us Apart</h2>
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
            <h2 className="about-h2">Organization Chart</h2>
            <picture>
              <source media="(max-width: 700px)" srcSet="/assets/organization-chart-4x3.png" />
              <img src="/assets/organization-chart.png" alt="MediMax Healthcare organization chart: Director and Financial Controller at the top, followed by Executive Operation, Executive Legal and Compliance, Marketing Manager, and Business Development Manager." className="org-chart-img" />
            </picture>
          </div>
        </section>

        <section className="about-cta">
          <h2 className="about-cta__title">Ready to Upgrade Your Facility?</h2>
          <p className="about-cta__desc">Talk to our team about your medical equipment needs — from procurement planning to installation and ongoing maintenance.</p>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn btn--teal btn--shadow">Consultation</Link>
            <a href="https://wa.me/6281266000031" className="wa-cta">
              <img src="/assets/whatsapp-color.svg" alt="" className="wa-cta__icon" />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
