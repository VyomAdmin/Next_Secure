const PERSONAL_EMAIL_DOMAINS = new Set([
    'aol.com',
    'gmail.com',
    'googlemail.com',
    'hotmail.com',
    'icloud.com',
    'live.com',
    'mac.com',
    'me.com',
    'msn.com',
    'outlook.com',
    'pm.me',
    'proton.me',
    'protonmail.com',
    'qq.com',
    'yahoo.com',
    'yandex.com',
    'zoho.com',
]);

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_CHARS = /^\+?[0-9()\s-]+$/;

export const validateProfessionalEmail = (value: string): string | null => {
    const email = value.trim().toLowerCase();

    if (!email) {
        return 'Email is required.';
    }

    if (!EMAIL_FORMAT.test(email)) {
        return 'Enter a valid email address.';
    }

    const [, domain = ''] = email.split('@');
    if (!domain || PERSONAL_EMAIL_DOMAINS.has(domain)) {
        return 'Use your work email. Personal email providers are not accepted.';
    }

    return null;
};

export const validatePhoneNumber = (value: string): string | null => {
    const phone = value.trim();

    if (!phone) {
        return null;
    }

    if (!PHONE_ALLOWED_CHARS.test(phone)) {
        return 'Phone number can contain only digits, spaces, parentheses, hyphens, and an optional leading +.';
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
        return 'Enter a valid phone number with 10 to 15 digits.';
    }

    if (/^(\d)\1+$/.test(digits)) {
        return 'Enter a valid phone number.';
    }

    return null;
};
