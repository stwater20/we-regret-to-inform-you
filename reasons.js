/* ============================================================
   常見拒稿理由資料檔 / Common rejection reasons data file
   一樣歡迎補充,發 PR 即可。Add more via a Pull Request.

   格式 / Format:
     { title: "Short title", en: "English explanation", zh: "中文旁白" },
   ============================================================ */
window.REASONS = [
  { title: "Flawed methodology", en: "Methodological problems are the #1 reason for rejection — bad design, wrong stats, unreliable data.", zh: "方法有洞,審稿人第一個就抓這裡。這是最常見的死因。" },
  { title: "No novelty / low impact", en: "Solid work that only confirms what's already known, or is too narrow to matter.", zh: "做得很扎實,但世界不需要再知道一次。" },
  { title: "Weak motivation", en: "The paper never answers \"so what?\" — no clear reason the question matters.", zh: "你知道為什麼要做,但沒讓審稿人知道。" },
  { title: "Unreliable results", en: "Findings aren't robust, or the interpretation over-reaches what the data show.", zh: "數據撐不起你的結論,句號變成問號。" },
  { title: "Poor clarity / structure", en: "Long, repetitive, focuses on what was done instead of what was found.", zh: "寫太多、講太雜,讀的人比你還累。" },
  { title: "Out of scope", en: "Perfectly fine paper, wrong journal. Desk-rejected before review.", zh: "投錯門,連被讀完的機會都沒有。" },
  { title: "Ignoring reviewer comments", en: "Even after revision, papers die by not addressing the feedback.", zh: "改了,但沒改到他要的那一點。" }
];
