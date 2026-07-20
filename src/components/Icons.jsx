// Íconos vectoriales (SVG inline) que replican los del diseño de Figma.
// Se usan currentColor para que hereden el color del contenedor.

export function ArrowRight({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Calendar({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 2v3M16 2v3M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="4.5" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01M7.5 17.5h.01M12 17.5h.01" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Location({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 21c4-3.5 7-6.9 7-11a7 7 0 1 0-14 0c0 4.1 3 7.5 7 11Z" stroke="currentColor" strokeWidth="1.6"
        strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Menu({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
