import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import {
  HelpCircle,
  Check,
  X,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  RotateCcw,
  Clock,
  Award,
  ChevronRight,
  Filter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizViewProps {
  questions: Question[];
  initialLessonFilter?: string;
  savedQuestionIds: string[];
  onToggleBookmark: (id: string) => void;
  onAskAI: (context: string) => void;
  onRecordAnswer: (questionId: string, isCorrect: boolean) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  initialLessonFilter,
  savedQuestionIds,
  onToggleBookmark,
  onAskAI,
  onRecordAnswer,
}) => {
  // Filters
  const [selectedLesson, setSelectedLesson] = useState<string>(initialLessonFilter || 'all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Mode: 'practice' or 'exam'
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');

  // State for Practice mode
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  // State for Exam mode
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examTimeLeft, setExamTimeLeft] = useState<number>(30 * 60); // 30 mins
  const [examAnswers, setExamAnswers] = useState<Record<string, any>>({});
  const [examResult, setExamResult] = useState<{
    scorePart1: number;
    scorePart2: number;
    scorePart3: number;
    totalScore: number;
    correctCount: number;
    total: number;
  } | null>(null);

  // Update lesson filter if prop changes
  useEffect(() => {
    if (initialLessonFilter) {
      setSelectedLesson(initialLessonFilter);
    }
  }, [initialLessonFilter]);

  // Exam timer
  useEffect(() => {
    let timer: any;
    if (isExamStarted && !isExamSubmitted && examTimeLeft > 0) {
      timer = setInterval(() => {
        setExamTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamStarted, isExamSubmitted, examTimeLeft]);

  // Filter questions for practice mode
  const filteredQuestions = questions.filter((q) => {
    const matchLesson = selectedLesson === 'all' || q.lessonId === selectedLesson;
    const matchType = selectedType === 'all' || q.type === selectedType;
    return matchLesson && matchType;
  });

  // Handle Practice Single Choice
  const handleSelectOption = (questionId: string, optIdx: number) => {
    if (checkedAnswers[questionId]) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optIdx }));
  };

  // Handle Practice True/False
  const handleSelectTrueFalse = (questionId: string, subId: string, isTrue: boolean) => {
    if (checkedAnswers[questionId]) return;
    setUserAnswers((prev) => {
      const current = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: { ...current, [subId]: isTrue },
      };
    });
  };

  // Handle Practice Short Answer
  const handleInputShortAnswer = (questionId: string, value: string) => {
    if (checkedAnswers[questionId]) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Check Answer in Practice Mode
  const handleCheckPractice = (question: Question) => {
    setCheckedAnswers((prev) => ({ ...prev, [question.id]: true }));

    let isCorrect = false;
    const ans = userAnswers[question.id];

    if (question.type === 'single_choice') {
      isCorrect = ans === question.correctOption;
    } else if (question.type === 'true_false' && question.subItems) {
      let correctSubs = 0;
      question.subItems.forEach((sub) => {
        if (ans && ans[sub.id] === sub.isTrue) {
          correctSubs++;
        }
      });
      isCorrect = correctSubs === question.subItems.length;
    } else if (question.type === 'short_answer' && question.correctAnswers) {
      const rawAns = (ans || '').toString().trim().toLowerCase().replace(/\s+/g, '');
      isCorrect = question.correctAnswers.some((ca) => {
        const cleanCA = ca.toLowerCase().replace(/\s+/g, '');
        return rawAns === cleanCA || rawAns.replace(',', '.') === cleanCA.replace(',', '.');
      });
    }

    onRecordAnswer(question.id, isCorrect);
  };

  // Reset Practice Question
  const handleResetPractice = (questionId: string) => {
    setCheckedAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  // Start Exam
  const handleStartExam = (count: number = 25) => {
    // Pick balanced set of questions across lessons and types
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, count);
    setExamQuestions(shuffled);
    setExamAnswers({});
    setIsExamStarted(true);
    setIsExamSubmitted(false);
    setExamResult(null);
    setExamTimeLeft(Math.min(count * 75, 45 * 60)); // 75s per question
  };

  // Submit Exam
  const handleSubmitExam = () => {
    setIsExamSubmitted(true);

    let scorePart1 = 0;
    let scorePart2 = 0;
    let scorePart3 = 0;
    let correctCount = 0;

    examQuestions.forEach((q) => {
      const userAns = examAnswers[q.id];

      if (q.type === 'single_choice') {
        if (userAns === q.correctOption) {
          scorePart1 += 0.25;
          correctCount++;
        }
      } else if (q.type === 'true_false' && q.subItems) {
        let matchCount = 0;
        q.subItems.forEach((sub) => {
          if (userAns && userAns[sub.id] === sub.isTrue) {
            matchCount++;
          }
        });
        if (matchCount === 1) scorePart2 += 0.1;
        else if (matchCount === 2) scorePart2 += 0.25;
        else if (matchCount === 3) scorePart2 += 0.5;
        else if (matchCount === 4) {
          scorePart2 += 1.0;
          correctCount++;
        }
      } else if (q.type === 'short_answer' && q.correctAnswers) {
        const rawAns = (userAns || '').toString().trim().toLowerCase().replace(/\s+/g, '');
        const isMatch = q.correctAnswers.some((ca) => {
          const cleanCA = ca.toLowerCase().replace(/\s+/g, '');
          return rawAns === cleanCA || rawAns.replace(',', '.') === cleanCA.replace(',', '.');
        });
        if (isMatch) {
          scorePart3 += 0.25;
          correctCount++;
        }
      }
    });

    const totalRaw = scorePart1 + scorePart2 + scorePart3;
    // Scale total score to 10 scale
    // Let max achievable score be calculated:
    let maxScore = 0;
    examQuestions.forEach((q) => {
      if (q.type === 'single_choice') maxScore += 0.25;
      else if (q.type === 'true_false') maxScore += 1.0;
      else if (q.type === 'short_answer') maxScore += 0.25;
    });

    const scaledScore = maxScore > 0 ? (totalRaw / maxScore) * 10 : 0;
    const finalScore = Math.round(scaledScore * 10) / 10;

    setExamResult({
      scorePart1: Math.round(scorePart1 * 100) / 100,
      scorePart2: Math.round(scorePart2 * 100) / 100,
      scorePart3: Math.round(scorePart3 * 100) / 100,
      totalScore: finalScore,
      correctCount,
      total: examQuestions.length,
    });

    if (finalScore >= 8.0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  // Format Time (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16">
      {/* Top Controls: Mode Switcher & Stats */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Mode Toggle */}
        <div className="flex items-center space-x-2 bg-teal-50 p-1.5 rounded-xl border border-teal-100 w-full md:w-auto">
          <button
            onClick={() => {
              setMode('practice');
              setIsExamStarted(false);
            }}
            className={`flex-1 md:flex-initial px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              mode === 'practice'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'text-teal-900 hover:bg-teal-100/60'
            }`}
          >
            Chế độ Luyện tập (Xem ngay giải thích)
          </button>
          <button
            onClick={() => setMode('exam')}
            className={`flex-1 md:flex-initial px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              mode === 'exam'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'text-teal-900 hover:bg-teal-100/60'
            }`}
          >
            Chế độ Thi thử bấm giờ
          </button>
        </div>

        {/* Summary Info */}
        <div className="text-xs sm:text-sm text-slate-600 flex items-center space-x-3">
          <span className="font-semibold text-teal-900">
            Tổng ngân hàng: <strong className="text-teal-700">{questions.length}</strong> câu hỏi
          </span>
          <span className="text-slate-300">•</span>
          <span>Bám sát SGK Kết nối tri thức 12</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PRACTICE MODE */}
      {/* ============================================================== */}
      {mode === 'practice' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-teal-100 space-y-4">
            <div className="flex items-center space-x-2 text-sm font-bold text-teal-900">
              <Filter className="w-4 h-4 text-teal-600" />
              <span>Lọc câu hỏi ôn luyện</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Lesson Filter */}
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Theo bài học:</label>
                <select
                  value={selectedLesson}
                  onChange={(e) => setSelectedLesson(e.target.value)}
                  className="w-full bg-slate-50 border border-teal-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="all">Tất cả các bài (Bài 8 - Bài 11)</option>
                  <option value="bai-8">Bài 8: Amine (16 câu)</option>
                  <option value="bai-9">Bài 9: Amino acid và peptide (16 câu)</option>
                  <option value="bai-10">Bài 10: Protein và enzyme (16 câu)</option>
                  <option value="bai-11">Bài 11: Ôn tập chương 3 (18 câu)</option>
                </select>
              </div>

              {/* Question Type Filter */}
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Theo dạng câu hỏi:</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 border border-teal-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="all">Tất cả các dạng câu hỏi</option>
                  <option value="single_choice">Dạng 1: Trắc nghiệm 4 lựa chọn (A, B, C, D)</option>
                  <option value="true_false">Dạng 2: Trắc nghiệm Đúng / Sai (4 ý a, b, c, d)</option>
                  <option value="short_answer">Dạng 3: Trắc nghiệm Trả lời ngắn</option>
                </select>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
              <span>Hiển thị <strong>{filteredQuestions.length}</strong> câu hỏi phù hợp</span>
              <span className="text-teal-700 font-medium">Bấm "Kiểm tra đáp án" để xem giải thích SGK</span>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => {
              const isChecked = !!checkedAnswers[q.id];
              const isSaved = savedQuestionIds.includes(q.id);
              const userAns = userAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-teal-100/90 transition-all hover:border-teal-300"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                        Bài {q.lessonNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        {q.type === 'single_choice' && 'Trắc nghiệm 4 phương án'}
                        {q.type === 'true_false' && 'Trắc nghiệm Đúng / Sai'}
                        {q.type === 'short_answer' && 'Trả lời ngắn'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {q.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => onToggleBookmark(q.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isSaved
                            ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                            : 'text-slate-400 hover:text-amber-500 hover:bg-slate-50'
                        }`}
                        title={isSaved ? 'Đã lưu' : 'Lưu câu hỏi này'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() =>
                          onAskAI(
                            `Thầy/Cô ơi, hãy giải thích chi tiết câu hỏi này giúp em nhé: "${q.title} - ${q.context || ''}". Cho em biết bản chất hoá học và phương pháp giải nhanh theo SGK Kết nối tri thức.`
                          )
                        }
                        className="p-2 rounded-lg text-teal-600 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                        title="Hỏi AI về câu này"
                      >
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Context */}
                  <div className="space-y-1.5 mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      <span className="text-teal-700 mr-2">Câu {idx + 1}:</span>
                      {q.title.replace(/^Câu \d+:\s*/, '')}
                    </h3>
                    {q.context && (
                      <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
                        {q.context}
                      </p>
                    )}
                  </div>

                  {/* ========================================= */}
                  {/* Render Type 1: Single Choice Options */}
                  {/* ========================================= */}
                  {q.type === 'single_choice' && q.options && (
                    <div className="space-y-2 mb-4">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAns === optIdx;
                        const isCorrectOpt = q.correctOption === optIdx;

                        let optionStyle = 'border-slate-200 bg-white hover:bg-teal-50/50 text-slate-800';

                        if (isChecked) {
                          if (isCorrectOpt) {
                            optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (isSelected && !isCorrectOpt) {
                            optionStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                          } else {
                            optionStyle = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-75';
                          }
                        } else if (isSelected) {
                          optionStyle = 'border-teal-600 bg-teal-50/80 text-teal-950 font-semibold ring-1 ring-teal-600';
                        }

                        const optLetter = String.fromCharCode(65 + optIdx);

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${optionStyle}`}
                          >
                            <div className="flex items-center space-x-3">
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                                  isSelected
                                    ? 'bg-teal-700 text-white'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {optLetter}
                              </span>
                              <span className="text-sm">{opt}</span>
                            </div>

                            {isChecked && (
                              <div>
                                {isCorrectOpt && <Check className="w-5 h-5 text-emerald-600" />}
                                {isSelected && !isCorrectOpt && <X className="w-5 h-5 text-rose-600" />}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ========================================= */}
                  {/* Render Type 2: True / False Sub-items */}
                  {/* ========================================= */}
                  {q.type === 'true_false' && q.subItems && (
                    <div className="space-y-2.5 mb-4">
                      {q.subItems.map((sub) => {
                        const currentChoice = userAns?.[sub.id];
                        const isSubCorrect = currentChoice === sub.isTrue;

                        return (
                          <div
                            key={sub.id}
                            className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                              isChecked
                                ? isSubCorrect
                                  ? 'border-emerald-200 bg-emerald-50/40'
                                  : 'border-rose-200 bg-rose-50/40'
                                : 'border-slate-200 bg-slate-50/50'
                            }`}
                          >
                            <div className="flex items-start space-x-2 text-sm text-slate-800 flex-1">
                              <span className="font-bold text-teal-800 uppercase mt-0.5">
                                {sub.id})
                              </span>
                              <span className="leading-snug">{sub.statement}</span>
                            </div>

                            {/* True / False Buttons */}
                            <div className="flex items-center space-x-2 self-end sm:self-center">
                              <button
                                disabled={isChecked}
                                onClick={() => handleSelectTrueFalse(q.id, sub.id, true)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                                  currentChoice === true
                                    ? isChecked
                                      ? sub.isTrue
                                        ? 'bg-emerald-600 text-white border-emerald-600'
                                        : 'bg-rose-600 text-white border-rose-600'
                                      : 'bg-teal-700 text-white border-teal-700'
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                Đúng
                              </button>
                              <button
                                disabled={isChecked}
                                onClick={() => handleSelectTrueFalse(q.id, sub.id, false)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                                  currentChoice === false
                                    ? isChecked
                                      ? !sub.isTrue
                                        ? 'bg-emerald-600 text-white border-emerald-600'
                                        : 'bg-rose-600 text-white border-rose-600'
                                      : 'bg-teal-700 text-white border-teal-700'
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                Sai
                              </button>

                              {isChecked && (
                                <span className="ml-1">
                                  {isSubCorrect ? (
                                    <Check className="w-4 h-4 text-emerald-600" />
                                  ) : (
                                    <X className="w-4 h-4 text-rose-600" />
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ========================================= */}
                  {/* Render Type 3: Short Answer Input */}
                  {/* ========================================= */}
                  {q.type === 'short_answer' && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 max-w-md">
                        <input
                          type="text"
                          disabled={isChecked}
                          placeholder="Nhập câu trả lời (số hoặc từ)..."
                          value={userAns || ''}
                          onChange={(e) => handleInputShortAnswer(q.id, e.target.value)}
                          className={`flex-1 px-3.5 py-2 rounded-xl text-sm border font-medium focus:outline-none focus:ring-2 ${
                            isChecked
                              ? q.correctAnswers?.some((ca) =>
                                  ca.toLowerCase().replace(/\s+/g, '') ===
                                  (userAns || '').toString().toLowerCase().replace(/\s+/g, '')
                                )
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                                : 'border-rose-400 bg-rose-50 text-rose-950'
                              : 'border-teal-200 bg-slate-50 focus:ring-teal-500'
                          }`}
                        />
                        {q.unit && (
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-2 rounded-lg">
                            {q.unit}
                          </span>
                        )}
                      </div>
                      {isChecked && (
                        <div className="mt-2 text-xs font-semibold text-emerald-800">
                          Đáp án đúng:{' '}
                          <span className="underline font-bold">
                            {q.correctAnswers?.join(' hoặc ')} {q.unit}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Bar (Check / Reset / AI help) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center space-x-2">
                      {!isChecked ? (
                        <button
                          onClick={() => handleCheckPractice(q)}
                          className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                        >
                          Kiểm tra đáp án
                        </button>
                      ) : (
                        <button
                          onClick={() => handleResetPractice(q.id)}
                          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center space-x-1 transition-all"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Làm lại câu này</span>
                        </button>
                      )}

                      <button
                        onClick={() =>
                          onAskAI(
                            `Em đang xem câu hỏi: "${q.title}".\nNội dung: ${q.context || ''}\nLời giải SGK: ${q.explanation}\nNhờ thầy/cô giải thích cặn kẽ hơn bản chất hoá học và phương pháp giải nhanh dạng bài này!`
                          )
                        }
                        className="px-3 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold text-xs flex items-center space-x-1.5 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                        <span>Hỏi Gia sư AI</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 italic">
                      {q.sgkReference}
                    </div>
                  </div>

                  {/* Explanation Drawer (Shows when checked) */}
                  {isChecked && (
                    <div className="mt-4 p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-slate-800 space-y-2 animate-fadeIn">
                      <div className="flex items-center space-x-2 text-teal-900 font-bold text-xs uppercase tracking-wider">
                        <CheckCircle className="w-4 h-4 text-teal-700" />
                        <span>Lời giải chi tiết từ SGK Kết nối tri thức</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-800 whitespace-pre-line font-normal">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* EXAM / TIMED TEST MODE */}
      {/* ============================================================== */}
      {mode === 'exam' && (
        <div className="space-y-6">
          {!isExamStarted ? (
            /* Exam Intro Card */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-teal-100 text-center max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto shadow-inner">
                <Clock className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  Đề Thi Thử Hóa 12 - Chương 3 (Bài 8 - 11)
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Cấu trúc chuẩn theo đề thi tốt nghiệp THPT từ năm 2025: Đầy đủ 3 phần (Trắc nghiệm nhiều lựa chọn, Đúng/Sai, Trả lời ngắn).
                </p>
              </div>

              {/* Exam specs */}
              <div className="grid grid-cols-3 gap-3 text-left bg-teal-50/60 p-4 rounded-2xl border border-teal-100">
                <div className="text-center p-2">
                  <div className="text-xs text-slate-500">Phần 1</div>
                  <div className="text-sm font-bold text-teal-900">Nhiều lựa chọn</div>
                  <div className="text-[11px] text-teal-700 font-medium">0.25đ / câu</div>
                </div>
                <div className="text-center p-2 border-x border-teal-200">
                  <div className="text-xs text-slate-500">Phần 2</div>
                  <div className="text-sm font-bold text-teal-900">Đúng / Sai</div>
                  <div className="text-[11px] text-teal-700 font-medium">Tối đa 1đ / câu</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xs text-slate-500">Phần 3</div>
                  <div className="text-sm font-bold text-teal-900">Trả lời ngắn</div>
                  <div className="text-[11px] text-teal-700 font-medium">0.25đ / câu</div>
                </div>
              </div>

              {/* Start buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => handleStartExam(15)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-950 font-bold text-sm transition-all"
                >
                  Đề ngắn (15 câu - 20 phút)
                </button>
                <button
                  onClick={() => handleStartExam(25)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-black text-sm shadow-md transition-all hover:scale-105"
                >
                  Bắt đầu làm bài thi (25 câu - 30 phút)
                </button>
                <button
                  onClick={() => handleStartExam(40)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-950 font-bold text-sm transition-all"
                >
                  Đề đầy đủ (40 câu - 50 phút)
                </button>
              </div>
            </div>
          ) : (
            /* Active Exam Interface */
            <div className="space-y-6">
              {/* Exam Sticky Status Bar */}
              <div className="sticky top-20 z-30 bg-teal-900 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center justify-between border border-teal-700">
                <div className="flex items-center space-x-3">
                  <span className="font-extrabold text-sm sm:text-base">Bài thi thử</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-teal-800 text-teal-200">
                    {examQuestions.length} câu hỏi
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`flex items-center space-x-1.5 font-mono text-base font-bold px-3 py-1 rounded-lg ${
                      examTimeLeft < 300 ? 'bg-rose-500/80 animate-pulse' : 'bg-teal-800'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(examTimeLeft)}</span>
                  </div>

                  {!isExamSubmitted ? (
                    <button
                      onClick={handleSubmitExam}
                      className="px-5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-teal-950 font-bold text-xs sm:text-sm shadow transition-all"
                    >
                      Nộp bài thi
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStartExam(examQuestions.length)}
                      className="px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm transition-all"
                    >
                      Thi lại đề mới
                    </button>
                  )}
                </div>
              </div>

              {/* Exam Score Summary (If submitted) */}
              {isExamSubmitted && examResult && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-teal-200 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-teal-900">
                      {examResult.totalScore} / 10 Điểm
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      Làm đúng {examResult.correctCount}/{examResult.total} câu hỏi
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-xs bg-teal-50 p-3 rounded-xl border border-teal-100 font-medium text-slate-700">
                    <div>Phần 1: {examResult.scorePart1}đ</div>
                    <div>Phần 2: {examResult.scorePart2}đ</div>
                    <div>Phần 3: {examResult.scorePart3}đ</div>
                  </div>
                </div>
              )}

              {/* Questions list during exam */}
              <div className="space-y-6">
                {examQuestions.map((q, idx) => {
                  const userAns = examAnswers[q.id];

                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-sm text-teal-800">
                          Câu {idx + 1} (Bài {q.lessonNumber})
                        </span>
                        <span className="text-xs text-slate-500">
                          {q.type === 'single_choice' && '4 Lựa chọn'}
                          {q.type === 'true_false' && 'Đúng / Sai'}
                          {q.type === 'short_answer' && 'Trả lời ngắn'}
                        </span>
                      </div>

                      <p className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                        {q.title.replace(/^Câu \d+:\s*/, '')}
                      </p>
                      {q.context && (
                        <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg mb-3">
                          {q.context}
                        </p>
                      )}

                      {/* Single choice options */}
                      {q.type === 'single_choice' && q.options && (
                        <div className="space-y-2 mb-3">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = userAns === optIdx;
                            const isCorrectOpt = q.correctOption === optIdx;
                            const optLetter = String.fromCharCode(65 + optIdx);

                            let style = isSelected
                              ? 'border-teal-700 bg-teal-50 font-semibold'
                              : 'border-slate-200 hover:bg-slate-50';

                            if (isExamSubmitted) {
                              if (isCorrectOpt) style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                              else if (isSelected && !isCorrectOpt) style = 'border-rose-400 bg-rose-50 text-rose-950';
                            }

                            return (
                              <div
                                key={optIdx}
                                onClick={() => {
                                  if (isExamSubmitted) return;
                                  setExamAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }}
                                className={`p-2.5 rounded-xl border flex items-center space-x-3 cursor-pointer text-xs sm:text-sm ${style}`}
                              >
                                <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-bold text-xs">
                                  {optLetter}
                                </span>
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* True/False sub-items */}
                      {q.type === 'true_false' && q.subItems && (
                        <div className="space-y-2 mb-3">
                          {q.subItems.map((sub) => {
                            const currentChoice = userAns?.[sub.id];
                            return (
                              <div
                                key={sub.id}
                                className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                              >
                                <span className="text-xs sm:text-sm text-slate-800">
                                  <strong>{sub.id})</strong> {sub.statement}
                                </span>
                                <div className="flex items-center space-x-2 self-end sm:self-center">
                                  <button
                                    disabled={isExamSubmitted}
                                    onClick={() =>
                                      setExamAnswers((prev) => ({
                                        ...prev,
                                        [q.id]: { ...(prev[q.id] || {}), [sub.id]: true },
                                      }))
                                    }
                                    className={`px-3 py-1 rounded text-xs font-bold border ${
                                      currentChoice === true
                                        ? 'bg-teal-700 text-white'
                                        : 'bg-white text-slate-700 border-slate-300'
                                    }`}
                                  >
                                    Đúng
                                  </button>
                                  <button
                                    disabled={isExamSubmitted}
                                    onClick={() =>
                                      setExamAnswers((prev) => ({
                                        ...prev,
                                        [q.id]: { ...(prev[q.id] || {}), [sub.id]: false },
                                      }))
                                    }
                                    className={`px-3 py-1 rounded text-xs font-bold border ${
                                      currentChoice === false
                                        ? 'bg-teal-700 text-white'
                                        : 'bg-white text-slate-700 border-slate-300'
                                    }`}
                                  >
                                    Sai
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Short answer input */}
                      {q.type === 'short_answer' && (
                        <div className="mb-3 flex items-center space-x-2">
                          <input
                            type="text"
                            disabled={isExamSubmitted}
                            placeholder="Nhập câu trả lời..."
                            value={userAns || ''}
                            onChange={(e) =>
                              setExamAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                            }
                            className="px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                          {q.unit && <span className="text-xs text-slate-500">{q.unit}</span>}
                        </div>
                      )}

                      {/* If exam submitted, show solution */}
                      {isExamSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-slate-800">
                          <div className="font-bold text-teal-900 mb-1">
                            Lời giải SGK Kết nối tri thức:
                          </div>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
