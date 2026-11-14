export type QuestionType = 'single_choice' | 'true_false' | 'short_answer';

export interface TrueFalseItem {
  id: string; // 'a', 'b', 'c', 'd'
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface Question {
  id: string;
  lessonId: string;
  lessonNumber: number;
  type: QuestionType;
  title: string;
  context?: string;
  // For single_choice
  options?: string[];
  correctOption?: number; // 0, 1, 2, 3
  // For true_false
  subItems?: TrueFalseItem[];
  // For short_answer
  correctAnswers?: string[]; // e.g. ["8", "8 đồng phân"] or ["75"]
  unit?: string;
  explanation: string;
  sgkReference: string; // e.g. "SGK Hoá 12 KNTT - Trang 42"
  difficulty: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
}

export interface LessonSection {
  title: string;
  content: string;
  reactions?: {
    reactants: string;
    products: string;
    condition?: string;
    note?: string;
  }[];
  keyPoints?: string[];
  experiments?: {
    name: string;
    procedure: string;
    observation: string;
    explanation: string;
  }[];
}

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  subtitle: string;
  description: string;
  chapter: string;
  estimatedMinutes: number;
  overview: string[];
  sections: LessonSection[];
  summaryTable?: {
    headers: string[];
    rows: string[][];
  };
  memoryTips: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: number;
  suggestedAction?: string;
}

export interface UserAnswerRecord {
  questionId: string;
  userSingleChoice?: number;
  userTrueFalse?: Record<string, boolean>; // { a: true, b: false, ... }
  userShortAnswer?: string;
  isCorrect?: boolean;
  score?: number;
}
