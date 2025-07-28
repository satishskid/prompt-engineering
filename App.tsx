import React, { useState, useMemo } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import ContentView from './components/ContentView';
import QuizView from './components/QuizView';
import CompletionView from './components/CompletionView';
import { handbookData, finalAssessment } from './data/handbookData';
import { SectionData } from './types';
import { useUserProgress } from './hooks/useUserProgress';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'content' | 'quiz' | 'final' | 'completed'>('home');
  const [activeQuizId, setActiveQuizId] = useState<number | null>(null);
  
  const {
    completedQuizzes,
    finalScore,
    activeSectionId,
    updateCompletedQuizzes,
    updateFinalScore,
    updateActiveSectionId,
    resetProgress,
  } = useUserProgress();

  const handleSelectSection = (id: number | null) => {
    if (id === null) {
      setActiveView('home');
      updateActiveSectionId(null);
    } else {
      setActiveView('content');
      updateActiveSectionId(id);
    }
    setActiveQuizId(null);
  };

  const handleStartCourse = () => {
    setActiveView('content');
    updateActiveSectionId(0);
  }

  const handleStartQuiz = (quizId: number) => {
    setActiveQuizId(quizId);
    setActiveView('quiz');
  };

  const handleStartFinalAssessment = () => {
    setActiveView('final');
    updateActiveSectionId(null);
    setActiveQuizId(null);
  };

  const handleQuizComplete = (quizId: number) => (score: number, total: number) => {
    console.log(`Quiz ${quizId} completed with score ${score}/${total}`);
    updateCompletedQuizzes(quizId);
    setActiveView('content');
    setActiveQuizId(null);
  };
  
  const handleFinalAssessmentComplete = (score: number, total: number) => {
    updateFinalScore({ score, total });
    setActiveView('completed');
  };

  const handleRestart = () => {
    setActiveView('home');
    updateActiveSectionId(null);
    setActiveQuizId(null);
    resetProgress();
  };

  const activeSection = useMemo(
    () => handbookData.find(s => s.id === activeSectionId),
    [activeSectionId]
  );

  const activeQuiz = useMemo(() => {
    if (activeView === 'quiz') {
      return handbookData.find(s => s.quiz?.id === activeQuizId)?.quiz;
    }
    return null;
  }, [activeView, activeQuizId]);
  
  const allSections : SectionData[] = handbookData.filter(s => s.id > 0);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onStartCourse={handleStartCourse} />;
      case 'quiz':
        if (activeQuiz) {
          return <QuizView quiz={activeQuiz} onComplete={handleQuizComplete(activeQuiz.id)} />;
        }
        return <HomeView onStartCourse={handleStartCourse} />; // Fallback
      case 'final':
        return <QuizView quiz={finalAssessment} onComplete={handleFinalAssessmentComplete} isFinalAssessment />;
      case 'completed':
        if (finalScore) {
            return <CompletionView finalScore={finalScore.score} totalQuestions={finalScore.total} onRestart={handleRestart} />;
        }
        return <HomeView onStartCourse={handleStartCourse} />; // Fallback
      case 'content':
      default:
        if (activeSection) {
          return <ContentView section={activeSection} onStartQuiz={handleStartQuiz} />;
        }
        return <HomeView onStartCourse={handleStartCourse} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SignedIn>
          <Sidebar 
              sections={allSections}
              activeSectionId={activeSectionId}
              onSelectSection={handleSelectSection}
              completedQuizzes={completedQuizzes}
              onStartFinalAssessment={handleStartFinalAssessment}
              isFinalAssessmentActive={activeView === 'final'}
              isCourseCompleted={activeView === 'completed'}
          />
          <main className="flex-1 bg-white overflow-hidden">
            {renderContent()}
          </main>
        </SignedIn>
        <SignedOut>
          <main className="flex-1 bg-white overflow-hidden">
            <div className="flex items-center justify-center h-full text-center p-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Welcome to the Prompt Engineering Handbook
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Sign in to access the complete interactive course and track your progress through the professional prompt engineering curriculum.
                </p>
                <p className="text-sm text-slate-500">
                  Create your free account to get started with learning AI prompt engineering.
                </p>
              </div>
            </div>
          </main>
        </SignedOut>
      </div>
    </div>
  );
};

export default App;
