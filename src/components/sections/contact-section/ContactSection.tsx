import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 border-y border-primary/10 py-16 text-primary sm:py-20">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">
        <div className="min-w-0">
          <h2 id="contact-heading" className="text-2xl font-medium tracking-tight">
            Let&apos;s make something useful.
          </h2>
          <div className="mt-6 md:mt-8">
            <p>Working on something interesting, or hiring for a role that could be a good fit? I&apos;d love to hear about it.</p>
          </div>
        </div>
        <div className="max-w-2xl min-w-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
