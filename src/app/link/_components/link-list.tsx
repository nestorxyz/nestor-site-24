'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DATA } from '@/data/resume';
import { ChevronRight } from 'lucide-react';

export function LinkList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-4">
      {Object.entries(DATA.contact.social)
        .filter(([_, social]) => social.linkInBio)
        .map(([name, social]) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full p-4 bg-gray-700 rounded-lg text-center font-medium text-gray-100 hover:bg-purple-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredId(social.name)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <social.icon className="size-4 mr-2" />
            {social.name}
            {hoveredId === social.name && (
              <motion.span
                className="inline-block ml-auto absolute right-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ChevronRight size={16} />
              </motion.span>
            )}
          </motion.a>
        ))}
    </div>
  );
}
