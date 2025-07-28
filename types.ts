import type { ReactNode } from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

export interface SectionData {
  id: number;
  title: string;
  shortTitle: string;
  content: ReactNode;
  quiz?: Quiz;
}
