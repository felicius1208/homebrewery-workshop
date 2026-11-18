# Homebrewery Workshop

An unofficial, form-based editor for D&D 5e homebrew. Pick a type (spell, magic item, monster, feat, background, species or subclass), fill in the form, and get finished [Homebrewery](https://homebrewery.naturalcrit.com) code plus a live page preview. You can print the pages straight to PDF.

> **Vibe-coded.** This project was created by prompting an AI assistant (Claude, by Anthropic) and has not been through a traditional code review. Use it, check the output, and expect rough edges.

Not affiliated with or endorsed by Wizards of the Coast, D&D Beyond or The Homebrewery. Dungeons & Dragons is a trademark of Wizards of the Coast LLC. This repository contains no official rules text, artwork or branding.

GitHub pages website https://felicius1208.github.io/homebrewery-workshop/

## Features

- Editors for spells, magic items, monsters, feats, backgrounds, species and subclasses
- Workflow inspired by the homebrew creation flow of other tools: choose a type first, then fill in the form
- Live page preview in the look of the Homebrewery 5e PHB theme, with zoom, full-screen view and an **A4 / Letter** switch (starts on A4)
- **Save as PDF** button that opens the print dialog with the pages ready to go
- Combine several creations into one book, with optional page breaks
- Everything stays in your browser (`localStorage`). No server, no account, no tracking, no external requests.

## Use it

Open `index.html` in a browser, or serve the repository folder with GitHub Pages.

For GitHub Pages: Settings, Pages, deploy from branch `main`, folder `/ (root)`.

## Fonts and images

The folder `assets/` contains the fonts and the parchment images of the Homebrewery 5e PHB theme, copied from the [Homebrewery repository](https://github.com/naturalcrit/homebrewery) (MIT, commit `0dd7d6e`). They are used for the page look and are listed in `THIRD_PARTY_NOTICES.md`.

## Build

`index.html` is generated from `src/`:

```
npm run build
```

`src/hbfm.bundle.js` bundles [marked-hbfm](https://www.npmjs.com/package/marked-hbfm) (Homebrewery's Markdown flavor) with esbuild. `src/theme.css` was compiled from the Homebrewery theme sources.

## Credits

- Created by felicius1208 (https://github.com/felicius1208) with Claude (Anthropic), vibe-coded
- The Homebrewery by Scott Tolksdorf and contributors (MIT), for the theme and the Markdown renderer
- marked and its extensions, see `THIRD_PARTY_NOTICES.md`

## License

MIT, see `LICENSE`. Third-party licenses are in `THIRD_PARTY_NOTICES.md`.
