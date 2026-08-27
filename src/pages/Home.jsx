import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Home.css';

const SERVICES = [
  { key: 'repair', photo: '/assets/services/repair-maintenance.webp', title: 'Repair & Maintenance', desc: 'Scheduled and corrective maintenance for all major brands, with certified biomedical engineers.' },
  { key: 'procurement', photo: '/assets/services/equipment-planning-procurement.webp', title: 'Equipment Planning & Procurement', desc: 'Needs assessment to e-catalog procurement, aligned with Kemenkes and LKPP regulations.' },
  { key: 'distribution', photo: '/assets/services/distribution.webp', title: 'Distribution', desc: 'CDAKB-certified end-to-end supply chain — sourcing to last-mile delivery nationwide.' },
  { key: 'manpower', photo: '/assets/services/manpower-outsourcing.webp', title: 'Manpower & Outsourcing', desc: 'Certified elektromedik technicians and healthcare support personnel on flexible contracts.' },
];

const PARTNERS = [
  { name: 'Mindray', src: '/assets/partners/mindray.svg' },
  { name: 'B.Braun', src: '/assets/partners/bbraun.svg' },
  { name: '3M', src: '/assets/partners/3m.svg' },
  { name: 'OneMed', src: '/assets/partners/onemed.svg' },
  { name: 'OneHealth', src: '/assets/partners/onehealth.svg' },
  { name: 'BSN Medical', src: '/assets/partners/bsnmedical.svg' },
  { name: 'Sinocare', src: '/assets/partners/sinocare.svg' },
  { name: 'Accu-Chek', src: '/assets/partners/accu-chek.svg' },
  { name: 'GEA Medical', src: '/assets/partners/geamedical.svg' },
  { name: 'Medke', src: '/assets/partners/medke.svg' },
  { name: 'Sutcon Sutures', src: '/assets/partners/sutcon-sutures.svg' },
  { name: 'Sensi', src: '/assets/partners/sensi.svg' },
  { name: 'Betadine', src: '/assets/partners/betadine.svg' },
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
  { quote: 'The equipment provided, including microscope, medical beds, and trolleys, are of good quality and meet our hospital standards. The team is professional and responsive.', name: 'RSAL Tanjung Pinang', logo: '/assets/hospitals/rsaltanjungpinang.webp' },
  { quote: 'The flow sensor and oxygen sensor are of good quality and compatible with our equipment. The products perform reliably, and the service provided is professional and responsive.', name: 'RS Wongsonegoro Semarang', logo: '/assets/hospitals/rswn.svg' },
];

const OTHER_CLIENTS = [
  { name: 'RS Charis Medika', logo: '/assets/hospitals/rscharismedika.svg' },
  { name: 'RS Budi Kemuliaan Batam', logo: '/assets/hospitals/rsbkbatam.webp' },
  { name: 'RS BP Batam', logo: '/assets/hospitals/rsbpbatam.svg' },
  { name: 'RS Awal Bros Batam', logo: '/assets/hospitals/rsawalbrosbatam.svg' },
  { name: 'RSUD Tanjungpinang', logo: '/assets/hospitals/rsudtanjungpinang.svg' },
];

export default function Home() {
  const { t } = useLanguage();
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
              <h1 className="home-hero__title">{t.home.heroTitle}</h1>
              <p className="home-hero__subtitle">{t.home.heroSubtitle}</p>
              <div className="home-hero__ctas">
                <Link to="/contact" className="btn btn--teal">{t.nav.consultation}</Link>
                <Link to="/products" className="btn btn--outline">{t.home.viewCatalog}</Link>
              </div>
              <div className="home-hero__stats">
                <div><div className="home-hero__stat-num">100+</div><div className="home-hero__stat-label">{t.home.statHospitals}</div></div>
                <div><div className="home-hero__stat-num">15+</div><div className="home-hero__stat-label">{t.home.statPartners}</div></div>
                <div><div className="home-hero__stat-num">3</div><div className="home-hero__stat-label">{t.home.statCertifications}</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-section--white">
          <div className="home-section__blob home-section__blob--lime-tl" />
          <div className="home-section__inner">
            <div className="home-section__head">
              <h2 className="home-h2">{t.home.ourProduct}</h2>
              <Link to="/products" className="home-view-all">{t.home.viewAllProducts}</Link>
            </div>
            <p className="home-lead">{t.home.productLead}</p>
            <p className="home-body-lg">{t.home.productBody}</p>
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
                <h2 className="home-h2">{t.home.ourServices}</h2>
                <p className="home-services-sub">{t.home.servicesSub}</p>
              </div>
              <Link to="/services" className="home-view-all">{t.home.allServices}</Link>
            </div>
            <div className="home-services-grid">
              {SERVICES.map((s) => (
                <Link to={`/services#${s.key}`} key={s.key} className="home-service-card">
                  <div className="home-service-card__photo">
                    <img src={s.photo} alt={s.title} />
                  </div>
                  <div className="home-service-card__body">
                    <span className="home-service-card__title">{s.title}</span>
                    <span className="home-service-card__desc">{s.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--white home-ourbrand">
          <div className="home-section__blob home-section__blob--lime-tr" />
          <div className="home-section__blob home-section__blob--teal-bl" />
          <div className="home-section__inner">
            <h2 className="home-h2">{t.home.ourBrand}</h2>
            <p className="home-brand-sub">{t.home.brandSub}</p>
            <div className="home-brand-grid">
              <Link to="/our-brand#meditrack" className="home-brand-card" style={{ background: '#8AA827' }}>
                <div className="home-brand-card__badge" style={{ borderColor: '#8AA827' }}>
                  <div className="home-brand-card__badge-inner">
                    <img src="/assets/meditrack-mark.svg" alt="MediTrack" style={{ height: 64, display: 'block' }} />
                  </div>
                </div>
                <p className="home-brand-card__desc">Your number one medical equipment maintenance and asset management company. Track the most important medical equipment and maintain your assets in real time to optimize your day-to-day operations.</p>
              </Link>

              <Link to="/our-brand#medigraph" className="home-brand-card" style={{ background: '#117A85' }}>
                <div className="home-brand-card__badge" style={{ borderColor: '#117A85' }}>
                  <div className="home-brand-card__badge-inner">
                    <img src="/assets/medigraph-mark.svg" alt="MediGraph" style={{ height: 64, display: 'block' }} />
                  </div>
                </div>
                <p className="home-brand-card__desc">A medical graph paper brand supplying ECG, CTG, and EEG recording paper for hospitals to print patient diagnostic and monitoring records.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section home-section--cream home-trusted">
          <div className="home-section__blob home-section__blob--teal-tl" />
          <div className="home-section__blob home-section__blob--lime-br" />
          <div className="home-section__inner home-trusted__head">
            <h2 className="home-h2">{t.home.businessPartners}</h2>
          </div>
          <div className="home-marquee-mask home-marquee-mask--lg">
            <div className="home-marquee-track">
              {PARTNER_LOOP.map((p, i) => (
                <div className="home-marquee-item home-marquee-item--lg" key={p.name + i}>
                  <img src={p.src} alt={p.name} style={{ height: '100%', maxWidth: 240, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--white">
          <div className="home-section__blob home-section__blob--lime-mid" />
          <div className="home-section__inner">
            <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
              <h2 className="home-h2">{t.home.partnersSay}</h2>
            </div>
            <div className="home-testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <div className="home-testimonial-card" key={t.name}>
                  <img src={t.logo} alt={t.name} style={{ height: 44, maxWidth: 180, objectFit: 'contain' }} />
                  <p className="home-testimonial-card__quote">&#8220;{t.quote}&#8221; &mdash; <b style={{ color: '#0C3832' }}>{t.name}</b></p>
                </div>
              ))}
            </div>
            <p className="home-trusted-label">{t.home.trustedAlso}</p>
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
            <h2 className="home-cta__title">{t.home.ctaTitle}</h2>
            <p className="home-cta__desc">{t.home.ctaDesc}</p>
            <div className="home-cta__actions">
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
