'use client';

interface PortfolioGridProps {
  onCategorySelect: (category: 'skills' | 'projects' | 'contact') => void;
}

export function PortfolioGrid({ onCategorySelect }: PortfolioGridProps) {
  return (
    <div className="w-full max-w-4xl rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div
          className="flex-1 p-4 md:p-6 hover:bg-white/5 transition-colors cursor-pointer group relative"
          onClick={() => onCategorySelect('skills')}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-400 transition-colors" />
          <h3 className="mb-0 md:mb-2 text-sm font-bold text-zinc-100">
            Technical Skills
          </h3>
          <p className="hidden md:block text-xs text-zinc-400 leading-relaxed">
            Explore technical expertise, programming languages, and tools.
          </p>
        </div>

        <div
          className="flex-1 p-4 md:p-6 hover:bg-white/5 transition-colors cursor-pointer group relative"
          onClick={() => onCategorySelect('projects')}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-400 transition-colors" />
          <h3 className="mb-0 md:mb-2 text-sm font-bold text-zinc-100">
            Featured Projects
          </h3>
          <p className="hidden md:block text-xs text-zinc-400 leading-relaxed">
            Discover portfolio of web development work and case studies.
          </p>
        </div>

        <div
          className="flex-1 p-4 md:p-6 hover:bg-white/5 transition-colors cursor-pointer group relative"
          onClick={() => onCategorySelect('contact')}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-blue-400 transition-colors" />
          <h3 className="mb-0 md:mb-2 text-sm font-bold text-zinc-100">
            Contact & Connect
          </h3>
          <p className="hidden md:block text-xs text-zinc-400 leading-relaxed">
            Get in touch for collaboration opportunities and inquiries.
          </p>
        </div>
      </div>
    </div>
  );
}
