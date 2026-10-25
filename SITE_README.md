# Tenang Squad: showcase site

Plain HTML, CSS and JS. There is no build step and no dependencies. Open `index.html` in a browser, or host the folder on any static host (GitHub Pages, Netlify, Cloudflare Pages).

```
index.html            the whole page (sections: hero, now playing, how it plays, features, our games, the squad, join)
css/site.css          all styling; the palette is at the top (:root), taken from the logo
js/site.js            sticky nav, mobile menu, scroll reveal, screenshot tabs
img/logo-round.png    the badge, cropped round with a transparent background (also the favicon)
img/logo-source.png   the original square logo (tenang_squad_2.png)
img/og.png            1200x630 share image for links
img/shots/            game screenshots (copied from abangcc/tests/screenshots)
play/abang-cc/        a copy of the game's single-file build
```

## Updating the game on the site

`play/abang-cc/index.html` is a **copy** of `abangcc/dist/ABANG_CC_2007_ALPHA_13.html`. After a new build, copy the new file over it and update the "Alpha 0.13" labels in `index.html`.

## Adding the next game

In `index.html`, find the card with the class `card--soon` in the `#catalog` section. Replace its text and image, remove the `card--soon` class, and add a `play/<game>/` folder.

## Still to fill in

- Team members and a contact email or social links (the page currently links only to https://github.com/tenangsquad).
- A custom domain, if you want one.
