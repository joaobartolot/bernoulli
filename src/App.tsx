import { useEffect, useState } from "react";

import Header from "./components/layout/Header";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { useI18n } from "./i18n/I18nProvider";

export default function App() {
	const { language, setLanguage, t } = useI18n();
	const [darkMode, setDarkMode] = useState(false);
	const [sentMessage, setSentMessage] = useState("");

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode]);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const payload = Object.fromEntries(
			new FormData(event.currentTarget).entries(),
		);
		console.log("Mock contact request:", payload);
		setSentMessage(
			t("Message received (mock). We logged it in the console."),
		);
		event.currentTarget.reset();
	};

	return (
		<div className="min-h-screen bg-brand-surface text-brand-text">
			<Header
				language={language}
				onLanguageChange={() =>
					setLanguage((prev) => (prev === "en" ? "pt" : "en"))
				}
				darkMode={darkMode}
				onToggleDarkMode={() => setDarkMode((prev) => !prev)}
			/>

			<main>
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<ContactSection
					onSubmit={handleSubmit}
					sentMessage={sentMessage}
				/>
			</main>

			<FooterSection />
		</div>
	);
}
