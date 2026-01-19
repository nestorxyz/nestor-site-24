'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AutoResizeTextarea } from '@/components/ui/autoresize-textarea';
import { ArrowUpIcon, PlusIcon, ImagePlusIcon, MicIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { PredefinedQuestions } from './_components/predefined-questions';
import { PortfolioHeader } from './_components/portfolio-header';
import { PortfolioGrid } from './_components/portfolio-grid';
import { SimpleHeader } from './_components/simple-header';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chat() {
  const { messages, sendMessage, error, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    onError: (error) => {
      console.error('Chat error:', error);
    },
    onFinish: (message) => {
      console.log('Message finished:', message);
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'skills' | 'projects' | 'contact' | null
  >(null);

  const hasMessages = messages.length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage({ text: input });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handlePredefinedQuestion = (question: string) => {
    sendMessage({ text: question });
    setSelectedCategory(null);
  };

  const handleCategorySelect = (
    category: 'skills' | 'projects' | 'contact',
  ) => {
    setSelectedCategory(category);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (hasMessages) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, hasMessages]);

  return (
    <main className="flex flex-col h-screen w-full bg-transparent text-gray-200 overflow-hidden relative">
      {/* Background/Structure for Active Chat Header */}
      <AnimatePresence>
        {hasMessages && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 z-20"
          >
            <SimpleHeader />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          'flex-1 flex flex-col relative transition-all duration-500 ease-in-out',
          hasMessages ? 'justify-between' : 'justify-center items-center',
        )}
      >
        {/* Empty State Header - fades out on message */}
        <AnimatePresence>
          {!hasMessages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8 z-10"
            >
              <PortfolioHeader />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages List Area - Only visible when messages exist */}
        {hasMessages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 w-full overflow-y-auto px-4 md:px-6 pt-20 pb-4 scroll-smooth"
          >
            <div className="flex flex-col gap-4 max-w-4xl mx-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'max-w-[85%] rounded-xl px-4 py-3 text-sm',
                    message.role === 'assistant'
                      ? 'self-start bg-gray-800 text-gray-200'
                      : 'self-end bg-[#2a9d8f] text-white',
                  )}
                >
                  <div className="text-xs font-medium !text-pink-600 mb-1">
                    {message.role}
                  </div>
                  {message.parts.length > 0 ? (
                    message.parts.map((part, index) =>
                      part.type === 'text' ? (
                        <span key={index}>{part.text}</span>
                      ) : null,
                    )
                  ) : (
                    <span className="italic font-light text-gray-400">
                      Searching knowledge base...
                    </span>
                  )}
                </div>
              ))}

              {(status === 'submitted' || status === 'streaming') && (
                <div className="max-w-[85%] self-start bg-gray-800 text-gray-200 rounded-xl px-4 py-3 text-sm">
                  <div className="text-xs font-medium !text-pink-600 mb-1">
                    assistant
                  </div>
                  <span className="italic font-light text-gray-400">
                    Thinking...
                  </span>
                </div>
              )}

              {error && (
                <div className="max-w-[85%] self-start bg-red-900/30 border border-red-500 text-red-200 rounded-xl px-4 py-3 text-sm">
                  <div className="text-xs font-medium mb-1">Error</div>
                  {error.message}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}

        {/* Input Area - Shared between states with layout animation */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={cn(
            'w-full px-4 md:px-6 z-30',
            hasMessages ? 'pb-4 max-w-4xl mx-auto' : 'max-w-3xl mb-8',
          )}
        >
          <div className="relative flex flex-col bg-[#1e1e1e] rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <AutoResizeTextarea
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Ask Gemini 3"
              disabled={
                status !== 'ready' && status !== 'error' && messages.length > 0
              }
              className="w-full bg-transparent text-gray-200 placeholder:text-gray-500 focus:outline-none min-h-[60px] p-4 resize-none text-lg"
            />

            <div className="flex items-center justify-end px-2 pb-2">
              {/* <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-400 hover:text-white rounded-full hover:bg-gray-800"
                >
                  <PlusIcon size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-400 hover:text-white rounded-full hover:bg-gray-800"
                >
                  <ImagePlusIcon size={18} />
                </Button>
              </div> */}

              <div className="flex items-center gap-2">
                {input.trim() || true ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    type="submit"
                    onClick={() =>
                      handleSubmit({
                        preventDefault: () => {},
                      } as React.FormEvent<HTMLFormElement>)
                    }
                    disabled={
                      status !== 'ready' &&
                      status !== 'error' &&
                      messages.length > 0
                    }
                    className="h-9 w-9 bg-white text-black hover:bg-gray-200 hover:text-black rounded-full"
                  >
                    <ArrowUpIcon size={18} />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-gray-400 hover:text-white rounded-full hover:bg-gray-800"
                  >
                    <MicIcon size={20} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empty State Footer Content (Grid + Questions) - fades out on message */}
        <AnimatePresence>
          {!hasMessages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center w-full max-w-4xl px-4 z-10"
            >
              <div className="w-full mb-8">
                <PortfolioGrid onCategorySelect={handleCategorySelect} />
              </div>

              <PredefinedQuestions
                onSelectQuestion={handlePredefinedQuestion}
                category={selectedCategory}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
