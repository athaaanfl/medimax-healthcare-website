const PATHS = {
  'All Products': ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  'Diagnostic & Monitoring': ['M3 12h4l2 6 4-12 2 6h6'],
  'Medical Consumables': ['M3 8l9-4 9 4-9 4-9-4z', 'M3 8v9l9 4 9-4V8', 'M12 12v9'],
  'Life Support': ['M6 9a3 3 0 1 1 6 0v6a3 3 0 1 0 6 0V9', 'M6 9V6M18 9V6'],
  'Furniture & Mobility': ['M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6', 'M4 18h16', 'M8 10V6h8v4', 'M6 18v2M18 18v2'],
  Accessories: ['M9 3v3M15 3v3', 'M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z'],
  'Surgical Instrument': ['M19 5L9 15', 'M9 15a3 3 0 1 1-4 4 3 3 0 0 1 4-4z', 'M15 5l4 4'],
  'Medical Paper': ['M3 8h18v13H3z', 'M3 8l3-5h12l3 5', 'M7 13h2l1.5 3L12 11l1.5 5L15 13h2'],
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
