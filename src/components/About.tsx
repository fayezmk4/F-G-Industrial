import { Shield, Leaf, Award, Handshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety',
    description: 'Every project is executed with strict safety protocols to protect workers and structures.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We use premium construction chemicals and proven application techniques for lasting results.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly solutions that reduce environmental impact while maximizing durability.',
  },
  {
    icon: Handshake,
    title: 'Trustworthiness',
    description: 'Transparent communication and reliable service have built lasting client relationships.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-concrete-50">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Company info */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
              <span className="text-sm font-semibold text-brand-700">
                About Us
              </span>
            </div>
            <h2 className="section-title">
              Building Bangladesh's Infrastructure with{' '}
              <span className="text-gradient">Proven Expertise</span>
            </h2>
            <p className="section-subtitle">
              F&amp;G Industrial is a construction chemical importer and
              application service provider, operating since 2017. We supply and
              apply high-quality construction chemicals for waterproofing,
              flooring, repair, retrofitting, grouting, and protective coatings
              across industrial and infrastructure projects.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-concrete-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-concrete-600">
                  To be Bangladesh's most trusted construction chemical
                  solutions provider, setting the benchmark for quality,
                  durability, and sustainable infrastructure development.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-concrete-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-concrete-600">
                  To deliver durable, sustainable, and cost-effective
                  construction chemical solutions through professional
                  expertise, premium materials, and uncompromising quality
                  standards.
                </p>
              </div>
            </div>

            {/* MD quote */}
            <div className="mt-8 rounded-2xl border-l-4 border-safety-500 bg-white p-6 shadow-md">
              <p className="font-display text-lg italic text-concrete-700">
                "Durable and sustainable solutions are not just our service —
                they are our commitment to building a stronger future."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white">
                  FA
                </div>
                <div>
                  <div className="font-semibold text-concrete-900">
                    Faruk Ahmad
                  </div>
                  <div className="text-sm text-concrete-500">
                    Managing Director, F&amp;G Industrial
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-concrete-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-concrete-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
