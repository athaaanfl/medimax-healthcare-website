import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import CategoryIcon from '../components/CategoryIcon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import './Products.css';

export default function Products() {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const initialCategory = CATEGORIES.includes(categoryParam) ? categoryParam : 'All Products';
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setCategory(CATEGORIES.includes(categoryParam) ? categoryParam : 'All Products');
    setQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryParam]);

  const sortedCategories = useMemo(() => {
    const rest = CATEGORIES.filter((c) => c !== 'All Products').sort((a, b) => t.categories[a].localeCompare(t.categories[b], lang));
    return ['All Products', ...rest];
  }, [t, lang]);

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
      : category === 'All Products' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === category);
    return matches.slice().sort((a, b) => a.name.localeCompare(b.name));
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
                  placeholder={t.products.searchPlaceholder}
                  className="products-search__input"
                />
              </div>
              <span className="products-sidebar__label">{t.products.categoriesLabel}</span>
              <div className="products-sidebar__chips">
                {sortedCategories.map((c) => {
                  const active = c === activeForChips;
                  return (
                    <button
                      key={c}
                      onClick={() => pickCategory(c)}
                      className={`products-sidebar__item ${active ? 'is-active' : ''}`}
                    >
                      <span className="products-sidebar__icon"><CategoryIcon category={c} size={16} /></span>
                      {t.categories[c]}
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
            <h2 className="products-h2">{t.products.finalTitle}</h2>
            <p className="products-final__desc">{t.products.finalDesc}</p>
            <div className="products-final__actions">
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
