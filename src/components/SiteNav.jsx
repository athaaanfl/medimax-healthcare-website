import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SiteNav.css';

const LINKS = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Products', href: '/products', id: 'products' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Our Brand', href: '/our-brand', id: 'brand' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

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

  return (
    <>
      {fixed && <div className="site-nav__spacer" />}
      <header className={`site-nav ${fixed ? 'site-nav--fixed' : 'site-nav--static'}`}>
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__brand" onClick={() => setMenuOpen(false)}>
            <img src="/assets/medimax-horizontal.svg" alt="MediMax Healthcare" className="site-nav__logo" />
          </Link>
          <nav className="site-nav__links">
            {LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.href}
                className={`site-nav__link ${l.id === active ? 'site-nav__link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="site-nav__actions">
            <div className="site-nav__lang">
              <span className="site-nav__lang-active">EN</span>
              <span className="site-nav__lang-inactive">ID</span>
            </div>
            <a href="https://wa.me/6281266000031" title="WhatsApp" className="site-nav__whatsapp">
              <img src="/assets/whatsapp-color.svg" alt="WhatsApp" style={{ width: 20, height: 20, display: 'block' }} />
            </a>
            <Link to="/contact" className="site-nav__cta">Consultation</Link>
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
            {LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={`site-nav__mobile-link ${l.id === active ? 'site-nav__mobile-link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="site-nav__mobile-actions">
            <a href="https://wa.me/6281266000031" className="site-nav__mobile-whatsapp">
              <img src="/assets/whatsapp-color.svg" alt="" style={{ width: 18, height: 18, display: 'block' }} />
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="site-nav__cta" onClick={() => setMenuOpen(false)}>Consultation</Link>
          </div>
        </div>
      </header>
    </>
  );
}
