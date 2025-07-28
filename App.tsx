
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import ContentView from './components/ContentView';
import QuizView from './components/QuizView';
import CompletionView from './components/CompletionView';
import { handbookData, finalAssessment } from './data/handbookData';
import { SectionData } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'content' | 'quiz' | 'final' | 'completed'>('home');
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [activeQuizId, setActiveQuizId] = useState<number | null>(null);
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set());
  const [finalScore, setFinalScore] = useState<{ score: number; total: number } | null>(null);

  const handleSelectSection = (id: number | null) => {
    if (id === null) {
      setActiveView('home');
      setActiveSectionId(null);
    } else {
      setActiveView('content');
      setActiveSectionId(id);
    }
    setActiveQuizId(null);
  };

  const handleStartCourse = () => {
    setActiveView('content');
    setActiveSectionId(0);
  }

  const handleStartQuiz = (quizId: number) => {
    setActiveQuizId(quizId);
    setActiveView('quiz');
  };

  const handleStartFinalAssessment = () => {
    setActiveView('final');
    setActiveSectionId(null);
    setActiveQuizId(null);
  };

  const handleQuizComplete = (quizId: number) => (score: number, total: number) => {
    console.log(`Quiz ${quizId} completed with score ${score}/${total}`);
    setCompletedQuizzes(prev => new Set(prev).add(quizId));
    setActiveView('content');
    setActiveQuizId(null);
  };
  
  const handleFinalAssessmentComplete = (score: number, total: number) => {
    setFinalScore({ score, total });
    setActiveView('completed');
  };

  const handleRestart = () => {
    setActiveView('home');
    setActiveSectionId(null);
    setActiveQuizId(null);
    setCompletedQuizzes(new Set());
    setFinalScore(null);
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
      </div>
    </div>
  );
};

export default App;
