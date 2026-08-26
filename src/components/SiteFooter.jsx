import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
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
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-footer__blob site-footer__blob--teal" />
      <div className="site-footer__blob site-footer__blob--lime" />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src="/assets/medimax-vertical.svg" alt="MediMax Healthcare" style={{ height: 56, display: 'block' }} />
            <p className="site-footer__blurb">{t.footer.blurb}</p>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">{t.footer.company}</span>
            <Link to="/about">{t.footer.aboutUs}</Link>
            <Link to="/our-brand">{t.footer.ourBrand}</Link>
            <Link to="/contact">{t.footer.contact}</Link>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">{t.footer.services}</span>
            <Link to="/services">{t.footer.repairMaintenance}</Link>
            <Link to="/services">{t.footer.equipmentProcurement}</Link>
            <Link to="/services">{t.footer.distribution}</Link>
            <Link to="/services">{t.footer.manpowerOutsourcing}</Link>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">{t.footer.products}</span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link key={cat} to="/products">{t.footer.categories[cat]}</Link>
            ))}
          </div>

          <div className="site-footer__col site-footer__col--contact">
            <span className="site-footer__heading">{t.footer.getInTouch}</span>
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
          <span className="site-footer__heading">{t.footer.licenses}</span>
          <div className="site-footer__license-pills">
            <a href="/documents/S-IDAK-Distribution-License.pdf" download className="site-footer__pill">S-IDAK</a>
            <a href="/documents/NIB-Business-Registration.pdf" download className="site-footer__pill">NIB</a>
            <a href="/documents/CDAKB-Certificate.pdf" download className="site-footer__pill">CDAKB</a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
