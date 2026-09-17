import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden md:min-h-[680px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="public/images/ChatGPT_Image_Sep_17,_2026,_03_37_04_PM.png"
          alt="F&G Industrial infrastructure and construction projects"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      {/* Content */}
      <div className="container-max relative flex min-h-[600px] flex-col justify-center py-20 md:min-h-[680px]">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            <span className="text-sm font-medium text-white/90">
              Trusted since 2017
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Durable Sustainable Solutions for{' '}
            <span className="text-safety-400">Infrastructure Development</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Professional construction chemical supply and application services —
            delivering quality, safety, and sustainability for industrial and
            infrastructure projects across Bangladesh.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#services" className="btn-primary">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Calendar className="h-4 w-4" />
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="h-12 w-full md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 L0,40 Q360,0 720,30 T1440,40 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}






