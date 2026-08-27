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

const SERVICE_ICON_KEYS = {
  repair: 'Repair & Maintenance',
  procurement: 'Equipment Planning & Procurement',
  distribution: 'Distribution',
  manpower: 'Manpower & Outsourcing',
};

const SERVICE_MENU_KEYS = [
  ['repair', '/services#repair'],
  ['procurement', '/services#procurement'],
  ['distribution', '/services#distribution'],
  ['manpower', '/services#manpower'],
];

const PRODUCT_MENU_KEYS = [
  ['Diagnostic & Monitoring', `/products?category=${encodeURIComponent('Diagnostic & Monitoring')}`],
  ['Medical Consumables', `/products?category=${encodeURIComponent('Medical Consumables')}`],
  ['Life Support', `/products?category=${encodeURIComponent('Life Support')}`],
  ['Furniture & Mobility', `/products?category=${encodeURIComponent('Furniture & Mobility')}`],
  ['Accessories', `/products?category=${encodeURIComponent('Accessories')}`],
  ['Surgical Instrument', `/products?category=${encodeURIComponent('Surgical Instrument')}`],
  ['Medical Paper', `/products?category=${encodeURIComponent('Medical Paper')}`],
  ['All Products', '/products'],
];

function buildMegaMenus(t, lang) {
  const serviceLinks = SERVICE_MENU_KEYS
    .map(([key, href]) => ({ key, iconKey: SERVICE_ICON_KEYS[key], label: t.services.sections[key].title, href }))
    .sort((a, b) => a.label.localeCompare(b.label, lang));
  const productLinks = PRODUCT_MENU_KEYS
    .filter(([cat]) => cat !== 'All Products')
    .map(([cat, href]) => ({ key: cat, iconKey: cat, label: t.categories[cat], href }))
    .sort((a, b) => a.label.localeCompare(b.label, lang));
  const allProducts = PRODUCT_MENU_KEYS.find(([cat]) => cat === 'All Products');
  productLinks.unshift({ key: allProducts[0], iconKey: allProducts[0], label: t.categories[allProducts[0]], href: allProducts[1] });
  return {
    services: {
      title: t.nav.services,
      columns: [
        { links: serviceLinks.slice(0, 2) },
        { links: serviceLinks.slice(2) },
      ],
    },
    products: {
      title: t.nav.categoriesLabel,
      columns: [
        { links: productLinks.slice(0, 4) },
        { links: productLinks.slice(4) },
      ],
    },
  };
}

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
  const MEGA_MENUS = buildMegaMenus(t, lang);

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
                                <Link key={l.key} to={l.href} className="site-nav__mega-link" onClick={() => setOpenMega(null)}>
                                  <CategoryIcon category={l.iconKey} size={16} />
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
