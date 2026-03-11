import SectionTitle from '../components/ui/SectionTitle';

export default function ContactSection({ contact, onSubmit, sentMessage }) {
  return (
    <section id="contact" className="section">
      <SectionTitle title={contact.title} subtitle={contact.description} />
      <form onSubmit={onSubmit} className="panel grid gap-4 p-7">
        <input name="name" required placeholder={contact.name} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <input name="email" type="email" required placeholder={contact.email} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <textarea name="message" required rows="5" placeholder={contact.message} className="rounded-xl border border-brand-secondary/15 bg-white/90 px-4 py-3 text-sm text-brand-secondary outline-none ring-brand-primary/30 focus:ring-2 dark:border-white/20 dark:bg-white/10 dark:text-brand-text" />
        <button type="submit" className="btn-primary w-fit">
          {contact.submit}
        </button>
        {sentMessage ? <p className="text-sm font-medium text-brand-primary">{sentMessage}</p> : null}
      </form>
    </section>
  );
}
