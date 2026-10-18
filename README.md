# Idea to First User: starter

The empty foundation every product in the cohort starts from. A blank home page, a working signup form, and the deploy setup for AWS Amplify, with Claude Code ready to go in a GitHub Codespace. There is no idea in it. The idea is yours.

**Stack:** Next.js 15, Tailwind CSS 4, AWS Amplify Gen 2 (for signups), Amplify Hosting (deploy, week 3).

## 1. Make it yours (5 minutes)

1. Click **Use this template** at the top of this page, then **Create a new repository**.
2. Name it after your product (lowercase, dashes, no spaces). Keep it **Public** unless you have a reason not to.
3. Click **Create repository**. You now own a copy. Everything below happens in *your* repository, not this one.

## 2. Open it in a Codespace (5 minutes, mostly waiting)

1. In your new repository, click the green **Code** button, then the **Codespaces** tab, then **Create codespace on main**.
2. A browser tab opens with VS Code in it. The first time, it installs everything. Wait for the terminal at the bottom to go quiet (about five minutes). You'll see `npm ci` finish and then `claude-code` install.
3. Nothing is installed on your laptop. The whole project runs in the Codespace.

## 3. First run (2 minutes)

In the terminal at the bottom of the Codespace, type:

```
npm run dev
```

A preview tab opens with your blank home page and the signup form. The first load takes a few seconds while Next.js compiles the page, so if the preview is blank or shows a broken-page icon, click the refresh arrow next to its address bar. If no preview opens at all, click the **Ports** tab next to the terminal and click the globe icon on port 3000.

Try the form. In this phase it saves to your browser only ("local mode"). It starts saving for real when you connect Amplify in week 3.

## 4. Start Claude Code (3 minutes)

1. Open a second terminal: click the **+** at the top right of the terminal panel.
2. Type `claude` and press Enter.
3. The first time, it asks you to log in. Pick **Claude account**, open the link it prints, approve, and paste the code back into the terminal. Use the same account as your Claude Pro plan.
4. You're in. Try this as a hello world:

```
Read SPEC.md, DESIGN.md and CLAUDE.md. Tell me in three sentences what this project is and what you're allowed to build. Don't change anything.
```

Claude Code reads `CLAUDE.md` every time it starts. Those are the rules it follows for this project: plan first, work on a branch, explain every change, one flow only.

## 5. Stop the Codespace when you're done (1 minute)

The Codespace uses your free hours only while it's running.

- Click the **Codespaces** menu in the bottom-left corner of VS Code, then **Stop Current Codespace**.
- Or go to [github.com/codespaces](https://github.com/codespaces), find it in the list, click **…**, then **Stop**.

Two settings worth changing once, at [github.com/settings/codespaces](https://github.com/settings/codespaces):

- **Default idle timeout:** 15 minutes. A forgotten tab then stops itself.
- **Default retention period:** leave at 30 days. Your stopped Codespace, with all your work, is kept that long. Your code is also in GitHub every time you merge, so nothing is lost either way.

Next time, open the same Codespace from the **Code** button (it lists existing ones) rather than creating a new one.

## What's inside

| Path | What it is |
| --- | --- |
| `app/page.tsx` | Your home page. Replace the bracketed text with your positioning in week 1. |
| `app/layout.tsx` | Page title and description. Change them with your positioning too. |
| `components/SignupForm.tsx` | The signup form. Change the words, keep the save call. |
| `lib/signups.ts` | Saves a signup. Local mode now, Amplify in week 3. |
| `SPEC.md` | Your one-page spec. Claude Code reads it before building. Fill it in during Session 1. |
| `DESIGN.md` | Your design direction: voice, colors, type, sizes. Claude Code reads it before building any screen. Fill it in during Session 1. |
| `LAUNCH-CHECK.md` | Twelve pre-launch checks and the prompts to run them. Used in Sessions 3 and 4. |
| `CLAUDE.md` | The rules Claude Code follows in this project. |
| `amplify/` | The Amplify backend: one `Signup` table. Don't edit it in weeks 1 and 2. |
| `amplify.yml` | Build settings Amplify Hosting reads at deploy time. |
| `.devcontainer/` | What the Codespace installs. |

## Week 3 preview: going live

You'll connect this repository to AWS Amplify Hosting. Amplify builds the backend (the signup table) and the site from `main`, gives you a URL, and redeploys every time you merge. The full walkthrough comes in Session 3. For now you only need an AWS account; the AWS guide in pre-work covers that.

## If something breaks

- **Preview shows an error page:** read the error in the terminal, copy the first line, and paste it into Claude Code with "what does this mean?"
- **`claude` says command not found:** the install didn't finish. Run `npm install -g @anthropic-ai/claude-code` in the terminal and try again.
- **Port 3000 is busy:** press Ctrl+C in the terminal running `npm run dev`, then run it again.
- **Anything else:** post in the cohort channel with the exact error message, or bring it to office hours.
