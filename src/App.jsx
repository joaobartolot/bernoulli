import { useEffect, useMemo, useState } from 'react';

import Header from './components/layout/Header';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import { content } from './data/content';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [sentMessage, setSentMessage] = useState('');
  const t = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    console.log('Mock contact request:', payload);
    setSentMessage(t.contact.success);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-brand-surface text-brand-text">
      <Header
        t={t}
        language={language}
        onLanguageChange={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <HeroSection hero={t.hero} />
        <ProjectsSection projects={t.projects} />
        <AboutSection about={t.about} />
        <ContactSection contact={t.contact} onSubmit={handleSubmit} sentMessage={sentMessage} />
      </main>

      <FooterSection footer={t.footer} />
    </div>
  );
}
