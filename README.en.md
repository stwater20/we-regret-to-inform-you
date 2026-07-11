# We Regret to Inform You… 🖤

[繁體中文](README.md) · **English**

> For every letter that opens with "Dear Author" and goes downhill from there.

A quietly sad little website: press a button and get rejected by your reviewer all over again. It collects the most iconic peer-review rejection lines and rounds up the reasons papers get turned down most often, so you can laugh your way through the tears.

🔗 **Live site:** <https://we-regret-to-inform-you.sectools.tw>

<br>

## What's inside

- **Rejection generator** — one click serves up a (real-reviewer-flavoured) rejection line with a bit of commentary, and keeps count of how many times you've been rejected.
- **Wall of common reasons** — the seven reasons papers get rejected most often, each with an honest note.
- **One-tap sharing** — X, Facebook, LINE, Threads, copy link, plus native sharing on mobile.
- **Light / dark theme** — toggle in the top-right corner; your choice is remembered.
- **No build step** — a single HTML file plus two data files. Just open it.

<br>

## Run it locally

Open `index.html` in your browser. No server required.

<br>

## Contributing rejection lines

Got a heartbreaking (or hilarious) rejection line of your own? Add it. All the content lives in standalone data files, so **you never have to touch `index.html`**:

| File | Contents |
| --- | --- |
| `quotes.js` | Rejection lines |
| `reasons.js` | Common rejection reasons |

The flow is simple: **fork → edit `quotes.js` → open a pull request**. See [CONTRIBUTING.en.md](CONTRIBUTING.en.md) for the full guide.

> Every contribution goes through a pull request — nobody pushes to `main` directly, so each line gets a second pair of eyes before it's merged.

<br>

## Project structure

| File | Description |
| --- | --- |
| `index.html` | The page, with all styles and interactions |
| `quotes.js` | Rejection-line data |
| `reasons.js` | Common-reason data |
| `CONTRIBUTING.md` | Contribution guide |
| `PULL_REQUEST_TEMPLATE.md` | Pull request template |

<br>

## Deploy to GitHub Pages

Go to **Settings → Pages**, set Source to "Deploy from a branch", pick the `main` branch and the `/ (root)` folder, then save. Your site publishes to:

```
https://<username>.github.io/<repo>/
```

<br>

## Disclaimer

The rejection reasons are drawn from publicly available articles; the generator's lines are original riffs inspired by real peer-review comments, meant purely for catharsis and self-deprecating fun. They don't reference any specific person, journal, or submission.

Getting rejected doesn't mean your work has no value — it just means this time, this reviewer, this journal. On to the next one.

<br>

## More tools

Looking for more handy tools? → <https://sectools.tw/tools>

---

<sub>Made with tears for everyone refreshing their submission portal at 3 AM. 🖤</sub>
