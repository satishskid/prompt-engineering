
import React, { useState } from 'react';
import { Quiz } from '../types';
import { CheckCircleIcon, XCircleIcon, BeakerIcon, TrophyIcon } from './icons';

interface QuizViewProps {
  quiz: Quiz;
  onComplete: (score: number, total: number) => void;
  isFinalAssessment?: boolean;
}

const QuizView: React.FC<QuizViewProps> = ({ quiz, onComplete, isFinalAssessment = false }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    if (showResults) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = selectedAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswerIndex).length;
    // Delay onComplete call to allow user to see results
    setTimeout(() => onComplete(score, quiz.questions.length), 3000);
  };

  if (showResults) {
    const score = selectedAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswerIndex).length;
    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="p-8 lg:p-12 overflow-y-auto h-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Quiz Results</h2>
          <p className="text-lg text-slate-600 text-center mb-6">{quiz.title}</p>
          <div className={`p-6 rounded-lg text-center mb-8 ${percentage >= 70 ? 'bg-green-100 border-green-200' : 'bg-red-100 border-red-200'}`}>
            <h3 className="text-2xl font-bold ">{percentage >= 70 ? 'Congratulations!' : 'Needs Improvement'}</h3>
            <p className="text-5xl font-extrabold my-3">{percentage}%</p>
            <p>You answered {score} out of {total} questions correctly.</p>
          </div>
          <h3 className="text-xl font-bold mb-4">Review Your Answers:</h3>
          <div className="space-y-6">
            {quiz.questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === q.correctAnswerIndex;
              return (
                <div key={index} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                  <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
                  <div className="space-y-1 text-sm">
                    {q.options.map((opt, optIndex) => (
                      <div key={optIndex} className={`flex items-start p-2 rounded ${userAnswer === optIndex || q.correctAnswerIndex === optIndex ? 'font-semibold' : ''}`}>
                        {userAnswer === optIndex && (isCorrect ? <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /> : <XCircleIcon className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />)}
                        {userAnswer !== optIndex && q.correctAnswerIndex === optIndex && <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />}
                        <span className={`${q.correctAnswerIndex === optIndex ? 'text-green-800' : ''} ${userAnswer === optIndex && !isCorrect ? 'text-red-800' : ''}`}>{opt}</span>
                      </div>
                    ))}
                  </div>
                  {!isCorrect && <p className="mt-2 text-sm text-slate-600 p-2 bg-yellow-50 rounded"><strong>Explanation:</strong> {q.explanation}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const Icon = isFinalAssessment ? TrophyIcon : BeakerIcon;

  return (
    <div className="p-4 sm:p-8 lg:p-12 flex flex-col h-full">
       <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className={`h-8 w-8 ${isFinalAssessment ? 'text-amber-500' : 'text-sky-600'}`} />
            <h2 className="text-3xl font-bold text-slate-800">{quiz.title}</h2>
          </div>
          <p className="text-slate-500">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
          <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
            <div className="bg-sky-600 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-grow">
            <p className="text-xl font-semibold text-slate-700 mb-6">{currentQuestion.question}</p>
            <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
                <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 border rounded-lg transition-all duration-200 flex items-center space-x-4
                    ${selectedAnswers[currentQuestionIndex] === index
                    ? 'bg-sky-100 border-sky-500 ring-2 ring-sky-300'
                    : 'bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400'}
                `}
                >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${selectedAnswers[currentQuestionIndex] === index ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow">{option}</span>
                </button>
            ))}
            </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center">
            <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="bg-white border border-slate-300 text-slate-700 font-semibold py-2 px-4 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            {currentQuestionIndex === quiz.questions.length - 1 ? (
            <button
                onClick={handleSubmit}
                disabled={selectedAnswers[currentQuestionIndex] === null}
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-md shadow-sm hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Submit
            </button>
            ) : (
            <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === null}
                className="bg-sky-600 text-white font-bold py-2 px-6 rounded-md shadow-sm hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;
