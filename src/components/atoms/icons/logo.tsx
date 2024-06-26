type LogoProps = {
    className?: string;
    color?: string;
  };
  
  export function Logo({ className, color = "#466BF3" }: LogoProps) {
    return (
      <svg
        width="25"
        height="29"
        viewBox="0 0 25 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M22 11.5V10.0413C22 9.38868 21.6816 8.7771 21.1469 8.40285L13.1469 2.80285C12.4583 2.3208 11.5417 2.3208 10.8531 2.80285L2.85308 8.40285C2.31842 8.7771 2 9.38868 2 10.0413V24.3146C2 25.9015 3.75947 26.8563 5.08998 25.9915L10.91 22.2085C11.5728 21.7777 12.4272 21.7777 13.09 22.2085L18.9606 26.0244C20.2694 26.8751 22 25.9359 22 24.375V24.375"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="22" cy="18" r="3" fill={color} />
      </svg>
    );
  }