import { createContext, useContext, useMemo, useState } from 'react';

import { translations } from './translations';

const I18nContext = createContext(null);

function resolveLanguage(locale) {
  return locale?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function getBrowserLanguage() {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const preferredLocale = navigator.languages?.[0] ?? navigator.language;
  return resolveLanguage(preferredLocale);
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getBrowserLanguage);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? {};

    return {
      language,
      setLanguage,
      t: (text) => dictionary[text] ?? text
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider.');
  }

  return context;
}
