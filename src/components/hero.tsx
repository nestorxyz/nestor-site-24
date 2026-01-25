'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DATA } from '@/data/resume';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="py-7 pt-4 sm:pt-8 sm:pb-10">
      <div className="w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[645px_1fr] gap-[52px]">
          {/* Left Column - Main Info */}
          <div>
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary w-fit text-sm font-medium">
                CHAT in order to know more about me
              </div>

              <h1 className="text-[2.6rem] lg:text-7xl">
                {DATA.name.toLowerCase()}
              </h1>

              <div className="mb-5 mt-3 sm:mt-3 text-xl sm:mb-4 lg:text-2xl">
                <p>AI Engineer & Product Builder.</p>
                <p className="text-lg hidden lg:block mt-2">
                  I combine technical depth with Applied AI. Honed my skills at
                  YC & 500 Global startups, I engineer Agentic AI, knowing
                  exactly what it takes to build a product from Zero to One.
                </p>
                <p className="text-sm lg:text-lg mt-2 lg:mt-1">
                  Now dedicating my craft to Kubo, using technology to automate
                  the boring parts of accounting so founders can focus on
                  growing.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="flex gap-3 flex-wrap">
                  <Link href="/chat">
                    <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-[13px] rounded-full border-none shadow-md">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      chat
                    </button>
                  </Link>

                  <a href={DATA.contact.social.LinkedIn.url} target="_blank">
                    <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-full shadow-md">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </button>
                  </a>
                  <a href={DATA.contact.social.Instagram.url} target="_blank">
                    <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-full shadow-md">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 text-sm font-medium mt-4">
                <span>4 years experience</span>
                <span>2x founding engineer</span>
                <span>2k+ Instagram</span>
                <span>500+ Tiktok</span>
                <span>100+ LinkedIn</span>
              </div>

              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">
                    worked on
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {DATA.work.map((work, idx) => (
                      <div
                        key={idx}
                        className="bg-muted px-4 py-2 text-sm text-muted-foreground"
                      >
                        {work.company}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">
                    studied on
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {DATA.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="bg-muted px-4 py-2 text-sm text-muted-foreground"
                      >
                        {edu.school}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Media & Projects */}
          <div className="desktop-nav:max-w-full hidden md:grid desktop-nav:flex desktop-nav:flex-row gap-4 h-fit">
            {/* TikTok Video - Spans full height of first row or takes significant space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 row-span-2 relative overflow-hidden rounded-lg bg-black group"
            >
              {/* Placeholder for TikTok video. Using a simple cover or loop if available. 
                 The mock shows "Video de tiktok". */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-neutral-800">
                {/* Trying to use the Treats video as it seems relevant or just a placeholder text */}
                <span className="text-center p-4">Video de tiktok</span>
                {/* If we have a video URL we could put it here */}
              </div>
              <video
                src="https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/treats%20(1080p).mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute bottom-4 left-4 z-10">
                <Badge
                  variant="secondary"
                  className="bg-green-600 text-white border-none"
                >
                  I would rather take
                </Badge>
              </div>
            </motion.div>

            {/* Project 1: Kubo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 bg-secondary/20 rounded-lg p-6 flex flex-col justify-center items-center text-center hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              <Link
                href="https://holakubo.com"
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                <h3 className="text-2xl font-medium">Kubo</h3>
              </Link>
            </motion.div>

            {/* Project 2: DoryAI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 bg-secondary/20 rounded-lg p-6 flex flex-col justify-center items-center text-center hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              <Link
                href="https://www.doryai.app"
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                <h3 className="text-2xl font-medium">DoryAI</h3>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
