import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    href?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-transparent border border-[var(--color-text-white)] text-[var(--color-text-white)] hover:bg-[rgba(230,241,255,0.1)]",
        secondary: "bg-transparent border border-[var(--color-text-secondary)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-white)] hover:text-[var(--color-text-white)] hover:bg-[rgba(136,146,176,0.1)]",
        outline: "border border-[var(--color-tertiary-dark)] text-[var(--color-text-primary)] hover:border-[var(--color-text-white)]",
        ghost: "text-[var(--color-text-primary)] hover:text-[var(--color-text-white)] hover:bg-[rgba(230,241,255,0.05)]",
    };

    // Note: Using inline styles or utility classes that map to variable names would be cleaner if using Tailwind. 
    // Since we are using standard CSS/Modules, I'll use a mixed approach or class names defined in globals.
    // Actually, I'll rely on the class names I defined in globals.css specific to buttons, 
    // but for a React component, better to return specific classes.

    // Let's use the globals.css classes: btn, btn-primary, btn-secondary.

    let btnClass = "btn";
    if (variant === 'primary') btnClass += " btn-primary";
    if (variant === 'secondary') btnClass += " btn-secondary";

    // Append custom className
    if (className) btnClass += ` ${className}`;

    if (href) {
        return (
            <Link href={href} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
