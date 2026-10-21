'use client';

import { FormEvent, useState } from 'react';
import { BUSINESS_TYPES, CONTACT, STORE_COUNTS } from '../content';
import { Reveal } from './Reveal';

type Fields = {
  name: string;
  phone: string;
  business: string;
  city: string;
  type: string;
  stores: string;
  message: string;
};

const empty: Fields = { name: '', phone: '', business: '', city: '', type: '', stores: '', message: '' };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(values: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = 'Enter your name.';
    if (!/^[0-9+\s()-]{10,}$/.test(values.phone.trim())) next.phone = 'Enter a phone number.';
    if (values.business.trim().length < 2) next.business = 'Enter the business name.';
    if (values.city.trim().length < 2) next.city = 'Enter a city.';
    if (!values.type) next.type = 'Choose a business type.';
    if (!values.stores) next.stores = 'Choose how many locations.';
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      'New store enquiry',
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      `Business: ${fields.business.trim()}`,
      `City: ${fields.city.trim()}`,
      `Type: ${fields.type}`,
      `Locations: ${fields.stores}`,
      fields.message.trim() ? `Note: ${fields.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  const inputClass =
    'mt-1.5 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-sm text-[var(--ink)] outline-none focus:border-[var(--gold)]';

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <p className="kicker">Let&apos;s connect</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Tell us about the store</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Share the business, city, and how many locations you run. Submit opens WhatsApp ({CONTACT.display}) with the details filled in.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <form onSubmit={onSubmit} noValidate className="soft-card grid gap-4 p-6 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Name
              <input className={inputClass} value={fields.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} />
              {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Phone
              <input className={inputClass} value={fields.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} />
              {errors.phone ? <span className="mt-1 block text-xs text-red-600">{errors.phone}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Business name
              <input className={inputClass} value={fields.business} onChange={(event) => update('business', event.target.value)} aria-invalid={Boolean(errors.business)} />
              {errors.business ? <span className="mt-1 block text-xs text-red-600">{errors.business}</span> : null}
            </label>
            <label className="text-sm font-medium">
              City
              <input className={inputClass} value={fields.city} onChange={(event) => update('city', event.target.value)} autoComplete="address-level2" aria-invalid={Boolean(errors.city)} />
              {errors.city ? <span className="mt-1 block text-xs text-red-600">{errors.city}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Type of business
              <select className={inputClass} value={fields.type} onChange={(event) => update('type', event.target.value)} aria-invalid={Boolean(errors.type)}>
                <option value="">Select type</option>
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.type ? <span className="mt-1 block text-xs text-red-600">{errors.type}</span> : null}
            </label>
            <label className="text-sm font-medium">
              Number of locations
              <select className={inputClass} value={fields.stores} onChange={(event) => update('stores', event.target.value)} aria-invalid={Boolean(errors.stores)}>
                <option value="">Select</option>
                {STORE_COUNTS.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              {errors.stores ? <span className="mt-1 block text-xs text-red-600">{errors.stores}</span> : null}
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Note
              <textarea className={`${inputClass} min-h-24 resize-y`} value={fields.message} onChange={(event) => update('message', event.target.value)} />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-gold">
                Get started
              </button>
              {sent ? (
                <p className="mt-3 text-sm text-[var(--muted)]" role="status">
                  WhatsApp should be open with your enquiry. If it did not, message {CONTACT.display} directly.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
