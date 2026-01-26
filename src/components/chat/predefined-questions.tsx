'use client';

import { Button } from '@/components/ui/button';

interface PredefinedQuestionsProps {
  onSelectQuestion: (question: string) => void;
  category: 'skills' | 'projects' | 'contact' | null;
}

export function PredefinedQuestions({
  onSelectQuestion,
  category,
}: PredefinedQuestionsProps) {
  const skillsQuestions = [
    'What programming languages do you know?',
    'What frontend frameworks are you experienced with?',
    'Do you have experience with backend development?',
    "What's your experience with responsive design?",
    'Are you familiar with UI/UX principles?',
    "What's your strongest technical skill?",
  ];

  const projectsQuestions = [
    "What's your most complex project?",
    'Have you built any e-commerce websites?',
    'Can you show me examples of your responsive designs?',
    'Have you worked on any open-source projects?',
    'What was your most challenging project and why?',
    'Do you have experience with mobile app development?',
  ];

  const contactQuestions = [
    "What's the best way to contact you?",
    'Are you available for freelance work?',
    'What are your hourly/project rates?',
    'Do you offer consultation services?',
    'Where are you located?',
    'Can we schedule a call to discuss my project?',
    'Where do you prefer to be contacted?',
  ];

  const generalQuestions = [
    'What are your main skills as a web developer?',
    'Tell me about your most challenging project',
    'What technologies do you specialize in?',
    'Are you available for freelance work?',
    "What's your development process like?",
    'How can I contact you?',
  ];

  // Determine which questions to show based on the category
  const questions =
    category === 'skills'
      ? skillsQuestions
      : category === 'projects'
        ? projectsQuestions
        : category === 'contact'
          ? contactQuestions
          : generalQuestions;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {questions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          className={`rounded-full border-gray-700 bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white text-xs h-auto py-2 px-4 whitespace-normal text-center ${
            index >= 3 ? 'hidden md:inline-flex' : ''
          }`}
          onClick={() => onSelectQuestion(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  );
}
