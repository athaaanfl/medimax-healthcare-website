import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './Services.css';

const SECTIONS = [
  {
    anchor: 'repair', bg: 'white', reverse: false, title: 'Repair & Maintenance',
    desc: 'We provide scheduled and corrective maintenance for all major brands of medical equipment, reducing downtime and extending equipment lifespan. Our certified biomedical engineers are deployed across Indonesia.',
    points: ['Preventive maintenance contracts (PMC)', 'Corrective maintenance & emergency repair', 'Calibration and quality assurance', 'Spare parts, accessories & inventory management', '24/7 technical support hotline'],
    img: '/assets/services/repair-maintenance.webp',
  },
  {
    anchor: 'procurement', bg: 'cream', reverse: true, title: 'Equipment Planning & Procurement',
    desc: 'From needs assessment to procurement planning, MediMax guides healthcare facilities through the complete capital equipment acquisition cycle — including e-catalog procurement support in line with Kemenkes and LKPP regulations.',
    points: ['Hospital equipment needs assessment', 'Technical specifications development', 'Vendor selection & tender assistance', 'e-Catalog & LKPP procurement support', 'Budget planning & ROI analysis'],
    img: '/assets/services/equipment-planning-procurement.webp',
  },
  {
    anchor: 'distribution', bg: 'white', reverse: false, title: 'Distribution',
    desc: 'As a licensed distributor (CDAKB-certified) of medical devices, MediMax manages end-to-end supply chain logistics — from sourcing global-brand equipment to last-mile delivery to hospitals, clinics, and puskesmas across Indonesia.',
    points: ['Cold chain management for sensitive devices', 'Customs clearance & import handling', 'Warehousing & inventory management', 'Distribution to hospitals, clinics & puskesmas', 'After-delivery installation & commissioning'],
    img: '/assets/services/distribution.webp',
  },
  {
    anchor: 'manpower', bg: 'cream', reverse: true, title: 'Manpower & Outsourcing',
    desc: 'MediMax supplies qualified biomedical engineering technicians (elektromedik) and healthcare support personnel for hospitals and clinics that need embedded expertise without full-time headcount commitment.',
    points: ['Certified biomedical engineering technicians', 'Radiology & imaging technician placement', 'Healthcare IT support personnel', 'Flexible contract terms (short/long-term)', 'Performance SLA and supervision'],
    img: '/assets/services/manpower-outsourcing.webp',
  },
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
                <Link to="/contact" className="services-cta-link">Request This Service</Link>
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
            <h2 className="services-h2">Not Sure Which Service You Need?</h2>
            <p className="services-final__desc">Talk to our team for a free consultation. We'll help you identify the right solution for your facility.</p>
            <div className="services-final__actions">
              <Link to="/contact" className="btn btn--teal btn--shadow">Consultation</Link>
              <a href="https://wa.me/6281266000031" className="wa-cta">
                <img src="/assets/whatsapp-color.svg" alt="" className="wa-cta__icon" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
