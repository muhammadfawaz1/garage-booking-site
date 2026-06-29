// components/ui/TyreDivider.tsx
export function TyreDivider() {
  return (
    <div className="relative w-full flex items-center justify-center py-8" aria-hidden="true">
      {/* left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-volt/40" />
      {/* centre tyre tread icon */}
      <div className="mx-6 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="14" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="16" cy="16" r="7" stroke="#beff00" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="16" cy="16" r="2.5" fill="#beff00" fillOpacity="0.5" />
          <line x1="16" y1="2" x2="16" y2="9" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="16" y1="23" x2="16" y2="30" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="2" y1="16" x2="9" y2="16" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="23" y1="16" x2="30" y2="16" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="6.1" y1="6.1" x2="11.2" y2="11.2" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="20.8" y1="20.8" x2="25.9" y2="25.9" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="25.9" y1="6.1" x2="20.8" y2="11.2" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="11.2" y1="20.8" x2="6.1" y2="25.9" stroke="#beff00" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
      </div>
      {/* right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-volt/40" />
    </div>
  );
}