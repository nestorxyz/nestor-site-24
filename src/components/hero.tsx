'use client';

import { useState, useRef, useEffect } from 'react';
import { Icons } from '@/components/icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DATA } from '@/data/resume';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  MessageCircle,
  Volume2,
  VolumeX,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { ChatInterface } from '@/components/chat-interface';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const VIDEOS = [
  'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/snaptik_7525667982769425670_hd.mp4',
  'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/snaptik_7525579358564519224_hd.mp4',
  'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/snaptik_7489963187282922757_v2.mp4',
];

import { ChatProvider } from '@/components/chat/chat-context';

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  useEffect(() => {
    setIsVideoLoaded(false);
    setProgress(0);
  }, [currentVideoIndex]);

  return (
    <ChatProvider>
      <Dialog>
        <section id="hero" className="py-7 pt-4 sm:pt-24 sm:pb-10">
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
                  <DialogTrigger asChild>
                    <button className="inline-flex mb-3 items-center gap-2 px-3 py-1 rounded-full w-fit text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent cursor-pointer bg-transparent">
                      curious about my work? interview my ai agent.
                    </button>
                  </DialogTrigger>

                  <h1 className="text-[2.6rem] lg:text-7xl">
                    {DATA.name.toLowerCase()}
                  </h1>

                  <div className="mb-5 mt-3 sm:mt-3 text-xl sm:mb-4 lg:text-2xl">
                    <p>ai engineer & product builder.</p>
                    <p className="text-lg hidden lg:block mt-2 text-[#aeafae]">
                      i combine technical depth with applied ai. building
                      product from zero to one at{' '}
                      <span className="font-semibold">
                        YC & 500 Global startups
                      </span>
                      .
                    </p>
                    <p className="text-sm lg:text-lg mt-2 lg:mt-1 text-[#aeafae]">
                      building Kubo, using ai to automate the boring parts of
                      accounting.
                    </p>
                  </div>

                  <div className="hidden lg:block">
                    <div className="flex gap-3 flex-wrap">
                      <DialogTrigger asChild>
                        <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-[13px] rounded-full border-none shadow-md">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          chat with my AI
                        </button>
                      </DialogTrigger>

                      <a
                        href="https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/CV%20-%20Nestor%20Mamani%20SWE.pdf"
                        target="_blank"
                      >
                        <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-full shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          download CV
                        </button>
                      </a>
                      <a
                        href={DATA.contact.social.Instagram.url}
                        target="_blank"
                      >
                        <button className="flex select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 rounded-full shadow-md">
                          <Mail className="mr-2 h-4 w-4" />
                          contact
                        </button>
                      </a>
                      <a href={DATA.contact.social.GitHub.url} target="_blank">
                        <button className="flex h-[54px] w-[54px] select-none items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:bg-accent hover:text-accent-foreground px-3 py-3 rounded-full shadow-md aspect-square">
                          <Icons.github className="h-6 w-6" />
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="flex pt-6 mt-auto flex-wrap text-[#adb2ae] gap-3 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="sm:w-[17px] sm:h-[17px] h-4 w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      4 years experience
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="sm:w-[17px] sm:h-[17px] h-4 w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      2x founding engineer
                    </span>
                    <a href={DATA.contact.social.Instagram.url} target="_blank">
                      <span className="flex items-center gap-1 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <title>Instagram</title>
                          <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3617 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
                        </svg>
                        +2k Instagram
                      </span>
                    </a>
                    <a href={DATA.contact.social.TikTok.url} target="_blank">
                      <span className="flex items-center gap-1 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <title>TikTok</title>
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                        </svg>
                        +500 Tiktok
                      </span>
                    </a>
                    <a href={DATA.contact.social.LinkedIn.url} target="_blank">
                      <span className="flex items-center gap-1 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <title>LinkedIn</title>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                        +200 LinkedIn
                      </span>
                    </a>
                  </div>

                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground">
                        worked on startups backed by YC and 500 Global
                      </span>
                      <div className="flex flex-wrap gap-4">
                        {DATA.work.map((work, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-lg overflow-hidden h-16 w-auto transition-opacity"
                          >
                            <Image
                              src={work.logoUrl}
                              alt={work.company}
                              width={100}
                              height={100}
                              className="h-full w-auto object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground">
                        studied on
                      </span>
                      <div className="flex flex-wrap gap-4">
                        {DATA.education.map((edu, idx) => (
                          <a
                            href={edu.href}
                            target="_blank"
                            key={idx}
                            className="relative cursor-pointer rounded-lg hover:scale-110 transform transition-all overflow-hidden h-16 w-auto"
                          >
                            <Image
                              src={edu.logoUrl}
                              alt={edu.school}
                              width={500}
                              height={500}
                              className="h-full w-auto object-contain"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Media & Projects */}
              <div className="md:max-w-full hidden md:flex desktop-nav:flex-row gap-4 h-fit">
                {/* TikTok Video - Spans full height of first row or takes significant space */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-1 aspect-[9/16] relative rounded-2xl overflow-hidden bg-black group"
                >
                  {/* Progress Bars */}
                  <div className="absolute top-3 left-3 right-3 flex gap-1.5 z-40">
                    {VIDEOS.map((_, index) => (
                      <div
                        key={index}
                        className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer backdrop-blur-sm transition-transform duration-200 hover:scale-y-150"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideoIndex(index);
                        }}
                      >
                        <div
                          className="h-full bg-white transition-all duration-100 ease-linear"
                          style={{
                            width:
                              index === currentVideoIndex
                                ? `${progress}%`
                                : index < currentVideoIndex
                                  ? '100%'
                                  : '0%',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Placeholder Loading State */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black z-20 transition-opacity duration-500 ${
                      isVideoLoaded
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100'
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 1.5 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    >
                      <Icons.tiktok className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  <div
                    className={`absolute top-6 right-4 z-30 transition-opacity duration-300 ${
                      isMuted
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <video
                    key={currentVideoIndex}
                    ref={videoRef}
                    src={VIDEOS[currentVideoIndex]}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoEnd}
                    onClick={toggleMute}
                  />
                </motion.div>

                {/* Project 1: Kubo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:flex hidden flex-1"
                >
                  <div className="flex flex-col gap-4 h-full w-full">
                    {/* Project 1: Kubo */}
                    <div className="group relative flex-1 w-full rounded-2xl overflow-hidden cursor-pointer">
                      <Image
                        src="https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/kubo-og.png"
                        alt="Kubo"
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Link href="https://holakubo.com" target="_blank">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="rounded-full h-16 w-16"
                            >
                              <Icons.globe className="w-8 h-8" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Project 2: DoryAI */}
                    <div className="group relative flex-1 w-full rounded-2xl overflow-hidden cursor-pointer">
                      <Image
                        src="https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/dory-og.png"
                        alt="DoryAI"
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          <Link href="https://www.doryai.app" target="_blank">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="rounded-full h-16 w-16"
                            >
                              <Icons.globe className="w-8 h-8" />
                            </Button>
                          </Link>
                          <Link
                            href="https://wa.me/51970899781?text=Hola%2C%20como%20me%20puedes%20ayudar%3F"
                            target="_blank"
                          >
                            <Button
                              size="icon"
                              className="rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none"
                            >
                              <Icons.whatsapp className="w-8 h-8" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <DialogContent className="max-w-4xl h-[90vh] w-full bg-[#0a0a0a] border-border p-0 pt-3 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Chat with Nestor&apos;s AI</DialogTitle>
          </VisuallyHidden>
          <ChatInterface />
        </DialogContent>
      </Dialog>
    </ChatProvider>
  );
}
