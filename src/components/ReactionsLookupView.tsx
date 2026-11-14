import React, { useState } from 'react';
import { AMINO_ACID_REFERENCE, REAGENTS_LOOKUP } from '../data/lessonsData';
import { TestTube, Sparkles, BookOpen, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ReactionsLookupViewProps {
  onAskAI: (context: string) => void;
}

export const ReactionsLookupView: React.FC<ReactionsLookupViewProps> = ({ onAskAI }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'reagents' | 'amino_acids'>('reagents');

  const filteredReagents = REAGENTS_LOOKUP.filter((r) =>
    r.reagent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.substances.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.phenomenon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAminoAcids = AMINO_ACID_REFERENCE.filter((aa) =>
    aa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aa.abbr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aa.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-600/60 text-teal-200 text-xs font-semibold mb-3">
            <TestTube className="w-3.5 h-3.5" />
            <span>Sổ tay phòng thí nghiệm Hoá 12</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Tra Cứu Thuốc Thử, Màu Sắc & 5 Amino Acid Tiêu Biểu
          </h1>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Tra cứu nhanh hiện tượng hoá học, phương trình phản ứng nhận biết amine, peptide, protein và bảng phân tích toàn diện 5 amino acid bắt buộc trong SGK Kết nối tri thức.
          </p>
        </div>
      </div>

      {/* Tabs and Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 bg-teal-50 p-1 rounded-xl border border-teal-100 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('reagents')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'reagents'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'text-teal-900 hover:bg-teal-100/60'
            }`}
          >
            Bảng Thuốc Thử & Hiện Tượng
          </button>
          <button
            onClick={() => setActiveTab('amino_acids')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'amino_acids'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'text-teal-900 hover:bg-teal-100/60'
            }`}
          >
            5 Amino Acid Chuẩn SGK (Gly, Ala, Val, Glu, Lys)
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm thuốc thử, hiện tượng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-teal-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Tab 1: Reagents Lookup */}
      {activeTab === 'reagents' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredReagents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm border border-teal-100 hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-extrabold text-teal-950 text-base">{item.reagent}</h3>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                    Phản ứng đặc trưng
                  </span>
                </div>

                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Áp dụng cho: </strong>
                  <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">
                    {item.substances}
                  </span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  <strong>Hiện tượng quan sát: </strong>
                  {item.phenomenon}
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 mb-0.5 font-semibold">Cơ chế / Phương trình:</div>
                  <code className="text-xs font-mono text-teal-900 block break-words">
                    {item.equation}
                  </code>
                </div>

                <p className="text-xs text-slate-500 italic">
                  <strong>Mục đích thực nghiệm: </strong>{item.purpose}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() =>
                    onAskAI(`Thầy/Cô ơi, hãy giải thích chi tiết cơ chế thí nghiệm với ${item.reagent} để nhận biết ${item.substances} và bài tập liên quan nhé!`)
                  }
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Hỏi AI về phản ứng này</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 5 Key Amino Acids */}
      {activeTab === 'amino_acids' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAminoAcids.map((aa, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm border border-teal-100 flex flex-col justify-between hover:border-teal-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="font-black text-lg text-slate-900">{aa.name}</h3>
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {aa.abbr}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-teal-800">{aa.molWeight}</span>
                    <span className="text-xs text-slate-400 block">g/mol</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold">Tên thay thế IUPAC:</span>
                    <div className="font-medium text-slate-800">{aa.iupac}</div>
                  </div>

                  <div>
                    <span className="text-slate-500 font-semibold">Công thức cấu tạo:</span>
                    <code className="block bg-slate-100 font-mono p-2 rounded-lg text-slate-900 font-bold mt-0.5">
                      {aa.formula}
                    </code>
                  </div>

                  <div className="flex items-center justify-between bg-teal-50/60 p-2.5 rounded-xl border border-teal-100">
                    <span className="font-semibold text-teal-900">Màu quỳ tím:</span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        aa.litmus.includes('đỏ')
                          ? 'bg-rose-100 text-rose-800'
                          : aa.litmus.includes('xanh')
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {aa.litmus}
                    </span>
                  </div>

                  <div className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <strong className="text-slate-800">Đặc điểm sinh hoá: </strong>
                    {aa.features}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() =>
                    onAskAI(`Hãy giải thích chi tiết cấu tạo, tính chất acid-base, bài toán đốt cháy và bài toán tác dụng NaOH/HCl của ${aa.name} (${aa.abbr}, M=${aa.molWeight})!`)
                  }
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Hỏi AI về {aa.abbr}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
