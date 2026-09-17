import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
            <span className="text-sm font-semibold text-brand-700">
              Our Services
            </span>
          </div>
          <h2 className="section-title">
            Comprehensive Construction Chemical Solutions
          </h2>
          <p className="section-subtitle">
            From waterproofing to protective coatings, we provide end-to-end
            construction chemical supply and application services for every
            infrastructure need.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <div
                key={service.id}
                className={`card overflow-hidden ${
                  isOpen ? 'ring-2 ring-brand-500' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                    <service.icon className="h-6 w-6 text-brand-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-concrete-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-concrete-600">
                    {service.description}
                  </p>

                  {/* Expandable items */}
                  <button
                    onClick={() => toggle(service.id)}
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Hide details' : 'View details'}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="animate-slide-down mt-4 space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-concrete-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Request a Service Quote
          </a>
        </div>
      </div>
    </section>
  );
}
