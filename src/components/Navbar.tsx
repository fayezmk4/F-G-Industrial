import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-concrete-200/30'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between bg-white/95 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center" aria-label="F&G Industrial Home">
          <img
            src="/images/ChatGPT_Image_Sep_17,_2026,_02_52_56_PM.png"
            alt="F&G Industrial logo"
            className="h-11 w-auto max-w-[190px] object-contain md:h-14 md:max-w-[230px]"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-brand-950 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+8801841130340"
            className="flex items-center gap-2 text-sm font-medium text-concrete-700 transition-colors hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            01841-130340
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-safety-500 px-4 py-2 text-sm font-semibold text-safety-700 transition-all hover:bg-safety-500 hover:text-white active:scale-95"
          >
            Contact Us
          </a>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-concrete-700 transition-colors hover:bg-concrete-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="animate-slide-down border-t border-concrete-100 bg-white lg:hidden">
          <ul className="container-max flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-brand-950 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mx-4 block rounded-lg border-2 border-safety-500 px-4 py-3 text-center text-sm font-semibold text-safety-700 transition-colors hover:bg-safety-500 hover:text-white"
              >
                Contact Us
              </a>
            </li>
            <li className="mt-2 flex flex-col gap-2">
              <a
                href="tel:+8801841130340"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-concrete-700"
              >
                <Phone className="h-4 w-4 text-brand-600" />
                01841-130340
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mx-4"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
