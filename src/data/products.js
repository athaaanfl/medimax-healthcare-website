// Canonical product catalog — single source of truth for Products and ProductDetail pages.
const stock = { badge: 'IN STOCK', badgeBg: '#EFF6DA', badgeFg: '#5C7317' };
const kem = { badge: 'KEMENKES APPROVED', badgeBg: '#0C3832', badgeFg: '#B3D435' };

const P = (cat, name, desc, b, photoFile) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    cat,
    catLabel: cat.toUpperCase(),
    name,
    desc,
    ...b,
    slug,
    slot: 'prod-' + slug,
    ph: name + ' photo',
    photo: photoFile ? '/assets/products/' + photoFile + '.webp' : null,
    noPhoto: !photoFile,
  };
};

export const CATEGORIES = [
  'All Products',
  'Diagnostic & Monitoring',
  'Medical Consumables',
  'Life Support',
  'Furniture & Mobility',
  'Accessories',
  'Surgical Instrument',
  'Medical Paper',
];

export const PRODUCTS = [
  P('Diagnostic & Monitoring', 'Patient Monitor', 'Multi-parameter bedside monitor: SpO2, ECG, NIBP, temperature, and respiratory rate.', kem, 'patient-monitor'),
  P('Diagnostic & Monitoring', 'ECG Machine', '12-lead electrocardiograph with thermal printer, battery backup, and USB data export.', kem, 'ecg-machine'),
  P('Diagnostic & Monitoring', 'Defibrillator', 'Biphasic defibrillator with AED mode and 12-lead ECG for cardiac emergency response.', kem, 'defibrillator'),
  P('Diagnostic & Monitoring', 'Glucotest', 'Blood glucose test strips for point-of-care monitoring, compatible with standard meters.', stock, 'glucotest'),
  P('Medical Consumables', 'Surgical Gown', 'Sterile barrier gown for surgical teams and patients, fluid-resistant with knit cuffs.', stock, 'surgical-gown'),
  P('Medical Consumables', 'Syringe', 'Sterile single-use disposable syringes in 1ml–50ml capacities with Luer-lock and slip tips.', stock, 'syringe'),
  P('Medical Consumables', 'Handscoon', 'Sterile and examination-grade surgical gloves in latex, nitrile, and vinyl.', stock, 'handscoon'),
  P('Medical Consumables', 'Gauze', 'Absorbent sterile gauze in roll, pad, and swab formats for wound care and surgical use.', stock, 'gauze'),
  P('Life Support', 'Ventilator', 'ICU and transport ventilators supporting multiple ventilation modes including volume control.', kem, 'ventilator'),
  P('Life Support', 'ETT', 'Cuffed endotracheal tube in PVC, ID 2.5–9.0mm, Murphy eye design, radiopaque line.', stock, 'ett'),
  P('Life Support', 'LMA', 'Laryngeal mask airway in reusable and single-use formats, sizes 1–5 for all patients.', stock, 'lma'),
  P('Furniture & Mobility', 'Patient Bed', 'Electric and manual hospital beds with height adjustment, side rails, and castors.', kem, 'patient-bed'),
  P('Furniture & Mobility', 'Wheelchair', 'Foldable lightweight aluminum wheelchair with removable footrests, available in sizes.', stock, 'wheelchair'),
  P('Furniture & Mobility', 'Dental Chair', 'Hydraulic and electric dental chairs with programmable positioning and integrated light.', kem, 'dental-chair'),
  P('Accessories', 'NIBP Cuffs', 'Blood pressure cuff accessories for patient monitors, available in multiple sizes.', stock, 'nibp-cuffs'),
  P('Accessories', 'Chest Electrode', 'Disposable adhesive chest electrodes for ECG and patient monitoring applications.', stock, 'chest-electrode'),
  P('Surgical Instrument', 'Instrument Set', 'Stainless steel surgical instrument sets for various procedures, autoclavable.', stock, 'instrument-set'),
  P('Surgical Instrument', 'Suture', 'Absorbable and non-absorbable surgical sutures in various materials and USP sizes.', stock, 'suture'),
  P('Medical Paper', 'ECG Paper', 'Thermal recording paper for ECG machines, available in 50mm–210mm widths.', stock, 'ecg-paper'),
  P('Medical Paper', 'CTG Paper', 'Fetal heart rate and uterine contraction recording paper for CTG/fetal monitors.', stock, 'ctg-paper'),
  P('Medical Paper', 'EEG Paper', 'Z-fold recording paper for EEG machines, compatible with major brands.', stock, 'eeg-paper'),
  P('Diagnostic & Monitoring', 'Blood Pressure', 'Manual and digital sphygmomanometers with adult and pediatric cuffs for accurate blood pressure readings.', stock, 'blood-pressure'),
  P('Life Support', 'Fogarty Catheter', 'Balloon-tip embolectomy catheter with silastic balloon and radiopaque marker for vascular procedures.', stock, 'fogarthy-catheter'),
  P('Medical Consumables', 'Drape', 'Sterile surgical field cover, impermeable to blood and fluids, for maintaining a sterile operative site.', stock, 'drape'),
  P('Medical Consumables', 'Urine Catheter', 'Sterile urinary catheter in latex and silicone, 2-way and 3-way, various French sizes.', stock, 'urine-chateter'),
  P('Medical Consumables', 'Urine Bag', 'Sterile urinary drainage bag with anti-reflux valve and graduated scale.', stock, 'urine-bag'),
  P('Medical Consumables', 'Mask', '3-ply or 4-ply medical face mask with adjustable nose clip for clinical use.', stock, 'mask'),
  P('Medical Consumables', 'Linen', 'Medical-grade hospital linen in cotton/polyester blend, washable and autoclavable.', stock, 'linen'),
  P('Medical Consumables', 'Povidone Iodine', '10% broad-spectrum antiseptic solution for wound care and pre-surgical skin preparation.', stock, 'povidone-iodine'),
  P('Medical Consumables', 'Liquid Laundry', 'Medical-grade laundry detergent formulated for hospital linens and fabrics.', stock, 'liquid-laundry'),
  P('Medical Consumables', 'Alcohol', '70% isopropyl or ethyl alcohol antiseptic in solution, spray, and wipe formats.', stock, 'alcohol'),
  P('Medical Consumables', 'NGT', 'Nasogastric tube for enteral feeding and gastric decompression, various French sizes.', stock, 'ngt'),
  P('Accessories', 'Flow Sensor', 'Reusable and single-use flow sensors for ventilator circuits, compatible with major brands.', stock, 'flowsensor'),
  P('Accessories', 'Patient Plate', 'Reusable and disposable electrosurgical patient return (grounding) plates.', stock, 'patient-plate'),
  P('Surgical Instrument', 'Electrosurgical Pencil', 'Monopolar electrosurgical pencil with integrated blade holder and finger-switch activation.', stock, 'pencil-cauter'),
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS
    .filter((p) => p.cat === product.cat && p.slug !== product.slug)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, limit);
}
