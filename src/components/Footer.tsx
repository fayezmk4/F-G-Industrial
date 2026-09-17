import { ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Waterproofing & Damp Proofing',
  'Industrial Flooring',
  'Repair & Retrofitting',
  'Grouting & Anchoring',
  'Protective Coatings',
];

export default function Footer() {
  return (
    <footer className="bg-concrete-950 text-concrete-300">
      <div className="container-max py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-lg bg-white p-2">
              <img
                src="/images/ChatGPT_Image_Sep_17,_2026,_02_52_56_PM.png"
                alt="F&G Industrial logo"
                className="h-16 w-auto max-w-[240px] object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-concrete-400">
              Construction chemical importer and application service provider.
              Delivering durable, sustainable solutions for infrastructure
              development since 2017.
            </p>
            <a
              href="https://www.facebook.com/share/1HZJjnKzrZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-concrete-700 px-3 py-2 text-sm font-semibold text-concrete-200 transition-colors hover:border-brand-400 hover:text-brand-300"
            >
              <ExternalLink className="h-4 w-4" />
              Follow us on Facebook
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-concrete-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-concrete-400 transition-colors hover:text-brand-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-concrete-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>
                  241/3, South Pirerbagh, 60 Feet Road, Mirpur, Dhaka-1216
                </span>
              </li>
              <li>
                <a
                  href="tel:+8801841130340"
                  className="flex items-center gap-2 text-sm text-concrete-400 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-brand-400" />
                  01841-130340
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801782107507"
                  className="flex items-center gap-2 text-sm text-concrete-400 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-brand-400" />
                  01782-107507
                </a>
              </li>
              <li>
                <a
                  href="mailto:fngindustrial@gmail.com"
                  className="flex items-center gap-2 text-sm text-concrete-400 transition-colors hover:text-brand-400"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-brand-400" />
                  fngindustrial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-concrete-800 pt-8 text-center">
          <p className="text-sm text-concrete-500">
            &copy; {new Date().getFullYear()} F&amp;G Industrial. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
