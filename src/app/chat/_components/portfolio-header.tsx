'use client';

import Image from 'next/image';

interface PortfolioHeaderProps {
  onCategorySelect: (category: 'skills' | 'projects' | 'contact') => void;
}

export function PortfolioHeader({ onCategorySelect }: PortfolioHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center pb-12 text-center">
      <div className="relative mb-6 h-20 w-20 animate-pulse">
        <Image
          src="/brain-icon.svg"
          alt="Brain Icon"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
        Chat with Nestor&apos;s Assistant
      </h1>

      <p className="mb-12 max-w-md text-gray-400">
        Ask me anything about Nestor&apos;s skills, projects, or availability
      </p>

      <div className="flex my-6 w-full max-w-4xl grid-cols-1 gap-6">
        <div
          className="rounded-lg bg-gray-800/50 p-6 transition-all hover:bg-gray-800 cursor-pointer"
          onClick={() => onCategorySelect('skills')}
        >
          <h2 className="mb-2 text-xl font-semibold text-white">Skills</h2>
          <p className="text-sm text-gray-400">
            Explore technical expertise and capabilities.
          </p>
        </div>

        <div
          className="rounded-lg bg-gray-800/50 p-6 transition-all hover:bg-gray-800 cursor-pointer"
          onClick={() => onCategorySelect('projects')}
        >
          <h2 className="mb-2 text-xl font-semibold text-white">Projects</h2>
          <p className="text-sm text-gray-400">
            Discover portfolio of web development work.
          </p>
        </div>

        <div
          className="rounded-lg bg-gray-800/50 p-6 transition-all hover:bg-gray-800 cursor-pointer"
          onClick={() => onCategorySelect('contact')}
        >
          <h2 className="mb-2 text-xl font-semibold text-white">Contact</h2>
          <p className="text-sm text-gray-400">
            Get in touch for collaboration opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
