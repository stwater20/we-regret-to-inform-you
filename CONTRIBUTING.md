# 一起收集拒稿名言 🖤 / Contributing

歡迎把你收過(或聽過)最心碎、最好笑的審稿拒絕語貢獻上來。
Got a heartbreaking or hilarious rejection line? Add it here.

**貢獻方式一律走 Pull Request** — 不直接改 `main`,讓大家一起看過再合併。
All contributions go through a **Pull Request**. Nobody pushes to `main` directly.

所有資料都拆成獨立檔案,**你不用碰 `index.html`**:
- `quotes.js` — 拒稿名言
- `reasons.js` — 常見拒稿理由

## 怎麼加一句名言 / How to add a line

1. **Fork** 這個 repo(右上角 Fork 按鈕)。
2. 打開 **`quotes.js`**,在 `window.QUOTES` 陣列最後加一筆:
   ```js
   { en: "We regret that your figures were prettier than your results.", zh: "圖做得比數據好看,也是一種罪。" },
   ```
   - `en`:英文的審稿人語氣(致敬真實評論,別直接貼可辨識的私人信件)。
   - `zh`:一句中文旁白/吐槽。
3. Commit → 發 **Pull Request**,標題簡單說明你加了什麼。

想加「常見拒稿理由」就改 **`reasons.js`**,格式:
```js
{ title: "Short title", en: "English explanation", zh: "中文旁白" },
```

在本機確認:直接用瀏覽器打開 `index.html` 就能看到效果(資料是用 `<script src>` 載入,不需要架伺服器)。

## 小規矩 / Ground rules

- 保持幽默或療癒,**不要點名**真實的人、期刊、投稿編號或可辨識的真實信件。
- 一次 PR 一到數句就好,方便 review。
- 中英各一句,維持全站雙語風格。
- 不確定?先開一個 Issue 討論也可以。

## 想改功能 / Code changes

介面、動畫、分享、深淺色主題等改動同樣歡迎,一樣發 PR、附上簡短說明即可。

謝謝你讓這個小站更好一點。被拒絕的人不孤單。
