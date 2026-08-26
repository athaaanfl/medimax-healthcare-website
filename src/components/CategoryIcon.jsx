const PATHS = {
  'All Products': ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  'Diagnostic & Monitoring': ['M3 12h4l2 6 4-12 2 6h6'],
  'Medical Consumables': ['M3 8l9-4 9 4-9 4-9-4z', 'M3 8v9l9 4 9-4V8', 'M12 12v9'],
  'Life Support': ['M6 9a3 3 0 1 1 6 0v6a3 3 0 1 0 6 0V9', 'M6 9V6M18 9V6'],
  'Furniture & Mobility': ['M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6', 'M4 18h16', 'M8 10V6h8v4', 'M6 18v2M18 18v2'],
  Accessories: ['M9 3v3M15 3v3', 'M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z'],
  'Surgical Instrument': ['M19 5L9 15', 'M9 15a3 3 0 1 1-4 4 3 3 0 0 1 4-4z', 'M15 5l4 4'],
  'Medical Paper': ['M3 8h18v13H3z', 'M3 8l3-5h12l3 5', 'M7 13h2l1.5 3L12 11l1.5 5L15 13h2'],
  'Repair & Maintenance': ['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'],
  'Equipment Planning & Procurement': ['M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2', 'M9 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V3z', 'M9 12l2 2 4-4'],
  Distribution: ['M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z', 'M3.27 6.96 12 12.01l8.73-5.05', 'M12 22.08V12'],
  'Manpower & Outsourcing': ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
};

export default function CategoryIcon({ category, size = 20, strokeWidth = 1.8 }) {
  const paths = PATHS[category] || PATHS['All Products'];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
