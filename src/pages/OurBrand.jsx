import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './OurBrand.css';

const MT_NAV = [
  'Dashboard',
  'Equipment Management',
  'Maintenance Tracking',
  'Calibrations',
  'Maintenance Cost',
  'Reporting',
  'Reminder & Notifications',
  'User Management',
  'Lifecycle Management',
  'Vendor Management',
  'Setting',
];

const MT_ICON_PATHS = {
  building: <><path d="M4 21V7a1 1 0 0 1 1-1h6v15" /><path d="M14 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" /><path d="M9 9h1M9 12h1M9 15h1" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="1.5" /><rect x="9" y="2" width="6" height="3" rx="1" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  activity: <path d="M2 12h4l2.5 8L13 4l2.5 8H22" />,
  doc: <><rect x="6" y="3" width="12" height="18" rx="1.5" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
};

function MtIcon({ name }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {MT_ICON_PATHS[name]}
    </svg>
  );
}

const MT_STATS = [
  { icon: 'building', tone: 'blue', label: 'Departments', value: '86', link: 'View all departments' },
  { icon: 'target', tone: 'blue', label: 'Calibration reminder', value: '86', link: 'View all reminders' },
  { icon: 'wrench', tone: 'orange', label: 'Maintenance', value: '152', link: 'View all tasks' },
  { icon: 'clipboard', tone: 'purple', label: 'Total Open Tasks', value: '23', link: 'View tasks' },
  { icon: 'calendar', tone: 'orange', label: 'Upcoming Scheduled Maintenance', value: '10', link: 'View schedule' },
  { icon: 'check', tone: 'green', label: 'Completed Tasks Today', value: '8', link: 'View completed tasks' },
  { icon: 'target', tone: 'blue', label: 'Calibration', value: '12', link: 'View calibrations' },
  { icon: 'activity', tone: 'indigo', label: 'Total Equipment', value: '2,420', link: 'View all equipment' },
];

const MT_STATUS = [
  { l: 'Operational', v: '1,650', pct: '68%', c: '#3CB371' },
  { l: 'Under Maintenance', v: '320', pct: '13%', c: '#E8A73B' },
  { l: 'Out of Service', v: '280', pct: '12%', c: '#E05B4F' },
  { l: 'N/A', v: '170', pct: '7%', c: '#B7C0BC' },
];

const MT_ACTIVITY = [
  { icon: 'check', tone: 'green', title: 'Preventive maintenance completed on MRI Machine', time: '2 min ago' },
  { icon: 'doc', tone: 'blue', title: 'New equipment added ECG Machine', time: '15 min ago' },
  { icon: 'wrench', tone: 'orange', title: 'Maintenance task assigned to John Doe', time: '1 hr ago' },
  { icon: 'target', tone: 'purple', title: 'Calibration due reminder for Ventilator', time: '2 hrs ago' },
];

function CheckDot() {
  return (
    <span className="ob-check">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6E8A1C" strokeWidth="3"><path d="M4 12.5l5 5L20 6.5" /></svg>
    </span>
  );
}

export default function OurBrand() {
  const { t } = useLanguage();
  const MT_FEATURES = t.ourBrand.meditrack.features;
  const MG_POINTS = t.ourBrand.medigraph.points;
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

        <section id="meditrack" className="ob-section ob-section--white">
          <div className="ob-grid ob-grid--mt">
            <div className="ob-col-left">
              <div className="ob-area-head">
                <div className="ob-brand-head">
                  <img src="/assets/meditrack-mark.svg" alt="MediTrack" className="ob-brand-head__mark" />
                  <h2 className="ob-h2">MediTrack</h2>
                </div>
              </div>

              <div className="ob-area-body">
                <p className="ob-tagline">{t.ourBrand.meditrack.tagline}</p>
                <p className="ob-p">{t.ourBrand.meditrack.desc}</p>
                <div className="ob-features">
                  {MT_FEATURES.map((f) => (
                    <div className="ob-feature" key={f.t}>
                      <span className="ob-feature__title">{f.t}</span>
                      <div className="ob-feature__desc">{f.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ob-col-right">
            <div className="ob-area-mock">
              <div className="ob-mockup">
                <div className="ob-mockup__inner ob-mt">
                  <div className="ob-mt-side">
                    <div className="ob-mt-side__brand"><img src="/assets/meditrack-mark.svg" alt="" /><span>MediTrack</span></div>
                    {MT_NAV.map((item) => (
                      <span key={item} className={`ob-mt-side__item ${item === 'Dashboard' ? 'ob-mt-side__item--active' : ''}`}>{item}</span>
                    ))}
                  </div>

                  <div className="ob-mt-main">
                    <div className="ob-mt-topbar">
                      <span className="ob-mt-topbar__search">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8FA396" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                        Search any medical assets...
                      </span>
                      <span className="ob-mt-topbar__bell">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
                        <span className="ob-mt-topbar__dot" />
                      </span>
                      <span className="ob-mt-topbar__avatar" />
                      <span className="ob-mt-topbar__user">
                        <span className="ob-mt-topbar__org">Baptist Health…</span>
                        <span className="ob-mt-topbar__role">Super Admin</span>
                      </span>
                    </div>

                    <div className="ob-mt-body">
                      <div className="ob-mt-head">
                        <div>
                          <h3 className="ob-mt-head__title">Dashboard</h3>
                          <p className="ob-mt-head__sub">Welcome back, Super Admin! Here's what's happening today.</p>
                        </div>
                        <span className="ob-mt-daterange">May 12, 2024 – May 18, 2024</span>
                      </div>

                      <div className="ob-mt-stats">
                        {MT_STATS.map((s) => (
                          <div className="ob-mt-stat" key={s.label}>
                            <span className={`ob-mt-stat__icon ob-mt-stat__icon--${s.tone}`}><MtIcon name={s.icon} /></span>
                            <span className="ob-mt-stat__label">{s.label}</span>
                            <span className="ob-mt-stat__value">{s.value}</span>
                            <span className="ob-mt-stat__link">{s.link} <span aria-hidden="true">→</span></span>
                          </div>
                        ))}
                      </div>

                      <div className="ob-mt-panels">
                        <div className="ob-mt-panel">
                          <span className="ob-mt-panel__title">Equipment Status Overview</span>
                          <div className="ob-mt-donut-row">
                            <svg viewBox="0 0 42 42" className="ob-mt-donut">
                              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#EEF2ED" strokeWidth="6" />
                              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#3CB371" strokeWidth="6" strokeDasharray="68 32" strokeDashoffset="25" transform="rotate(-90 21 21)" />
                              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#E8A73B" strokeWidth="6" strokeDasharray="13 87" strokeDashoffset="-43" transform="rotate(-90 21 21)" />
                              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#E05B4F" strokeWidth="6" strokeDasharray="12 88" strokeDashoffset="-56" transform="rotate(-90 21 21)" />
                              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#B7C0BC" strokeWidth="6" strokeDasharray="7 93" strokeDashoffset="-68" transform="rotate(-90 21 21)" />
                              <text x="21" y="19.5" textAnchor="middle" className="ob-mt-donut__value">2,420</text>
                              <text x="21" y="25" textAnchor="middle" className="ob-mt-donut__label">Total</text>
                            </svg>
                            <div className="ob-mt-legend">
                              {MT_STATUS.map((s) => (
                                <div className="ob-mt-legend__row" key={s.l}>
                                  <span className="ob-mt-legend__dot" style={{ background: s.c }} />
                                  <span className="ob-mt-legend__label">{s.l}</span>
                                  <span className="ob-mt-legend__value">{s.v} ({s.pct})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <span className="ob-mt-panel__cta">View full report <span aria-hidden="true">→</span></span>
                        </div>

                        <div className="ob-mt-panel">
                          <span className="ob-mt-panel__title">Create Issue Report</span>
                          <div className="ob-mt-form">
                            <div className="ob-mt-form__row">
                              <label className="ob-mt-form__field"><span>Priority</span><span className="ob-mt-form__input"><span className="ob-mt-form__priority-dot" />High</span></label>
                              <label className="ob-mt-form__field"><span>Title</span><span className="ob-mt-form__input ob-mt-form__input--muted">Write here</span></label>
                            </div>
                            <label className="ob-mt-form__field"><span>Issue Description</span><span className="ob-mt-form__input ob-mt-form__input--muted ob-mt-form__input--tall">Write here</span></label>
                            <label className="ob-mt-form__field"><span>Assign Technician</span><span className="ob-mt-form__input ob-mt-form__input--muted">Select technician...</span></label>
                            <span className="ob-mt-dropzone">Drag and drop file, Images here or browse</span>
                            <span className="ob-mt-submit">Submit Report</span>
                          </div>
                        </div>
                      </div>

                      <div className="ob-mt-activity">
                        <div className="ob-mt-activity__head">
                          <span className="ob-mt-panel__title">Recent Activity</span>
                          <span className="ob-mt-panel__cta">View all activity <span aria-hidden="true">→</span></span>
                        </div>
                        <div className="ob-mt-activity__grid">
                          {MT_ACTIVITY.map((a) => (
                            <div className="ob-mt-activity__item" key={a.title}>
                              <span className={`ob-mt-stat__icon ob-mt-stat__icon--${a.tone}`}><MtIcon name={a.icon} /></span>
                              <span className="ob-mt-activity__title">{a.title}</span>
                              <span className="ob-mt-activity__time">{a.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ob-area-cta">
              <Link to="/contact" className="ob-cta-link ob-cta-link--centered">{t.ourBrand.requestDemo}</Link>
            </div>
            </div>
          </div>
        </section>

        <section id="medigraph" className="ob-section ob-section--cream">
          <div className="ob-grid ob-grid--reverse ob-grid--mg">
            <div className="ob-col-left">
              <div className="ob-area-mock">
                <div className="ob-medigraph-photo">
                  <img src="/assets/medigraph-ecg-paper.webp" alt="MediGraph ECG recording paper" />
                </div>
              </div>
            </div>

            <div className="ob-col-right">
              <div className="ob-area-head">
                <div className="ob-brand-head">
                  <img src="/assets/medigraph-mark.svg" alt="MediGraph" className="ob-brand-head__mark" />
                  <h2 className="ob-h2">MediGraph</h2>
                </div>
              </div>

              <div className="ob-area-body">
                <p className="ob-tagline">{t.ourBrand.medigraph.tagline}</p>
                <p className="ob-p">{t.ourBrand.medigraph.desc}</p>
                <div className="ob-points">
                  {MG_POINTS.map((p) => (
                    <div className="ob-point" key={p}>
                      <CheckDot />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ob-area-cta">
                <Link to={`/products?category=${encodeURIComponent('Medical Paper')}`} className="ob-cta-link">{t.ourBrand.browseProduct}</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="ob-final">
          <div className="ob-final__radial" />
          <div className="ob-final__inner">
            <h2 className="ob-h2">{t.ourBrand.finalTitle}</h2>
            <p className="ob-final__desc">{t.ourBrand.finalDesc}</p>
            <div className="ob-final__actions">
              <Link to="/contact" className="btn btn--teal btn--shadow">{t.ourBrand.requestDemo}</Link>
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
