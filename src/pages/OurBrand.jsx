import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './OurBrand.css';

const MT_FEATURES = [
  { t: 'Asset Registry & Tracking', d: 'Full inventory of every device across multiple units and departments.' },
  { t: 'Preventive Maintenance Scheduler', d: 'Auto-generated PM schedules based on manufacturer recommendations.' },
  { t: 'Compliance Document Vault', d: 'Store calibration certificates, service reports, and regulatory docs.' },
  { t: 'Work Order Management', d: 'Issue, assign, and track corrective maintenance tickets end-to-end.' },
  { t: 'Real-Time Alert System', d: 'Automated notifications for overdue maintenance and warranty expirations.' },
  { t: 'Analytics & Reporting', d: 'Downtime reports, cost-per-device analysis, and utilization dashboards.' },
];

const VITALS = [
  { l: 'SpO₂', v: '98', u: '%', c: '#117A85' },
  { l: 'HEART RATE', v: '76', u: 'bpm', c: '#B3D435' },
  { l: 'NIBP', v: '118/76', u: 'mmHg', c: '#117A85' },
  { l: 'TEMP', v: '36.8', u: '°C', c: '#B3D435' },
];

const MG_POINTS = [
  'Compatible with major USG, ECG/EKG, and CTG machine brands',
  'Consistent print clarity for accurate diagnostic records',
  'Available in thermal and standard recording paper formats',
  'Various roll and fan-fold sizes to match device models',
  'Bulk supply for hospitals, clinics, and diagnostic centers',
  'Global-grade paper quality, on par with brands like Telepaper',
];

function CheckDot() {
  return (
    <span className="ob-check">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6E8A1C" strokeWidth="3"><path d="M4 12.5l5 5L20 6.5" /></svg>
    </span>
  );
}

export default function OurBrand() {
  return (
    <>
      <SiteNav />
      <main className="ob">
        <div className="ob-blob ob-blob--lime-top" />
        <div className="ob-blob ob-blob--teal-1" />
        <div className="ob-blob ob-blob--deep" />
        <div className="ob-blob ob-blob--lime-1" />
        <div className="ob-blob ob-blob--teal-2" />
        <div className="ob-blob ob-blob--lime-2" />

        <section className="ob-hero">
          <div className="ob-hero__inner">
            <span className="section-eyebrow">OUR BRAND</span>
            <h1 className="ob-hero__title">Software Platforms</h1>
            <p className="ob-hero__desc">MediMax develops and distributes technology platforms that empower healthcare facilities across Indonesia — from equipment management to digital health monitoring.</p>
            <div className="ob-hero__pills">
              <a href="#meditrack" className="ob-pill">MediTrack</a>
              <a href="#medigraph" className="ob-pill">MediGraph</a>
            </div>
          </div>
        </section>

        <section id="meditrack" className="ob-section ob-section--white">
          <div className="ob-grid">
            <div>
              <div className="ob-brand-head">
                <img src="/assets/meditrack-mark.svg" alt="MediTrack" className="ob-brand-head__mark" />
                <h2 className="ob-h2">MediTrack</h2>
              </div>
              <p className="ob-tagline">Medical Equipment Management Platform</p>
              <p className="ob-p">Your number one medical equipment maintenance and asset management company. Track the most important medical equipment and maintain your assets in real time to optimize your day-to-day operations.</p>
              <div className="ob-features">
                {MT_FEATURES.map((f) => (
                  <div className="ob-feature" key={f.t}>
                    <div className="ob-feature__head">
                      <span className="ob-feature__dot"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0C3832" strokeWidth="3.5"><path d="M4 12.5l5 5L20 6.5" /></svg></span>
                      <span className="ob-feature__title">{f.t}</span>
                    </div>
                    <div className="ob-feature__desc">{f.d}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="ob-cta-link">Request Demo →</Link>
            </div>

            <div>
              <div className="ob-mockup">
                <div className="ob-mockup__inner ob-mockup__inner--dash">
                  <div className="ob-dash-side">
                    <div className="ob-dash-side__brand"><img src="/assets/meditrack-mark.svg" alt="" /><span>MediTrack</span></div>
                    <span className="ob-dash-side__item ob-dash-side__item--active">Dashboard</span>
                    <span className="ob-dash-side__item">Equipment Management</span>
                    <span className="ob-dash-side__item">Maintenance Tracking</span>
                    <span className="ob-dash-side__item">Calibrations</span>
                    <span className="ob-dash-side__item">Maintenance Cost</span>
                    <span className="ob-dash-side__item">Reporting</span>
                    <span className="ob-dash-side__item">User Management</span>
                    <span className="ob-dash-side__item">Vendor Management</span>
                    <span className="ob-dash-side__item">Setting</span>
                  </div>
                  <div>
                    <div className="ob-dash-topbar">
                      <span className="ob-dash-topbar__title">Dashboard</span>
                      <span className="ob-dash-topbar__search">Search any medical assets...</span>
                      <span className="ob-dash-topbar__avatar" />
                    </div>
                    <div className="ob-dash-body">
                      <div className="ob-dash-row2">
                        <div className="ob-dash-stat"><div><div className="ob-dash-stat__label">Total Equipment</div><div className="ob-dash-stat__value">86</div></div><span className="ob-dash-icon" /></div>
                        <div className="ob-dash-stat"><div><div className="ob-dash-stat__label">Active Alerts</div><div className="ob-dash-stat__value">7</div></div><span className="ob-dash-icon" /></div>
                      </div>
                      <div className="ob-dash-row3">
                        <div className="ob-dash-stat ob-dash-stat--big"><div className="ob-dash-stat__label">Total Equipment</div><div className="ob-dash-stat__value ob-dash-stat__value--lg">2,420</div></div>
                        <div className="ob-dash-stat"><div><div className="ob-dash-stat__label">Calibration reminder</div><div className="ob-dash-stat__value">86</div></div><span className="ob-dash-icon ob-dash-icon--lime" /></div>
                        <div className="ob-dash-stat"><div><div className="ob-dash-stat__label">Calibration</div><div className="ob-dash-stat__value">12</div></div><span className="ob-dash-icon ob-dash-icon--lime" /></div>
                      </div>
                      <div className="ob-dash-row-last">
                        <div className="ob-dash-stat"><div><div className="ob-dash-stat__label">Departments</div><div className="ob-dash-stat__value">86</div></div><span className="ob-dash-icon ob-dash-icon--lime" /></div>
                        <div className="ob-dash-maint">
                          <div className="ob-dash-maint__head"><div><div className="ob-dash-stat__label">Maintenance</div><div className="ob-dash-stat__value">152</div></div><span className="ob-dash-icon ob-dash-icon--lime" /></div>
                          <div className="ob-dash-maint__tasks">
                            <span>Total Open Tasks: <b>23</b></span>
                            <span>Upcoming Maintenance: <b>10</b></span>
                            <span>Completed Today: <b>8</b></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ob-stat-strip">
                <div><div className="ob-stat-strip__value">&lt; 5 min</div><div className="ob-stat-strip__label">Onboarding</div></div>
                <div><div className="ob-stat-strip__value">99.9%</div><div className="ob-stat-strip__label">Uptime SLA</div></div>
                <div><div className="ob-stat-strip__value">Multi-site</div><div className="ob-stat-strip__label">Support</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="medigraph" className="ob-section ob-section--cream">
          <div className="ob-grid ob-grid--reverse">
            <div>
              <div className="ob-mockup">
                <div className="ob-mockup__inner ob-mockup__inner--live">
                  <div className="ob-live-topbar">
                    <span className="ob-live-dot" /><span className="ob-live-dot" /><span className="ob-live-dot" />
                    <span className="ob-live-url">app.medigraph.id / ward-icu</span>
                    <span className="ob-live-badge"><span className="ob-live-badge__dot" />LIVE</span>
                  </div>
                  <div className="ob-live-body">
                    <div className="ob-vitals">
                      {VITALS.map((v) => (
                        <div className="ob-vital" key={v.l} style={{ borderTopColor: v.c }}>
                          <div className="ob-vital__label">{v.l}</div>
                          <div className="ob-vital__value">{v.v}<span className="ob-vital__unit"> {v.u}</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="ob-live-trend-head">
                      <span>Bed 04 — Trend, last 6 hrs</span>
                      <span className="ob-live-trend-sub">SpO₂ · Heart rate</span>
                    </div>
                    <svg viewBox="0 0 460 110" className="ob-live-chart">
                      <line x1="0" y1="30" x2="460" y2="30" stroke="#EFF3EC" /><line x1="0" y1="60" x2="460" y2="60" stroke="#EFF3EC" /><line x1="0" y1="90" x2="460" y2="90" stroke="#EFF3EC" />
                      <polyline points="0,42 46,38 92,44 138,30 184,36 230,24 276,30 322,20 368,26 414,16 460,22" fill="none" stroke="#117A85" strokeWidth="2.5" />
                      <polyline points="0,88 46,84 92,90 138,78 184,84 230,72 276,78 322,66 368,74 414,62 460,68" fill="none" stroke="#B3D435" strokeWidth="2.5" />
                    </svg>
                    <div className="ob-live-alerts">
                      <div className="ob-live-alert ob-live-alert--warn"><span className="ob-live-alert__dot" />Bed 07 — NIBP above threshold, notified</div>
                      <div className="ob-live-alert ob-live-alert--ok"><span className="ob-live-alert__dot" />All other beds within normal range</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ob-stat-strip">
                <div><div className="ob-stat-strip__value">Real-time</div><div className="ob-stat-strip__label">Data Sync</div></div>
                <div><div className="ob-stat-strip__value">EHR</div><div className="ob-stat-strip__label">Compatible</div></div>
                <div><div className="ob-stat-strip__value">Cloud</div><div className="ob-stat-strip__label">Hosted</div></div>
              </div>
            </div>

            <div>
              <div className="ob-brand-head">
                <img src="/assets/medigraph-mark.svg" alt="MediGraph" className="ob-brand-head__mark" />
                <h2 className="ob-h2">MediGraph</h2>
              </div>
              <p className="ob-tagline">Medical Graph &amp; Recording Paper</p>
              <p className="ob-p">MediGraph is a medical graph paper brand — supplying USG, ECG/EKG, and CTG recording paper used by hospitals across Indonesia to print patient diagnostic and monitoring records, on par with global producers such as Telepaper.</p>
              <div className="ob-points">
                {MG_POINTS.map((p) => (
                  <div className="ob-point" key={p}>
                    <CheckDot />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="ob-cta-link">Learn More / Inquire →</Link>
            </div>
          </div>
        </section>

        <section className="ob-final">
          <div className="ob-final__radial" />
          <div className="ob-final__inner">
            <h2 className="ob-h2">Ready to See It in Action?</h2>
            <p className="ob-final__desc">Request a live demo of MediTrack or MediGraph and see how it fits your facility's workflow.</p>
            <div className="ob-final__actions">
              <Link to="/contact" className="btn btn--teal btn--shadow">Request Demo →</Link>
              <a href="https://wa.me/6281266000031" className="btn btn--outline">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
