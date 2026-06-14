// Thin, consistent line icons drawn in the brand's hand — replaces emoji.
const P = {
  diner: <><path d="M6 3v18" /><path d="M3 3v5a3 3 0 0 0 6 0V3" /><path d="M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 2.5-1 2.5-4-1-5-2.5-5z" /><path d="M17 12v9" /></>,
  kitchen: <><path d="M6 13a4 4 0 0 1-1-7.9A5 5 0 0 1 19 5.1 4 4 0 0 1 18 13" /><path d="M6 13h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" /></>,
  owner: <><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" /><path d="M3 9a2.5 2.5 0 0 0 4.5 1.5 2.5 2.5 0 0 0 4.5 0 2.5 2.5 0 0 0 4.5 0A2.5 2.5 0 0 0 21 9" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  bank: <><path d="M3 21h18" /><path d="M5 21V10M9 21V10M15 21V10M19 21V10" /><path d="M12 3l8 5H4z" /></>,
  receipt: <><path d="M5 3v18l2-1.2L9 21l2-1.2L13 21l2-1.2L17 21l2-1.2V3l-2 1.2L15 3l-2 1.2L11 3 9 4.2 7 3z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  screen: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  printer: <><path d="M6 9V3h12v6" /><rect x="6" y="13" width="12" height="8" /><path d="M6 17H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" /></>,
  refresh: <><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M21 21v-5h-5" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></>,
  flame: <><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C9 9 12 7 12 2z" /><path d="M8.5 14a3.5 3.5 0 0 0 7 0c0-2-1.5-3-2-4-1 1.5-2.5 2-2.5 4z" /></>,
  trend: <><path d="M3 17l6-6 4 4 7-7" /><path d="M14 8h6v6" /></>,
  building: <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></>,
  bars: <><path d="M3 21h18" /><rect x="5" y="11" width="3" height="7" /><rect x="10.5" y="6" width="3" height="12" /><rect x="16" y="14" width="3" height="4" /></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  wine: <><path d="M8 22h8M12 15v7" /><path d="M7 3h10l-.5 6a4.5 4.5 0 0 1-9 0z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
  scan: <><path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" /><path d="M4 12h16" /></>,
  check: <><path d="M20 6 9 17l-5-5" /></>,
};

const Icon = ({ name, size = 24, className = '', strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {P[name] || null}
  </svg>
);

export default Icon;
