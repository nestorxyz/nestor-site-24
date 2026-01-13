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
import { ArrowUpIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { PredefinedQuestions } from './_components/predefined-questions';
import { PortfolioHeader } from './_components/portfolio-header';
import { SimpleHeader } from './_components/simple-header';

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

  console.log('Messages:', messages);
  console.log('Error:', error);
  console.log('Status:', status);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'skills' | 'projects' | 'contact' | null
  >(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage({ text: input });
    setInput('');
    setShowHeader(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handlePredefinedQuestion = (question: string) => {
    sendMessage({ text: question });
    setShowHeader(false);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (
    category: 'skills' | 'projects' | 'contact'
  ) => {
    setSelectedCategory(category);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main className="flex flex-col flex-1 h-screen w-full bg-[#121212] text-gray-200">
      <div className="flex-1 flex relative flex-col">
        {showHeader && messages.length === 0 ? (
          <PortfolioHeader onCategorySelect={handleCategorySelect} />
        ) : (
          <>
            <SimpleHeader />
            <div className="flex-1 my-4 flex flex-col gap-4 overflow-y-auto px-4 md:px-6 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  data-role={message.role}
                  className={cn(
                    'max-w-[85%] rounded-xl px-4 py-3 text-sm',
                    message.role === 'assistant'
                      ? 'self-start bg-gray-800 text-gray-200'
                      : 'self-end bg-[#2a9d8f] text-white'
                  )}
                >
                  <div className="text-xs font-medium !text-pink-600 mb-1">
                    {message.role}
                  </div>
                  {message.parts.length > 0 ? (
                    message.parts.map((part, index) =>
                      part.type === 'text' ? (
                        <span key={index}>{part.text}</span>
                      ) : null
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
          </>
        )}
      </div>

      {showHeader && messages.length === 0 && (
        <div className="px-4 md:px-6 mb-4">
          <PredefinedQuestions
            onSelectQuestion={handlePredefinedQuestion}
            category={selectedCategory}
          />
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative mx-4 mt-auto md:mx-6 mb-4 flex items-center rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm focus-within:border-gray-600"
      >
        <AutoResizeTextarea
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Ask me anything..."
          disabled={status !== 'ready'}
          className="flex-1 bg-transparent text-gray-200 placeholder:text-gray-500 focus:outline-none"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              type="submit"
              disabled={status !== 'ready'}
              className="absolute bottom-1 right-1 size-6 rounded-full"
            >
              <ArrowUpIcon size={16} className="text-white shrink-0" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>Submit</TooltipContent>
        </Tooltip>
      </form>
    </main>
  );
}
