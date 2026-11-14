import React, { useState } from 'react';
import { LESSONS, QUESTIONS } from '../data/lessonsData';
import { Question } from '../types';
import {
  Compass,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  Target,
  Flame,
  CheckSquare,
  Square,
  ChevronRight,
  BarChart3
} from 'lucide-react';

interface RoadmapViewProps {
  onStartCustomQuiz: (selectedLessonIds: string[], questionType?: string) => void;
  onOpenTheory: (lessonId: string) => void;
  onAskAI: (context: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onStartCustomQuiz,
  onOpenTheory,
  onAskAI,
}) => {
  // User lesson selection: from Lesson 8 to 11
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>([
    'bai-8',
    'bai-9',
    'bai-10',
    'bai-11',
  ]);

  // Goal target
  const [targetGoal, setTargetGoal] = useState<'core' | 'high' | 'express'>('high');

  // Completed milestones state (stored locally)
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({
    'stage-1': false,
    'stage-2': false,
    'stage-3': false,
    'stage-4': false,
    'stage-5': false,
  });

  const toggleLesson = (id: string) => {
    if (selectedLessonIds.includes(id)) {
      if (selectedLessonIds.length === 1) {
        alert('Vui lòng chọn ít nhất 1 bài học để xây dựng lộ trình!');
        return;
      }
      setSelectedLessonIds(selectedLessonIds.filter((item) => item !== id));
    } else {
      setSelectedLessonIds([...selectedLessonIds, id]);
    }
  };

  const selectAll = () => {
    setSelectedLessonIds(['bai-8', 'bai-9', 'bai-10', 'bai-11']);
  };

  // Filtered lessons & questions
  const activeLessons = LESSONS.filter((l) => selectedLessonIds.includes(l.id));
  const activeQuestions = QUESTIONS.filter((q) => selectedLessonIds.includes(q.lessonId));

  const countSingleChoice = activeQuestions.filter((q) => q.type === 'single_choice').length;
  const countTrueFalse = activeQuestions.filter((q) => q.type === 'true_false').length;
  const countShortAnswer = activeQuestions.filter((q) => q.type === 'short_answer').length;

  const estimatedTotalMinutes =
    activeLessons.reduce((acc, l) => acc + l.estimatedMinutes, 0) +
    Math.round(activeQuestions.length * 1.5);

  const toggleMilestone = (key: string) => {
    setCompletedMilestones((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedStagesCount = Object.values(completedMilestones).filter(Boolean).length;
  const progressPercent = Math.round((completedStagesCount / 5) * 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-600/70 text-teal-200 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Cá nhân hoá trải nghiệm học tập</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Lộ Trình Ôn Tập Tuỳ Chỉnh (Bài 8 - 11)
          </h1>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Lựa chọn các bài học em muốn tập trung ôn luyện. Hệ thống sẽ tự động tổng hợp ngân hàng bài tập, phân loại theo 3 dạng đề thi mới của Bộ GD&ĐT và đồng hành cùng em qua từng chặng mục tiêu.
          </p>
        </div>
      </div>

      {/* Control Panel: Step 1 & Step 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Step 1: Select Lessons */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-teal-100 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center font-black text-xs">
                1
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Chọn các bài học cần ôn tập
              </h2>
            </div>
            <button
              onClick={selectAll}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline"
            >
              Chọn cả 4 bài
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Tích chọn bài học em còn yếu hoặc chuẩn bị kiểm tra trên lớp:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LESSONS.map((lesson) => {
              const isChecked = selectedLessonIds.includes(lesson.id);
              const lessonQCount = QUESTIONS.filter((q) => q.lessonId === lesson.id).length;

              return (
                <div
                  key={lesson.id}
                  onClick={() => toggleLesson(lesson.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'border-teal-600 bg-teal-50/70 shadow-sm ring-1 ring-teal-600'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-teal-700">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 fill-teal-700 text-white" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-teal-200/60 text-teal-900">
                        Bài {lesson.lessonNumber}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200">
                      {lessonQCount} câu
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {lesson.title.split(': ')[1] || lesson.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Goal Target */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-teal-100 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <span className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center font-black text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-slate-900">Mục tiêu học tập</h2>
            </div>

            <div className="space-y-2.5">
              <div
                onClick={() => setTargetGoal('high')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  targetGoal === 'high'
                    ? 'border-teal-600 bg-teal-50/80 ring-1 ring-teal-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2 font-bold text-sm text-teal-950">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span>Chinh phục điểm 9 - 10</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Đầy đủ trắc nghiệm Đúng/Sai, câu hỏi bẫy, bài toán tính toán nhanh.
                </p>
              </div>

              <div
                onClick={() => setTargetGoal('core')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  targetGoal === 'core'
                    ? 'border-teal-600 bg-teal-50/80 ring-1 ring-teal-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2 font-bold text-sm text-slate-900">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Nắm chắc điểm 7 - 8</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Ôn kĩ lý thuyết cơ bản, hiện tượng thực nghiệm và bài tập nhận biết.
                </p>
              </div>

              <div
                onClick={() => setTargetGoal('express')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  targetGoal === 'express'
                    ? 'border-teal-600 bg-teal-50/80 ring-1 ring-teal-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2 font-bold text-sm text-slate-900">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Ôn tập cấp tốc trước giờ thi</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Luyện đề nhanh, tổng hợp các dạng bài hay gặp nhất trong đề thi.
                </p>
              </div>
            </div>
          </div>

          {/* Ask AI to advice roadmap */}
          <button
            onClick={() =>
              onAskAI(
                `Em đang thiết lập lộ trình ôn tập môn Hoá 12 KNTT cho các bài: ${activeLessons
                  .map((l) => l.title)
                  .join(
                    ', '
                  )} với mục tiêu ${targetGoal === 'high' ? 'chinh phục điểm 9 - 10' : 'nắm chắc kiến thức'}. Thầy/Cô hãy cho em kế hoạch học tập chi tiết trong 3 ngày tới và các lỗi sai thường gặp nhất nhé!`
              )
            }
            className="w-full py-3 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center space-x-2 border border-teal-200 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Hỏi Gia sư AI tư vấn lộ trình này</span>
          </button>
        </div>
      </div>

      {/* Dynamic Roadmap Overview Stats */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-teal-100 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Tổng quan lộ trình cá nhân của em
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {activeLessons.map((l) => `Bài ${l.lessonNumber}`).join(' • ')} (Tổng cộng {activeQuestions.length} câu)
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-xs text-slate-500 font-medium">Tiến độ lộ trình</span>
              <div className="text-lg font-black text-teal-800">{progressPercent}%</div>
            </div>
            <div className="w-32 bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100">
            <div className="text-xs text-slate-500">Bài học chọn</div>
            <div className="text-xl font-black text-teal-900 mt-0.5">{activeLessons.length} / 4 bài</div>
          </div>

          <div className="bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100">
            <div className="text-xs text-slate-500">Trắc nghiệm 4 lựa chọn</div>
            <div className="text-xl font-black text-teal-900 mt-0.5">{countSingleChoice} câu</div>
          </div>

          <div className="bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100">
            <div className="text-xs text-slate-500">Trắc nghiệm Đúng / Sai</div>
            <div className="text-xl font-black text-teal-900 mt-0.5">{countTrueFalse} câu (x 4 ý)</div>
          </div>

          <div className="bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100">
            <div className="text-xs text-slate-500">Trắc nghiệm Trả lời ngắn</div>
            <div className="text-xl font-black text-teal-900 mt-0.5">{countShortAnswer} câu</div>
          </div>
        </div>

        {/* 5 Stepped Roadmap Stages */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-teal-700" />
            <span>Nội dung 5 Chặng Luyện Tập Cá Nhân Hoá:</span>
          </h3>

          <div className="space-y-3">
            {/* Chặng 1 */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                completedMilestones['stage-1']
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleMilestone('stage-1')}
                    className="mt-0.5 text-teal-700 hover:scale-110 transition-transform"
                    title="Đánh dấu hoàn thành"
                  >
                    {completedMilestones['stage-1'] ? (
                      <CheckCircle2 className="w-6 h-6 fill-emerald-600 text-white" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 hover:border-teal-600 flex items-center justify-center font-bold text-xs text-slate-400">
                        1
                      </div>
                    )}
                  </button>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chặng 1: Nắm chắc lý thuyết cốt lõi & Hiện tượng thực nghiệm
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Đọc lại tóm tắt SGK, bảng so sánh tính base, cấu trúc peptide và tính đông tụ protein của {activeLessons.map((l) => `Bài ${l.lessonNumber}`).join(', ')}.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onOpenTheory(activeLessons[0].id)}
                    className="px-4 py-2 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-900 font-bold text-xs flex items-center space-x-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Xem lý thuyết</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Chặng 2 */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                completedMilestones['stage-2']
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleMilestone('stage-2')}
                    className="mt-0.5 text-teal-700 hover:scale-110 transition-transform"
                    title="Đánh dấu hoàn thành"
                  >
                    {completedMilestones['stage-2'] ? (
                      <CheckCircle2 className="w-6 h-6 fill-emerald-600 text-white" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 hover:border-teal-600 flex items-center justify-center font-bold text-xs text-slate-400">
                        2
                      </div>
                    )}
                  </button>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chặng 2: Luyện {countSingleChoice} câu Trắc nghiệm 4 lựa chọn (Phần 1 đề thi)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Rèn phản xạ nhanh với các câu hỏi nhận biết, thông hiểu về danh pháp, đồng phân và tính chất hoá học.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onStartCustomQuiz(selectedLessonIds, 'single_choice')}
                    className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition-all"
                  >
                    <span>Làm {countSingleChoice} câu Phần 1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chặng 3 */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                completedMilestones['stage-3']
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleMilestone('stage-3')}
                    className="mt-0.5 text-teal-700 hover:scale-110 transition-transform"
                    title="Đánh dấu hoàn thành"
                  >
                    {completedMilestones['stage-3'] ? (
                      <CheckCircle2 className="w-6 h-6 fill-emerald-600 text-white" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 hover:border-teal-600 flex items-center justify-center font-bold text-xs text-slate-400">
                        3
                      </div>
                    )}
                  </button>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chặng 3: Luyện {countTrueFalse} câu Trắc nghiệm Đúng / Sai (Phần 2 đề thi)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mỗi câu gồm 4 nhận định a, b, c, d – Dạng phân loại điểm số cao nhất trong đề thi tốt nghiệp THPT từ năm 2025.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onStartCustomQuiz(selectedLessonIds, 'true_false')}
                    className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition-all"
                  >
                    <span>Làm {countTrueFalse} câu Phần 2</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chặng 4 */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                completedMilestones['stage-4']
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleMilestone('stage-4')}
                    className="mt-0.5 text-teal-700 hover:scale-110 transition-transform"
                    title="Đánh dấu hoàn thành"
                  >
                    {completedMilestones['stage-4'] ? (
                      <CheckCircle2 className="w-6 h-6 fill-emerald-600 text-white" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 hover:border-teal-600 flex items-center justify-center font-bold text-xs text-slate-400">
                        4
                      </div>
                    )}
                  </button>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chặng 4: Luyện {countShortAnswer} câu Trắc nghiệm Trả lời ngắn (Phần 3 đề thi)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Điền số lượng đồng phân, phân tử khối, số liên kết peptide, khối lượng muối thu được.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onStartCustomQuiz(selectedLessonIds, 'short_answer')}
                    className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition-all"
                  >
                    <span>Làm {countShortAnswer} câu Phần 3</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chặng 5 */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                completedMilestones['stage-5']
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleMilestone('stage-5')}
                    className="mt-0.5 text-teal-700 hover:scale-110 transition-transform"
                    title="Đánh dấu hoàn thành"
                  >
                    {completedMilestones['stage-5'] ? (
                      <CheckCircle2 className="w-6 h-6 fill-emerald-600 text-white" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 hover:border-teal-600 flex items-center justify-center font-bold text-xs text-slate-400">
                        5
                      </div>
                    )}
                  </button>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chặng 5: Bài kiểm tra đánh giá năng lực toàn diện (Tất cả {activeQuestions.length} câu)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Làm bài thi tổng hợp cho các bài đã chọn để đánh giá điểm số và rà soát các lỗ hổng kiến thức.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => onStartCustomQuiz(selectedLessonIds, 'all')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-black text-xs sm:text-sm flex items-center space-x-1.5 shadow-md transition-all hover:scale-105"
                  >
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Làm bài tổng hợp ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
