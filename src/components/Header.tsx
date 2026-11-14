import React from 'react';
import { BookOpen, HelpCircle, Sparkles, Bookmark, TestTube, Award, Flame, Compass } from 'lucide-react';

export type TabType = 'theory' | 'roadmap' | 'quiz' | 'ai-tutor' | 'lookup' | 'bookmarks';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  savedCount: number;
  completedQuestionsCount: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  completedQuestionsCount,
  totalQuestions,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-teal-900/95 backdrop-blur-md text-white border-b border-teal-700/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Subject Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('theory')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-md shadow-teal-500/20 text-teal-950 font-black text-xl">
              N
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  HÓA HỌC 12 <span className="text-teal-300">KNTT</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold uppercase bg-teal-800 text-teal-200 rounded border border-teal-700">
                  Chương 3
                </span>
              </div>
              <p className="text-xs text-teal-200 hidden sm:block">
                Hợp chất chứa Nitrogen • Bài 8 đến Bài 11 (Amine, Amino acid, Peptide, Protein)
              </p>
            </div>
          </div>

          {/* User study stats / quick badges */}
          <div className="hidden xl:flex items-center space-x-4 text-xs font-medium">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-teal-800/80 border border-teal-700/50 text-teal-100">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Tiến độ: <strong className="text-white">{completedQuestionsCount}/{totalQuestions}</strong> câu</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-teal-800/80 border border-teal-700/50 text-teal-100">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Chuẩn đề 2025</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('theory')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'theory'
                  ? 'bg-teal-700 text-white shadow-inner'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-teal-300" />
              <span>Lý thuyết</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-teal-700 text-white shadow-inner'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>Lộ trình cá nhân</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-teal-700 text-white shadow-inner'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-teal-300" />
              <span>Luyện tập & Thi</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-tutor')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                activeTab === 'ai-tutor'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>AI Gia Sư</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute top-2 right-1.5"></span>
            </button>

            <button
              onClick={() => setActiveTab('lookup')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'lookup'
                  ? 'bg-teal-700 text-white shadow-inner'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <TestTube className="w-4 h-4 text-teal-300" />
              <span>Tra cứu & TN</span>
            </button>

            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                activeTab === 'bookmarks'
                  ? 'bg-teal-700 text-white shadow-inner'
                  : 'text-teal-100 hover:bg-teal-800 hover:text-white'
              }`}
            >
              <Bookmark className="w-4 h-4 text-amber-300" />
              <span>Đã lưu</span>
              {savedCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-amber-400 text-amber-950 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 space-x-2 border-t border-teal-800/80 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setActiveTab('theory')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'theory' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lý thuyết</span>
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'roadmap' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-300" />
            <span>Lộ trình</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'quiz' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Luyện tập</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-tutor')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'ai-tutor' ? 'bg-emerald-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Gia sư</span>
          </button>
          <button
            onClick={() => setActiveTab('lookup')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'lookup' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <TestTube className="w-3.5 h-3.5" />
            <span>Tra cứu</span>
          </button>
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'bookmarks' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-800/60 text-teal-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-300" />
            <span>Đã lưu ({savedCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
