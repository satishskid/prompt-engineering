import { useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

interface UserProgress {
  completedQuizzes: number[];
  finalScore: { score: number; total: number } | null;
  activeSectionId: number | null;
}

export const useUserProgress = () => {
  const { user } = useUser();
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set());
  const [finalScore, setFinalScore] = useState<{ score: number; total: number } | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);

  // Load progress from user metadata when user is available
  useEffect(() => {
    if (user) {
      const progress = user.publicMetadata?.progress as UserProgress | undefined;
      if (progress) {
        setCompletedQuizzes(new Set(progress.completedQuizzes || []));
        setFinalScore(progress.finalScore || null);
        setActiveSectionId(progress.activeSectionId || null);
      }
    }
  }, [user]);

  // Save progress to user metadata (simplified for demo)
  const saveProgress = async (updates: Partial<UserProgress>) => {
    if (!user) return;

    // For now, just log the progress. In a real app, you'd save to your backend
    console.log('Saving user progress:', updates);
    
    // You could implement this with your own backend API:
    // await fetch('/api/user/progress', { 
    //   method: 'POST', 
    //   body: JSON.stringify(updates) 
    // });
  };

  const updateCompletedQuizzes = (quizId: number) => {
    const updated = new Set(completedQuizzes).add(quizId);
    setCompletedQuizzes(updated);
    saveProgress({ completedQuizzes: Array.from(updated) });
  };

  const updateFinalScore = (score: { score: number; total: number }) => {
    setFinalScore(score);
    saveProgress({ finalScore: score });
  };

  const updateActiveSectionId = (sectionId: number | null) => {
    setActiveSectionId(sectionId);
    saveProgress({ activeSectionId: sectionId });
  };

  const resetProgress = () => {
    setCompletedQuizzes(new Set());
    setFinalScore(null);
    setActiveSectionId(null);
    saveProgress({ completedQuizzes: [], finalScore: null, activeSectionId: null });
  };

  return {
    completedQuizzes,
    finalScore,
    activeSectionId,
    updateCompletedQuizzes,
    updateFinalScore,
    updateActiveSectionId,
    resetProgress,
  };
};
