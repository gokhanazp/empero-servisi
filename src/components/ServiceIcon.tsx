import type { Service } from "@/lib/types";

const paths: Record<Service["icon"], React.ReactNode> = {
  ocak: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8" cy="9" r="2" />
      <circle cx="16" cy="9" r="2" />
      <circle cx="8" cy="15.5" r="2" />
      <circle cx="16" cy="15.5" r="2" />
    </>
  ),
  fritoz: (
    <>
      <path d="M4 8h16v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
      <path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
      <path d="M7 12h10" />
    </>
  ),
  bulasik: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 8h16" />
      <circle cx="12" cy="14.5" r="3.5" />
      <path d="M7.5 5.5h.01M10 5.5h.01" />
    </>
  ),
  firin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 8h18" />
      <rect x="7" y="11.5" width="10" height="6.5" rx="1" />
      <path d="M6.5 5.5h.01M9 5.5h.01" />
    </>
  ),
  buzdolabi: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <path d="M5 10h14" />
      <path d="M8.5 6v2" />
      <path d="M8.5 13v2.5" />
    </>
  ),
  yerocak: (
    <>
      <circle cx="12" cy="10" r="5" />
      <circle cx="12" cy="10" r="1.75" />
      <path d="M4 20h16" />
      <path d="M6.5 15.5 5 20M17.5 15.5 19 20" />
    </>
  ),
  benmari: (
    <>
      <path d="M3 9h18v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9Z" />
      <path d="M9 9V7M12 9V6.5M15 9V7" />
      <path d="M6.5 13.5c1 0 1 1 2 1s1-1 2-1 1 1 2 1 1-1 2-1 1 1 2 1" />
    </>
  ),
  izgara: (
    <>
      <rect x="3" y="6" width="18" height="9" rx="1.5" />
      <path d="M7 6v9M12 6v9M17 6v9" />
      <path d="M6 19h12" />
      <path d="M8 15v4M16 15v4" />
    </>
  ),
};

export function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
