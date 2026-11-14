import React, { useState } from 'react';
import { LESSONS } from '../data/lessonsData';
import { BookOpen, CheckCircle2, Lightbulb, ArrowRight, Sparkles, Beaker, Zap, FileText } from 'lucide-react';

interface TheoryViewProps {
  onStartQuiz: (lessonId: string) => void;
  onAskAI: (context: string) => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onStartQuiz, onAskAI }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string>('bai-8');
  const activeLesson = LESSONS.find((l) => l.id === selectedLessonId) || LESSONS[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Lesson Selector Pills */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-teal-100 flex flex-wrap gap-2 sm:gap-3">
        {LESSONS.map((lesson) => {
          const isSelected = lesson.id === selectedLessonId;
          return (
            <button
              key={lesson.id}
              onClick={() => setSelectedLessonId(lesson.id)}
              className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-xl transition-all duration-200 border ${
                isSelected
                  ? 'bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-md border-teal-700'
                  : 'bg-teal-50/50 hover:bg-teal-100/60 text-slate-800 border-teal-100 hover:border-teal-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-teal-600/80 text-teal-100' : 'bg-teal-200/60 text-teal-800'
                  }`}
                >
                  Bài {lesson.lessonNumber}
                </span>
                <span className={`text-xs ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                  ~{lesson.estimatedMinutes} phút
                </span>
              </div>
              <h3 className={`font-bold text-sm sm:text-base line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                {lesson.title.split(': ')[1] || lesson.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Main Lesson Content */}
      <div className="bg-white rounded-3xl shadow-sm border border-teal-100 overflow-hidden">
        {/* Lesson Banner */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-600/60 text-teal-200 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{activeLesson.chapter}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
              {activeLesson.title}
            </h1>
            <p className="text-teal-100 text-sm sm:text-base max-w-3xl leading-relaxed mb-6">
              {activeLesson.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onStartQuiz(activeLesson.id)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-teal-950 font-bold text-sm shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-teal-950 fill-teal-950" />
                <span>Luyện tập bài này (15+ câu)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onAskAI(`Em muốn tìm hiểu sâu về kiến thức ${activeLesson.title} trong SGK Hoá 12 Kết nối tri thức.`)}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-teal-900/70 hover:bg-teal-900 text-white font-semibold text-sm border border-teal-500/40 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Hỏi Gia sư AI về bài này</span>
              </button>
            </div>
          </div>
        </div>

        {/* Lesson Overview Checklist */}
        <div className="p-6 bg-teal-50/60 border-b border-teal-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-teal-900 mb-3 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>Mục tiêu & Điểm cốt lõi cần nhớ</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {activeLesson.overview.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-700 bg-white p-3 rounded-xl border border-teal-100/80 shadow-2xs">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="p-6 sm:p-8 space-y-8">
          {activeLesson.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                <div className="w-2.5 h-6 bg-teal-600 rounded-full" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">{section.title}</h2>
              </div>

              {/* Text content formatted */}
              <div className="prose prose-teal max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-50/50 p-4 sm:p-5 rounded-2xl border border-slate-100">
                {section.content}
              </div>

              {/* Chemical Equations / Reactions (if any) */}
              {section.reactions && section.reactions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-teal-600" />
                    <span>Phương trình hoá học & Hiện tượng đặc trưng</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {section.reactions.map((rx, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-white p-4 rounded-xl border border-teal-200/80 shadow-xs hover:border-teal-400 transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <code className="text-sm font-semibold font-mono text-teal-950 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                            {rx.reactants}
                          </code>
                          {rx.condition && (
                            <span className="text-xs font-medium text-slate-500 italic bg-slate-100 px-2 py-0.5 rounded">
                              Đk: {rx.condition}
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700">
                          <span className="font-semibold text-teal-800">Hiện tượng / Sản phẩm: </span>
                          <span>{rx.products}</span>
                        </div>
                        {rx.note && (
                          <div className="text-xs text-slate-500 mt-1 pl-3 border-l-2 border-amber-400">
                            {rx.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Laboratory Experiments (if any) */}
              {section.experiments && section.experiments.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-2">
                    <Beaker className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Thí nghiệm thực hành SGK</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {section.experiments.map((exp, eIdx) => (
                      <div
                        key={eIdx}
                        className="bg-gradient-to-br from-emerald-50/70 to-teal-50/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 space-y-2"
                      >
                        <div className="font-bold text-sm sm:text-base text-emerald-950 flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>{exp.name}</span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700">
                          <strong>Cách tiến hành: </strong>{exp.procedure}
                        </div>
                        <div className="text-xs sm:text-sm text-emerald-900 bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                          <strong>Hiện tượng: </strong>{exp.observation}
                        </div>
                        <div className="text-xs text-slate-600">
                          <strong>Giải thích: </strong>{exp.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Memory Tips Section */}
          <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200 space-y-3">
            <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm sm:text-base">
              <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Bí kíp ghi nhớ điểm 10 ({activeLesson.title})</span>
            </div>
            <div className="space-y-2">
              {activeLesson.memoryTips.map((tip, tIdx) => (
                <div key={tIdx} className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-teal-900 text-white">
            <div>
              <h4 className="font-bold text-base">Đã nắm vững lý thuyết {activeLesson.title}?</h4>
              <p className="text-teal-200 text-xs sm:text-sm">
                Kiểm tra kiến thức ngay với ngân hàng câu hỏi chuẩn cấu trúc mới của Bộ GD&ĐT!
              </p>
            </div>
            <button
              onClick={() => onStartQuiz(activeLesson.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold text-sm shadow-md transition-transform hover:scale-105 whitespace-nowrap"
            >
              Vào làm bài tập ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
