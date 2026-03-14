import SectionTitle from '../components/ui/SectionTitle';
import { useI18n } from '../i18n/I18nProvider';

export default function ContactSection({ onSubmit, sentMessage }) {
  const { t } = useI18n();

  return (
    <section id="contact" className="section">
      <SectionTitle
        title={t("Let's map your next automation build")}
        subtitle={t('Send a quick brief. The form currently performs a mock submit and logs data in the browser console.')}
      />
      <form onSubmit={onSubmit} className="panel grid gap-4 p-7">
        <input name="name" required placeholder={t('Name')} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <input name="email" type="email" required placeholder={t('Email')} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <textarea name="message" required rows="5" placeholder={t('Tell us your process challenge')} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <button type="submit" className="btn-primary w-fit">
          {t('Send message')}
        </button>
        {sentMessage ? <p className="text-sm font-medium text-brand-primary">{sentMessage}</p> : null}
      </form>
    </section>
  );
}
