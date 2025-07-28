
import React from 'react';
import { SectionData } from '../types';
import { CheckCircleIcon, DocumentTextIcon, BeakerIcon, TrophyIcon } from './icons';

interface SidebarProps {
  sections: SectionData[];
  activeSectionId: number | null;
  onSelectSection: (id: number | null) => void;
  completedQuizzes: Set<number>;
  onStartFinalAssessment: () => void;
  isFinalAssessmentActive: boolean;
  isCourseCompleted: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  completedQuizzes,
  onStartFinalAssessment,
  isFinalAssessmentActive,
  isCourseCompleted,
}) => {
  const allQuizzesCompleted = sections.filter(s => s.quiz).every(s => completedQuizzes.has(s.quiz!.id));

  const navItemClasses = (isActive: boolean) =>
    `flex items-center w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-sky-100 text-sky-700'
        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
    }`;

  return (
    <aside className="w-64 bg-slate-100 p-4 flex flex-col h-full border-r border-slate-200">
      <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">Course Content</h2>
      <nav className="flex-grow space-y-1">
        <button onClick={() => onSelectSection(0)} className={navItemClasses(activeSectionId === 0)}>
          <DocumentTextIcon className="h-5 w-5 mr-3 flex-shrink-0" />
          <span className="flex-grow">Introduction</span>
        </button>
        {sections.map((section) => (
          <div key={section.id}>
            <button onClick={() => onSelectSection(section.id)} className={navItemClasses(activeSectionId === section.id && !isFinalAssessmentActive)}>
              <span className="bg-sky-600 text-white rounded-md w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">{section.id}</span>
              <span className="flex-grow">{section.shortTitle}</span>
              {section.quiz && completedQuizzes.has(section.quiz.id) && (
                 <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
              )}
            </button>
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200">
         <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">Final Step</h2>
         <button 
            onClick={onStartFinalAssessment} 
            disabled={!allQuizzesCompleted && !isCourseCompleted}
            className={`${navItemClasses(isFinalAssessmentActive || isCourseCompleted)} ${(!allQuizzesCompleted && !isCourseCompleted) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <TrophyIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${isCourseCompleted ? 'text-amber-500' : ''}`} />
            <span className="flex-grow">Final Assessment</span>
            {isCourseCompleted && <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />}
        </button>
        {(!allQuizzesCompleted && !isCourseCompleted) && (
            <p className="text-xs text-slate-500 mt-2 px-2">Complete all section quizzes to unlock.</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
