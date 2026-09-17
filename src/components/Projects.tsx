import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-concrete-50">
      <div className="container-max">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
            <span className="text-sm font-semibold text-brand-700">
              Projects & Gallery
            </span>
          </div>
          <h2 className="section-title">Our Work in Action</h2>
          <p className="section-subtitle">
            A showcase of our construction chemical application projects across
            industrial, commercial, and infrastructure sectors.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'bg-white text-concrete-600 ring-1 ring-concrete-200 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-concrete-200/50 ring-1 ring-concrete-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/80 via-concrete-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <button
                  onClick={() => setLightbox(project.image)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white"
                  aria-label="Zoom image"
                >
                  <ZoomIn className="h-5 w-5 text-concrete-800" />
                </button>
              </div>
              <div className="p-5">
                <div className="mb-2 inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-semibold text-brand-700">
                  {project.category}
                </div>
                <h3 className="font-display text-base font-semibold text-concrete-900">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-concrete-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-concrete-950/90 p-4 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={lightbox}
              alt="Project detail"
              className="max-h-[85vh] max-w-full rounded-lg object-contain animate-scale-in"
            />
          </div>
        )}
      </div>
    </section>
  );
}
