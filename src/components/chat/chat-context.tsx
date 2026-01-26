'use client';

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

type Message = ReturnType<typeof useChat>['messages'][number];

interface ChatContextType {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | { preventDefault: () => void },
  ) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  status: 'streaming' | 'submitted' | 'ready' | 'error';
  error: undefined | Error;
  selectedCategory: 'skills' | 'projects' | 'contact' | null;
  handleCategorySelect: (category: 'skills' | 'projects' | 'contact') => void;
  handlePredefinedQuestion: (question: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>; // fix: allow null
  hasMessages: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { messages, sendMessage, error, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    onError: (error) => {
      console.error('Chat error:', error);
    },
    onFinish: (message) => {
      //console.log('Message finished:', message);
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'skills' | 'projects' | 'contact' | null
  >(null);

  const hasMessages = messages.length > 0;

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | { preventDefault: () => void },
  ) => {
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
  // Note: This needs to be handled in the UI component usually, but the ref is here.
  // Actually, useEffect for scroll is better placed here or we expose the ref and effect is in UI?
  // Since the ref is attached to a DOM element in the UI, the effect should be where the Ref is attached?
  // No, the ref object is stable. We can keep the effect here if the ref is attached in the child.
  useEffect(() => {
    if (hasMessages) {
      // We need to check if current is not null. It will be null if modal is closed.
      // When modal opens, if we have messages, we might want to scroll.
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [messages, hasMessages]);

  return (
    <ChatContext.Provider
      value={{
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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
