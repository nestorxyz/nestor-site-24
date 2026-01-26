'use client';

import { Button } from '@/components/ui/button';
import { AutoResizeTextarea } from '@/components/ui/autoresize-textarea';
import { ArrowUpIcon, MicIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PredefinedQuestions } from '@/components/chat/predefined-questions';
import { PortfolioHeader } from '@/components/chat/portfolio-header';
import { PortfolioGrid } from '@/components/chat/portfolio-grid';
import { ChatMessage } from '@/components/chat/chat-message';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from '@/components/chat/chat-context';
import { useEffect } from 'react';

export function ChatInterface() {
  const {
    messages,
    input,
    setInput,
    handleSubmit,
    handleKeyDown,
    status,
    error,
    selectedCategory,
    handleCategorySelect,
    handlePredefinedQuestion,
    messagesEndRef,
    hasMessages,
  } = useChatContext();

  // Scroll to bottom on mount if messages exist
  useEffect(() => {
    if (hasMessages && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [hasMessages, messagesEndRef]);

  return (
    <div className="flex flex-col w-full bg-transparent text-gray-200 overflow-hidden relative">
      <div
        className={cn(
          'flex-1 flex flex-col relative overflow-hidden transition-all duration-500 ease-in-out',
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
            className="flex-1 w-full min-h-0 overflow-y-auto pt-4 sm:pt-8 scroll-smooth"
          >
            <div className="flex flex-col gap-4 max-w-4xl mx-auto px-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {(status === 'submitted' || status === 'streaming') && (
                <div className="flex w-full justify-start">
                  <div className="flex flex-col items-start max-w-[85%] md:max-w-[80%]">
                    <div className="relative px-5 py-3.5 text-sm md:text-base bg-transparent text-gray-100 min-h-[40px] flex items-center">
                      <span className="animate-pulse italic font-light text-gray-400">
                        Thinking...
                      </span>
                    </div>
                  </div>
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
              placeholder="ask sth about Nestor"
              disabled={
                status !== 'ready' && status !== 'error' && messages.length > 0
              }
              className="w-full bg-transparent text-gray-200 placeholder:text-gray-500 focus:outline-none min-h-[60px] p-4 resize-none text-base"
            />

            <div className="flex items-center justify-end px-2 pb-2">
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
    </div>
  );
}
