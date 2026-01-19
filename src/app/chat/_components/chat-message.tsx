'use client';

import { UIMessage as Message } from '@ai-sdk/react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { UserIcon, BotIcon } from 'lucide-react'; // Fallback icons if needed, but per plan we might just use layout

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  const textContent = message.parts
    ? message.parts
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('')
    : '';

  return (
    <div
      className={cn(
        'flex w-full mb-6',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      <div
        className={cn(
          'flex flex-col max-w-[85%] md:max-w-[80%]',
          isUser ? 'items-end' : 'items-start',
        )}
      >
        <div
          className={cn(
            'relative px-5 py-3.5 text-sm md:text-base shadow-sm',
            isUser
              ? 'bg-[#2f2f2f] text-white rounded-3xl rounded-tr-sm' // ChatGPT-like user bubble: dark grey, rounded with one clearer corner
              : 'bg-transparent text-gray-100 w-full', // Assistant: transparent, full width text
          )}
        >
          {isUser ? (
            textContent
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none break-words"
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-4 mb-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-4 mb-2">{children}</ol>
                ),
                li: ({ children }) => <li className="mb-1">{children}</li>,
                code: ({ className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline =
                    !match && !children?.toString().includes('\n');

                  if (isInline) {
                    return (
                      <code
                        className="bg-gray-800/50 px-1 py-0.5 rounded text-gray-200 text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <div className="relative rounded-lg overflow-hidden my-4 bg-[#1e1e1e] border border-gray-800">
                      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-800">
                        <span className="text-xs text-gray-400">
                          {match?.[1] || 'code'}
                        </span>
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <code
                          className={cn(
                            'text-sm font-mono text-gray-200',
                            className,
                          )}
                          {...props}
                        >
                          {children}
                        </code>
                      </div>
                    </div>
                  );
                },
              }}
            >
              {textContent}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}
