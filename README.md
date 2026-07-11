# We Regret to Inform You… 🖤

**繁體中文** · [English](README.en.md)

> 獻給每一封以「Dear Author」開頭、後面卻急轉直下的信。

一個很安靜的悲傷小網站——按一下,就再被你敬愛的審稿人拒絕一次。這裡收錄了審稿人最經典的拒稿名言,也整理了論文最常見的被拒原因,陪你笑著把眼淚吞回去。

🔗 **線上看:** <https://we-regret-to-inform-you.sectools.tw>

<br>

## 這裡有什麼

- **拒稿名言產生器**——按一下,隨機跳出一句(致敬真實審稿語氣的)拒絕名言,搭配一句中文旁白,還會記錄你被拒絕了幾次。
- **常見被拒原因牆**——整理論文最常見的七大被拒原因,每一項都附上一句誠實的註解。
- **一鍵分享**——支援 X、Facebook、LINE、Threads 與複製連結,手機還能用系統原生分享。
- **深色 / 淺色主題**——右上角一鍵切換,深色是雨夜、淺色是陰天白晝,選擇會自動記住。
- **免安裝、純前端**——單一 HTML 檔搭配兩個資料檔就能運作,不需要任何建置流程。

<br>

## 在本機開啟

用瀏覽器直接打開 `index.html` 就好,不需要架伺服器。

<br>

## 一起貢獻拒稿名言

歡迎把你收過(或聽過)最心碎、最好笑的審稿拒絕語加進來。所有內容都放在獨立的資料檔裡,**你完全不用動到 `index.html`**:

| 檔案 | 內容 |
| --- | --- |
| `quotes.js` | 拒稿名言 |
| `reasons.js` | 常見被拒原因 |

流程很單純:**Fork → 編輯 `quotes.js` → 送出 Pull Request**。詳細說明請見 [CONTRIBUTING.md](CONTRIBUTING.md)。

> 所有貢獻一律透過 Pull Request 進來,不直接改 `main`,讓每一句都有人再看過一次才合併。

<br>

## 專案結構

| 檔案 | 說明 |
| --- | --- |
| `index.html` | 主頁面,包含所有樣式與互動 |
| `quotes.js` | 拒稿名言資料 |
| `reasons.js` | 常見被拒原因資料 |
| `CONTRIBUTING.md` | 貢獻指南 |
| `PULL_REQUEST_TEMPLATE.md` | Pull Request 範本 |

<br>

## 部署到 GitHub Pages

前往 **Settings → Pages**,把 Source 設為「Deploy from a branch」,分支選 `main`、資料夾選 `/ (root)`,存檔後網站就會發布到:

```
https://<你的帳號>.github.io/<專案名稱>/
```

<br>

## 免責聲明

被拒原因整理自公開文章;產生器裡的句子是取材自真實審稿評論的再創作,純粹用來療癒與自嘲,並未影射任何特定的人、期刊或投稿。

被拒絕不代表你的研究沒有價值——只是這一次、這位審稿人、這本期刊沒緣分而已。下一站見。

<br>

## 更多工具

想找更多實用小工具?歡迎逛逛 → <https://sectools.tw/tools>

---

<sub>Made with tears for everyone refreshing their submission portal at 3 AM. 🖤</sub>
