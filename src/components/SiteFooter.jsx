import { Link } from 'react-router-dom';
import './SiteFooter.css';

const PRODUCT_CATEGORIES = [
  'Diagnostic & Monitoring',
  'Medical Consumables',
  'Life Support',
  'Furniture & Mobility',
  'Accessories',
  'Surgical Instrument',
  'Medical Paper',
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__blob site-footer__blob--teal" />
      <div className="site-footer__blob site-footer__blob--lime" />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src="/assets/medimax-vertical.svg" alt="MediMax Healthcare" style={{ height: 56, display: 'block' }} />
            <p className="site-footer__blurb">Mitra Terpercaya untuk Solusi Peralatan Medis di Indonesia</p>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">COMPANY</span>
            <Link to="/about">About Us</Link>
            <Link to="/our-brand">Our Brand</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">SERVICES</span>
            <Link to="/services">Repair &amp; Maintenance</Link>
            <Link to="/services">Equipment Procurement</Link>
            <Link to="/services">Distribution</Link>
            <Link to="/services">Manpower &amp; Outsourcing</Link>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">PRODUCTS</span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link key={cat} to="/products">{cat}</Link>
            ))}
          </div>

          <div className="site-footer__col site-footer__col--contact">
            <span className="site-footer__heading">GET IN TOUCH</span>
            <span className="site-footer__address">
              Komplek Botania Block B23 No 2A,<br />
              Belian, Batam Kota,<br />
              Kepulauan Riau, Indonesia
            </span>
            <a href="mailto:sales@medimaxglobal.com" className="site-footer__accent-link">sales@medimaxglobal.com</a>
            <a href="tel:+6281266000031" className="site-footer__accent-link">+62 812 6600 0031</a>
          </div>
        </div>

        <div className="site-footer__licenses">
          <span className="site-footer__heading">LICENSES &amp; CERTIFICATIONS</span>
          <div className="site-footer__license-pills">
            <span className="site-footer__pill">S-IDAK</span>
            <span className="site-footer__pill">NIB</span>
            <span className="site-footer__pill">CDAKB</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 PT MediMax Healthcare Indonesia. All rights reserved.</span>
          <span>Licensed medical device distributor — CDAKB, S-IDAK, NIB certified.</span>
        </div>
      </div>
    </footer>
  );
}
