'use client';

import { useChat } from '@ai-sdk/react';
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
  const { messages, input, setInput, append } = useChat({
    api: '/api/chat',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<
    'skills' | 'projects' | 'contact' | null
  >(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    void append({ content: input, role: 'user' });
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
    void append({ content: question, role: 'user' });
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
      <div className="flex-1 flex flex-col">
        {showHeader && messages.length === 0 ? (
          <PortfolioHeader onCategorySelect={handleCategorySelect} />
        ) : (
          <>
            <SimpleHeader />
            <div className="flex-1 my-4 flex flex-col gap-4 overflow-y-auto px-4 md:px-6 pb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  data-role={message.role}
                  className={cn(
                    'max-w-[85%] rounded-xl px-4 py-3 text-sm',
                    message.role === 'assistant'
                      ? 'self-start bg-gray-800 text-gray-200'
                      : 'self-end bg-[#2a9d8f] text-white'
                  )}
                >
                  {message.content.length > 0 ? (
                    message.content
                  ) : message?.parts?.[0].type === 'tool-invocation' ? (
                    <span className="italic font-light">
                      {'calling tool: ' +
                        message?.parts?.[0].toolInvocation.toolName}
                    </span>
                  ) : null}
                </div>
              ))}
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
          className="flex-1 bg-transparent text-gray-200 placeholder:text-gray-500 focus:outline-none"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
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
