import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI client (server-side only)
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API Route for Chemistry Chatbot
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, history = [], lessonContext = '' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Nội dung câu hỏi không hợp lệ.' });
    }

    if (!aiClient) {
      return res.status(500).json({
        error: 'Chưa cấu hình API Key. Vui lòng thiết lập GEMINI_API_KEY trong bảng Secrets.',
      });
    }

    const systemInstruction = `Bạn là Trợ lí Gia sư Hoá học 12 Chuyên sâu, chuyên gia về Sách Giáo Khoa "Hoá học 12 - Kết nối tri thức với cuộc sống", đặc biệt là Chương 3: Hợp chất chứa nitrogen (gồm Bài 8: Amine, Bài 9: Amino acid và peptide, Bài 10: Protein và enzyme, Bài 11: Ôn tập chương 3).

Vai trò và nguyên tắc trả lời:
1. Luôn bám sát chuẩn kiến thức, kĩ năng và thuật ngữ mới theo SGK Hoá học 12 Kết nối tri thức (dùng danh pháp IUPAC như amine, amino acid, peptide, protein, enzyme; viết tên thay thế và tên gốc - chức rõ ràng).
2. Khi giải thích phương trình phản ứng: Viết rõ điều kiện (nhiệt độ, xúc tác, môi trường acid/base), cơ chế vắn tắt dễ hiểu và hiện tượng thực nghiệm quan sát được (ví dụ: kết tủa trắng khi aniline tác dụng nước brom; màu xanh lam đậm phức Cu-amine; màu tím biuret; hiện tượng đông tụ lòng trắng trứng...).
3. Với bài tập trắc nghiệm / trả lời ngắn: Trình bày phương pháp giải tối ưu, mẹo nhớ quy luật (ví dụ: số liên kết peptide = số mắt xích - 1, phản ứng thuỷ phân với NaOH/HCl, định luật bảo toàn khối lượng, tỉ lệ mol).
4. Giọng điệu thân thiện, sư phạm, khuyến khích học sinh tư duy, chia ý gạch đầu dòng rõ ràng, dùng in đậm cho từ khoá trọng tâm.
${lessonContext ? `Bối cảnh bài học hiện tại mà học sinh đang theo dõi: "${lessonContext}".` : ''}`;

    // Format contents with history
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const turn of history) {
        if (turn.role && turn.text) {
          contents.push({
            role: turn.role === 'assistant' ? 'model' : turn.role,
            parts: [{ text: turn.text }],
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
      },
    });

    const reply = response.text || 'Xin lỗi, tôi chưa thể trả lời lúc này. Bạn thử hỏi lại nhé!';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Lỗi Gemini API:', error);
    return res.status(500).json({
      error: error?.message || 'Có lỗi xảy ra khi xử lí yêu cầu từ AI.',
    });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port} (${isProd ? 'production' : 'development'})`);
  });
}

startServer();
