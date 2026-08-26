import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import CategoryIcon from './CategoryIcon.jsx';
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

const MEGA_MENUS = {
  services: {
    title: 'Services',
    columns: [
      {
        links: [
          { label: 'Repair & Maintenance', href: '/services#repair' },
          { label: 'Equipment Planning & Procurement', href: '/services#procurement' },
        ],
      },
      {
        links: [
          { label: 'Distribution', href: '/services#distribution' },
          { label: 'Manpower & Outsourcing', href: '/services#manpower' },
        ],
      },
    ],
  },
  products: {
    title: 'Categories',
    columns: [
      {
        links: [
          { label: 'Diagnostic & Monitoring', href: `/products?category=${encodeURIComponent('Diagnostic & Monitoring')}` },
          { label: 'Medical Consumables', href: `/products?category=${encodeURIComponent('Medical Consumables')}` },
          { label: 'Life Support', href: `/products?category=${encodeURIComponent('Life Support')}` },
          { label: 'Furniture & Mobility', href: `/products?category=${encodeURIComponent('Furniture & Mobility')}` },
        ],
      },
      {
        links: [
          { label: 'Accessories', href: `/products?category=${encodeURIComponent('Accessories')}` },
          { label: 'Surgical Instrument', href: `/products?category=${encodeURIComponent('Surgical Instrument')}` },
          { label: 'Medical Paper', href: `/products?category=${encodeURIComponent('Medical Paper')}` },
          { label: 'All Products', href: '/products' },
        ],
      },
    ],
  },
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
  const [openMega, setOpenMega] = useState(null);
  const { lang, setLang, t } = useLanguage();
  const closeTimer = useRef(null);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const handleMegaEnter = (id) => {
    clearTimeout(closeTimer.current);
    setOpenMega(id);
  };

  const handleMegaLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 200);
  };

  return (
    <>
      {fixed && <div className="site-nav__spacer" />}
      <header className={`site-nav ${fixed ? 'site-nav--fixed' : 'site-nav--static'}`}>
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__brand" onClick={() => setMenuOpen(false)}>
            <img src="/assets/medimax-horizontal.svg" alt="MediMax Healthcare" className="site-nav__logo" />
          </Link>
          <nav className="site-nav__links">
            {LINK_IDS.map((id) => {
              const mega = MEGA_MENUS[id];
              if (!mega) {
                return (
                  <Link
                    key={id}
                    to={LINK_HREFS[id]}
                    className={`site-nav__link ${id === active ? 'site-nav__link--active' : ''}`}
                  >
                    {t.nav[id]}
                  </Link>
                );
              }
              return (
                <div
                  key={id}
                  className="site-nav__item"
                  onMouseEnter={() => handleMegaEnter(id)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={LINK_HREFS[id]}
                    className={`site-nav__link ${id === active ? 'site-nav__link--active' : ''} ${openMega === id ? 'site-nav__link--open' : ''}`}
                  >
                    {t.nav[id]}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`site-nav__chevron ${openMega === id ? 'is-open' : ''}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  {openMega === id && (
                    <div className="site-nav__mega">
                      <div className="site-nav__mega-inner">
                        {mega.title && <div className="site-nav__mega-title">{mega.title}</div>}
                        <div className="site-nav__mega-columns">
                          {mega.columns.map((col, ci) => (
                            <div className="site-nav__mega-col" key={ci}>
                              {col.links.map((l) => (
                                <Link key={l.label} to={l.href} className="site-nav__mega-link" onClick={() => setOpenMega(null)}>
                                  <CategoryIcon category={l.label} size={16} />
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
