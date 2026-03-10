import SectionTitle from '../components/ui/SectionTitle';

export default function ContactSection({ contact, onSubmit, sentMessage }) {
  return (
    <section id="contact" className="section">
      <SectionTitle title={contact.title} subtitle={contact.description} />
      <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/40 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5">
        <input name="name" required placeholder={contact.name} className="rounded-2xl border border-brand-muted/25 bg-white/80 px-4 py-3 text-sm outline-none ring-brand-primary/30 focus:ring-2 dark:bg-white/10" />
        <input name="email" type="email" required placeholder={contact.email} className="rounded-2xl border border-brand-muted/25 bg-white/80 px-4 py-3 text-sm outline-none ring-brand-primary/30 focus:ring-2 dark:bg-white/10" />
        <textarea name="message" required rows="5" placeholder={contact.message} className="rounded-2xl border border-brand-muted/25 bg-white/80 px-4 py-3 text-sm outline-none ring-brand-primary/30 focus:ring-2 dark:bg-white/10" />
        <button type="submit" className="w-fit rounded-2xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition hover:-translate-y-0.5">
          {contact.submit}
        </button>
        {sentMessage ? <p className="text-sm font-medium text-brand-primary">{sentMessage}</p> : null}
      </form>
    </section>
  );
}
