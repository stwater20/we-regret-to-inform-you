# Contributing rejection lines 🖤

[繁體中文](CONTRIBUTING.md) · **English**

Got a heartbreaking (or hilarious) rejection line of your own? We'd love to add it.

**Every contribution goes through a pull request** — nobody pushes to `main` directly, so each line gets a second pair of eyes before it's merged.

All the content lives in standalone data files, so **you never have to touch `index.html`**:

| File | Contents |
| --- | --- |
| `quotes.js` | Rejection lines |
| `reasons.js` | Common rejection reasons |

<br>

## How to add a line

1. Click **Fork** in the top-right to copy the project under your own account.
2. Open **`quotes.js`** and append an entry to the `window.QUOTES` array:
   ```js
   { en: "We regret that your figures were prettier than your results.", zh: "圖做得比數據好看,也是一種罪。" },
   ```
   - `en`: the reviewer-style line in English (inspired by real comments is fine — please don't paste identifiable private letters).
   - `zh`: a line of commentary in Chinese.
3. Commit, then open a **pull request** with a short title describing what you added.

To add a common rejection reason, edit **`reasons.js`** instead, using this format:

```js
{ title: "Short title", en: "English explanation", zh: "中文旁白" },
```

<br>

## Check it locally

Just open `index.html` in your browser — the data loads via `<script src>`, so no server is needed.

<br>

## A few ground rules

- Keep it funny or comforting, and **don't name** real people, journals, submission IDs, or identifiable private letters.
- One to a few lines per pull request, so it's easy to review.
- One English line plus one Chinese line, to keep the site bilingual.
- Not sure whether to add something? Open an issue to discuss first.

<br>

## Code changes

Changes to the interface, animation, sharing, or the light/dark theme are just as welcome — open a pull request with a short description.

Thanks for making this little site a bit better. If you've been rejected, you're not alone. 🖤
