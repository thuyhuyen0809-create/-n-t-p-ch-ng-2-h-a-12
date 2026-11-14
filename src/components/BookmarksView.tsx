import React, { useState } from 'react';
import { Question } from '../types';
import { Bookmark, BookmarkX, Sparkles, Check, X, RotateCcw, HelpCircle } from 'lucide-react';

interface BookmarksViewProps {
  savedQuestions: Question[];
  onRemoveBookmark: (id: string) => void;
  onAskAI: (context: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  savedQuestions,
  onRemoveBookmark,
  onAskAI,
}) => {
  const [selectedLesson, setSelectedLesson] = useState<string>('all');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const filtered = savedQuestions.filter((q) =>
    selectedLesson === 'all' ? true : q.lessonId === selectedLesson
  );

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (savedQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-4 bg-white rounded-3xl border border-teal-100 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
          <Bookmark className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Chưa có câu hỏi nào được lưu</h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Trong quá trình làm bài ở mục <strong>Luyện tập</strong>, hãy bấm biểu tượng dấu trang ⭐ ở góc mỗi câu hỏi để lưu vào đây và ôn tập lại khi cần.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-900 flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Sổ Tay Câu Hỏi Đã Lưu ({savedQuestions.length} câu)</span>
          </h2>
          <p className="text-xs text-slate-500">
            Xem lại những câu hỏi cần lưu ý, câu hỏi bẫy hoặc bài tập em muốn rèn luyện lại.
          </p>
        </div>

        {/* Filter by lesson */}
        <select
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(e.target.value)}
          className="text-xs font-semibold bg-slate-50 border border-teal-200 text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">Tất cả bài học</option>
          <option value="bai-8">Bài 8: Amine</option>
          <option value="bai-9">Bài 9: Amino acid & peptide</option>
          <option value="bai-10">Bài 10: Protein & enzyme</option>
          <option value="bai-11">Bài 11: Ôn tập chương 3</option>
        </select>
      </div>

      {/* List of saved questions */}
      <div className="space-y-4">
        {filtered.map((q, idx) => {
          const isRevealed = !!revealedSolutions[q.id];

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-teal-100 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-100 text-teal-800">
                    Bài {q.lessonNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600">
                    {q.type === 'single_choice' && 'Trắc nghiệm 4 lựa chọn'}
                    {q.type === 'true_false' && 'Đúng / Sai'}
                    {q.type === 'short_answer' && 'Trả lời ngắn'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      onAskAI(
                        `Em đang ôn lại câu hỏi đã lưu này: "${q.title} - ${q.context || ''}". Nhờ Thầy/Cô phân tích sâu bản chất hoá học giúp em!`
                      )
                    }
                    className="p-1.5 rounded-lg text-teal-600 hover:bg-teal-50"
                    title="Hỏi AI"
                  >
                    <Sparkles className="w-4 h-4 text-teal-600" />
                  </button>

                  <button
                    onClick={() => onRemoveBookmark(q.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                    title="Bỏ lưu câu này"
                  >
                    <BookmarkX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  <span className="text-teal-700 mr-2">Câu {idx + 1}:</span>
                  {q.title.replace(/^Câu \d+:\s*/, '')}
                </h3>
                {q.context && (
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    {q.context}
                  </p>
                )}
              </div>

              {/* Options or sub-items preview */}
              {q.type === 'single_choice' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`p-2 rounded-lg border ${
                        isRevealed && oIdx === q.correctOption
                          ? 'bg-emerald-50 border-emerald-400 font-bold text-emerald-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Reveal solution toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <button
                  onClick={() => toggleSolution(q.id)}
                  className="font-bold text-teal-700 hover:text-teal-900 underline"
                >
                  {isRevealed ? 'Ẩn lời giải' : 'Xem đáp án & lời giải chi tiết'}
                </button>
                <span className="text-slate-400 italic">{q.sgkReference}</span>
              </div>

              {/* Explanation */}
              {isRevealed && (
                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <div className="font-bold text-teal-900">Lời giải chi tiết SGK:</div>
                  <p className="whitespace-pre-line">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
