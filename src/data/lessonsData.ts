import { Lesson, Question } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'bai-8',
    lessonNumber: 8,
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    title: 'Bài 8: Amine',
    subtitle: 'Cấu tạo, đồng phân, danh pháp, tính chất vật lí và tính chất hoá học đặc trưng',
    description: 'Nắm vững khái niệm amine, phân loại bậc amine, tính base, phản ứng với nitrous acid, tạo phức Cu(OH)2 và phản ứng thế brom ở aniline.',
    estimatedMinutes: 35,
    overview: [
      'Amine hình thành khi thay thế nguyên tử H trong phân tử NH3 bằng gốc hydrocarbon.',
      'Bậc của amine bằng số gốc hydrocarbon liên kết trực tiếp với nguyên tử nitrogen (bậc I, II, III).',
      'Tính base của amine do đôi electron tự do trên nguyên tử N: Alkylamine > NH3 > Arylamine (Aniline).',
      'Aniline tạo kết tủa trắng 2,4,6-tribromoaniline với nước bromine.',
      'Amine bậc I tác dụng với HNO2: alkylamine giải phóng khí N2; aniline tạo muối diazonium ở 0 - 5°C.'
    ],
    sections: [
      {
        title: '1. Khái niệm, phân loại, đồng phân và danh pháp',
        content: `• **Khái niệm:** Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử ammonia (NH3) bằng một hay nhiều gốc hydrocarbon, ta được amine.
• **Phân loại:**
  - Theo gốc hydrocarbon: Amine béo (như CH3NH2, C2H5NH2) và amine thơm (như C6H5NH2).
  - Theo bậc amine: Bậc I (R-NH2), Bậc II (R-NH-R'), Bậc III (R-N(R')-R''). *Lưu ý: Bậc amine tính bằng số nguyên tử H bị thay thế ở NH3, khác với bậc alcohol.*
• **Danh pháp:**
  - *Tên gốc - chức:* Tên gốc hydrocarbon + **amine** (Ví dụ: CH3-NH2: methylamine; C2H5-NH2: ethylamine; (CH3)2NH: dimethylamine; C6H5NH2: phenylamine).
  - *Tên thay thế:* Tên hydrocarbon tương ứng - vị trí nhóm amin - **amine** (Ví dụ: CH3-CH2-CH2-NH2: propan-1-amine; CH3-CH(NH2)-CH3: propan-2-amine; CH3-NH-C2H5: N-methylethanamine; C6H5NH2: benzenamine).
• **Đồng phân:** C3H9N có 4 đồng phân (2 bậc I, 1 bậc II, 1 bậc III). C4H11N có 8 đồng phân (4 bậc I, 3 bậc II, 1 bậc III). C7H9N có 5 đồng phân chứa vòng benzen.`,
        keyPoints: [
          'Bậc amine = Số gốc hydrocarbon liên kết với N.',
          'Số đồng phân amine đơn no CnH2n+3N: C3H9N có 4 đồng phân, C4H11N có 8 đồng phân.',
          'Aniline còn có tên là phenylamine hoặc benzenamine (C6H5NH2).'
        ]
      },
      {
        title: '2. Tính chất vật lí',
        content: `• **Trạng thái & Mùi:** Methylamine, dimethylamine, trimethylamine và ethylamine là những chất khí ở điều kiện thường, có mùi khai khó chịu, độc, tan nhiều trong nước nhờ tạo liên kết hydrogen với phân tử nước.
• **Aniline:** Là chất lỏng, không màu (để lâu trong không khí bị oxi hoá chuyển sang màu nâu đen), ít tan trong nước lạnh, chìm xuống dưới đáy ống nghiệm vì có khối lượng riêng lớn hơn nước (d > 1 g/cm³), tan tốt trong ethanol và ether.
• **Nhiệt độ sôi:** Amine có nhiệt độ sôi cao hơn hydrocarbon cùng khối lượng phân tử (do có liên kết hydrogen liên phân tử), nhưng thấp hơn alcohol tương ứng (vì liên kết N-H phân cực kém hơn liên kết O-H).`,
        keyPoints: [
          '4 amine thể khí ở điều kiện thường: CH3NH2, (CH3)2NH, (CH3)3N, C2H5NH2.',
          'Aniline nặng hơn nước, ít tan trong nước, để trong không khí chuyển màu nâu đen do bị oxi hoá.'
        ]
      },
      {
        title: '3. Tính chất hoá học đặc trưng',
        content: `Nguyên tử nitrogen trong amine còn 1 cặp electron tự do chưa tham gia liên kết, do đó amine có tính base tương tự ammonia và có khả năng phản ứng với acid, tạo phức chất, cũng như tham gia phản ứng thế.`,
        reactions: [
          {
            reactants: 'CH3NH2 + H2O ⇄ [CH3NH3]+ + OH-',
            products: 'Dung dịch làm quỳ tím chuyển xanh, phenolphthalein hoá hồng',
            condition: 'Nhiệt độ phòng',
            note: 'Dung dịch alkylamine có tính base mạnh hơn ammonia.'
          },
          {
            reactants: 'C6H5NH2 (Aniline) + H2O',
            products: 'Không làm đổi màu quỳ tím hay phenolphthalein',
            condition: 'Tính base rất yếu do hiệu ứng liên hợp p-π làm giảm mật độ electron trên N',
            note: 'So sánh lực base: C2H5NH2 > CH3NH2 > NH3 > C6H5NH2.'
          },
          {
            reactants: 'CH3NH2 + HCl → CH3NH3Cl',
            products: 'Methylammonium chloride (muối tan tốt trong nước)',
            condition: 'Tác dụng acid tạo muối',
            note: 'Có hiện tượng khói trắng khi tiếp xúc HCl đặc.'
          },
          {
            reactants: 'C6H5NH2 + HCl → C6H5NH3Cl (Phenylammonium chloride)',
            products: 'Tạo dung dịch đồng nhất, trong suốt',
            condition: 'Aniline từ không tan trở nên tan hoàn toàn',
            note: 'Nếu thêm tiếp NaOH vào dung dịch, aniline lại tách lớp đục: C6H5NH3Cl + NaOH → C6H5NH2↓ + NaCl + H2O.'
          },
          {
            reactants: '4CH3NH2 + Cu(OH)2 → [Cu(CH3NH2)4](OH)2',
            products: 'Dung dịch phức chất màu xanh lam thẫm (tương tự NH3)',
            condition: 'Amine bậc thấp hòa tan Cu(OH)2',
            note: 'Phản ứng đặc trưng chứng minh tính base và khả năng tạo phức của amine.'
          },
          {
            reactants: 'C2H5NH2 + HNO2 → C2H5OH + N2↑ + H2O',
            products: 'Alcohol + Khí nitrogen sủi bọt + Nước',
            condition: 'Amine no bậc I tác dụng NaNO2 + HCl ở nhiệt độ thường',
            note: 'Dùng để nhận biết amine no bậc I.'
          },
          {
            reactants: 'C6H5NH2 + HNO2 + HCl → [C6H5N2]+Cl- + 2H2O',
            products: 'Benzenediazonium chloride (muối diazonium)',
            condition: 'Nhiệt độ thấp (0 - 5°C, ngâm trong đá)',
            note: 'Muối diazonium là chất trung gian quan trọng tổng hợp phẩm nhuộm azo.'
          },
          {
            reactants: 'C6H5NH2 + 3Br2 (dd) → 2,4,6-tribromoaniline ↓ (kết tủa trắng) + 3HBr',
            products: 'Kết tủa trắng',
            condition: 'Nước bromine ở nhiệt độ thường',
            note: 'Nhóm -NH2 hoạt hoá vòng benzen ở các vị trí ortho và para. Dùng nhận biết aniline.'
          }
        ],
        experiments: [
          {
            name: 'Thí nghiệm tính base của Methylamine',
            procedure: 'Nhúng giấy quỳ tím vào ống nghiệm chứa dung dịch methylamine.',
            observation: 'Giấy quỳ tím chuyển sang màu xanh (hoặc làm phenolphthalein hoá hồng).',
            explanation: 'Do phân tử methylamine nhận H+ từ nước tạo môi trường kiềm yếu có chứa ion OH-.'
          },
          {
            name: 'Thí nghiệm Aniline tác dụng nước Bromine',
            procedure: 'Nhỏ vài giọt aniline vào ống nghiệm chứa 2 mL nước cất, lắc đều (dung dịch vẩn đục). Sau đó nhỏ tiếp nước bromine vào.',
            observation: 'Nước bromine bị mất màu và xuất hiện ngay kết tủa trắng.',
            explanation: 'Tạo thành kết tủa trắng 2,4,6-tribromoaniline do nhóm -NH2 đẩy electron vào nhân thơm.'
          }
        ]
      },
      {
        title: '4. Ứng dụng và điều chế',
        content: `• **Ứng dụng:** Aniline là nguyên liệu quan trọng trong công nghiệp nhuộm (phẩm màu azo), dược phẩm (sulfamide), chất dẻo, cao su. Các diamine như hexamethylenediamine dùng tổng hợp tơ nylon-6,6.
• **Điều chế:**
  - Khử hợp chất nitro: C6H5NO2 + 6[H] --(Fe + HCl, t°)--> C6H5NH2 + 2H2O.
  - Alkyl hoá ammonia: NH3 + RX → RNH2 + HX (có thể phản ứng tiếp tạo amine bậc II, III).`,
        keyPoints: [
          'Điều chế aniline từ nitrobenzene bằng phản ứng khử với bột sắt trong HCl.',
          'Tổng hợp nylon-6,6 từ hexamethylenediamine và adipic acid.'
        ]
      }
    ],
    memoryTips: [
      '⚡ Mẹo lực base: Gốc đẩy electron (alkyl) làm TĂNG lực base; Gốc hút electron (phenyl) làm GIẢM lực base. Thứ tự: Alkyl bậc 2 > Alkyl bậc 1 > NH3 > Aniline.',
      '⚡ Mẹo đồng phân C4H11N: Tổng cộng 8 đồng phân (4 bậc I, 3 bậc II, 1 bậc III).',
      '⚡ Mẹo nhận biết Aniline: Nước bromine tạo KẾT TỦA TRẮNG lập tức!'
    ]
  },
  {
    id: 'bai-9',
    lessonNumber: 9,
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    title: 'Bài 9: Amino acid và Peptide',
    subtitle: 'Đặc điểm cấu tạo, tính chất lưỡng tính, phản ứng trùng ngưng, liên kết peptide và phản ứng màu biuret',
    description: 'Nghiên cứu hợp chất hữu cơ tạp chức amino acid, các amino acid thiên nhiên (Gly, Ala, Val, Glu, Lys), khái niệm peptide, phản ứng thuỷ phân và phản ứng màu biuret.',
    estimatedMinutes: 40,
    overview: [
      'Amino acid là hợp chất hữu cơ tạp chức chứa đồng thời nhóm amino (-NH2) và nhóm carboxyl (-COOH).',
      'Các α-amino acid thiên nhiên là đơn vị cấu tạo nên protein của cơ thể sống.',
      'Amino acid tồn tại chủ yếu ở dạng ion lưỡng cực, có nhiệt độ nóng chảy cao, tan tốt trong nước và có tính chất lưỡng tính.',
      'Peptide chứa từ 2 đến 50 gốc α-amino acid liên kết bởi liên kết peptide (-CO-NH-).',
      'Tripeptide trở lên có phản ứng màu biuret với Cu(OH)2 trong môi trường kiềm tạo phức màu tím.'
    ],
    sections: [
      {
        title: '1. Cấu tạo và danh pháp của 5 amino acid tiêu biểu (SGK KNTT)',
        content: `Các amino acid thiên nhiên thường là các **α-amino acid** (nhóm -NH2 đính vào carbon số 2 liền kề nhóm -COOH).
Bảng 5 amino acid học sinh bắt buộc ghi nhớ:
1. **Glycine (Gly):** H2N-CH2-COOH (M = 75). Tên thay thế: 2-aminoethanoic acid. Phân tử có 1 nhóm -NH2 và 1 nhóm -COOH (pH ~ 6, không làm đổi màu quỳ tím).
2. **Alanine (Ala):** CH3-CH(NH2)-COOH (M = 89). Tên thay thế: 2-aminopropanoic acid. (1 -NH2, 1 -COOH, không làm đổi màu quỳ tím).
3. **Valine (Val):** (CH3)2CH-CH(NH2)-COOH (M = 117). Tên thay thế: 2-amino-3-methylbutanoic acid. (1 -NH2, 1 -COOH, không làm đổi màu quỳ tím).
4. **Glutamic acid (Glu):** HOOC-[CH2]2-CH(NH2)-COOH (M = 147). Tên thay thế: 2-aminopentanedioic acid. Có **2 nhóm -COOH, 1 nhóm -NH2** (dung dịch có tính acid yếu, pH < 7, làm quỳ tím chuyển màu đỏ nhạt; khi điện di ở pH 6 sẽ dịch chuyển về cực dương - anode). Muối monosodium glutamate là mì chính (bột ngọt).
5. **Lysine (Lys):** H2N-[CH2]4-CH(NH2)-COOH (M = 146). Tên thay thế: 2,6-diaminohexanoic acid. Có **1 nhóm -COOH, 2 nhóm -NH2** (dung dịch có tính base yếu, pH > 7, làm quỳ tím chuyển màu xanh nhạt; khi điện di dịch chuyển về cực âm - cathode).`,
        keyPoints: [
          'M phân tử: Gly (75), Ala (89), Val (117), Lys (146), Glu (147).',
          'Đổi màu quỳ: Gly, Ala, Val không đổi màu; Glu hoá đỏ nhạt; Lys hoá xanh nhạt.',
          'Trong tinh thể và dung dịch, amino acid tồn tại dạng ion lưỡng cực: +H3N-CH(R)-COO-.'
        ]
      },
      {
        title: '2. Tính chất hoá học của Amino acid',
        content: `Do chứa cả nhóm base (-NH2) và nhóm acid (-COOH), amino acid có tính chất lưỡng tính (amphoteric), có thể tác dụng với acid mạnh và base mạnh.`,
        reactions: [
          {
            reactants: 'H2N-CH2-COOH + HCl → ClH3N-CH2-COOH',
            products: 'Muối glycine hydrochloride',
            condition: 'Tác dụng acid mạnh',
            note: 'Phản ứng xảy ra ở nhóm amino -NH2.'
          },
          {
            reactants: 'H2N-CH2-COOH + NaOH → H2N-CH2-COONa + H2O',
            products: 'Muối sodium glycinate + Nước',
            condition: 'Tác dụng base mạnh',
            note: 'Phản ứng xảy ra ở nhóm carboxyl -COOH.'
          },
          {
            reactants: 'H2N-CH2-COOH + C2H5OH ⇄ ClH3N-CH2-COOC2H5 + H2O',
            products: 'Ethyl glycinate hydrochloride',
            condition: 'Xúc tác khí HCl bão hoà, đun nóng',
            note: 'Phản ứng ester hoá của nhóm -COOH.'
          },
          {
            reactants: 'n H2N-[CH2]5-COOH → (-NH-[CH2]5-CO-)n + n H2O',
            products: 'Polycaproamide (nylon-6)',
            condition: 'Nhiệt độ cao, áp suất',
            note: 'Phản ứng trùng ngưng tạo polypeptide / polyamide.'
          }
        ]
      },
      {
        title: '3. Khái niệm và cấu tạo của Peptide',
        content: `• **Khái niệm:** Peptide là hợp chất chứa từ 2 đến 50 gốc α-amino acid liên kết với nhau bằng các **liên kết peptide**.
• **Liên kết peptide:** Là liên kết amide **-CO-NH-** được hình thành giữa nhóm carboxyl của gốc α-amino acid này với nhóm amino của gốc α-amino acid khác.
  *Chú ý:* Liên kết -CO-NH- giữa các gốc không phải vị trí α thì chỉ là liên kết amide thông thường, không phải liên kết peptide.
• **Phân loại:**
  - Oligopeptide: Gồm 2 đến 10 gốc α-amino acid (dipeptide, tripeptide, tetrapeptide...).
  - Polypeptide: Gồm 11 đến 50 gốc α-amino acid.
• **Quy ước đầu N và đầu C:**
  - Đầu N: Gốc amino acid còn nhóm -NH2 tự do (viết bên trái).
  - Đầu C: Gốc amino acid còn nhóm -COOH tự do (viết bên phải).
  - Ví dụ: Trong Gly-Ala-Val: Gly là đầu N, Val là đầu C. Số liên kết peptide = 3 - 1 = 2 liên kết.`,
        keyPoints: [
          'Số liên kết peptide trong phân tử có n gốc α-amino acid là: n - 1 liên kết.',
          'Dipeptide có 1 liên kết peptide; Tripeptide có 2 liên kết peptide; Tetrapeptide có 3 liên kết peptide.',
          'Các peptide khác nhau về thứ tự các gốc amino acid sẽ là các đồng phân khác nhau (ví dụ: Gly-Ala khác Ala-Gly).'
        ]
      },
      {
        title: '4. Tính chất hoá học của Peptide',
        content: `• **Phản ứng thuỷ phân:** Dưới tác dụng của acid, base hoặc enzyme, peptide bị thuỷ phân hoàn toàn thành các α-amino acid hoặc thuỷ phân không hoàn toàn thành các peptide ngắn hơn.
  - Thuỷ phân bằng acid: Peptide + (n-1) H2O + n HCl → n Muối chloride của amino acid.
  - Thuỷ phân bằng kiềm: Peptide + n NaOH → n Muối sodium của amino acid + 1 H2O.
• **Phản ứng màu biuret:** Trong môi trường kiềm, peptide có từ **2 liên kết peptide trở lên** (tức từ **tripeptide** trở lên) tác dụng với Cu(OH)2 tạo dung dịch phức màu tím đặc trưng.
  *Cực kì quan trọng:* **Dipeptide KHÔNG cho phản ứng màu biuret** vì chỉ có 1 liên kết peptide.`,
        experiments: [
          {
            name: 'Thí nghiệm phản ứng màu biuret với Tripeptide',
            procedure: 'Cho vào ống nghiệm 1 mL dung dịch NaOH 10%, thêm 2 - 3 giọt dung dịch CuSO4 2%, lắc đều (tạo kết tủa Cu(OH)2 xanh lơ). Sau đó cho tiếp 2 mL dung dịch Ala-Gly-Val vào, lắc nhẹ.',
            observation: 'Kết tủa Cu(OH)2 tan ra, dung dịch chuyển sang màu tím đặc trưng.',
            explanation: 'Do các nguyên tử nitrogen trong liên kết peptide tạo phức chelate với ion Cu2+ trong môi trường kiềm.'
          }
        ]
      }
    ],
    memoryTips: [
      '⚡ Mẹo tính phân tử khối Peptide: M(Peptide n mắt xích) = Tổng M(các amino acid) - 18 × (n - 1).',
      '⚡ Mẹo màu Biuret: Chỉ Tripeptide trở lên mới có màu TÍM (Dipeptide KHÔNG có phản ứng biuret).',
      '⚡ Mẹo Amino acid làm đổi màu quỳ: Glu (2 COOH > 1 NH2) -> Đỏ nhạt; Lys (2 NH2 > 1 COOH) -> Xanh nhạt; Gly, Ala, Val (1 COOH = 1 NH2) -> Không đổi màu.'
    ]
  },
  {
    id: 'bai-10',
    lessonNumber: 10,
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    title: 'Bài 10: Protein và Enzyme',
    subtitle: 'Cấu trúc 4 bậc, tính đông tụ, phản ứng màu đặc trưng và tính xúc tác đặc hiệu của enzyme',
    description: 'Nghiên cứu protein (polypeptide cao phân tử), sự đông tụ bởi nhiệt và acid/base, phản ứng màu biuret, phản ứng xanthoproteic với HNO3 đặc, và vai trò xúc tác siêu việt của enzyme.',
    estimatedMinutes: 35,
    overview: [
      'Protein là những polypeptide cao phân tử có phân tử khối từ vài chục nghìn đến hàng triệu Da.',
      'Protein gồm 4 bậc cấu trúc không gian (Bậc 1, 2, 3, 4); trong đó bậc 1 là trình tự gốc amino acid.',
      'Protein hình cầu (albumin lòng trắng trứng, hemoglobin) tan tạo dung dịch keo; Protein dạng sợi (keratin tóc móng, fibroin tơ tằm, collagen) không tan trong nước.',
      'Protein bị đông tụ khi đun nóng, hoặc thêm acid, base, muối kim loại nặng.',
      'Protein cho phản ứng màu biuret (tím) với Cu(OH)2 và tạo kết tủa vàng với HNO3 đặc (phản ứng xanthoproteic).',
      'Enzyme là chất xúc tác sinh học bản chất protein, có tính chọn lọc cao và tốc độ xúc tác cực lớn.'
    ],
    sections: [
      {
        title: '1. Khái niệm và phân loại Protein',
        content: `• **Khái niệm:** Protein là những polypeptide cao phân tử có phân tử khối từ khoảng vài chục nghìn đến hàng triệu Da, cấu tạo từ các đơn vị α-amino acid liên kết bởi liên kết peptide.
• **Phân loại:**
  - **Protein đơn giản:** Khi thuỷ phân hoàn toàn chỉ sinh ra hỗn hợp các α-amino acid. Ví dụ: Albumin (lòng trắng trứng), fibroin (tơ tằm), keratin (tóc, móng, sừng), collagen (gân, sụn, da).
  - **Protein phức tạp:** Tạo thành từ protein đơn giản liên kết với nhóm phi protein (nhóm ngoại prosthetic). Ví dụ: Hemoglobin (chứa nhân heme có ion Fe2+ giúp vận chuyển O2 trong máu), lipoprotein (chứa lipid), glycoprotein (chứa carbohydrate).`,
        keyPoints: [
          'Protein đơn giản: Chỉ tạo bởi các gốc α-amino acid.',
          'Hemoglobin là protein phức tạp có chứa ion sắt(II) vận chuyển oxygen.'
        ]
      },
      {
        title: '2. Cấu trúc không gian của Protein',
        content: `Phân tử protein có 4 bậc cấu trúc không gian:
• **Cấu trúc bậc 1:** Là trình tự sắp xếp các gốc α-amino acid trong chuỗi polypeptide liên kết với nhau bằng các liên kết peptide. Đây là cấu trúc cơ sở quyết định cấu trúc bậc cao và hoạt tính sinh học của protein.
• **Cấu trúc bậc 2:** Chuỗi polypeptide cuộn lại thành dạng xoắn α (alpha-helix) hoặc gấp nếp β (beta-pleated sheet) nhờ các liên kết hydrogen giữa các nhóm -CO- và -NH- của các liên kết peptide.
• **Cấu trúc bậc 3:** Cấu trúc bậc 2 cuộn gấp tạo thành cấu trúc không gian 3 chiều đặc thù của protein, được giữ vững nhờ liên kết disulfide (-S-S-), liên kết ion, tương tác kị nước và liên kết hydrogen.
• **Cấu trúc bậc 4:** Gồm hai hay nhiều chuỗi polypeptide có cấu trúc bậc 3 kết hợp với nhau thành một khối chức năng hoàn chỉnh (ví dụ: phân tử Hemoglobin gồm 4 chuỗi polypeptide: 2 chuỗi α và 2 chuỗi β).`,
        keyPoints: [
          'Cấu trúc bậc 1: Trình tự gốc amino acid (liên kết peptide bền vững).',
          'Cấu trúc bậc 2: Xoắn α và phiến gấp β (liên kết hydrogen).',
          'Cấu trúc bậc 3: Cấu trúc không gian 3D đặc trưng.',
          'Cấu trúc bậc 4: Tập hợp nhiều chuỗi tiểu đơn vị.'
        ]
      },
      {
        title: '3. Tính chất vật lí và Hiện tượng đông tụ Protein',
        content: `• **Độ tan:**
  - Protein dạng hình cầu (như albumin trong lòng trắng trứng, hemoglobin trong máu): Tan được trong nước tạo dung dịch keo.
  - Protein dạng sợi (như keratin trong tóc, móng; fibroin trong tơ tằm; collagen trong da, gân): Hoàn toàn không tan trong nước, bền cơ học.
• **Hiện tượng đông tụ (Coagulation):**
  - Khi đun nóng hoặc khi có mặt acid, base, muối của kim loại nặng (hoặc dung môi hữu cơ như cồn), cấu trúc không gian bậc cao của protein bị phá vỡ, làm protein bị biến tính (denaturation) và kết tụ lại, tách ra khỏi dung dịch.
  - *Hiện tượng thực tế:*
    + Luộc trứng lòng trắng chuyển từ trong suốt sang màu trắng đục rắn chắc.
    + Nấu canh cua: Khi đun nóng, protein trong thịt cua nổi lên thành từng mảng riêu cua.
    + Làm đậu phụ: Thêm nước chua (acid acetic) hoặc nước cái đậu/thạch cao vào sữa đậu nành để protein đông tụ thành óc đậu.
    + Sát trùng bằng cồn y tế 70°: Cồn làm đông tụ protein của vi khuẩn, tiêu diệt vi khuẩn.`,
        keyPoints: [
          'Đông tụ do nhiệt độ: Nấu canh riêu cua, luộc trứng.',
          'Đông tụ do acid/base: Làm sữa chua, làm đậu phụ bằng nước chua.'
        ]
      },
      {
        title: '4. Tính chất hoá học của Protein',
        content: `• **Phản ứng thuỷ phân:** Tương tự peptide, protein bị thuỷ phân hoàn toàn dưới tác dụng của xúc tác acid, base hoặc enzyme đặc hiệu (pepsin, trypsin) giải phóng hỗn hợp các α-amino acid.
• **Phản ứng màu đặc trưng:**
  - **Phản ứng màu biuret:** Khi cho dung dịch protein (như lòng trắng trứng) tác dụng với Cu(OH)2 trong môi trường kiềm, xuất hiện màu tím đặc trưng do tạo phức chất giữa ion Cu2+ và các liên kết peptide.
  - **Phản ứng với nitric acid đặc (Xanthoproteic):** Khi cho HNO3 đặc vào dung dịch lòng trắng trứng và đun nóng, xuất hiện kết tủa màu vàng. Sau đó thêm tiếp dung dịch NH3 đặc thì màu vàng chuyển thành màu da cam.
    *Giải thích:* Do phản ứng nitro hoá các vòng benzen của các gốc amino acid thơm (như tyrosine, phenylalanine) có trong phân tử protein. Đây là lí do khi acid nitric dính vào da, vùng da đó bị chuyển sang màu vàng!`,
        reactions: [
          {
            reactants: 'Protein + Cu(OH)2 trong NaOH',
            products: 'Dung dịch phức chất màu tím đặc trưng',
            condition: 'Môi trường kiềm, nhiệt độ phòng',
            note: 'Phản ứng biuret dùng nhận biết protein và peptide từ tripeptide trở lên.'
          },
          {
            reactants: 'Protein + HNO3 đặc --t°--> Kết tủa vàng',
            products: 'Hợp chất nitro có màu vàng (Xanthoproteic)',
            condition: 'Đun nóng nhẹ',
            note: 'Nhận biết protein chứa gốc amino acid có vòng thơm.'
          }
        ]
      },
      {
        title: '5. Khái niệm và Vai trò của Enzyme',
        content: `• **Khái niệm:** Enzyme là chất xúc tác sinh học hầu hết có bản chất là protein, được sinh ra bởi các tế bào sống.
• **Đặc điểm nổi bật của xúc tác enzyme:**
  - **Tốc độ xúc tác cực lớn:** Tốc độ phản ứng dưới xúc tác enzyme lớn gấp từ 10⁶ đến 10¹² lần so với chất xúc tác hoá học vô cơ.
  - **Tính chọn lọc rất cao (tính đặc hiệu):** Mỗi enzyme chỉ xúc tác cho một phản ứng nhất định hoặc một kiểu phản ứng nhất định (cơ chế "chìa khoá và ổ khoá" - lock and key). Ví dụ: Urease chỉ xúc tác thuỷ phân urea thành NH3 và CO2; Amylase chỉ xúc tác thuỷ phân tinh bột thành maltose.
  - **Điều kiện phản ứng êm dịu:** Hoạt động tốt nhất ở nhiệt độ cơ thể (khoảng 37°C) và khoảng pH sinh lí xác định. Nếu đun sôi, enzyme bị biến tính và mất hoạt tính xúc tác.
• **Ứng dụng:** Lên men rượu bia, sản xuất sữa chua, phô mai, làm mềm thịt (papain từ đu đủ), sản xuất bột giặt sinh học chứa enzyme protease và lipase.`,
        keyPoints: [
          'Enzyme có bản chất là protein.',
          '2 đặc tính vượt trội: Tốc độ xúc tác siêu nhanh và tính chọn lọc (đặc hiệu) rất cao.'
        ]
      }
    ],
    memoryTips: [
      '⚡ Mẹo phân biệt màu sắc protein: Cu(OH)2 / OH- ra màu TÍM (biuret); HNO3 đặc đun nóng ra màu VÀNG (xanthoproteic).',
      '⚡ Mẹo đông tụ: Nhiệt độ cao, acid, kiềm làm protein biến tính không hồi phục.',
      '⚡ Mẹo enzyme: Đều là chất xúc tác sinh học có bản chất protein, bị bất hoạt khi đun sôi!'
    ]
  },
  {
    id: 'bai-11',
    lessonNumber: 11,
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    title: 'Bài 11: Ôn tập chương 3 (Hợp chất chứa nitrogen)',
    subtitle: 'Hệ thống hoá kiến thức toàn chương, sơ đồ tư duy, so sánh và phương pháp giải bài toán tổng hợp',
    description: 'Tổng kết toàn diện Amine, Amino acid, Peptide và Protein. Rèn luyện kĩ năng phân biệt hoá chất, chuỗi biến hoá và bài toán trắc nghiệm trọng điểm chuẩn đề thi THPT.',
    estimatedMinutes: 45,
    overview: [
      'Bảng tổng hợp tính chất: Amine, Amino acid, Peptide, Protein.',
      'So sánh lực base và tính acid - base của các chất chứa nitrogen.',
      'Thuốc thử nhận biết đặc trưng: Quỳ tím, Cu(OH)2, Dung dịch Bromine, HNO2, HNO3 đặc.',
      'Phương pháp giải bài toán thuỷ phân peptide và bài toán đốt cháy amine/amino acid.'
    ],
    sections: [
      {
        title: '1. Sơ đồ so sánh đặc tính Amine, Amino acid, Peptide và Protein',
        content: `Hệ thống phân biệt các hợp chất chứa nitrogen trọng tâm:
1. **Amine:** Chứa nhóm chức amine (-NH2, -NH-, -N<). Tính base đặc trưng, tác dụng acid tạo muối. Alkylamine tan trong nước làm quỳ tím hóa xanh. Aniline không làm đổi màu quỳ, tạo kết tủa trắng với nước bromine.
2. **Amino acid:** Chứa đồng thời nhóm -NH2 và nhóm -COOH. Tồn tại dạng ion lưỡng cực, nhiệt độ nóng chảy cao. Tính chất lưỡng tính (vừa tác dụng acid, vừa tác dụng base). Phản ứng trùng ngưng tạo polypeptide.
3. **Peptide:** Chứa từ 2 đến 50 gốc α-amino acid liên kết bởi liên kết peptide (-CO-NH-). Phản ứng thuỷ phân (xúc tác acid, base, enzyme). Phản ứng màu biuret với Cu(OH)2/OH- (chỉ tripeptide trở lên).
4. **Protein:** Polypeptide cao phân tử. Bị đông tụ bởi nhiệt độ, acid, base. Phản ứng màu biuret (tím), phản ứng với HNO3 đặc tạo kết tủa vàng.
5. **Enzyme:** Chất xúc tác sinh học có bản chất là protein, tốc độ cực nhanh, tính đặc hiệu cao.`,
        keyPoints: [
          'Chất lưỡng tính: Amino acid.',
          'Chất có phản ứng biuret: Peptide từ tripeptide trở lên và Protein.',
          'Chất tạo kết tủa trắng với nước Bromine: Aniline (và Phenol).'
        ]
      },
      {
        title: '2. Bảng nhận biết các chất hữu cơ chứa nitrogen',
        content: `Khi gặp bài tập nhận biết các dung dịch riêng biệt:
• **Quỳ tím:**
  - Hóa xanh: Methylamine, ethylamine, dimethylamine, Lysine (2 NH2 > 1 COOH).
  - Hóa đỏ: Glutamic acid (2 COOH > 1 NH2).
  - Không đổi màu: Glycine, Alanine, Valine (1 NH2 = 1 COOH), Aniline, Peptide, Albumin.
• **Dung dịch Bromine:**
  - Tạo kết tủa trắng ngay lập tức: Aniline (C6H5NH2).
• **Cu(OH)2 trong môi trường kiềm (ở nhiệt độ phòng):**
  - Tạo dung dịch xanh lam thẫm phức amine: Dung dịch methylamine, ethylamine.
  - Tạo dung dịch phức màu tím (phản ứng biuret): Tripeptide trở lên, Albumin (lòng trắng trứng).
  - *Lưu ý phân biệt carbohydrate:* Glucose, saccharose tạo phức xanh lam của polyalcohol; đun nóng glucose với Cu(OH)2/OH- tạo kết tủa đỏ gạch Cu2O.
• **Đun nóng nhẹ:**
  - Đông tụ tạo mảng rắn trắng đục: Albumin (lòng trắng trứng).
• **Dung dịch HNO3 đặc:**
  - Tạo kết tủa màu vàng: Protein (như lòng trắng trứng) do phản ứng xanthoproteic.`,
        keyPoints: [
          'Dipeptide không có phản ứng biuret, tripeptide trở lên và protein thì có.',
          'Aniline nhận biết bằng nước bromine tạo kết tủa trắng.',
          'Glutamic acid làm quỳ hóa đỏ, Lysine làm quỳ hóa xanh.'
        ]
      },
      {
        title: '3. Phương pháp giải bài toán trọng tâm Chương 3',
        content: `• **Dạng 1: Bài toán phản ứng acid - base của Amine:**
  - RNH2 + HCl → RNH3Cl. Định luật bảo toàn khối lượng: m(muối) = m(amine) + m(HCl).
  - Số mol HCl phản ứng = số nhóm chức amine (-NH2) trong phân tử.
• **Dạng 2: Bài toán lưỡng tính của Amino acid:**
  - Số nhóm -NH2 = n(HCl) / n(amino acid).
  - Số nhóm -COOH = n(NaOH) / n(amino acid).
  - Khi cho amino acid tác dụng vừa đủ với HCl rồi cho tiếp NaOH dư vào dung dịch: bản chất là NaOH tác dụng với cả HCl dư và các nhóm -COOH của amino acid!
• **Dạng 3: Bài toán thuỷ phân hoàn toàn Peptide:**
  - Thủy phân trong dung dịch NaOH:
    X_n (n mắt xích) + n NaOH → Hỗn hợp muối amino acid + 1 H2O.
    *Định luật bảo toàn khối lượng:* m(peptide) + m(NaOH) = m(muối) + m(H2O), với n(H2O) = n(peptide).
  - Thủy phân trong dung dịch HCl:
    X_n + (n - 1) H2O + n HCl → Hỗn hợp muối chloride của amino acid.
    *Bảo toàn khối lượng:* m(peptide) + m(H2O) + m(HCl) = m(muối).`,
        keyPoints: [
          'Bảo toàn khối lượng là chìa khoá giải nhanh bài toán peptide.',
          'n(H2O sinh ra khi peptide tác dụng NaOH) = n(peptide ban đầu).'
        ]
      }
    ],
    memoryTips: [
      '⚡ Mẹo bảo toàn mol nước thủy phân kiềm: 1 mol peptide n mắt xích + n mol NaOH -> Muối + 1 mol H2O!',
      '⚡ Mẹo ghi nhớ khối lượng mol: Gly(75), Ala(89), Val(117), Glu(147), Lys(146). Độ chênh lệch giữa Ala và Gly là 14 (nhóm -CH2-).',
      '⚡ Cấu trúc đề 2025: Đọc kĩ các nhận định đúng sai để không bỏ sót các từ bẫy ("tất cả", "chỉ có", "nguyên tử alpha").'
    ]
  }
];

export const QUESTIONS: Question[] = [
  // ==========================================
  // BÀI 8: AMINE (16 câu: 8 trắc nghiệm 4 lựa chọn, 4 đúng/sai, 4 trả lời ngắn)
  // ==========================================
  {
    id: 'b8-q1',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 1: Bậc của amine',
    context: 'Cho hợp chất có công thức cấu tạo: (CH3)2CH-NH-CH3.',
    options: [
      'Bậc I',
      'Bậc II',
      'Bậc III',
      'Bậc IV'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Bậc của amine được tính bằng số nguyên tử hydrogen trong phân tử NH3 bị thay thế bởi gốc hydrocarbon. Trong phân tử (CH3)2CH-NH-CH3, nguyên tử N liên kết với 2 gốc hydrocarbon: gốc isopropyl (-CH(CH3)2) và gốc methyl (-CH3), do đó đây là amine bậc II.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Khái niệm và phân loại amine'
  },
  {
    id: 'b8-q2',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 2: Amine thể khí ở điều kiện thường',
    context: 'Chất nào sau đây ở thể khí ở điều kiện thường, có mùi khai khó chịu và độc hại?',
    options: [
      'Aniline (C6H5NH2)',
      'Methylamine (CH3NH2)',
      'Benzylamine (C6H5CH2NH2)',
      'Hexan-1-amine (CH3[CH2]5NH2)'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Theo SGK Hoá 12 Kết nối tri thức: Methylamine, dimethylamine, trimethylamine và ethylamine là những chất khí ở điều kiện thường, có mùi khai khó chịu, độc và tan nhiều trong nước. Aniline và benzylamine là chất lỏng.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Tính chất vật lí của amine'
  },
  {
    id: 'b8-q3',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 3: So sánh lực base của các amine',
    context: 'Dãy nào sau đây sắp xếp các chất theo thứ tự lực base GIẢM DẦN?',
    options: [
      'C2H5NH2 > CH3NH2 > NH3 > C6H5NH2',
      'C6H5NH2 > NH3 > CH3NH2 > C2H5NH2',
      'NH3 > C2H5NH2 > CH3NH2 > C6H5NH2',
      'CH3NH2 > C2H5NH2 > C6H5NH2 > NH3'
    ],
    correctOption: 0,
    difficulty: 'Thông hiểu',
    explanation: 'Gốc alkyl (no, đẩy electron) làm tăng mật độ electron trên nguyên tử N, làm tăng lực base: C2H5NH2 > CH3NH2 > NH3. Gốc phenyl (C6H5-) hút electron làm giảm mật độ electron trên N, làm lực base của aniline rất yếu (yếu hơn NH3 và không làm đổi màu quỳ tím). Thứ tự giảm dần: C2H5NH2 > CH3NH2 > NH3 > C6H5NH2.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Tính chất hoá học của amine'
  },
  {
    id: 'b8-q4',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 4: Phản ứng nhận biết Aniline',
    context: 'Để nhận biết dung dịch aniline trong phòng thí nghiệm, thuốc thử thích hợp nhất là',
    options: [
      'Dung dịch NaOH',
      'Giấy quỳ tím ẩm',
      'Nước bromine',
      'Dung dịch NaCl'
    ],
    correctOption: 2,
    difficulty: 'Nhận biết',
    explanation: 'Khi cho nước bromine vào ống nghiệm chứa aniline, xảy ra phản ứng thế ở nhân thơm tạo kết tủa trắng 2,4,6-tribromoaniline và làm mất màu dung dịch nước bromine. Quỳ tím không đổi màu vì lực base của aniline quá yếu.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Phản ứng thế ở nhân thơm của aniline'
  },
  {
    id: 'b8-q5',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 5: Tên thay thế của CH3-CH(NH2)-CH3',
    context: 'Theo danh pháp thay thế IUPAC, hợp chất CH3-CH(NH2)-CH3 có tên gọi là',
    options: [
      'Isopropylamine',
      'Propan-2-amine',
      'Dimethylmethanamine',
      'Propan-1-amine'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Mạch chính gồm 3 nguyên tử C (propane), nhóm amin (-NH2) đính ở nguyên tử carbon số 2. Tên thay thế là propan-2-amine. (Tên gốc - chức của chất này là isopropylamine).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Danh pháp amine'
  },
  {
    id: 'b8-q6',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 6: Phản ứng của ethylamine với nitrous acid (HNO2)',
    context: 'Khi cho ethylamine (C2H5NH2) tác dụng với dung dịch HNO2 ở nhiệt độ thường, hiện tượng quan sát được là',
    options: [
      'Xuất hiện kết tủa màu vàng',
      'Có bọt khí không màu sủi lên',
      'Dung dịch đổi từ không màu sang màu tím',
      'Không có hiện tượng gì'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Amine bậc I dãy béo (như ethylamine) tác dụng với HNO2 ở nhiệt độ thường tạo ra alcohol và giải phóng khí nitrogen: C2H5NH2 + HNO2 → C2H5OH + N2↑ + H2O. Do đó ta quan sát thấy bọt khí sủi lên.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Phản ứng với nitrous acid'
  },
  {
    id: 'b8-q7',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 7: Hiện tượng khi nhỏ dung dịch NaOH vào dung dịch muối aniline hydrochloride',
    context: 'Cho dung dịch NaOH vào ống nghiệm đựng dung dịch phenylammonium chloride (C6H5NH3Cl trong suốt), hiện tượng quan sát được là',
    options: [
      'Dung dịch xuất hiện kết tủa trắng không tan',
      'Dung dịch bị vẩn đục do aniline tách lớp',
      'Có khí mùi khai bay ra',
      'Không có hiện tượng gì vì không phản ứng'
    ],
    correctOption: 1,
    difficulty: 'Vận dụng',
    explanation: 'Phương trình phản ứng: C6H5NH3Cl + NaOH → C6H5NH2 + NaCl + H2O. Aniline sinh ra là chất lỏng rất ít tan trong nước nên làm dung dịch bị vẩn đục và sau đó lắng xuống đáy ống nghiệm do aniline có khối lượng riêng lớn hơn nước.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Tính base của aniline'
  },
  {
    id: 'b8-q8',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'single_choice',
    title: 'Câu 8: Khả năng hoà tan Cu(OH)2 của methylamine',
    context: 'Khi cho lượng dư dung dịch methylamine vào ống nghiệm đựng kết tủa Cu(OH)2 màu xanh lơ, hiện tượng xảy ra là',
    options: [
      'Kết tủa Cu(OH)2 tan dần, tạo dung dịch phức chất màu xanh lam thẫm',
      'Kết tủa chuyển sang màu đen của CuO',
      'Kết tủa chuyển sang màu đỏ gạch của Cu2O',
      'Kết tủa không tan vì methylamine là chất hữu cơ'
    ],
    correctOption: 0,
    difficulty: 'Thông hiểu',
    explanation: 'Tương tự như ammonia (NH3), các alkylamine bậc thấp như methylamine có cặp electron tự do trên nguyên tử nitrogen có khả năng tạo phức chất tan với ion Cu2+: 4CH3NH2 + Cu(OH)2 → [Cu(CH3NH2)4](OH)2 (dung dịch màu xanh lam thẫm).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Khả năng tạo phức của amine'
  },
  {
    id: 'b8-q9',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'true_false',
    title: 'Câu 9 (Đúng/Sai): Đặc điểm cấu tạo và tính chất vật lí của amine',
    context: 'Xét tính đúng hoặc sai của các phát biểu sau về hợp chất amine:',
    subItems: [
      {
        id: 'a',
        statement: 'Bậc của amine được xác định bằng số nguyên tử carbon liên kết với nguyên tử nitrogen.',
        isTrue: false,
        explanation: 'Sai. Bậc của amine được tính bằng số gốc hydrocarbon liên kết trực tiếp với nguyên tử N (hoặc số nguyên tử H trong NH3 bị thay thế).'
      },
      {
        id: 'b',
        statement: 'Tất cả các amine đều có mùi thơm dễ chịu và không độc.',
        isTrue: false,
        explanation: 'Sai. Các amine đơn giản như methylamine, dimethylamine có mùi khai khó chịu tương tự ammonia và đều độc hại.'
      },
      {
        id: 'c',
        statement: 'Aniline là chất lỏng không màu, nặng hơn nước, ít tan trong nước lạnh nhưng tan nhiều trong ethanol.',
        isTrue: true,
        explanation: 'Đúng. Aniline có d > 1 g/cm³, ít tan trong nước nhưng tan tốt trong dung môi hữu cơ.'
      },
      {
        id: 'd',
        statement: 'Để lâu trong không khí, aniline bị oxi hoá chậm và chuyển dần từ không màu sang màu nâu đen.',
        isTrue: true,
        explanation: 'Đúng. Nhóm -NH2 đẩy electron làm nhân thơm rất dễ bị oxi hoá bởi oxygen trong không khí tạo sản phẩm có màu tối.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Phân tích các nhận định dựa trên kiến thức cấu tạo, bậc amine và tính chất vật lí cơ bản trong SGK Hoá 12 KNTT.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Cấu tạo & tính chất vật lí amine'
  },
  {
    id: 'b8-q10',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'true_false',
    title: 'Câu 10 (Đúng/Sai): Tính chất hoá học của amine và aniline',
    context: 'Cho các phát biểu sau về tính chất hoá học của hợp chất amine:',
    subItems: [
      {
        id: 'a',
        statement: 'Dung dịch dimethylamine và ethylamine đều làm quỳ tím ẩm chuyển sang màu xanh.',
        isTrue: true,
        explanation: 'Đúng. Các alkylamine có tính base mạnh hơn NH3, trong nước phân li cho ion OH- làm quỳ tím chuyển xanh.'
      },
      {
        id: 'b',
        statement: 'Aniline làm phenolphtalein chuyển sang màu hồng đậm vì là amine thơm.',
        isTrue: false,
        explanation: 'Sai. Lực base của aniline rất yếu do hiệu ứng hút e của gốc phenyl, aniline không làm đổi màu quỳ tím hay phenolphthalein.'
      },
      {
        id: 'c',
        statement: 'Aniline phản ứng với nước bromine sinh ra kết tủa trắng 2,4,6-tribromoaniline.',
        isTrue: true,
        explanation: 'Đúng. Đây là phản ứng thế ở nhân thơm dùng nhận biết aniline.'
      },
      {
        id: 'd',
        statement: 'Ở nhiệt độ 0 - 5°C, aniline tác dụng với dung dịch NaNO2 trong HCl tạo thành muối diazonium.',
        isTrue: true,
        explanation: 'Đúng. C6H5NH2 + NaNO2 + 2HCl → [C6H5N2+]Cl- + NaCl + 2H2O. Phản ứng tạo muối diazonium dùng sản xuất phẩm nhuộm azo.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Cần phân biệt rõ sự khác nhau giữa alkylamine (tính base mạnh, quỳ hoá xanh) và arylamine (tính base rất yếu, phản ứng thế nhân thơm dễ dàng).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Tính chất hoá học'
  },
  {
    id: 'b8-q11',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'true_false',
    title: 'Câu 11 (Đúng/Sai): Thí nghiệm hoá học với amine',
    context: 'Tiến hành các thí nghiệm sau trong phòng thí nghiệm:',
    subItems: [
      {
        id: 'a',
        statement: 'Đưa đũa thuỷ tinh nhúng dung dịch HCl đặc lại gần miệng lọ đựng dung dịch methylamine đậm đặc thì thấy xuất hiện khói trắng.',
        isTrue: true,
        explanation: 'Đúng. CH3NH2 bay hơi gặp HCl bay hơi tạo thành các tinh thể muối CH3NH3Cl lơ lửng tạo hiện tượng khói trắng.'
      },
      {
        id: 'b',
        statement: 'Rửa sạch ống nghiệm dính aniline bằng dung dịch HCl, sau đó rửa lại bằng nước sạch.',
        isTrue: true,
        explanation: 'Đúng. Aniline ít tan trong nước nhưng tác dụng với HCl tạo muối C6H5NH3Cl tan tốt trong nước, dễ dàng bị rửa trôi.'
      },
      {
        id: 'c',
        statement: 'Cho ethylamine tác dụng với dung dịch HNO2 ở nhiệt độ phòng không giải phóng chất khí nào.',
        isTrue: false,
        explanation: 'Sai. Amine no bậc I tác dụng với HNO2 giải phóng khí nitrogen N2↑.'
      },
      {
        id: 'd',
        statement: 'Nhỏ nước bromine vào dung dịch phenylammonium chloride (C6H5NH3Cl) sẽ xuất hiện kết tủa trắng ngay lập tức.',
        isTrue: false,
        explanation: 'Sai. Trong muối C6H5NH3Cl, cặp electron tự do trên N đã liên kết với H+, nhóm -NH3+ không hoạt hoá nhân thơm như nhóm -NH2 tự do nên không phản ứng với nước brom ở điều kiện thường.'
      }
    ],
    difficulty: 'Vận dụng',
    explanation: 'Các thí nghiệm thực tế rất quan trọng trong đề thi mới: rửa aniline bằng acid, phản ứng tạo khói trắng, tạo muối diazonium.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Thí nghiệm thực hành amine'
  },
  {
    id: 'b8-q12',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'true_false',
    title: 'Câu 12 (Đúng/Sai): Đồng phân và ứng dụng của amine',
    context: 'Xét các phát biểu sau về đồng phân và ứng dụng của amine:',
    subItems: [
      {
        id: 'a',
        statement: 'Ứng với công thức phân tử C3H9N có tổng cộng 4 đồng phân cấu tạo amine.',
        isTrue: true,
        explanation: 'Đúng. Gồm 2 amine bậc I: propan-1-amine, propan-2-amine; 1 amine bậc II: N-methylethanamine; 1 amine bậc III: trimethylamine.'
      },
      {
        id: 'b',
        statement: 'Chất C6H5CH2NH2 là amine thơm bậc I có tên là phenylmethanamine hoặc benzylamine.',
        isTrue: true,
        explanation: 'Đúng. Nhóm -NH2 liên kết với nguyên tử C no của nhóm benzyl (-CH2C6H5).'
      },
      {
        id: 'c',
        statement: 'Aniline là nguyên liệu quan trọng tổng hợp phẩm nhuộm azo và dược phẩm sulfamide.',
        isTrue: true,
        explanation: 'Đúng. Đây là ứng dụng thực tế lớn nhất của aniline trong công nghiệp hoá chất.'
      },
      {
        id: 'd',
        statement: 'Hexamethylenediamine (H2N-[CH2]6-NH2) dùng để điều chế tơ nylon-6.',
        isTrue: false,
        explanation: 'Sai. Hexamethylenediamine phản ứng trùng ngưng với adipic acid tạo tơ nylon-6,6 (chứ không phải nylon-6).'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Cần phân biệt tơ nylon-6 (tổng hợp từ caprolactam hoặc acid 6-aminohexanoic) và tơ nylon-6,6 (tổng hợp từ hexamethylenediamine và adipic acid).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Ứng dụng & điều chế amine'
  },
  {
    id: 'b8-q13',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'short_answer',
    title: 'Câu 13 (Trả lời ngắn): Số đồng phân amine bậc I của C4H11N',
    context: 'Ứng với công thức phân tử C4H11N, có bao nhiêu đồng phân cấu tạo amine bậc I?',
    correctAnswers: ['4', '4 đồng phân'],
    unit: 'đồng phân',
    difficulty: 'Thông hiểu',
    explanation: 'Amine bậc I có dạng C4H9-NH2. Gốc butyl C4H9- có 4 đồng phân: (1) butan-1-amine; (2) butan-2-amine; (3) 2-methylpropan-1-amine; (4) 2-methylpropan-2-amine. Vậy có 4 đồng phân amine bậc I.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Đồng phân amine'
  },
  {
    id: 'b8-q14',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'short_answer',
    title: 'Câu 14 (Trả lời ngắn): Tổng số đồng phân amine của C4H11N',
    context: 'Ứng với công thức phân tử C4H11N có tất cả bao nhiêu đồng phân cấu tạo amine?',
    correctAnswers: ['8', '8 đồng phân'],
    unit: 'đồng phân',
    difficulty: 'Thông hiểu',
    explanation: 'C4H11N có tổng cộng 8 đồng phân amine: 4 đồng phân bậc I (CH3CH2CH2CH2NH2, CH3CH2CH(NH2)CH3, (CH3)2CHCH2NH2, (CH3)3C-NH2); 3 đồng phân bậc II (CH3-NH-CH2CH2CH3, CH3-NH-CH(CH3)2, C2H5-NH-C2H5); 1 đồng phân bậc III ((CH3)2N-C2H5).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Đồng phân amine'
  },
  {
    id: 'b8-q15',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'short_answer',
    title: 'Câu 15 (Trả lời ngắn): Khối lượng kết tủa thu được từ phản ứng Aniline với Br2',
    context: 'Cho 9,3 gam aniline tác dụng hoàn toàn với lượng dư nước bromine. Khối lượng kết tủa trắng 2,4,6-tribromoaniline thu được là bao nhiêu gam? (Cho H=1, C=12, N=14, Br=80)',
    correctAnswers: ['33', '33 gam', '33g'],
    unit: 'gam',
    difficulty: 'Vận dụng',
    explanation: 'Số mol aniline: n = 9,3 / 93 = 0,1 mol. Phương trình phản ứng: C6H5NH2 + 3Br2 → C6H2Br3NH2↓ + 3HBr. Khối lượng mol của 2,4,6-tribromoaniline (C6H4NBr3 - 2H + 3Br = 93 - 3 + 3×80 = 330 g/mol). Khối lượng kết tủa: m = 0,1 × 330 = 33,0 gam.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Phản ứng brom hoá aniline'
  },
  {
    id: 'b8-q16',
    lessonId: 'bai-8',
    lessonNumber: 8,
    type: 'short_answer',
    title: 'Câu 16 (Trả lời ngắn): Khối lượng muối thu được khi cho methylamine tác dụng HCl',
    context: 'Cho 3,1 gam methylamine (CH3NH2) tác dụng vừa đủ với dung dịch hydrochloric acid. Khối lượng muối methylammonium chloride thu được là bao nhiêu gam? (Cho H=1, C=12, N=14, Cl=35,5)',
    correctAnswers: ['6,75', '6.75', '6,75 gam', '6.75 gam'],
    unit: 'gam',
    difficulty: 'Vận dụng',
    explanation: 'Số mol CH3NH2 = 3,1 / 31 = 0,1 mol. Phương trình phản ứng: CH3NH2 + HCl → CH3NH3Cl. Số mol muối = 0,1 mol. Khối lượng mol của CH3NH3Cl = 12 + 3 + 14 + 3 + 35,5 = 67,5 g/mol. Khối lượng muối m = 0,1 × 67,5 = 6,75 gam.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 8: Phản ứng của amine với acid'
  },

  // ==========================================
  // BÀI 9: AMINO ACID VÀ PEPTIDE (16 câu)
  // ==========================================
  {
    id: 'b9-q1',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 1: Khái niệm amino acid',
    context: 'Amino acid là loại hợp chất hữu cơ nào sau đây?',
    options: [
      'Hợp chất đơn chức chứa nhóm carboxyl',
      'Hợp chất tạp chức chứa đồng thời nhóm amino và nhóm carboxyl',
      'Hợp chất đa chức chứa nhiều nhóm amino',
      'Hợp chất hữu cơ chứa nhóm carbonyl và hydroxyl'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Amino acid là loại hợp chất hữu cơ tạp chức mà phân tử chứa đồng thời nhóm amino (-NH2) và nhóm carboxyl (-COOH). Các α-amino acid thiên nhiên là đơn vị cơ sở cấu thành protein.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Khái niệm amino acid'
  },
  {
    id: 'b9-q2',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 2: Phân tử khối của Glycine và Alanine',
    context: 'Phân tử khối (M) của glycine và alanine lần lượt là',
    options: [
      '75 và 89',
      '89 và 117',
      '75 và 103',
      '147 và 146'
    ],
    correctOption: 0,
    difficulty: 'Nhận biết',
    explanation: 'Glycine (H2N-CH2-COOH) có M = 75. Alanine (CH3-CH(NH2)-COOH) có M = 89 (hơn glycine 1 nhóm -CH2- tức 14 đvC).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Một số amino acid tiêu biểu'
  },
  {
    id: 'b9-q3',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 3: Chất làm quỳ tím chuyển sang màu đỏ nhạt',
    context: 'Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu đỏ (hồng nhạt)?',
    options: [
      'Glycine',
      'Alanine',
      'Glutamic acid',
      'Lysine'
    ],
    correctOption: 2,
    difficulty: 'Thông hiểu',
    explanation: 'Glutamic acid (HOOC-CH2-CH2-CH(NH2)-COOH) có 2 nhóm -COOH và 1 nhóm -NH2, số nhóm acid nhiều hơn nhóm base nên dung dịch có môi trường acid yếu (pH < 7), làm quỳ tím chuyển màu đỏ nhạt.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Tính acid - base của amino acid'
  },
  {
    id: 'b9-q4',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 4: Trạng thái và tính chất vật lí của amino acid',
    context: 'Ở điều kiện thường, amino acid tồn tại chủ yếu ở dạng',
    options: [
      'Phân tử trung hoà không mang điện tích',
      'Ion lưỡng cực (+H3N-R-COO-)',
      'Chất khí dễ bay hơi, ít tan trong nước',
      'Chất lỏng sánh nhờn'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Do có nhóm -COOH có tính acid và nhóm -NH2 có tính base, trong phân tử amino acid xảy ra sự chuyển proton H+ nội phân tử tạo ion lưỡng cực: H2N-R-COOH ⇄ +H3N-R-COO-. Vì tồn tại dạng ion lưỡng cực nên amino acid là chất rắn kết tinh, nhiệt độ nóng chảy cao và tan tốt trong nước.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Cấu tạo ion lưỡng cực'
  },
  {
    id: 'b9-q5',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 5: Số liên kết peptide trong phân tử Ala-Gly-Val',
    context: 'Trong phân tử tripeptide Ala-Gly-Val có bao nhiêu liên kết peptide?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Phân tử Ala-Gly-Val được tạo thành từ 3 gốc α-amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-). Công thức tổng quát: peptide tạo bởi n gốc α-amino acid thì có (n - 1) liên kết peptide.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Khái niệm liên kết peptide'
  },
  {
    id: 'b9-q6',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 6: Phản ứng màu biuret',
    context: 'Peptide nào sau đây KHÔNG có phản ứng màu biuret với Cu(OH)2 trong môi trường kiềm?',
    options: [
      'Gly-Ala',
      'Gly-Ala-Val',
      'Ala-Gly-Gly',
      'Gly-Ala-Val-Glu'
    ],
    correctOption: 0,
    difficulty: 'Thông hiểu',
    explanation: 'Chỉ các peptide có từ 2 liên kết peptide trở lên (tức từ tripeptide trở lên) mới tạo phức chất màu tím đặc trưng với Cu(OH)2 trong môi trường kiềm (phản ứng biuret). Gly-Ala là dipeptide (chỉ có 1 liên kết peptide) nên KHÔNG có phản ứng màu biuret.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Tính chất hoá học của peptide'
  },
  {
    id: 'b9-q7',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 7: Tác dụng lưỡng tính của Glycine',
    context: 'Glycine (H2N-CH2-COOH) có thể tác dụng được với cả hai dung dịch nào sau đây?',
    options: [
      'Dung dịch NaOH và dung dịch NaCl',
      'Dung dịch HCl và dung dịch NaOH',
      'Dung dịch HCl và dung dịch CuCl2',
      'Dung dịch KNO3 và dung dịch Ba(OH)2'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Glycine thể hiện tính chất lưỡng tính: tác dụng với acid mạnh (HCl) thông qua nhóm -NH2 tạo muối ClH3N-CH2-COOH và tác dụng với base mạnh (NaOH) thông qua nhóm -COOH tạo muối H2N-CH2-COONa + H2O.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Tính chất lưỡng tính'
  },
  {
    id: 'b9-q8',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'single_choice',
    title: 'Câu 8: Thủy phân peptide trong môi trường kiềm',
    context: 'Thủy phân hoàn toàn 1 mol tripeptide Gly-Ala-Val trong dung dịch NaOH đun nóng cần vừa đủ bao nhiêu mol NaOH?',
    options: [
      '1 mol',
      '2 mol',
      '3 mol',
      '4 mol'
    ],
    correctOption: 2,
    difficulty: 'Thông hiểu',
    explanation: 'Tripeptide Gly-Ala-Val gồm 3 mắt xích α-amino acid có 1 nhóm -COOH tự do và 2 liên kết peptide. Khi phản ứng với kiềm: Gly-Ala-Val + 3NaOH → Muối sodium của Gly, Ala, Val + 1 H2O. Vậy 1 mol tripeptide phản ứng vừa đủ với 3 mol NaOH.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Phản ứng thuỷ phân peptide'
  },
  {
    id: 'b9-q9',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'true_false',
    title: 'Câu 9 (Đúng/Sai): Cấu tạo và tính chất của Amino acid',
    context: 'Xét tính đúng hoặc sai của các phát biểu sau về amino acid:',
    subItems: [
      {
        id: 'a',
        statement: 'Tất cả các amino acid thiên nhiên đều là α-amino acid và là thành phần cấu tạo nên protein cơ thể sống.',
        isTrue: true,
        explanation: 'Đúng. Đa số amino acid tìm thấy trong protein tự nhiên đều ở vị trí carbon alpha.'
      },
      {
        id: 'b',
        statement: 'Ở trạng thái tinh thể và trong dung dịch, amino acid tồn tại chủ yếu ở dạng phân tử trung hòa không mang điện.',
        isTrue: false,
        explanation: 'Sai. Amino acid tồn tại chủ yếu ở dạng ion lưỡng cực (+H3N-CH(R)-COO-).'
      },
      {
        id: 'c',
        statement: 'Dung dịch lysine làm quỳ tím chuyển sang màu xanh nhạt do phân tử có 2 nhóm amino và 1 nhóm carboxyl.',
        isTrue: true,
        explanation: 'Đúng. Số nhóm amino (-NH2) nhiều hơn carboxyl (-COOH) làm dung dịch có pH > 7.'
      },
      {
        id: 'd',
        statement: 'Muối monosodium glutamate (mì chính) được dùng làm gia vị thực phẩm là muối của glutamic acid.',
        isTrue: true,
        explanation: 'Đúng. Bột ngọt hay mì chính chính là muối monosodium của acid glutamic.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Các amino acid tiêu biểu như Gly, Ala, Val, Glu, Lys là trọng tâm kiểm tra trong chương 3 SGK Kết nối tri thức.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Cấu tạo và tính chất amino acid'
  },
  {
    id: 'b9-q10',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'true_false',
    title: 'Câu 10 (Đúng/Sai): Cấu trúc và phân loại Peptide',
    context: 'Cho các phát biểu sau về cấu trúc của hợp chất peptide:',
    subItems: [
      {
        id: 'a',
        statement: 'Liên kết giữa nhóm -CO- và nhóm -NH- của 2 gốc amino acid bất kì luôn được gọi là liên kết peptide.',
        isTrue: false,
        explanation: 'Sai. Chỉ liên kết amide hình thành giữa nhóm carboxyl và amino ở vị trí α của hai gốc α-amino acid mới được gọi là liên kết peptide.'
      },
      {
        id: 'b',
        statement: 'Phân tử tetrapeptide có chứa 4 liên kết peptide trong phân tử.',
        isTrue: false,
        explanation: 'Sai. Tetrapeptide gồm 4 gốc amino acid nên chỉ chứa (4 - 1) = 3 liên kết peptide.'
      },
      {
        id: 'c',
        statement: 'Trong phân tử peptide, đầu N là đầu còn nhóm amino (-NH2) tự do, đầu C là đầu còn nhóm carboxyl (-COOH) tự do.',
        isTrue: true,
        explanation: 'Đúng. Theo quy ước quốc tế và SGK KNTT.'
      },
      {
        id: 'd',
        statement: 'Gly-Ala và Ala-Gly là cùng một chất vì đều tạo bởi glycine và alanine.',
        isTrue: false,
        explanation: 'Sai. Gly-Ala có đầu N là Gly, đầu C là Ala; trong khi Ala-Gly có đầu N là Ala, đầu C là Gly. Chúng là hai đồng phân cấu tạo khác nhau.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Cần phân biệt liên kết peptide với liên kết amide thông thường và nắm vững cách tính số liên kết peptide.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Khái niệm peptide'
  },
  {
    id: 'b9-q11',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'true_false',
    title: 'Câu 11 (Đúng/Sai): Phản ứng màu biuret và thuỷ phân peptide',
    context: 'Tiến hành các thí nghiệm khảo sát tính chất của peptide:',
    subItems: [
      {
        id: 'a',
        statement: 'Cho dung dịch Cu(OH)2 trong môi trường kiềm vào ống nghiệm đựng Gly-Ala sẽ xuất hiện màu tím đặc trưng.',
        isTrue: false,
        explanation: 'Sai. Gly-Ala là dipeptide, không có phản ứng màu biuret.'
      },
      {
        id: 'b',
        statement: 'Tripeptide Ala-Gly-Val tác dụng với Cu(OH)2 trong môi trường kiềm tạo hợp chất phức có màu tím.',
        isTrue: true,
        explanation: 'Đúng. Tripeptide có 2 liên kết peptide nên cho phản ứng biuret dương tính.'
      },
      {
        id: 'c',
        statement: 'Thủy phân hoàn toàn peptide Gly-Ala-Gly trong dung dịch HCl dư thu được hỗn hợp các amino acid tự do.',
        isTrue: false,
        explanation: 'Sai. Trong dung dịch HCl dư, sản phẩm thu được là các muối chloride của amino acid (như ClH3N-CH2-COOH và ClH3N-CH(CH3)-COOH), không phải amino acid tự do.'
      },
      {
        id: 'd',
        statement: 'Phản ứng trùng ngưng các amino acid tạo ra polyamide hoặc polypeptide kèm theo sự giải phóng nước.',
        isTrue: true,
        explanation: 'Đúng. Ví dụ phản ứng trùng ngưng acid 6-aminohexanoic tạo polycaproamide (nylon-6).'
      }
    ],
    difficulty: 'Vận dụng',
    explanation: 'Phản ứng biuret và bản chất dung dịch thuỷ phân acid/kiềm là bẫy phổ biến trong đề thi tốt nghiệp THPT.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Thí nghiệm biuret & thuỷ phân'
  },
  {
    id: 'b9-q12',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'true_false',
    title: 'Câu 12 (Đúng/Sai): Hiện tượng điện di của amino acid',
    context: 'Khi đặt các dung dịch amino acid vào điện trường ở pH = 6 (trung tính):',
    subItems: [
      {
        id: 'a',
        statement: 'Glycine và Alanine hầu như không dịch chuyển về phía điện cực nào do phân tử tồn tại chủ yếu ở dạng ion lưỡng cực trung hòa điện.',
        isTrue: true,
        explanation: 'Đúng. Gly và Ala có 1 nhóm -NH2 và 1 nhóm -COOH nên ở pH ~ 6 điện tích tổng bằng 0.'
      },
      {
        id: 'b',
        statement: 'Glutamic acid tích điện âm và dịch chuyển về cực dương (anode).',
        isTrue: true,
        explanation: 'Đúng. Glu có 2 nhóm -COOH, ở pH 6 phân li cho H+ thành ion tích điện âm.'
      },
      {
        id: 'c',
        statement: 'Lysine tích điện dương và dịch chuyển về cực âm (cathode).',
        isTrue: true,
        explanation: 'Đúng. Lys có 2 nhóm -NH2 nhận H+ trở thành ion tích điện dương.'
      },
      {
        id: 'd',
        statement: 'Phương pháp điện di không thể dùng để tách và phân tích hỗn hợp các amino acid.',
        isTrue: false,
        explanation: 'Sai. Phương pháp điện di là phương pháp quan trọng hàng đầu trong sinh hoá để tách biệt và định lượng các amino acid và protein.'
      }
    ],
    difficulty: 'Vận dụng',
    explanation: 'Sự di chuyển của amino acid trong điện trường là nội dung mới và thực tiễn trong SGK Kết nối tri thức.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Điện di amino acid'
  },
  {
    id: 'b9-q13',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'short_answer',
    title: 'Câu 13 (Trả lời ngắn): Số tripeptide tối đa tạo bởi Gly và Ala',
    context: 'Có tối đa bao nhiêu tripeptide chứa đồng thời cả 2 gốc glycine và alanine?',
    correctAnswers: ['6', '6 tripeptide'],
    unit: 'tripeptide',
    difficulty: 'Vận dụng',
    explanation: 'Tripeptide có 3 mắt xích. Số tripeptide chứa cả Gly và Ala gồm: trường hợp 2 Gly + 1 Ala (Gly-Gly-Ala, Gly-Ala-Gly, Ala-Gly-Gly -> 3 chất); trường hợp 1 Gly + 2 Ala (Ala-Ala-Gly, Ala-Gly-Ala, Gly-Ala-Ala -> 3 chất). Tổng cộng: 3 + 3 = 6 tripeptide.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Đồng phân peptide'
  },
  {
    id: 'b9-q14',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'short_answer',
    title: 'Câu 14 (Trả lời ngắn): Phân tử khối của tripeptide Gly-Ala-Val',
    context: 'Phân tử khối (đvC hay g/mol) của tripeptide Gly-Ala-Val là bao nhiêu? (Cho Gly=75, Ala=89, Val=117)',
    correctAnswers: ['245', '245 g/mol', '245 đvC'],
    unit: 'g/mol',
    difficulty: 'Thông hiểu',
    explanation: 'Tripeptide được tạo bởi 3 amino acid và giải phóng 2 phân tử nước: M(Gly-Ala-Val) = M(Gly) + M(Ala) + M(Val) - 2 × 18 = 75 + 89 + 117 - 36 = 245 g/mol.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Tính chất và phân tử khối peptide'
  },
  {
    id: 'b9-q15',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'short_answer',
    title: 'Câu 15 (Trả lời ngắn): Khối lượng muối khi cho glycine tác dụng NaOH',
    context: 'Cho 7,5 gam glycine (H2N-CH2-COOH) phản ứng hoàn toàn với dung dịch NaOH vừa đủ. Khối lượng muối thu được sau phản ứng là bao nhiêu gam? (Cho H=1, C=12, N=14, O=16, Na=23)',
    correctAnswers: ['9,7', '9.7', '9,7 gam', '9.7 gam'],
    unit: 'gam',
    difficulty: 'Thông hiểu',
    explanation: 'Số mol Glycine = 7,5 / 75 = 0,1 mol. Phản ứng: H2N-CH2-COOH + NaOH → H2N-CH2-COONa + H2O. Khối lượng mol của sodium glycinate = 75 + 23 - 1 = 97 g/mol. Khối lượng muối = 0,1 × 97 = 9,7 gam.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Phản ứng của amino acid với base'
  },
  {
    id: 'b9-q16',
    lessonId: 'bai-9',
    lessonNumber: 9,
    type: 'short_answer',
    title: 'Câu 16 (Trả lời ngắn): Số liên kết peptide trong một decapeptide',
    context: 'Trong một phân tử decapeptide mạch hở (chứa 10 gốc α-amino acid), có tất cả bao nhiêu liên kết peptide?',
    correctAnswers: ['9', '9 liên kết'],
    unit: 'liên kết',
    difficulty: 'Nhận biết',
    explanation: 'Số liên kết peptide = số gốc α-amino acid - 1. Với decapeptide (10 gốc), số liên kết peptide là: 10 - 1 = 9 liên kết.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 9: Cấu trúc peptide'
  },

  // ==========================================
  // BÀI 10: PROTEIN VÀ ENZYME (16 câu)
  // ==========================================
  {
    id: 'b10-q1',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 1: Khái niệm protein',
    context: 'Protein là hợp chất cao phân tử được cấu tạo từ các đơn vị nào sau đây?',
    options: [
      'Các phân tử glucose',
      'Các gốc α-amino acid liên kết bởi liên kết peptide',
      'Các nucleotide liên kết bởi liên kết phosphodiester',
      'Các gốc glycerol và acid béo'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Protein là các polypeptide cao phân tử có phân tử khối từ vài chục nghìn đến hàng triệu Da, cấu tạo từ các gốc α-amino acid nối với nhau bằng các liên kết peptide.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Khái niệm protein'
  },
  {
    id: 'b10-q2',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 2: Protein dạng sợi không tan trong nước',
    context: 'Chất nào sau đây là protein dạng sợi và KHÔNG tan trong nước?',
    options: [
      'Albumin (lòng trắng trứng)',
      'Hemoglobin (trong hồng cầu)',
      'Keratin (trong sừng, tóc, móng)',
      'Insulin (hormone điều hoà đường huyết)'
    ],
    correctOption: 2,
    difficulty: 'Nhận biết',
    explanation: 'Protein dạng sợi như keratin (tóc, móng), fibroin (tơ tằm), collagen (gân, da) hoàn toàn không tan trong nước. Albumin và hemoglobin là protein dạng hình cầu tan được trong nước tạo dung dịch keo.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Phân loại protein'
  },
  {
    id: 'b10-q3',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 3: Cấu trúc bậc 1 của protein',
    context: 'Cấu trúc bậc 1 của protein được đặc trưng bởi',
    options: [
      'Xoắn α và gấp nếp β qua liên kết hydro',
      'Trình tự sắp xếp các gốc α-amino acid trong chuỗi polypeptide',
      'Cấu trúc không gian 3 chiều cuộn gập',
      'Sự tổ hợp của nhiều chuỗi polypeptide độc lập'
    ],
    correctOption: 1,
    difficulty: 'Nhận biết',
    explanation: 'Cấu trúc bậc 1 của protein là trình tự sắp xếp các gốc α-amino acid trong chuỗi polypeptide được giữ vững bởi các liên kết peptide bền vững. Cấu trúc này quyết định cấu trúc bậc cao hơn.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Các bậc cấu trúc protein'
  },
  {
    id: 'b10-q4',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 4: Hiện tượng đông tụ protein trong đời sống',
    context: 'Hiện tượng nấu canh cua thấy gạch cua đóng thành từng mảng nổi lên mặt nước là do',
    options: [
      'Sự thuỷ phân của protein trong thịt cua',
      'Sự đông tụ của protein cua dưới tác dụng của nhiệt độ',
      'Sự lên men của chất béo',
      'Phản ứng màu biuret'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Khi đun nóng, protein hoà tan trong thịt cua bị phá vỡ cấu trúc không gian bậc cao (biến tính nhiệt), các phân tử protein kết tụ lại với nhau thành các mảng không tan nổi lên trên mặt nước (gọi là riêu cua).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Tính chất đông tụ protein'
  },
  {
    id: 'b10-q5',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 5: Phản ứng xanthoproteic của protein với HNO3 đặc',
    context: 'Khi nhỏ vài giọt dung dịch HNO3 đặc vào ống nghiệm chứa dung dịch lòng trắng trứng và đun nóng nhẹ, hiện tượng xuất hiện là',
    options: [
      'Xuất hiện kết tủa màu vàng',
      'Dung dịch đổi sang màu xanh lam',
      'Có khí màu nâu đỏ thoát ra mãnh liệt',
      'Không có hiện tượng gì xảy ra'
    ],
    correctOption: 0,
    difficulty: 'Thông hiểu',
    explanation: 'Do phản ứng nitro hoá các vòng benzen của các gốc amino acid thơm (tyrosine, phenylalanine) trong phân tử protein tạo hợp chất nitro có màu vàng (phản ứng xanthoproteic).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Phản ứng màu của protein'
  },
  {
    id: 'b10-q6',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 6: Bản chất và đặc điểm của Enzyme',
    context: 'Enzyme có bản chất hoá học hầu hết là',
    options: [
      'Lipid',
      'Carbohydrate',
      'Protein',
      'Acid nucleic'
    ],
    correctOption: 2,
    difficulty: 'Nhận biết',
    explanation: 'Hầu hết các enzyme là protein có khả năng xúc tác đặc hiệu cho các phản ứng sinh hoá trong cơ thể sinh vật.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Khái niệm enzyme'
  },
  {
    id: 'b10-q7',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 7: Tính đặc hiệu cao của enzyme',
    context: 'Đặc điểm nào sau đây chứng minh tính chọn lọc (đặc hiệu) cao của enzyme?',
    options: [
      'Enzyme chỉ hoạt động ở nhiệt độ trên 100°C',
      'Mỗi enzyme thường chỉ xúc tác cho một chuyển hoá của một chất nhất định',
      'Enzyme làm thay đổi chiều cân bằng phản ứng',
      'Enzyme tác dụng với mọi chất hữu cơ'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Tính chọn lọc rất cao (tính đặc hiệu) của enzyme thể hiện ở chỗ mỗi enzyme chỉ xúc tác cho một phản ứng nhất định hoặc một kiểu phản ứng nhất định theo cơ chế chìa khóa và ổ khóa (ví dụ enzyme amylase chỉ thuỷ phân tinh bột, urease chỉ thuỷ phân urea).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Đặc tính xúc tác của enzyme'
  },
  {
    id: 'b10-q8',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'single_choice',
    title: 'Câu 8: Thuốc thử phân biệt lòng trắng trứng và glucose',
    context: 'Để phân biệt 2 dung dịch: lòng trắng trứng (albumin) và glucose ở nhiệt độ thường, thuốc thử tiện lợi nhất là',
    options: [
      'Dung dịch AgNO3 trong NH3',
      'Cu(OH)2 trong môi trường kiềm (NaOH)',
      'Nước vôi trong Ca(OH)2',
      'Dung dịch HCl'
    ],
    correctOption: 1,
    difficulty: 'Vận dụng',
    explanation: 'Cho Cu(OH)2/NaOH ở nhiệt độ phòng vào 2 mẫu thử: lòng trắng trứng cho dung dịch phức màu tím (phản ứng biuret); glucose hoà tan Cu(OH)2 tạo dung dịch phức màu xanh lam sáng của polyalcohol.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Nhận biết protein'
  },
  {
    id: 'b10-q9',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'true_false',
    title: 'Câu 9 (Đúng/Sai): Tính chất vật lí và đông tụ protein',
    context: 'Cho các phát biểu sau về tính chất vật lí và hiện tượng đông tụ protein:',
    subItems: [
      {
        id: 'a',
        statement: 'Tất cả các protein đều tan tốt trong nước lạnh tạo thành dung dịch thật.',
        isTrue: false,
        explanation: 'Sai. Protein hình sợi không tan trong nước; protein hình cầu tan tạo dung dịch keo (hệ phân tán keo, không phải dung dịch thật).'
      },
      {
        id: 'b',
        statement: 'Sự đông tụ protein xảy ra khi đun nóng hoặc cho acid, kiềm, muối kim loại nặng vào dung dịch protein.',
        isTrue: true,
        explanation: 'Đúng. Các tác nhân này làm gãy các liên kết yếu duy trì cấu trúc không gian bậc cao của protein.'
      },
      {
        id: 'c',
        statement: 'Làm đậu phụ từ sữa đậu nành bằng cách thêm nước chua (acid) là ứng dụng của sự đông tụ protein.',
        isTrue: true,
        explanation: 'Đúng. Môi trường acid làm giảm điện tích của protein đậu nành, khiến chúng kết tụ lại thành óc đậu.'
      },
      {
        id: 'd',
        statement: 'Sau khi bị đông tụ do nhiệt độ cao, protein có thể dễ dàng tan lại trong nước trở về trạng thái ban đầu.',
        isTrue: false,
        explanation: 'Sai. Đây là hiện tượng biến tính bất thuận nghịch, protein không thể hồi phục lại trạng thái ban đầu.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Hiện tượng đông tụ protein là kiến thức gắn liền với thực tiễn đời sống và nấu nướng.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Đông tụ protein'
  },
  {
    id: 'b10-q10',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'true_false',
    title: 'Câu 10 (Đúng/Sai): Cấu trúc 4 bậc của protein',
    context: 'Xét tính đúng hoặc sai về cấu trúc không gian của protein:',
    subItems: [
      {
        id: 'a',
        statement: 'Cấu trúc bậc 1 của protein được giữ vững chủ yếu bởi các liên kết hydrogen.',
        isTrue: false,
        explanation: 'Sai. Cấu trúc bậc 1 được giữ vững bởi liên kết cộng hoá trị peptide (-CO-NH-). Liên kết hydrogen giữ vai trò chủ yếu ở cấu trúc bậc 2.'
      },
      {
        id: 'b',
        statement: 'Cấu trúc bậc 2 gồm dạng xoắn lò xo α và gấp nếp β được ổn định nhờ liên kết hydrogen giữa các nhóm peptide.',
        isTrue: true,
        explanation: 'Đúng. Liên kết hydro hình thành giữa >C=O và >N-H của các liên kết peptide liền kề.'
      },
      {
        id: 'c',
        statement: 'Cấu trúc bậc 3 thể hiện cấu hình không gian 3 chiều đặc thù của chuỗi polypeptide cuộn lại.',
        isTrue: true,
        explanation: 'Đúng. Nhờ cầu nối disulfide (-S-S-), tương tác ion và tương tác kị nước.'
      },
      {
        id: 'd',
        statement: 'Phân tử Hemoglobin trong máu người là ví dụ tiêu biểu cho protein có cấu trúc bậc 4 gồm 4 chuỗi polypeptide.',
        isTrue: true,
        explanation: 'Đúng. Gồm 2 chuỗi α và 2 chuỗi β kết hợp với 4 nhân heme chứa Fe2+.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Cần phân biệt rõ lực liên kết giữ vững từng bậc cấu trúc protein.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Cấu trúc không gian của protein'
  },
  {
    id: 'b10-q11',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'true_false',
    title: 'Câu 11 (Đúng/Sai): Phản ứng hoá học của protein',
    context: 'Tiến hành các thí nghiệm khảo sát tính chất hoá học của lòng trắng trứng:',
    subItems: [
      {
        id: 'a',
        statement: 'Thủy phân hoàn toàn protein đơn giản bằng enzyme hoặc acid thu được hỗn hợp các α-amino acid.',
        isTrue: true,
        explanation: 'Đúng. Protein đơn giản chỉ tạo thành từ các gốc α-amino acid.'
      },
      {
        id: 'b',
        statement: 'Khi cho Cu(OH)2 vào dung dịch lòng trắng trứng thì dung dịch chuyển sang màu tím do phản ứng biuret.',
        isTrue: true,
        explanation: 'Đúng. Protein có chứa hàng nghìn liên kết peptide nên luôn cho phản ứng màu biuret.'
      },
      {
        id: 'c',
        statement: 'Dính acid nitric (HNO3) đặc vào da tay sẽ làm da xuất hiện màu vàng do phản ứng màu xanthoproteic.',
        isTrue: true,
        explanation: 'Đúng. Do phản ứng nitro hoá các gốc amino acid thơm có trong protein của da.'
      },
      {
        id: 'd',
        statement: 'Mọi peptide và protein khi đun nóng với dung dịch kiềm đều giải phóng khí ammonia (NH3).',
        isTrue: false,
        explanation: 'Sai. Phản ứng thuỷ phân peptide và protein trong kiềm tạo thành muối sodium của các amino acid, không sinh ra khí NH3.'
      }
    ],
    difficulty: 'Vận dụng',
    explanation: 'Các phản ứng màu biuret và xanthoproteic là dấu hiệu nhận biết đặc trưng của protein.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Tính chất hoá học'
  },
  {
    id: 'b10-q12',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'true_false',
    title: 'Câu 12 (Đúng/Sai): Tính chất và ứng dụng của Enzyme',
    context: 'Xét các phát biểu sau về enzyme và ứng dụng trong thực tế:',
    subItems: [
      {
        id: 'a',
        statement: 'Tốc độ phản ứng khi có xúc tác enzyme lớn hơn từ hàng triệu đến hàng tỷ lần so với khi dùng xúc tác vô cơ.',
        isTrue: true,
        explanation: 'Đúng. Enzyme có hoạt tính xúc tác sinh học cực kì mạnh mẽ.'
      },
      {
        id: 'b',
        statement: 'Khi đun sôi ở 100°C, enzyme hoạt động càng mạnh mẽ hơn do nhiệt độ cao làm tăng tốc độ phản ứng.',
        isTrue: false,
        explanation: 'Sai. Vì enzyme có bản chất protein nên ở 100°C enzyme bị đông tụ, biến tính và mất hoàn toàn hoạt tính xúc tác.'
      },
      {
        id: 'c',
        statement: 'Enzyme papain chiết xuất từ quả đu đủ xanh được dùng để làm mềm thịt trong nấu nướng.',
        isTrue: true,
        explanation: 'Đúng. Papain là protease thuỷ phân bớt một phần protein của mô liên kết trong thịt.'
      },
      {
        id: 'd',
        statement: 'Nhiều loại bột giặt sinh học hiện nay có bổ sung các enzyme protease và lipase để tẩy sạch vết bẩn hữu cơ.',
        isTrue: true,
        explanation: 'Đúng. Protease phân giải vết bẩn chứa đạm, lipase phân giải vết bẩn chứa chất béo.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Ứng dụng thực tiễn của enzyme trong công nghệ thực phẩm và đời sống hàng ngày.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Ứng dụng enzyme'
  },
  {
    id: 'b10-q13',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'short_answer',
    title: 'Câu 13 (Trả lời ngắn): Số bậc cấu trúc không gian của protein',
    context: 'Phân tử protein có tất cả bao nhiêu bậc cấu trúc không gian?',
    correctAnswers: ['4', '4 bậc'],
    unit: 'bậc',
    difficulty: 'Nhận biết',
    explanation: 'Protein có 4 bậc cấu trúc không gian: Bậc 1 (chuỗi polypeptide), Bậc 2 (xoắn alpha và phiến gấp beta), Bậc 3 (cuộn không gian 3 chiều) và Bậc 4 (tập hợp nhiều chuỗi tiểu đơn vị).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Cấu trúc protein'
  },
  {
    id: 'b10-q14',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'short_answer',
    title: 'Câu 14 (Trả lời ngắn): Số chất cho phản ứng màu biuret',
    context: 'Cho các chất sau: Gly-Ala, lòng trắng trứng, Ala-Gly-Val, hồ tinh bột, glycerol. Có bao nhiêu chất cho phản ứng màu biuret với Cu(OH)2 trong môi trường kiềm?',
    correctAnswers: ['2', '2 chất'],
    unit: 'chất',
    difficulty: 'Thông hiểu',
    explanation: 'Chất cho phản ứng màu biuret cần có từ 2 liên kết peptide trở lên: Lòng trắng trứng (protein) và Ala-Gly-Val (tripeptide có 2 liên kết peptide). Gly-Ala chỉ là dipeptide nên không phản ứng. Hồ tinh bột và glycerol không phải peptide/protein.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Phản ứng biuret'
  },
  {
    id: 'b10-q15',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'short_answer',
    title: 'Câu 15 (Trả lời ngắn): Số chuỗi polypeptide trong phân tử Hemoglobin',
    context: 'Phân tử protein Hemoglobin (Hb) ở người có cấu trúc bậc 4 được cấu tạo từ bao nhiêu chuỗi polypeptide?',
    correctAnswers: ['4', '4 chuỗi'],
    unit: 'chuỗi',
    difficulty: 'Nhận biết',
    explanation: 'Phân tử Hemoglobin ở người gồm 4 chuỗi polypeptide: 2 chuỗi α và 2 chuỗi β, mỗi chuỗi liên kết với một nhóm ngoại heme chứa Fe2+.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Cấu trúc Hemoglobin'
  },
  {
    id: 'b10-q16',
    lessonId: 'bai-10',
    lessonNumber: 10,
    type: 'short_answer',
    title: 'Câu 16 (Trả lời ngắn): Số hiện tượng đông tụ protein',
    context: 'Trong các hiện tượng sau: (1) Luộc trứng gà; (2) Nấu riêu cua; (3) Làm đậu phụ bằng nước chua; (4) Vắt chanh vào cốc sữa tươi; (5) Hoà tan đường vào nước. Có bao nhiêu hiện tượng minh hoạ cho sự đông tụ protein?',
    correctAnswers: ['4', '4 hiện tượng'],
    unit: 'hiện tượng',
    difficulty: 'Thông hiểu',
    explanation: 'Hiện tượng (1), (2) là đông tụ do nhiệt độ cao. Hiện tượng (3), (4) là đông tụ protein do acid (nước chua, nước cốt chanh). Hiện tượng (5) là sự hoà tan vật lí của đường sucrose, không liên quan đến protein. Vậy có 4 hiện tượng.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 10: Hiện tượng đông tụ thực tế'
  },

  // ==========================================
  // BÀI 11: ÔN TẬP CHƯƠNG 3 (18 câu tổng hợp)
  // ==========================================
  {
    id: 'b11-q1',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 1: Phân biệt các dung dịch hữu cơ chứa nitrogen',
    context: 'Có 3 dung dịch riêng biệt: methylamine, glycine, và glutamic acid. Chỉ dùng quỳ tím có thể nhận biết được tối đa bao nhiêu dung dịch?',
    options: [
      'Chỉ 1 dung dịch',
      'Chỉ 2 dung dịch',
      'Cả 3 dung dịch',
      'Không nhận biết được dung dịch nào'
    ],
    correctOption: 2,
    difficulty: 'Thông hiểu',
    explanation: 'Nhúng giấy quỳ tím vào 3 mẫu thử: Methylamine (tính base mạnh) làm quỳ tím chuyển màu xanh; Glutamic acid (2 COOH, 1 NH2) làm quỳ tím chuyển màu đỏ nhạt; Glycine (1 COOH, 1 NH2) không làm đổi màu quỳ tím. Vậy chỉ cần dùng quỳ tím nhận biết được cả 3 dung dịch.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Ôn tập chương 3'
  },
  {
    id: 'b11-q2',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 2: Nhận định đúng về phân tử Lysine',
    context: 'Phát biểu nào sau đây về lysine là ĐÚNG?',
    options: [
      'Lysine có phân tử khối là 147 g/mol',
      'Dung dịch lysine làm đổi màu quỳ tím sang màu đỏ',
      'Khi điện di ở pH = 6, lysine dịch chuyển về phía cực âm (cathode)',
      'Phân tử lysine có 2 nhóm -COOH và 1 nhóm -NH2'
    ],
    correctOption: 2,
    difficulty: 'Thông hiểu',
    explanation: 'Lysine có công thức H2N-[CH2]4-CH(NH2)-COOH (M = 146). Phân tử có 2 nhóm -NH2 và 1 nhóm -COOH. Ở pH 6, lysine nhận proton thành ion dương (+H3N-[CH2]4-CH(+NH3)-COO-) nên dịch chuyển về cực âm (cathode).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Bảng tổng kết amino acid'
  },
  {
    id: 'b11-q3',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 3: Chất vừa tác dụng với NaOH vừa tác dụng với HCl',
    context: 'Chất nào sau đây thể hiện tính chất lưỡng tính khi tác dụng được với cả dung dịch NaOH và dung dịch HCl?',
    options: [
      'Methylamine (CH3NH2)',
      'Aniline (C6H5NH2)',
      'Alanine (CH3CH(NH2)COOH)',
      'Ethyl acetate (CH3COOC2H5)'
    ],
    correctOption: 2,
    difficulty: 'Nhận biết',
    explanation: 'Alanine là amino acid có nhóm -NH2 (tính base) tác dụng HCl và nhóm -COOH (tính acid) tác dụng NaOH nên có tính chất lưỡng tính. Amine chỉ có tính base. Ethyl acetate tham gia phản ứng thuỷ phân chứ không phải chất lưỡng tính.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Tổng kết tính chất'
  },
  {
    id: 'b11-q4',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 4: Phản ứng phân biệt Aniline và Phenol',
    context: 'Để phân biệt 2 chất lỏng đựng trong 2 lọ riêng biệt: aniline và phenol, thuốc thử phù hợp là',
    options: [
      'Nước bromine',
      'Dung dịch hydrochloric acid (HCl)',
      'Kim loại Na',
      'Dung dịch KMnO4'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Cả aniline và phenol đều tạo kết tủa trắng với nước brom. Khi cho dung dịch HCl vào: Aniline phản ứng tan ra tạo dung dịch trong suốt (C6H5NH3Cl); còn Phenol có tính acid yếu không tan trong HCl, vẫn vẩn đục/tách lớp.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Nhận biết hợp chất thơm'
  },
  {
    id: 'b11-q5',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 5: Số liên kết peptide trong pentapeptide Gly-Ala-Val-Ala-Gly',
    context: 'Trong một phân tử pentapeptide mạch hở Gly-Ala-Val-Ala-Gly có chứa',
    options: [
      '4 liên kết peptide và 5 nguyên tử oxygen',
      '4 liên kết peptide và 6 nguyên tử oxygen',
      '5 liên kết peptide và 5 nguyên tử nitrogen',
      '4 liên kết peptide và 5 nguyên tử nitrogen'
    ],
    correctOption: 1,
    difficulty: 'Vận dụng',
    explanation: 'Pentapeptide tạo bởi 5 gốc amino acid nên có: 5 - 1 = 4 liên kết peptide (-CO-NH-). Trong 4 liên kết peptide có 4 nguyên tử O, ở đầu C còn 1 nhóm -COOH có 2 nguyên tử O. Vậy tổng số nguyên tử oxygen = 4 + 2 = 6 nguyên tử O.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Cấu tạo peptide'
  },
  {
    id: 'b11-q6',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 6: Phản ứng thuỷ phân peptide trong môi trường acid',
    context: 'Thủy phân hoàn toàn 1 mol tripeptide mạch hở Gly-Ala-Val trong dung dịch HCl dư thu được',
    options: [
      '1 mol Gly, 1 mol Ala, 1 mol Val tự do',
      '1 mol Gly-HCl, 1 mol Ala-HCl, 1 mol Val-HCl',
      '3 mol khí N2',
      'Hỗn hợp muối sodium'
    ],
    correctOption: 1,
    difficulty: 'Thông hiểu',
    explanation: 'Phương trình: Gly-Ala-Val + 2H2O + 3HCl → ClH3N-CH2-COOH + ClH3N-CH(CH3)-COOH + ClH3N-CH(C3H7)-COOH. Sản phẩm thu được là muối hydrochloride của từng amino acid tương ứng.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Bài toán thuỷ phân peptide'
  },
  {
    id: 'b11-q7',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 7: Thuốc thử nhận biết 3 dung dịch: Lòng trắng trứng, Glucose, Hồ tinh bột',
    context: 'Chỉ dùng một thuốc thử nào sau đây để phân biệt 3 dung dịch riêng biệt: lòng trắng trứng, glucose, hồ tinh bột?',
    options: [
      'Dung dịch AgNO3/NH3',
      'Cu(OH)2 trong môi trường kiềm (ở nhiệt độ phòng và khi đun nóng)',
      'Dung dịch NaOH',
      'Dung dịch quỳ tím'
    ],
    correctOption: 1,
    difficulty: 'Vận dụng',
    explanation: 'Cho Cu(OH)2/OH- vào 3 mẫu thử ở nhiệt độ phòng: Lòng trắng trứng tạo dung dịch màu tím (phản ứng biuret); Glucose hoà tan Cu(OH)2 tạo dung dịch xanh lam (sau đó đun nóng tạo kết tủa đỏ gạch Cu2O); Hồ tinh bột không hoà tan Cu(OH)2 ở nhiệt độ phòng.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Nhận biết tổng hợp'
  },
  {
    id: 'b11-q8',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'single_choice',
    title: 'Câu 8: Khối lượng muối thu được khi thuỷ phân peptide bằng kiềm',
    context: 'Thủy phân hoàn toàn 0,1 mol dipeptide Gly-Ala trong lượng vừa đủ dung dịch NaOH. Khối lượng muối thu được sau khi cô cạn dung dịch là bao nhiêu gam? (Cho H=1, C=12, N=14, O=16, Na=23)',
    options: [
      '18,8 gam',
      '20,8 gam',
      '22,6 gam',
      '24,4 gam'
    ],
    correctOption: 1,
    difficulty: 'Vận dụng',
    explanation: 'M(Gly-Ala) = 75 + 89 - 18 = 146 g/mol -> m(peptide) = 0,1 × 146 = 14,6 gam. Phản ứng: Gly-Ala + 2NaOH → H2N-CH2-COONa + H2N-CH(CH3)-COONa + H2O. Số mol NaOH = 0,2 mol; số mol H2O sinh ra = 0,1 mol. Theo bảo toàn khối lượng: m(muối) = m(peptide) + m(NaOH) - m(H2O) = 14,6 + 0,2×40 - 0,1×18 = 14,6 + 8,0 - 1,8 = 20,8 gam.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Bài toán thuỷ phân peptide'
  },
  {
    id: 'b11-q9',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'true_false',
    title: 'Câu 9 (Đúng/Sai): So sánh đặc điểm cấu tạo của Amine, Amino acid và Peptide',
    context: 'Xét tính đúng hoặc sai của các phát biểu sau về cấu tạo các hợp chất chứa nitrogen:',
    subItems: [
      {
        id: 'a',
        statement: 'Phân tử amine, amino acid, peptide và protein đều có chứa nguyên tố nitrogen.',
        isTrue: true,
        explanation: 'Đúng. Đây là đặc điểm chung của nhóm hợp chất hữu cơ chứa nitrogen trong chương 3.'
      },
      {
        id: 'b',
        statement: 'Tính base của amine và tính base của nhóm -NH2 trong amino acid đều do đôi electron tự do trên nguyên tử nitrogen quyết định.',
        isTrue: true,
        explanation: 'Đúng. Đôi electron tự do này có khả năng nhận proton H+.'
      },
      {
        id: 'c',
        statement: 'Tất cả các amine no đơn chức mạch hở đều có công thức chung là CnH2n+3N (n ≥ 1).',
        isTrue: true,
        explanation: 'Đúng. Amine no đơn chức mạch hở tương tự ankane cộng thêm 1 nhóm -NH (hoặc thay H bằng NH2).'
      },
      {
        id: 'd',
        statement: 'Dung dịch lòng trắng trứng, tripeptide Gly-Ala-Val và dipeptide Ala-Gly đều cho phản ứng màu biuret với Cu(OH)2.',
        isTrue: false,
        explanation: 'Sai. Dipeptide Ala-Gly KHÔNG có phản ứng màu biuret.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'So sánh toàn diện tính chất các lớp chất hữu cơ chứa nitrogen đã học trong chương 3.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Hệ thống hoá kiến thức'
  },
  {
    id: 'b11-q10',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'true_false',
    title: 'Câu 10 (Đúng/Sai): Tính chất hoá học và phương trình phản ứng',
    context: 'Cho các phát biểu sau về phản ứng hoá học:',
    subItems: [
      {
        id: 'a',
        statement: 'Aniline tác dụng với nitrous acid (HNO2) ở nhiệt độ 0 - 5°C giải phóng khí N2.',
        isTrue: false,
        explanation: 'Sai. Aniline ở 0 - 5°C tạo muối diazonium [C6H5N2+]Cl-, chỉ có alkylamine bậc I mới giải phóng khí N2.'
      },
      {
        id: 'b',
        statement: 'Cho dung dịch aminoacetic acid (glycine) tác dụng với alcohol etylic khi có khí HCl bão hoà đun nóng xảy ra phản ứng ester hoá.',
        isTrue: true,
        explanation: 'Đúng. H2N-CH2-COOH + C2H5OH --(HCl, t°)--> ClH3N-CH2-COOC2H5 + H2O.'
      },
      {
        id: 'c',
        statement: 'Phản ứng thế nguyên tử H ở nhân thơm của aniline dễ xảy ra hơn so với benzene nhờ hiệu ứng đẩy electron của nhóm amino (-NH2).',
        isTrue: true,
        explanation: 'Đúng. Nhóm -NH2 làm tăng mật độ electron ở các vị trí ortho và para.'
      },
      {
        id: 'd',
        statement: 'Đun nóng dung dịch lòng trắng trứng với dung dịch NaOH đậm đặc sẽ quan sát thấy hiện tượng tạo kết tủa màu vàng.',
        isTrue: false,
        explanation: 'Sai. Kết tủa màu vàng là phản ứng với HNO3 đặc (phản ứng xanthoproteic), không phải NaOH.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Phân tích phản ứng hoá học đặc trưng của từng hợp chất theo chuẩn SGK KNTT.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Phản ứng đặc trưng'
  },
  {
    id: 'b11-q11',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'true_false',
    title: 'Câu 11 (Đúng/Sai): Nhận định thực tế và ứng dụng hoá học',
    context: 'Xét tính đúng sai của các nhận định liên quan đến thực tiễn:',
    subItems: [
      {
        id: 'a',
        statement: 'Để khử mùi tanh của cá mè (chủ yếu do trimethylamine và các amine khác gây ra), người ta thường dùng giấm ăn hoặc nước cốt chanh.',
        isTrue: true,
        explanation: 'Đúng. Acid acetic trong giấm hoặc acid citric trong chanh phản ứng với amine tạo muối không bay hơi, hết mùi tanh.'
      },
      {
        id: 'b',
        statement: 'Trong cơ thể người, enzyme amylase trong nước bọt giúp thuỷ phân tinh bột chín thành đường maltose.',
        isTrue: true,
        explanation: 'Đúng. Amylase là enzyme tiêu hoá tinh bột ở khoang miệng.'
      },
      {
        id: 'c',
        statement: 'Dùng cồn 70° để sát trùng vết thương vì cồn 70° làm đông tụ protein của vi khuẩn tốt nhất.',
        isTrue: true,
        explanation: 'Đúng. Cồn 70° thấm sâu vào tế bào vi khuẩn và làm đông tụ protein diệt khuẩn hiệu quả.'
      },
      {
        id: 'd',
        statement: 'Bột ngọt (mì chính) là muối disodium của glutamic acid.',
        isTrue: false,
        explanation: 'Sai. Mì chính là muối monosodium glutamate (chỉ thay thế 1 nguyên tử H ở nhóm carboxyl bằng 1 ion Na+).'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Kiến thức liên hệ thực tiễn đời sống là nội dung trọng tâm của bộ sách Kết nối tri thức với cuộc sống.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Ứng dụng thực tiễn'
  },
  {
    id: 'b11-q12',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'true_false',
    title: 'Câu 12 (Đúng/Sai): Nhận định tổng hợp về protein và enzyme',
    context: 'Cho các phát biểu sau về protein và enzyme:',
    subItems: [
      {
        id: 'a',
        statement: 'Khi thuỷ phân hoàn toàn protein đơn giản hoặc protein phức tạp đều chỉ thu được các α-amino acid.',
        isTrue: false,
        explanation: 'Sai. Protein phức tạp khi thuỷ phân còn thu được thêm thành phần phi protein (như lipid, carbohydrate, nhân heme...).'
      },
      {
        id: 'b',
        statement: 'Tơ tằm và lông cừu đều có thành phần chính là protein nên khi đốt có mùi khét như tóc cháy.',
        isTrue: true,
        explanation: 'Đúng. Protein chứa nitơ và lưu huỳnh khi cháy sinh ra mùi khét đặc trưng.'
      },
      {
        id: 'c',
        statement: 'Enzyme có thể làm tăng tốc độ phản ứng sinh hoá nhưng không làm thay đổi hằng số cân bằng của phản ứng.',
        isTrue: true,
        explanation: 'Đúng. Tương tự mọi chất xúc tác, enzyme chỉ làm giảm năng lượng hoạt hoá, giúp phản ứng nhanh đạt tới trạng thái cân bằng.'
      },
      {
        id: 'd',
        statement: 'Tất cả các dung dịch peptide đều làm quỳ tím chuyển màu đỏ.',
        isTrue: false,
        explanation: 'Sai. Màu quỳ tím phụ thuộc vào số nhóm -NH2 và -COOH tự do của các gốc amino acid cấu thành, đa số peptide thông thường như Gly-Ala không làm đổi màu quỳ.'
      }
    ],
    difficulty: 'Thông hiểu',
    explanation: 'Phân tích sâu về đặc tính lý hoá của protein và cơ chế hoạt động của enzyme.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Ôn tập protein & enzyme'
  },
  {
    id: 'b11-q13',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'true_false',
    title: 'Câu 13 (Đúng/Sai): Bài toán tổng hợp và nhận biết',
    context: 'Tiến hành khảo sát 4 ống nghiệm chứa 4 chất: ethylamine, aniline, glycine và albumin:',
    subItems: [
      {
        id: 'a',
        statement: 'Chỉ có 1 ống nghiệm làm quỳ tím chuyển sang màu xanh (ống chứa ethylamine).',
        isTrue: true,
        explanation: 'Đúng. Aniline không đổi màu quỳ tím, glycine không đổi màu quỳ tím, albumin không đổi màu quỳ tím.'
      },
      {
        id: 'b',
        statement: 'Nhỏ nước bromine vào ống chứa aniline sẽ thấy kết tủa trắng xuất hiện ngay.',
        isTrue: true,
        explanation: 'Đúng. Tạo kết tủa trắng 2,4,6-tribromoaniline.'
      },
      {
        id: 'c',
        statement: 'Đun nóng ống nghiệm chứa albumin sẽ thấy xuất hiện hiện tượng đông tụ.',
        isTrue: true,
        explanation: 'Đúng. Albumin là protein hình cầu tan trong nước, bị đông tụ khi đun nóng.'
      },
      {
        id: 'd',
        statement: 'Dùng Cu(OH)2 trong NaOH có thể phân biệt được glycine và albumin.',
        isTrue: true,
        explanation: 'Đúng. Albumin cho màu tím biuret; glycine tạo phức màu xanh lam đậm với Cu(OH)2.'
      }
    ],
    difficulty: 'Vận dụng',
    explanation: 'Kĩ năng phân biệt hoá chất bằng các phản ứng đặc trưng đã học ở bài 8, 9, 10.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Phương pháp nhận biết'
  },
  {
    id: 'b11-q14',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'short_answer',
    title: 'Câu 14 (Trả lời ngắn): Số chất tác dụng được với dung dịch NaOH',
    context: 'Cho các chất sau: methylamine, aniline, glycine, ethyl acetate, albumin. Có bao nhiêu chất phản ứng được với dung dịch NaOH đun nóng?',
    correctAnswers: ['3', '3 chất'],
    unit: 'chất',
    difficulty: 'Thông hiểu',
    explanation: 'Các chất phản ứng được với dung dịch NaOH: (1) Glycine (amino acid có tính acid ở nhóm -COOH); (2) Ethyl acetate (ester bị thuỷ phân trong kiềm); (3) Albumin (protein bị thuỷ phân trong kiềm). Amine (methylamine, aniline) có tính base nên không phản ứng với base NaOH. Vậy có 3 chất.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Tính chất hoá học tổng hợp'
  },
  {
    id: 'b11-q15',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'short_answer',
    title: 'Câu 15 (Trả lời ngắn): Số tripeptide tối đa tạo bởi 3 amino acid khác nhau Gly, Ala, Val',
    context: 'Từ 3 α-amino acid gồm glycine (Gly), alanine (Ala) và valine (Val), có thể tạo ra tối đa bao nhiêu tripeptide mà trong phân tử chứa đủ cả 3 gốc amino acid khác nhau trên?',
    correctAnswers: ['6', '6 tripeptide'],
    unit: 'tripeptide',
    difficulty: 'Thông hiểu',
    explanation: 'Một tripeptide chứa cả 3 gốc Gly, Ala, Val khác nhau là một hoán vị của 3 phần tử: P3 = 3! = 3 × 2 × 1 = 6 tripeptide (cụ thể: Gly-Ala-Val, Gly-Val-Ala, Ala-Gly-Val, Ala-Val-Gly, Val-Gly-Ala, Val-Ala-Gly).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Số lượng đồng phân peptide'
  },
  {
    id: 'b11-q16',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'short_answer',
    title: 'Câu 16 (Trả lời ngắn): Khối lượng phân tử của tetrapeptide Gly-Ala-Gly-Ala',
    context: 'Phân tử khối (g/mol) của tetrapeptide Gly-Ala-Gly-Ala là bao nhiêu? (Cho Gly=75, Ala=89)',
    correctAnswers: ['274', '274 g/mol', '274 đvC'],
    unit: 'g/mol',
    difficulty: 'Thông hiểu',
    explanation: 'Tetrapeptide được tạo thành từ 2 gốc Gly và 2 gốc Ala, đồng thời tách ra (4 - 1) = 3 phân tử nước: M = 2 × 75 + 2 × 89 - 3 × 18 = 150 + 178 - 54 = 274 g/mol.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Tính toán peptide'
  },
  {
    id: 'b11-q17',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'short_answer',
    title: 'Câu 17 (Trả lời ngắn): Số mol HCl phản ứng tối đa với hỗn hợp amino acid',
    context: 'Cho hỗn hợp X gồm 0,1 mol glycine và 0,1 mol lysine tác dụng với dung dịch HCl dư. Số mol HCl đã tham gia phản ứng tối đa là bao nhiêu mol?',
    correctAnswers: ['0,3', '0.3', '0,3 mol', '0.3 mol'],
    unit: 'mol',
    difficulty: 'Vận dụng',
    explanation: 'Glycine có 1 nhóm -NH2 nên phản ứng với 1 mol HCl. Lysine có 2 nhóm -NH2 nên phản ứng với 2 mol HCl. Tổng số mol HCl phản ứng: n(HCl) = 0,1 × 1 + 0,1 × 2 = 0,3 mol.',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Phản ứng amino acid với acid'
  },
  {
    id: 'b11-q18',
    lessonId: 'bai-11',
    lessonNumber: 11,
    type: 'short_answer',
    title: 'Câu 18 (Trả lời ngắn): Khối lượng phân tử của amino acid chứa 15,73% Nitrogen',
    context: 'Một α-amino acid no, mạch hở X chỉ chứa 1 nhóm -NH2 và 1 nhóm -COOH. Trong phân tử X, phần trăm khối lượng của nitrogen là 15,73%. Phân tử khối của X là bao nhiêu g/mol? (Cho N = 14)',
    correctAnswers: ['89', '89 g/mol', '89 đvC'],
    unit: 'g/mol',
    difficulty: 'Vận dụng cao',
    explanation: 'Vì phân tử X chỉ có 1 nguyên tử N (m_N = 14): %N = (14 / M_X) × 100% = 15,73% => M_X = 14 / 0,1573 ≈ 89 g/mol. Phân tử khối 89 chính là Alanine (CH3-CH(NH2)-COOH).',
    sgkReference: 'SGK Hoá 12 KNTT - Bài 11: Xác định công thức amino acid'
  }
];

export const AMINO_ACID_REFERENCE = [
  {
    name: 'Glycine',
    abbr: 'Gly',
    formula: 'H2N-CH2-COOH',
    iupac: '2-aminoethanoic acid',
    molWeight: 75,
    pI: 5.97,
    litmus: 'Không đổi màu',
    features: 'Amino acid đơn giản nhất, không có đồng phân quang học.'
  },
  {
    name: 'Alanine',
    abbr: 'Ala',
    formula: 'CH3-CH(NH2)-COOH',
    iupac: '2-aminopropanoic acid',
    molWeight: 89,
    pI: 6.00,
    litmus: 'Không đổi màu',
    features: 'Đơn vị cấu thành tơ tằm fibroin, có 1 carbon bất đối C*.'
  },
  {
    name: 'Valine',
    abbr: 'Val',
    formula: '(CH3)2CH-CH(NH2)-COOH',
    iupac: '2-amino-3-methylbutanoic acid',
    molWeight: 117,
    pI: 5.96,
    litmus: 'Không đổi màu',
    features: 'Amino acid thiết yếu mạch nhánh kị nước.'
  },
  {
    name: 'Glutamic acid',
    abbr: 'Glu',
    formula: 'HOOC-[CH2]2-CH(NH2)-COOH',
    iupac: '2-aminopentanedioic acid',
    molWeight: 147,
    pI: 3.22,
    litmus: 'Hoá đỏ nhạt (pH < 7)',
    features: 'Có 2 nhóm -COOH, muối monosodium glutamate là bột ngọt (mì chính).'
  },
  {
    name: 'Lysine',
    abbr: 'Lys',
    formula: 'H2N-[CH2]4-CH(NH2)-COOH',
    iupac: '2,6-diaminohexanoic acid',
    molWeight: 146,
    pI: 9.74,
    litmus: 'Hoá xanh nhạt (pH > 7)',
    features: 'Có 2 nhóm -NH2, là amino acid thiết yếu đối với người.'
  }
];

export const REAGENTS_LOOKUP = [
  {
    reagent: 'Nước Bromine (Br2)',
    substances: 'Aniline (C6H5NH2), Phenol (C6H5OH)',
    phenomenon: 'Mất màu nâu đỏ của nước bromine, xuất hiện kết tủa trắng (2,4,6-tribromoaniline)',
    equation: 'C6H5NH2 + 3Br2 → C6H2Br3NH2↓ (trắng) + 3HBr',
    purpose: 'Thuốc thử đặc trưng nhất để nhận biết aniline'
  },
  {
    reagent: 'Cu(OH)2 / OH- (Phản ứng Biuret)',
    substances: 'Tripeptide trở lên, Polypeptide, Protein (Albumin lòng trắng trứng)',
    phenomenon: 'Kết tủa Cu(OH)2 tan ra, dung dịch chuyển sang màu tím đặc trưng',
    equation: 'Ion Cu2+ tạo phức chelate với các nguyên tử N của liên kết peptide',
    purpose: 'Phân biệt tripeptide/protein với dipeptide hoặc amino acid'
  },
  {
    reagent: 'Cu(OH)2 ở nhiệt độ phòng (Tạo phức Cu-amine)',
    substances: 'Methylamine, Ethylamine (Alkylamine bậc thấp)',
    phenomenon: 'Hoà tan kết tủa Cu(OH)2 màu xanh lơ tạo dung dịch phức màu xanh lam thẫm',
    equation: '4CH3NH2 + Cu(OH)2 → [Cu(CH3NH2)4](OH)2',
    purpose: 'Chứng minh tính base và khả năng tạo phức giống ammonia'
  },
  {
    reagent: 'Acid Nitric đậm đặc (HNO3)',
    substances: 'Protein chứa amino acid thơm (lòng trắng trứng, da, tóc)',
    phenomenon: 'Xuất hiện kết tủa màu vàng (phản ứng xanthoproteic), thêm NH3 hoá màu da cam',
    equation: 'Phản ứng nitro hoá các vòng benzen trong gốc tyrosine, phenylalanine',
    purpose: 'Nhận biết protein chứa vòng thơm, giải thích hiện tượng da vàng khi dính axit'
  },
  {
    reagent: 'Quỳ tím ẩm',
    substances: 'Alkylamine, Lysine (hoá xanh) / Glutamic acid (hoá đỏ) / Gly, Ala, Val (không đổi màu)',
    phenomenon: 'Xanh (tính base), Đỏ (tính acid), Không đổi (trung tính pH ~ 6)',
    equation: 'Tương quan số lượng nhóm -NH2 và nhóm -COOH',
    purpose: 'Phân loại nhanh nhóm amino acid và amine béo'
  },
  {
    reagent: 'Nitrous acid (HNO2 = NaNO2 + HCl)',
    substances: 'Alkylamine bậc I vs Aniline',
    phenomenon: 'Alkylamine bậc I sủi bọt khí N2; Aniline (ở 0 - 5°C) tạo muối diazonium tan không có khí',
    equation: 'RNH2 + HNO2 → ROH + N2↑ + H2O ; C6H5NH2 + HNO2 + HCl → [C6H5N2+]Cl- + 2H2O',
    purpose: 'Phân biệt amine béo bậc I và amine thơm bậc I'
  }
];
