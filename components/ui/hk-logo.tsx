// Geometric Q Logo Component
export const QLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Hexagon base */}
        <path
            d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="miter"
        />
        {/* Q circle */}
        <circle
            cx="12"
            cy="11.5"
            r="4.5"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        {/* Q tail */}
        <line
            x1="14.5"
            y1="14"
            x2="16.5"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

// Alternative filled version
export const QLogoFilled = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
            fill="currentColor"
        />
        {/* Q circle - negative space */}
        <circle
            cx="12"
            cy="11.5"
            r="4"
            fill="white"
        />
        {/* Inner circle for Q */}
        <circle
            cx="12"
            cy="11.5"
            r="2.5"
            fill="currentColor"
        />
        {/* Q tail */}
        <line
            x1="14.5"
            y1="14"
            x2="16.5"
            y2="16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

// Keep HKLogo as alias for backward compatibility
export const HKLogo = QLogo;
export const HKLogoFilled = QLogoFilled;
