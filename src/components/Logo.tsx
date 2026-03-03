interface Props {
  className?: string;
}

export default function Logo({ className = 'w-8 h-8' }: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main tower */}
      <rect x="12" y="10" width="10" height="24" rx="1.5" fill="currentColor" opacity="0.9" />
      {/* Side tower */}
      <rect x="24" y="16" width="7" height="18" rx="1.5" fill="currentColor" opacity="0.6" />
      {/* Windows on main tower */}
      <rect x="14.5" y="13" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      <rect x="18.5" y="13" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      <rect x="14.5" y="18" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      <rect x="18.5" y="18" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      <rect x="14.5" y="23" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      <rect x="18.5" y="23" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.5" />
      {/* Windows on side tower */}
      <rect x="26" y="19" width="2.5" height="2" rx="0.4" fill="white" opacity="0.4" />
      <rect x="26" y="23" width="2.5" height="2" rx="0.4" fill="white" opacity="0.4" />
      {/* Crown / first mark */}
      <path d="M14 8 L17 5 L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      {/* Small accent tower */}
      <rect x="7" y="22" width="4" height="12" rx="1" fill="currentColor" opacity="0.35" />
      {/* Ground line */}
      <rect x="5" y="33" width="28" height="2" rx="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
