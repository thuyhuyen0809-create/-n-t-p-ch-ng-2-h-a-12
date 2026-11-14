import React, { useState, useEffect } from 'react';
import { Header, TabType } from './components/Header';
import { TheoryView } from './components/TheoryView';
import { QuizView } from './components/QuizView';
import { ChatbotView } from './components/ChatbotView';
import { ReactionsLookupView } from './components/ReactionsLookupView';
import { BookmarksView } from './components/BookmarksView';
import { RoadmapView } from './components/RoadmapView';
import { QUESTIONS } from './data/lessonsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('theory');

  // Bookmark IDs state with localStorage persistence
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('chem12_kntt_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Completed question IDs with localStorage persistence
  const [completedQuestions, setCompletedQuestions] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('chem12_kntt_completed');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // State to pass to QuizView when navigating from Theory or Roadmap
  const [quizLessonFilter, setQuizLessonFilter] = useState<string>('all');

  // AI Prompt passed to ChatbotView
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiLessonContext, setAiLessonContext] = useState<string>('');

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('chem12_kntt_bookmarks', JSON.stringify(savedQuestionIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedQuestionIds]);

  useEffect(() => {
    try {
      localStorage.setItem('chem12_kntt_completed', JSON.stringify(completedQuestions));
    } catch (e) {
      console.error(e);
    }
  }, [completedQuestions]);

  const handleToggleBookmark = (id: string) => {
    setSavedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveBookmark = (id: string) => {
    setSavedQuestionIds((prev) => prev.filter((item) => item !== id));
  };

  const handleRecordAnswer = (questionId: string, _isCorrect: boolean) => {
    setCompletedQuestions((prev) => (prev.includes(questionId) ? prev : [...prev, questionId]));
  };

  const handleStartQuizFromTheory = (lessonId: string) => {
    setQuizLessonFilter(lessonId);
    setActiveTab('quiz');
  };

  const handleStartCustomQuizFromRoadmap = (selectedLessonIds: string[], _questionType?: string) => {
    // If only one lesson is selected, filter by that lesson; else show all or handle filter
    if (selectedLessonIds.length === 1) {
      setQuizLessonFilter(selectedLessonIds[0]);
    } else {
      setQuizLessonFilter('all');
    }
    setActiveTab('quiz');
  };

  const handleAskAI = (context: string) => {
    setAiPrompt(context);
    setActiveTab('ai-tutor');
  };

  // Get full Question objects for bookmarks
  const savedQuestions = QUESTIONS.filter((q) => savedQuestionIds.includes(q.id));

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedQuestionIds.length}
        completedQuestionsCount={completedQuestions.length}
        totalQuestions={QUESTIONS.length}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'theory' && (
          <TheoryView
            onStartQuiz={handleStartQuizFromTheory}
            onAskAI={(ctx) => {
              setAiLessonContext('Lý thuyết Chương 3');
              handleAskAI(ctx);
            }}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            onStartCustomQuiz={handleStartCustomQuizFromRoadmap}
            onOpenTheory={(lessonId) => {
              setActiveTab('theory');
            }}
            onAskAI={(ctx) => {
              setAiLessonContext('Lộ trình ôn tập cá nhân');
              handleAskAI(ctx);
            }}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizView
            questions={QUESTIONS}
            initialLessonFilter={quizLessonFilter}
            savedQuestionIds={savedQuestionIds}
            onToggleBookmark={handleToggleBookmark}
            onAskAI={(ctx) => {
              setAiLessonContext('Giải bài tập trắc nghiệm');
              handleAskAI(ctx);
            }}
            onRecordAnswer={handleRecordAnswer}
          />
        )}

        {activeTab === 'ai-tutor' && (
          <ChatbotView initialPrompt={aiPrompt} lessonContext={aiLessonContext} />
        )}

        {activeTab === 'lookup' && (
          <ReactionsLookupView
            onAskAI={(ctx) => {
              setAiLessonContext('Tra cứu hoá chất & amino acid');
              handleAskAI(ctx);
            }}
          />
        )}

        {activeTab === 'bookmarks' && (
          <BookmarksView
            savedQuestions={savedQuestions}
            onRemoveBookmark={handleRemoveBookmark}
            onAskAI={(ctx) => {
              setAiLessonContext('Ôn lại câu hỏi đã lưu');
              handleAskAI(ctx);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-teal-950 text-teal-300/80 border-t border-teal-800/60 py-6 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-white text-sm">HÓA HỌC 12 • KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
            <p className="text-teal-400/80 mt-0.5">
              Chương 3: Hợp chất chứa nitrogen (Bài 8: Amine • Bài 9: Amino acid & peptide • Bài 10: Protein & enzyme • Bài 11: Ôn tập chương 3)
            </p>
          </div>
          <div className="text-teal-400/60">
            Ngân hàng {QUESTIONS.length} câu hỏi đa dạng kèm lời giải SGK • Trợ lí AI Gemini Flash
          </div>
        </div>
      </footer>
    </div>
  );
}
