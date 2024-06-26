export function MapPin({ className }: { className?: string }) {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M19 9.5C19 14.366 14.866 22.5 12 22.5C9.13401 22.5 5 14.366 5 9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.63401 19 9.5Z"
          stroke="#848484"
          strokeWidth="1.5"
        />
        <circle
          cx="2.5"
          cy="2.5"
          r="2.5"
          transform="matrix(1 0 0 -1 9.5 12)"
          stroke="#848484"
          strokeWidth="1.5"
        />
      </svg>
    );
  }