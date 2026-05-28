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
    let btnClass = "btn";
    if (variant === 'primary') btnClass += " btn-primary";
    if (variant === 'secondary') btnClass += " btn-secondary";
    if (variant === 'outline') btnClass += " btn-secondary";
    if (variant === 'ghost') btnClass += " btn-glass";

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
