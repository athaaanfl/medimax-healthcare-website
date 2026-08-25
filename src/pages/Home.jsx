import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './Home.css';

const SERVICES = [
  { key: 'repair', photo: '/assets/services/repair-maintenance.webp', title: 'Repair & Maintenance', desc: 'Scheduled and corrective maintenance for all major brands, with certified biomedical engineers.' },
  { key: 'procurement', photo: '/assets/services/equipment-planning-procurement.webp', title: 'Equipment Planning & Procurement', desc: 'Needs assessment to e-catalog procurement, aligned with Kemenkes and LKPP regulations.' },
  { key: 'distribution', photo: '/assets/services/distribution.webp', title: 'Distribution', desc: 'CDAKB-certified end-to-end supply chain — sourcing to last-mile delivery nationwide.' },
  { key: 'manpower', photo: '/assets/services/manpower-outsourcing.webp', title: 'Manpower & Outsourcing', desc: 'Certified elektromedik technicians and healthcare support personnel on flexible contracts.' },
];

const PARTNERS = [
  { name: 'Mindray', src: '/assets/partners/mindray.svg', scale: 1 },
  { name: 'B.Braun', src: '/assets/partners/bbraun.svg', scale: 1.6 },
  { name: '3M', src: '/assets/partners/3m.svg', scale: 1 },
  { name: 'OneMed', src: '/assets/partners/onemed.svg', scale: 1 },
  { name: 'OneHealth', src: '/assets/partners/onehealth.svg', scale: 1 },
  { name: 'BSN Medical', src: '/assets/partners/bsnmedical.svg', scale: 1 },
  { name: 'Sinocare', src: '/assets/partners/sinocare.svg', scale: 1 },
  { name: 'Accu-Chek', src: '/assets/partners/accu-chek.svg', scale: 1.6 },
  { name: 'GEA Medical', src: '/assets/partners/geamedical.svg', scale: 1 },
  { name: 'Medke', src: '/assets/partners/medke.svg', scale: 1.6 },
  { name: 'Sutcon Sutures', src: '/assets/partners/sutcon-sutures.svg', scale: 1 },
  { name: 'Sensi', src: '/assets/partners/sensi.svg', scale: 1 },
  { name: 'Betadine', src: '/assets/partners/betadine.svg', scale: 1.6 },
];
const PARTNER_LOOP = [...PARTNERS, ...PARTNERS];

const FEATURED = [
  { cat: 'DIAGNOSTIC & MONITORING', name: 'Patient Monitor', desc: 'Multi-parameter bedside monitor: SpO2, ECG, NIBP, temperature, and respiratory rate.', photo: '/assets/products/patient-monitor.webp', href: '/products/patient-monitor' },
  { cat: 'DIAGNOSTIC & MONITORING', name: 'Defibrillator', desc: 'Biphasic defibrillator with AED mode and 12-lead ECG for cardiac emergency response.', photo: '/assets/products/defibrillator.webp', href: '/products/defibrillator' },
  { cat: 'ACCESSORIES', name: 'NIBP Cuffs', desc: 'Blood pressure cuff accessories for patient monitors, available in multiple sizes.', photo: '/assets/products/nibp-cuffs.webp', href: '/products/nibp-cuffs' },
  { cat: 'MEDICAL PAPER', name: 'ECG Paper', desc: 'Thermal recording paper for ECG machines, available in 50mm–210mm widths.', photo: '/assets/products/ecg-paper.webp', href: '/products/ecg-paper' },
];

const TESTIMONIALS = [
  { quote: 'The consumable products are consistent in quality and meet our daily operational requirements. Supply and communication have been smooth.', name: 'RS Jasmine', logo: '/assets/hospitals/rsjasmine.svg' },
  { quote: 'The ventilator and syringe pump provided are reliable and support our clinical needs effectively. Delivery was on time and the service team is responsive.', name: 'RS Hj. Bunda Halimah', logo: '/assets/hospitals/rsbundahalimah.svg' },
  { quote: 'The equipment provided, including microscope, medical beds, and trolleys, are of good quality and meet our hospital standards. The team is professional and responsive.', name: 'RSAL Tanjung Pinang', logo: '/assets/hospitals/rsaltanjungpinang.svg' },
  { quote: 'The flow sensor and oxygen sensor are of good quality and compatible with our equipment. The products perform reliably, and the service provided is professional and responsive.', name: 'RS Wongsonegoro Semarang', logo: '/assets/hospitals/rswn.svg' },
];

const OTHER_CLIENTS = [
  { name: 'RS Charis Medika', logo: '/assets/hospitals/rscharismedika.svg' },
  { name: 'RS Budi Kemuliaan Batam', logo: '/assets/hospitals/rsbkbatam.svg' },
  { name: 'RS BP Batam', logo: '/assets/hospitals/rsbpbatam.svg' },
  { name: 'RS Awal Bros Batam', logo: '/assets/hospitals/rsawalbrosbatam.svg' },
  { name: 'RSUD Tanjungpinang', logo: '/assets/hospitals/rsudtanjungpinang.svg' },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="home">

        <section className="home-hero">
          <div className="home-hero__blob home-hero__blob--lime-top" />
          <div className="home-hero__blob home-hero__blob--teal-dot" />
          <div className="home-hero__blob home-hero__blob--deep-corner" />
          <div className="home-hero__grid">
            <div className="home-hero__photo-wrap">
              <img src="/assets/hero.webp" alt="Indonesian doctor with modern medical equipment" className="home-hero__photo" />
            </div>
            <div className="home-hero__copy">
              <h1 className="home-hero__title">Your Trusted Partner for Medical Equipment Solutions in Indonesia</h1>
              <p className="home-hero__subtitle">Serving healthcare facilities across Indonesia with maintenance, procurement, distribution, and digital health solutions.</p>
              <div className="home-hero__ctas">
                <Link to="/contact" className="btn btn--teal">Consultation <span aria-hidden="true">→</span></Link>
                <Link to="/products" className="btn btn--outline">View Product Catalog</Link>
              </div>
              <div className="home-hero__stats">
                <div><div className="home-hero__stat-num">100+</div><div className="home-hero__stat-label">Hospitals Served</div></div>
                <div><div className="home-hero__stat-num">15+</div><div className="home-hero__stat-label">Global Partners</div></div>
                <div><div className="home-hero__stat-num">3</div><div className="home-hero__stat-label">National Certifications</div></div>
              </div>
            </div>
          </div>
          <div className="home-marquee-wrap">
            <p className="home-marquee-label">Business Partners</p>
            <div className="home-marquee-mask">
              <div className="home-marquee-track">
                {PARTNER_LOOP.map((p, i) => (
                  <div className="home-marquee-item" key={p.name + i}>
                    <img src={p.src} alt={p.name} style={{ height: '100%', maxWidth: 110, objectFit: 'contain', transform: `scale(${p.scale})` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-section--white">
          <div className="home-section__blob home-section__blob--lime-tl" />
          <div className="home-section__inner">
            <div className="home-section__head">
              <h2 className="home-h2">Our Product</h2>
              <Link to="/products" className="home-view-all">View all products →</Link>
            </div>
            <p className="home-lead">Authorized Partner &amp; Distributor of Medical Device and Consumable</p>
            <p className="home-body-lg">Medical Consumables, Medical Accessories (ECG, NIBP, SpO2, IBP cables, etc.), Spare Parts (flow sensor, oxygen sensor, ESU cables), Medical Chart Papers (ECG, EEG, CTG), USG Papers, Medical Devices &amp; Equipment (non-radiation equipment — patient monitor, dialysis machine, and other medical equipment), and Dental Products (consumables, chair, accessories).</p>
            <div className="home-featured-grid">
              {FEATURED.map((f) => (
                <Link to={f.href} key={f.name} className="home-featured-card">
                  <div className="home-featured-card__photo">
                    <img src={f.photo} alt={f.name} />
                  </div>
                  <div className="home-featured-card__body">
                    <span className="home-featured-card__cat">{f.cat}</span>
                    <span className="home-featured-card__name">{f.name}</span>
                    <span className="home-featured-card__desc">{f.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--cream">
          <div className="home-section__blob home-section__blob--teal-br" />
          <div className="home-section__inner">
            <div className="home-section__head">
              <div>
                <h2 className="home-h2">Our Services</h2>
                <p className="home-services-sub">Healthcare Service Provider in Various Category</p>
              </div>
              <Link to="/services" className="home-view-all">All services →</Link>
            </div>
            <div className="home-services-grid">
              {SERVICES.map((s) => (
                <Link to="/services" key={s.key} className="home-service-card">
                  <div className="home-service-card__photo">
                    <img src={s.photo} alt={s.title} />
                  </div>
                  <div className="home-service-card__body">
                    <span className="home-service-card__title">{s.title}</span>
                    <span className="home-service-card__desc">{s.desc}</span>
                    <span className="home-service-card__link">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--white">
          <div className="home-section__blob home-section__blob--lime-tr" />
          <div className="home-section__blob home-section__blob--teal-bl" />
          <div className="home-section__inner">
            <h2 className="home-h2">Our Brand</h2>
            <p className="home-brand-sub">Technology and clinical consumables supporting healthcare operations in Indonesia.</p>
            <div className="home-brand-grid">
              <div className="home-brand-card" style={{ borderColor: '#8AA827' }}>
                <div className="home-brand-card__badge" style={{ background: '#8AA827' }}>
                  <div className="home-brand-card__badge-inner">
                    <img src="/assets/meditrack-mark.svg" alt="MediTrack" style={{ height: 50, display: 'block' }} />
                  </div>
                </div>
                <p className="home-brand-card__desc">Your number one medical equipment maintenance and asset management company. Track the most important medical equipment and maintain your assets in real time to optimize your day-to-day operations.</p>
                <div className="home-brand-card__panel">
                  <div className="home-brand-card__panel-head">
                    <span style={{ fontWeight: 700, color: '#0C3832' }}>Dashboard</span>
                    <span className="home-brand-card__search">Search any medical assets...</span>
                  </div>
                  <div className="home-brand-card__stats3">
                    <div className="home-brand-card__stat"><div className="home-brand-card__stat-label">TOTAL EQUIPMENT</div><div className="home-brand-card__stat-value">2,420</div></div>
                    <div className="home-brand-card__stat"><div className="home-brand-card__stat-label">CALIBRATION</div><div className="home-brand-card__stat-value">86</div></div>
                    <div className="home-brand-card__stat"><div className="home-brand-card__stat-label">MAINTENANCE</div><div className="home-brand-card__stat-value">152</div></div>
                  </div>
                  <div className="home-brand-card__tasks">
                    <span>Total Open Tasks <b style={{ color: '#117A85' }}>23</b></span>
                    <span>Upcoming Maintenance <b style={{ color: '#117A85' }}>10</b></span>
                    <span>Completed Today <b style={{ color: '#117A85' }}>8</b></span>
                  </div>
                </div>
              </div>

              <div className="home-brand-card" style={{ borderColor: '#117A85' }}>
                <div className="home-brand-card__badge" style={{ background: '#117A85' }}>
                  <div className="home-brand-card__badge-inner">
                    <img src="/assets/medigraph-mark.svg" alt="MediGraph" style={{ height: 50, display: 'block' }} />
                  </div>
                </div>
                <p className="home-brand-card__desc">A medical graph paper brand supplying ECG, CTG, and EEG recording paper — in both disposable and reusable formats — for hospitals to print patient diagnostic and monitoring records.</p>
                <div className="home-brand-card__panel">
                  <div className="home-brand-card__panel-head">
                    <span style={{ fontWeight: 700, color: '#0C3832' }}>Compatible Machine Types</span>
                    <span style={{ marginLeft: 'auto', color: '#117A85', fontWeight: 600 }}>3 formats</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, padding: '14px 16px 0' }}>
                    <span className="home-brand-card__tag">ECG</span>
                    <span className="home-brand-card__tag">CTG</span>
                    <span className="home-brand-card__tag">EEG</span>
                  </div>
                  <div className="home-brand-card__sample">
                    <svg viewBox="0 0 400 60" style={{ display: 'block', width: '100%' }}>
                      <polyline points="0,40 30,38 60,42 90,20 120,32 150,10 180,26 210,15 240,35 270,22 300,38 330,28 360,40 400,32" fill="none" stroke="#0C3832" strokeWidth="2" />
                    </svg>
                    <div className="home-brand-card__sample-label">SAMPLE PRINT — RECORDING PAPER</div>
                  </div>
                  <div style={{ padding: '0 16px 16px' }}>
                    <div className="home-brand-card__type-box">
                      <div className="home-brand-card__stat-label">TYPE</div>
                      <div className="home-brand-card__stat-value" style={{ fontSize: 15 }}>Disposable &amp; Reusable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-section--cream">
          <div className="home-section__blob home-section__blob--lime-mid" />
          <div className="home-section__inner">
            <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
              <h2 className="home-h2">What Our Partners Say</h2>
            </div>
            <div className="home-testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <div className="home-testimonial-card" key={t.name}>
                  <img src={t.logo} alt={t.name} style={{ height: 44, maxWidth: 180, objectFit: 'contain' }} />
                  <p className="home-testimonial-card__quote">&#8220;{t.quote}&#8221; &mdash; <b style={{ color: '#0C3832' }}>{t.name}</b></p>
                </div>
              ))}
            </div>
            <p className="home-trusted-label">Trusted also by</p>
            <div className="home-trusted-logos">
              {OTHER_CLIENTS.map((c) => (
                <img key={c.name} src={c.logo} alt={c.name} style={{ height: 38, maxWidth: 130, objectFit: 'contain', opacity: 0.85 }} />
              ))}
            </div>
          </div>
        </section>

        <section className="home-cta">
          <div className="home-cta__radial" />
          <div className="home-cta__inner">
            <h2 className="home-cta__title">Ready to Upgrade Your Facility?</h2>
            <p className="home-cta__desc">Talk to our team about your medical equipment needs — from procurement planning to installation and ongoing maintenance.</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn--teal btn--shadow">Consultation</Link>
              <a href="https://wa.me/6281266000031" className="btn btn--outline">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
