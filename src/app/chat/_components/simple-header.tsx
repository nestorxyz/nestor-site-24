import Image from 'next/image';

export function SimpleHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-800 bg-[#121212]/90 py-3 backdrop-blur-sm">
      <div className="relative h-10 w-10">
        <Image
          src="/brain-icon.svg"
          alt="Brain Icon"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div>
        <h1 className="text-lg font-medium text-white">
          Chat with Nestor&apos;s Assistant
        </h1>
        <p className="text-xs text-gray-400">
          Ask me anything about Nestor&apos;s skills, projects, or availability
        </p>
      </div>
    </div>
  );
}
