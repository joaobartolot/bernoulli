import { createContext, useContext, useMemo, useState } from "react";

import { translations } from "./translations";

type Language = "en" | "pt";

type I18nContextValue = {
	language: Language;
	setLanguage: React.Dispatch<React.SetStateAction<Language>>;
	t: (text: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function resolveLanguage(locale?: string) {
	return locale?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function getBrowserLanguage(): Language {
	if (typeof navigator === "undefined") {
		return "en";
	}

	const preferredLocale = navigator.languages?.[0] ?? navigator.language;
	return resolveLanguage(preferredLocale);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>(getBrowserLanguage);

	const value = useMemo(() => {
		const dictionary = translations[language] ?? {};

		return {
			language,
			setLanguage,
			t: (text: string) => dictionary[text] ?? text,
		};
	}, [language]);

	return (
		<I18nContext.Provider value={value}>{children}</I18nContext.Provider>
	);
}

export function useI18n() {
	const context = useContext(I18nContext);

	if (!context) {
		throw new Error("useI18n must be used within an I18nProvider.");
	}

	return context;
}
