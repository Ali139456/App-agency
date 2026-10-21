'use client';

import { FormEvent, useState } from 'react';
import { CONTACT, PROJECT_TYPES } from '../content';
import { Reveal } from './Reveal';

type Fields = {
  name: string;
  phone: string;
  company: string;
  type: string;
  message: string;
};

const empty: Fields = { name: '', phone: '', company: '', type: '', message: '' };

const notes = ['Tell us what you want to build', 'We reply on WhatsApp', 'No pitch deck required'];

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = 'Enter your name.';
    if (!/^[0-9+\s()-]{10,}$/.test(fields.phone.trim())) next.phone = 'Enter a phone number.';
    if (fields.company.trim().length < 2) next.company = 'Enter a company name.';
    if (!fields.type) next.type = 'Choose what you are building.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      'New project enquiry',
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      `Company: ${fields.company.trim()}`,
      `Building: ${fields.type}`,
      fields.message.trim() ? `Note: ${fields.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  const field =
    'mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--field)] px-4 py-3.5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]';

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <p className="kicker">Contact</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">Have a product in mind?</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Tell us what you are building. We will help you turn the idea into a production-ready product.
          </p>
          <ul className="mt-8 space-y-3">
            {notes.map((note) => (
              <li key={note} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
          <a href="#work" className="mt-8 inline-flex text-sm font-semibold text-[var(--gold-deep)]">
            View our work →
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="lift-card grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
            <label className="text-sm font-medium">
              Name
              <input className={field} placeholder="Your name" value={fields.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} />
              {errors.name ? <span className="mt-1.5 block text-xs text-red-500">{errors.name}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Phone
              <input className={field} placeholder="03xx xxx xxxx" value={fields.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} />
              {errors.phone ? <span className="mt-1.5 block text-xs text-red-500">{errors.phone}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Company
              <input className={field} placeholder="Company name" value={fields.company} onChange={(event) => update('company', event.target.value)} autoComplete="organization" aria-invalid={Boolean(errors.company)} />
              {errors.company ? <span className="mt-1.5 block text-xs text-red-500">{errors.company}</span> : null}
            </label>
            <label className="text-sm font-medium">
              What are you building?
              <select className={field} value={fields.type} onChange={(event) => update('type', event.target.value)} aria-invalid={Boolean(errors.type)}>
                <option value="">Select</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.type ? <span className="mt-1.5 block text-xs text-red-500">{errors.type}</span> : null}
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              About the product
              <textarea className={`${field} min-h-32 resize-y`} placeholder="A short note about the product, the users, and when you want to start." value={fields.message} onChange={(event) => update('message', event.target.value)} />
            </label>
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-gold">
                Start a project
              </button>
              <p className="text-sm text-[var(--muted)]">{sent ? 'WhatsApp should be open with your enquiry.' : 'Submit opens WhatsApp with your note.'}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
