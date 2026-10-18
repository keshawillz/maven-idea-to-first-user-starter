# Design files

This folder holds your design from Claude Design, so Claude Code can match it and so the design travels with your code.

## How it gets here (Session 1)

1. In Claude Design, when your screens are ready, click **Share** at the top right, then the **Export** tab.
2. Click **HTML** (standalone web page) to download your design as a web page. That file is your design as code: the exact colors, fonts, spacing and layout.
3. Click **PNG** to download the screens as an image.
4. Drag both files from your computer into this folder in the file list on the left of the Codespace. Name them so the order is obvious, for example `design.html` and `screens.png`. If you export one image per screen, number them: `1-home.png`, `2-form.png`, and so on.
5. Commit, then carry on with your build prompt.

## The rule

Claude Code reads what's in here before it builds. `DESIGN.md` is the written version of the same decisions (colors, type, sizes, components). When the two disagree, `DESIGN.md` wins, so fix it there.

Until Session 1 this folder holds only this note.
