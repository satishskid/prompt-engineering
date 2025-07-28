
import React, { useState } from 'react';
import { TrophyIcon, SparklesIcon } from './icons';

interface CompletionViewProps {
  finalScore: number;
  totalQuestions: number;
  onRestart: () => void;
}

const CompletionView: React.FC<CompletionViewProps> = ({ finalScore, totalQuestions, onRestart }) => {
  const [userName, setUserName] = useState('');
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8 lg:p-12 overflow-y-auto h-full bg-slate-100 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="bg-white shadow-2xl rounded-lg p-8 print:shadow-none" id="certificate">
          <div className="border-2 border-amber-400 p-6 rounded-md relative">
            <SparklesIcon className="absolute top-4 left-4 h-8 w-8 text-amber-300 opacity-50" />
            <SparklesIcon className="absolute bottom-4 right-4 h-8 w-8 text-amber-300 opacity-50" />
            <TrophyIcon className="w-24 h-24 mx-auto text-amber-500 mb-4" />
            <h2 className="text-center text-4xl font-extrabold text-slate-800 tracking-tight">
              Certificate of Completion
            </h2>
            <p className="text-center text-slate-600 mt-4 text-lg">This certifies that</p>
            {userName ? (
              <p className="text-center text-4xl font-serif text-sky-700 my-4 border-b-2 border-dotted border-slate-300 pb-2">
                {userName}
              </p>
            ) : (
                <div className="my-4 flex justify-center print:hidden">
                    <input
                        type="text"
                        placeholder="Enter your name here"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="text-center text-2xl font-serif text-sky-700 border-b-2 border-slate-400 focus:border-sky-600 outline-none w-2/3 py-1"
                    />
                </div>
            )}
            <p className="text-center text-slate-600 text-lg">
              has successfully completed the
            </p>
            <p className="text-center text-2xl font-bold text-slate-700 my-2">
              Prompt Engineering for Professionals
            </p>
            <p className="text-center text-slate-600">
              course with a final assessment score of
            </p>
            <p className="text-center text-6xl font-bold text-green-600 my-4">
              {percentage}%
            </p>
            <div className="flex justify-between items-end mt-8 text-sm text-slate-500">
                <div>
                    <p className="font-semibold border-t border-slate-300 pt-1">Date of Completion</p>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
                 <div>
                    <p className="font-semibold border-t border-slate-300 pt-1">Issued by</p>
                    <p>greybrain.ai</p>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4 print:hidden">
          <button
            onClick={onRestart}
            className="bg-slate-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-slate-700 transition-colors"
          >
            Restart Course
          </button>
          <button
            onClick={handlePrint}
            className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-sky-700 transition-colors"
          >
            Print Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionView;
