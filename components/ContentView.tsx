
import React from 'react';
import { SectionData } from '../types';
import { BeakerIcon } from './icons';

interface ContentViewProps {
  section: SectionData;
  onStartQuiz: (quizId: number) => void;
}

const ContentView: React.FC<ContentViewProps> = ({ section, onStartQuiz }) => {
  return (
    <div className="prose prose-slate max-w-none p-8 lg:p-12 overflow-y-auto h-full">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 border-b-2 border-sky-500 pb-2 mb-6">
        <span className="text-sky-600">{section.id}.</span> {section.title}
      </h1>
      {section.content}
      {section.quiz && (
        <div className="mt-12 p-6 bg-sky-50 rounded-lg border border-sky-200 text-center not-prose">
          <h3 className="text-xl font-bold text-sky-800 mb-2">Ready to test your knowledge?</h3>
          <p className="text-sky-700 mb-4">Take a short quiz to reinforce what you've learned in this section.</p>
          <button
            onClick={() => onStartQuiz(section.quiz!.id)}
            className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-md shadow-sm hover:bg-sky-700 transition-colors flex items-center justify-center mx-auto"
          >
            <BeakerIcon className="h-5 w-5 mr-2" />
            Start Quiz: {section.shortTitle}
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentView;
