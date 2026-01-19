'use client';

interface PortfolioGridProps {
  onCategorySelect: (category: 'skills' | 'projects' | 'contact') => void;
}

export function PortfolioGrid({ onCategorySelect }: PortfolioGridProps) {
  return (
    <div className="flex w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
      <div
        className="rounded-lg bg-gray-800/50 p-4 transition-all hover:bg-gray-800 cursor-pointer border border-gray-700/50 hover:border-gray-600"
        onClick={() => onCategorySelect('skills')}
      >
        <span className="mb-2 block text-2xl">⚡</span>
        <h2 className="mb-1 text-sm font-semibold text-white">Skills</h2>
        <p className="text-xs text-gray-400">
          Explore technical expertise and capabilities.
        </p>
      </div>

      <div
        className="rounded-lg bg-gray-800/50 p-4 transition-all hover:bg-gray-800 cursor-pointer border border-gray-700/50 hover:border-gray-600"
        onClick={() => onCategorySelect('projects')}
      >
        <span className="mb-2 block text-2xl">💻</span>
        <h2 className="mb-1 text-sm font-semibold text-white">Projects</h2>
        <p className="text-xs text-gray-400">
          Discover portfolio of web development work.
        </p>
      </div>

      <div
        className="rounded-lg bg-gray-800/50 p-4 transition-all hover:bg-gray-800 cursor-pointer border border-gray-700/50 hover:border-gray-600"
        onClick={() => onCategorySelect('contact')}
      >
        <span className="mb-2 block text-2xl">📬</span>
        <h2 className="mb-1 text-sm font-semibold text-white">Contact</h2>
        <p className="text-xs text-gray-400">
          Get in touch for collaboration opportunities.
        </p>
      </div>
    </div>
  );
}
