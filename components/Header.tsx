
import React from 'react';
import { BookOpenIcon } from './icons';

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BookOpenIcon className="h-8 w-8 text-sky-600" />
            <h1 className="text-xl font-bold text-slate-800">
              Prompt Engineering Handbook
            </h1>
          </div>
          <div className="text-sm font-semibold text-slate-500">
            For Professionals by <a href="https://greybrain.ai" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">greybrain.ai</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
