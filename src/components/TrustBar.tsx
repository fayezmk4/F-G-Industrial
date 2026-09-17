import { CalendarDays, Building2, BadgeCheck, Leaf } from 'lucide-react';

const stats = [
  {
    icon: CalendarDays,
    value: 'Since 2017',
    label: 'Years of Experience',
  },
  {
    icon: Building2,
    value: 'Industrial',
    label: 'Project Expertise',
  },
  {
    icon: BadgeCheck,
    value: 'Quality',
    label: 'Assured Workmanship',
  },
  {
    icon: Leaf,
    value: 'Sustainable',
    label: 'Eco-Friendly Solutions',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-max">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 md:h-16 md:w-16">
                <stat.icon className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="font-display text-xl font-bold text-concrete-900 md:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-concrete-500 md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
