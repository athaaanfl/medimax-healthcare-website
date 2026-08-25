import { Link, useParams } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import { getSpecGroupsForSlug } from '../data/paperSpecs.js';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <SiteNav />
        <main className="product-detail">
          <section className="product-detail-notfound">
            <h1 className="product-detail-notfound__title">Product Not Found</h1>
            <p className="product-detail-notfound__desc">This product may have been moved or removed from the catalog.</p>
            <Link to="/products" className="btn btn--teal">Back to Catalog</Link>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  const specGroups = getSpecGroupsForSlug(product.slug);
  const related = getRelatedProducts(product);

  return (
    <>
      <SiteNav />
      <main className="product-detail">
        <div className="product-detail-blob product-detail-blob--lime-top" />
        <div className="product-detail-blob product-detail-blob--teal-1" />
        <div className="product-detail-blob product-detail-blob--lime-1" />

        <section className="product-detail-main">
          <div className="product-detail-breadcrumb">
            <Link to="/products" className="product-detail-breadcrumb__link">Products</Link>
            <span> / </span>
            <span className="product-detail-breadcrumb__cat">{product.catLabel}</span>
            <span> / </span>
            <span className="product-detail-breadcrumb__name">{product.name}</span>
          </div>

          <div className="product-detail-grid">
            <div className="product-detail-photo">
              {product.photo ? (
                <img src={product.photo} alt={product.name} />
              ) : (
                <div className="product-detail-photo__placeholder">{product.name} photo</div>
              )}
            </div>

            <div>
              <span className="product-detail-catlabel">{product.catLabel}</span>
              <h1 className="product-detail-name">{product.name}</h1>
              {product.badge && (
                <span className="product-detail-badge" style={{ background: product.badgeBg, color: product.badgeFg }}>
                  {product.badge}
                </span>
              )}
              <p className="product-detail-desc">{product.desc}</p>
              <div className="product-detail-actions">
                <Link to="/contact" className="btn btn--teal">Request Quote →</Link>
                <a href="https://wa.me/6281266000031" className="btn btn--outline">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        {specGroups.length > 0 && (
          <section className="product-detail-specs">
            <div className="product-detail-specs__inner">
              <h2 className="product-detail-h2">Compatible Specifications</h2>
              <p className="product-detail-specs__sub">Machine models and sizes this paper is compatible with.</p>
              <div className="product-detail-specs__list">
                {specGroups.map((grp) => (
                  <div className="product-detail-specs__group" key={grp.brand}>
                    <h3 className="product-detail-specs__brand">{grp.brand}</h3>
                    <div className="product-detail-specs__table">
                      <div className="product-detail-specs__row product-detail-specs__row--head">
                        <span className="product-detail-specs__cell product-detail-specs__cell--no">NO</span>
                        <span className="product-detail-specs__cell product-detail-specs__cell--code">ORIGINAL CODE</span>
                        <span className="product-detail-specs__cell product-detail-specs__cell--machine">MACHINE MODEL</span>
                        <span className="product-detail-specs__cell product-detail-specs__cell--size">SIZE</span>
                      </div>
                      {grp.rows.map((row, i) => (
                        <div className="product-detail-specs__row" key={i}>
                          <span className="product-detail-specs__cell product-detail-specs__cell--no">{row.num}</span>
                          <span className="product-detail-specs__cell product-detail-specs__cell--code product-detail-specs__mono">{row.code}</span>
                          <span className="product-detail-specs__cell product-detail-specs__cell--machine">{row.machine}</span>
                          <span className="product-detail-specs__cell product-detail-specs__cell--size product-detail-specs__bold">{row.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="product-detail-related">
            <div className="product-detail-related__inner">
              <h2 className="product-detail-h2">More in {product.catLabel}</h2>
              <div className="product-detail-related__grid">
                {related.map((r) => (
                  <Link to={`/products/${r.slug}`} key={r.slug} className="product-detail-related__card">
                    <div className="product-detail-related__photo">
                      {r.photo && <img src={r.photo} alt={r.name} />}
                    </div>
                    <div className="product-detail-related__body">
                      <span className="product-detail-related__name">{r.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
