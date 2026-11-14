import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Sparkles, Bot, User, Trash2, ArrowUpRight, BookOpen, AlertCircle, Copy, Check } from 'lucide-react';

interface ChatbotViewProps {
  initialPrompt?: string;
  lessonContext?: string;
}

const PRESET_PROMPTS = [
  'Vì sao aniline không làm đổi màu quỳ tím nhưng tạo kết tủa trắng với nước bromine?',
  'Cách phân biệt 5 amino acid: Gly, Ala, Val, Glu, Lys bằng quỳ tím và điện di?',
  'Tại sao dipeptide không có phản ứng màu biuret còn tripeptide thì có?',
  'Giải thích hiện tượng đông tụ protein khi nấu canh riêu cua hoặc làm đậu phụ?',
  'Phương pháp giải nhanh bài toán peptide tác dụng NaOH bằng bảo toàn khối lượng?',
  'Làm thế nào phân biệt lòng trắng trứng, glucose và glycerol bằng Cu(OH)2?'
];

export const ChatbotView: React.FC<ChatbotViewProps> = ({ initialPrompt, lessonContext }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Xin chào các em học sinh lớp 12! 👋 Thầy/Cô là **Gia sư Hoá học AI** đồng hành cùng bộ sách **Kết nối tri thức với cuộc sống (Chương 3: Hợp chất chứa nitrogen)**.

Thầy/Cô có thể giúp các em:
• **Giải đáp lý thuyết:** Amine (Bài 8), Amino acid & peptide (Bài 9), Protein & enzyme (Bài 10), Ôn tập chương 3 (Bài 11).
• **Giải bài tập:** Hướng dẫn chi tiết từng bước trắc nghiệm 4 lựa chọn, đúng/sai, trả lời ngắn.
• **Giải thích thí nghiệm:** Phản ứng biuret, kết tủa trắng aniline với brom, hiện tượng đông tụ, tạo muối diazonium...
• **Mẹo ghi nhớ điểm 10:** Nhớ nhanh khối lượng mol, bảo toàn electron, bảo toàn khối lượng.

Hãy chọn câu hỏi gợi ý bên dưới hoặc gõ thắc mắc của em nhé! 🧪`,
      timestamp: Date.now(),
    },
  ]);

  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLesson, setSelectedLesson] = useState<string>(lessonContext || 'Chương 3 (Bài 8 - 11)');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle initial prompt from parent
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      sendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history for context
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome')
        .slice(-6)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text,
        }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          history: historyPayload,
          lessonContext: selectedLesson,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Lỗi khi gọi API');
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Thầy/Cô chưa thể trả lời lúc này, em hãy thử hỏi lại nhé!',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Lỗi chat:', err);
      const errMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: `⚠️ **Không thể kết nối:** ${err.message || 'Vui lòng kiểm tra API Key trong bảng Secrets hoặc thử lại sau.'}`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    if (window.confirm('Em có chắc chắn muốn xoá toàn bộ lịch sử trò chuyện không?')) {
      setMessages([
        {
          id: 'welcome-new',
          sender: 'assistant',
          text: 'Lịch sử trò chuyện đã được làm mới. Em muốn hỏi bài tập hoặc lý thuyết nào của Chương 3?',
          timestamp: Date.now(),
        },
      ]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-12rem)] min-h-[560px] flex flex-col bg-white rounded-3xl shadow-sm border border-teal-100 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-teal-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-400 text-teal-950 flex items-center justify-center font-bold shadow-md">
            <Bot className="w-5 h-5 text-teal-950" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-extrabold text-base tracking-tight">Gia sư Hoá 12 AI</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-xs text-teal-200">
              Chuyên sâu SGK Hoá học 12 Kết nối tri thức với cuộc sống
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Lesson context selector */}
          <select
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(e.target.value)}
            className="text-xs font-semibold bg-teal-800/80 border border-teal-600/70 text-teal-100 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-400"
          >
            <option value="Chương 3 (Bài 8 - 11)">Tất cả Chương 3</option>
            <option value="Bài 8: Amine">Bài 8: Amine</option>
            <option value="Bài 9: Amino acid & peptide">Bài 9: Amino acid</option>
            <option value="Bài 10: Protein & enzyme">Bài 10: Protein</option>
            <option value="Bài 11: Ôn tập chương 3">Bài 11: Ôn tập</option>
          </select>

          <button
            onClick={handleClearChat}
            className="p-2 rounded-lg bg-teal-800/60 hover:bg-teal-700 text-teal-200 hover:text-white transition-colors"
            title="Làm mới cuộc trò chuyện"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Questions Slider */}
      <div className="bg-teal-50/70 p-2.5 border-b border-teal-100 overflow-x-auto scrollbar-none flex items-center space-x-2">
        <span className="text-[11px] font-bold text-teal-900 whitespace-nowrap pl-2 flex items-center space-x-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Gợi ý hỏi nhanh:</span>
        </span>
        {PRESET_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(prompt)}
            disabled={isLoading}
            className="text-xs whitespace-nowrap px-3 py-1.5 rounded-full bg-white hover:bg-teal-100/80 text-slate-700 hover:text-teal-900 border border-teal-200 shadow-2xs font-medium transition-all"
          >
            {prompt.length > 40 ? prompt.slice(0, 40) + '...' : prompt}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/40">
        {messages.map((m) => {
          const isUser = m.sender === 'user';

          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-2xs ${
                  isUser
                    ? 'bg-teal-700 text-white'
                    : 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`group relative max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed ${
                  isUser
                    ? 'bg-teal-700 text-white rounded-tr-none shadow-md'
                    : 'bg-white text-slate-800 rounded-tl-none border border-teal-100/80 shadow-sm'
                }`}
              >
                {/* Text Content */}
                <div className="whitespace-pre-line prose-sm">{m.text}</div>

                {/* Footer timestamp & copy */}
                <div
                  className={`flex items-center justify-between mt-2 pt-2 text-[10px] ${
                    isUser ? 'text-teal-200 border-t border-teal-600/60' : 'text-slate-400 border-t border-slate-100'
                  }`}
                >
                  <span>
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>

                  {!isUser && (
                    <button
                      onClick={() => handleCopy(m.id, m.text)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-teal-700 flex items-center space-x-1"
                      title="Sao chép câu trả lời"
                    >
                      {copiedId === m.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-teal-100 shadow-sm flex items-center space-x-2 text-xs text-teal-800">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 bg-teal-700 rounded-full animate-bounce" />
              </div>
              <span className="font-semibold pl-2">Gia sư AI đang tra cứu SGK và soạn lời giải...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-3 sm:p-4 bg-white border-t border-teal-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="flex items-center space-x-2 bg-slate-50 border border-teal-200/80 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent transition-all"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Hỏi về amine, peptide, phản ứng biuret, giải bài tập..."
            className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 shadow-sm transition-all ${
              input.trim() && !isLoading
                ? 'bg-teal-700 hover:bg-teal-800 text-white'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Gửi</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
        <div className="text-[11px] text-center text-slate-400 mt-2">
          Gia sư AI bám sát sách giáo khoa Hoá học 12 - Kết nối tri thức với cuộc sống.
        </div>
      </div>
    </div>
  );
};
