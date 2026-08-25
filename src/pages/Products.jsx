import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import CategoryIcon from '../components/CategoryIcon.jsx';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import './Products.css';

export default function Products() {
  const [category, setCategory] = useState('All Products');
  const [query, setQuery] = useState('');

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) {
      return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    return category === 'All Products' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === category);
  }, [category, query]);

  const activeForChips = query.trim() ? null : category;

  function pickCategory(cat) {
    setCategory(cat);
    setQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SiteNav />
      <main className="products">
        <div className="products-blob products-blob--lime-top" />
        <div className="products-blob products-blob--teal-1" />
        <div className="products-blob products-blob--deep" />
        <div className="products-blob products-blob--lime-1" />
        <div className="products-blob products-blob--teal-2" />

        <section className="products-body">
          <div className="products-body__inner">
            <nav className="products-sidebar">
              <div className="products-search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8FA396" strokeWidth="2" strokeLinecap="round" className="products-search__icon"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="products-search__input"
                />
              </div>
              <span className="products-sidebar__label">CATEGORIES</span>
              <div className="products-sidebar__chips">
                {CATEGORIES.map((c) => {
                  const active = c === activeForChips;
                  return (
                    <button
                      key={c}
                      onClick={() => pickCategory(c)}
                      className={`products-sidebar__item ${active ? 'is-active' : ''}`}
                    >
                      <span className="products-sidebar__icon"><CategoryIcon category={c} size={16} /></span>
                      {c}
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="products-grid">
              {visibleProducts.map((p) => (
                <Link to={`/products/${p.slug}`} key={p.slug} className="products-card">
                  <div className="products-card__photo">
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} />
                    ) : (
                      <div className="products-card__placeholder">{p.name}</div>
                    )}
                  </div>
                  <div className="products-card__body">
                    <span className="products-card__cat">{p.catLabel}</span>
                    <span className="products-card__name">{p.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="products-final">
          <div className="products-final__radial" />
          <div className="products-final__inner">
            <h2 className="products-h2">Can't Find What You Need?</h2>
            <p className="products-final__desc">Our full catalog includes more products than shown here. Talk to our team about your specific equipment requirements.</p>
            <div className="products-final__actions">
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
