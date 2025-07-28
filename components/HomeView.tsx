
import React from 'react';
import { SparklesIcon, BookOpenIcon } from './icons';

interface HomeViewProps {
  onStartCourse: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStartCourse }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="max-w-2xl">
        <SparklesIcon className="w-16 h-16 mx-auto text-sky-500 mb-4" />
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to the Prompt Engineering Handbook
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          This interactive guide is designed for professionals to master AI through effective prompt engineering. Learn the core principles, essential techniques, and best practices to unlock the full potential of AI in your daily work.
        </p>
        <button
          onClick={onStartCourse}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
          <BookOpenIcon className="w-5 h-5 mr-2" />
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default HomeView;
