import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { supabase, type Inquiry } from '@/lib/supabase';
import { serviceCategories } from '@/data/services';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '241/3, South Pirerbagh, 60 Feet Road, Mirpur, Dhaka-1216',
    href: 'https://maps.google.com/?q=South+Pirerbagh+Mirpur+Dhaka',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '01841-130340, 01782-107507, 01841-130342',
    href: 'tel:+8801841130340',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'fngindustrial@gmail.com',
    href: 'mailto:fngindustrial@gmail.com',
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1HZJjnKzrZ/?mibextid=wwXIfr',
  },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const inquiry: Inquiry = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      service_category: String(formData.get('service_category') || ''),
      project_size: String(formData.get('project_size') || ''),
      project_details: String(formData.get('project_details') || ''),
    };

    try {
      const { error } = await supabase.from('inquiries').insert([inquiry]);

      if (error) throw error;

      // Fire-and-forget email notification to the company
      try {
        await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-inquiry-email`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ ...inquiry, created_at: new Date().toISOString() }),
          }
        );
      } catch {
        // Email notification failure should not block the success state —
        // the inquiry is already saved in the database.
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  return (
    <section id="contact" className="section-padding bg-concrete-50">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
            <span className="text-sm font-semibold text-brand-700">
              Contact Us
            </span>
          </div>
          <h2 className="section-title">Request a Project Estimation</h2>
          <p className="section-subtitle">
            Tell us about your project and we'll get back to you with a tailored
            quote. Your inquiry is saved securely and sent directly to our team.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 rounded-xl border border-concrete-100 bg-concrete-50 p-5 transition-all hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-concrete-500">
                      {info.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-concrete-900">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-brand-600 p-6 text-white">
              <h3 className="font-display text-lg font-semibold">
                Ready to start your project?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Call us directly for immediate assistance or fill out the form
                and we'll respond within 24 hours.
              </p>
              <a
                href="tel:+8801841130340"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <div className="mt-3 flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-concrete-100 bg-white p-6 shadow-lg shadow-concrete-200/40 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="input-field"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service_category"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Service Category *
                  </label>
                  <select
                    id="service_category"
                    name="service_category"
                    required
                    className="input-field"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="project_size"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Project Size / Scope
                  </label>
                  <input
                    type="text"
                    id="project_size"
                    name="project_size"
                    className="input-field"
                    placeholder="e.g. 5000 sq ft, 3 floors, etc."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="project_details"
                    className="mb-1.5 block text-sm font-medium text-concrete-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="project_details"
                    name="project_details"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describe your project requirements, location, timeline, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-center gap-3 rounded-lg bg-accent-50 p-4 text-sm text-accent-800 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-600" />
                  <div>
                    <span className="font-semibold">Thank you!</span> Your
                    inquiry has been submitted successfully. Our team will
                    contact you within 24 hours.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-800 animate-fade-in">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <span className="font-semibold">
                      Submission failed.
                    </span>{' '}
                    {errorMsg ||
                      'Please try again or call us directly at 01841-130340.'}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
