import { translations } from '../translations';

export const getTranslation = (key: keyof typeof translations): string => {
    return translations[key] || key; // Return the key itself if translation is not found
};
