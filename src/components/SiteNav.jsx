import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './SiteNav.css';

const LINK_IDS = ['home', 'about', 'products', 'services', 'brand', 'contact'];
const LINK_HREFS = {
  home: '/',
  about: '/about',
  products: '/products',
  services: '/services',
  brand: '/our-brand',
  contact: '/contact',
};

function activeIdForPath(pathname) {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/products')) return 'products';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/our-brand')) return 'brand';
  if (pathname.startsWith('/contact')) return 'contact';
  return '';
}

export default function SiteNav({ fixed = true }) {
  const location = useLocation();
  const active = activeIdForPath(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      {fixed && <div className="site-nav__spacer" />}
      <header className={`site-nav ${fixed ? 'site-nav--fixed' : 'site-nav--static'}`}>
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__brand" onClick={() => setMenuOpen(false)}>
            <img src="/assets/medimax-horizontal.svg" alt="MediMax Healthcare" className="site-nav__logo" />
          </Link>
          <nav className="site-nav__links">
            {LINK_IDS.map((id) => (
              <Link
                key={id}
                to={LINK_HREFS[id]}
                className={`site-nav__link ${id === active ? 'site-nav__link--active' : ''}`}
              >
                {t.nav[id]}
              </Link>
            ))}
          </nav>
          <div className="site-nav__actions">
            <button type="button" className="site-nav__lang" onClick={() => setLang(lang === 'en' ? 'id' : 'en')} aria-label="Switch language">
              <span className={lang === 'en' ? 'site-nav__lang-active' : 'site-nav__lang-inactive'}>EN</span>
              <span className={lang === 'id' ? 'site-nav__lang-active' : 'site-nav__lang-inactive'}>ID</span>
            </button>
            <a href="https://wa.me/6281266000031" title="WhatsApp" className="site-nav__whatsapp">
              <img src="/assets/whatsapp-color.svg" alt="WhatsApp" style={{ width: 20, height: 20, display: 'block' }} />
            </a>
            <Link to="/contact" className="site-nav__cta">{t.nav.consultation}</Link>
          </div>
          <button
            type="button"
            className={`site-nav__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`site-nav__mobile ${menuOpen ? 'is-open' : ''}`}>
          <nav className="site-nav__mobile-links">
            {LINK_IDS.map((id) => (
              <Link
                key={id}
                to={LINK_HREFS[id]}
                onClick={() => setMenuOpen(false)}
                className={`site-nav__mobile-link ${id === active ? 'site-nav__mobile-link--active' : ''}`}
              >
                {t.nav[id]}
              </Link>
            ))}
          </nav>
          <div className="site-nav__mobile-actions">
            <button type="button" className="site-nav__lang site-nav__lang--mobile" onClick={() => setLang(lang === 'en' ? 'id' : 'en')} aria-label="Switch language">
              <span className={lang === 'en' ? 'site-nav__lang-active' : 'site-nav__lang-inactive'}>EN</span>
              <span className={lang === 'id' ? 'site-nav__lang-active' : 'site-nav__lang-inactive'}>ID</span>
            </button>
            <a href="https://wa.me/6281266000031" className="site-nav__mobile-whatsapp">
              <img src="/assets/whatsapp-color.svg" alt="" style={{ width: 18, height: 18, display: 'block' }} />
              {t.nav.chatWhatsapp}
            </a>
            <Link to="/contact" className="site-nav__cta" onClick={() => setMenuOpen(false)}>{t.nav.consultation}</Link>
          </div>
        </div>
      </header>
    </>
  );
}
