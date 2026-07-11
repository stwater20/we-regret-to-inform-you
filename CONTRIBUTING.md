# 一起收集拒稿名言 🖤

**繁體中文** · [English](CONTRIBUTING.en.md)

歡迎把你收過(或聽過)最心碎、最好笑的審稿拒絕語貢獻上來。

**所有貢獻一律透過 Pull Request**——不直接改 `main`,讓大家一起看過再合併。

所有內容都拆成獨立的資料檔,**你完全不用動到 `index.html`**:

| 檔案 | 內容 |
| --- | --- |
| `quotes.js` | 拒稿名言 |
| `reasons.js` | 常見被拒原因 |

<br>

## 怎麼加一句名言

1. 按右上角的 **Fork**,把這個專案複製到你自己的帳號底下。
2. 打開 **`quotes.js`**,在 `window.QUOTES` 陣列的最後加上一筆:
   ```js
   { en: "We regret that your figures were prettier than your results.", zh: "圖做得比數據好看,也是一種罪。" },
   ```
   - `en`:英文的審稿人語氣(取材自真實評論即可,別直接貼可辨識的私人信件)。
   - `zh`:一句中文旁白或吐槽。
3. Commit 之後送出 **Pull Request**,標題簡單說明你加了什麼。

想補充「常見被拒原因」就改 **`reasons.js`**,格式如下:

```js
{ title: "Short title", en: "English explanation", zh: "中文旁白" },
```

<br>

## 在本機確認

直接用瀏覽器打開 `index.html` 就能看到效果——資料是透過 `<script src>` 載入的,不需要架伺服器。

<br>

## 幾個小規矩

- 保持幽默或療癒,**不要點名**真實的人、期刊、投稿編號,或可辨識的真實信件。
- 一次 Pull Request 加一到數句就好,方便大家 review。
- 中英各一句,維持全站的雙語風格。
- 不確定要不要加?先開一個 Issue 討論也可以。

<br>

## 想改功能

介面、動畫、分享、深淺色主題之類的改動同樣歡迎,一樣送 Pull Request、附上簡短說明就好。

謝謝你讓這個小站更好一點。被拒絕的人,不孤單。🖤
