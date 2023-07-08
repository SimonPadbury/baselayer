---
title: Baselayer
mainHeading: Baselayer is a super tiny, super powerful CSS library
layout: base.njk
nextPage: "/typography/"
nextLink: "Typography"
---

## Introduction

Designed as a good place to start, Baselayer may be all you need — for small static websites and blogs. Or you may use it as a _baselayer_ to quick-start your mega project.

Ready to use as-is, Baselayer gives you all this and more:

* A modern CSS reset
* Foundational accessibility features
* Responsive typography
* Styled form elements and buttons
* Simple responsive layouts using positioning, dimensions, flexbox, and grid
* A lightweight system of utility classes for controlling spacing, borders (and colors)
* [Three color options](http://localhost:8080/baselayer/#baselayer-comes-in-three-flavours) for you to choose from
* Built-in dark theme(s) -- controllable by a JS toggle.
* Control of many of these things using CSS variables (a.k.a. custom properties)

Baselayer uses some modern web technologies such as [CSS Grid](https://caniuse.com/css-grid), [CSS variables](https://caniuse.com/css-variables), [container queries](https://caniuse.com/css-container-queries), and the [OKLCH color model](https://caniuse.com/mdn-css_types_color_oklch), therefore it supports only up-to-date (2023 forward) evergreen web browsers — Safari, Firefox, Chrome, Edge, etc. Sorry, it does not support Internet Explorer.

## Baselayer comes in three flavours

From Baselayer v.2.0.0, the color utilities have been provided in separate streams. You only need to choose one of these stylesheets:

<div class="mt2 mb3 center">
  <div class="grid3cols gap2 sm:drop">
    <div class="b1 r3 p2 flex flexcolumn">
      <div class="grow center">
        <p class="h4 m0 mb2"><strong>Baselayer 2 core</strong></p>
        <p>Has only a few required base theme <code>#</code> colors (set in the root CSS variables)</p>
      </div>
      <a class="mb1 btn pill bgblue h:bg600" href="https://raw.githubusercontent.com/SimonPadbury/baselayer/main/_src/css/min/baselayer.min.css">Baselayer core</a>
      {{ metadata.filesize-baselayer }}
    </div>
    <div class="b1 r3 p2 flex flexcolumn">
      <div class="grow center">
        <p class="h4 m0 mb2"><strong>Baselayer 2 core<br> + OKLCH utilities</strong></p>
        <p>Required base theme colors are reset as OKLCH root CSS variables</p>
      </div>
      <a class="mb1 btn pill bgblue h:bg600" href="https://raw.githubusercontent.com/SimonPadbury/baselayer/main/_src/css/min/baselayer-oklch.min.css">Baselayer + OKLCH</a>
      {{ metadata.filesize-baselayer-oklch }}
    </div>
    <div class="b1 r3 p2 flex flexcolumn">
      <div class="grow center">
        <p class="h4 m0 mb2"><strong>Baselayer 2 core<br> + HSL utilities</strong></p>
        <p>Required base theme colors are reset as HSL root CSS variables</p>
      </div>
      <a class="mb1 btn pill bgblue h:bg600" href="https://raw.githubusercontent.com/SimonPadbury/baselayer/main/_src/css/min/baselayer-hsl.min.css">Baselayer + HSL</a>
      {{ metadata.filesize-baselayer-hsl }}
    </div>
  </div>
</div>

These three download options can be found in the [source output folder](https://github.com/SimonPadbury/baselayer/tree/main/_src/css/min).

For more information on the OKLCH and HSL color systems in Baselayer, see [colors]({{ '/colors/' | url }}).

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  <strong>Baselayer includes no JavaScript or icon fonts.</strong> You can pair Baselayer with whatever JS framework you prefer to work with, or do your own thing. For icon fonts, for small projects I may sometimes use a character (glyph) from <a  class="tblue t600 h:t700"href="https://www.amp-what.com/">&amp;what;</a>. When I want something more, I copy a SVG icon for <a class="tblue t600 h:t700" href="https://phosphoricons.com/">Phosphor icons</a> (other icon sets are available).
</div>

## Built using PostCSS

Baselayer is built using [PostCSS](https://postcss.org) and a few plugins. The PostCSS plugins used by Baselayer are:

* [postcss-import](https://github.com/postcss/postcss-import) — so that Baselayer could be built from separate CSS files, linked together in an `index.css` using the `@import` rule, and then inlined
* [cssnano](https://cssnano.co) — to remove comments and minify the output `baselayer.css`

**Notes:**

* Neither [postcss-preset-env](https://preset-env.cssdb.org) nor [autoprefixer](https://github.com/postcss/autoprefixer) have been used in Baselayer.
* [postcss-custom-media](https://npm.devtool.tech/postcss-custom-media) has not been used (was used in Baselayer 1 but it has been dropped for v.2), because Baselayer 2 also supports _container queries_ that aren’t handled by `postcss-custom-media`. When this or another module comes along that does support container queries, let me know.
* Preprocessors such as Sass are not required.

## Modern CSS reset

The Baselayer reset is a “best of both” combination of [Josh W Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) and the [Andy Bell’s modern CSS reset (Picalilli)](https://piccalil.li/blog/a-modern-css-reset/).

Baselayer takes care of classless HTML from here by setting some minimalist, easy-to-read typography, and styles for buttons and forms.

## Basic accessibility features

Baselayer has two basic accessibility features built-in.

### (1.) Focus rings

**(a.) Form focus ring:**

For form inputs and buttons on `:focus`, there’s a 4px light blue ring (see [colors]({{ '/colors/' | url }})). Example:

<form>
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

The zero outline resets the browser defaults, while the box shadow provides the same style across browsers. Box-shadow has been used so that the focus ring curves around the corners of inputs and buttons following their border-radius (if you add one).

**(b.) Button focus ring:**

Buttons (`<button>`, `<input type="button">`, etc.) get the same focus ring as for other form inputs, but only for `:focus-visible`.

**(c.) Link focus ring:**

For links, collapsible `<details>`, pseudo-buttons (i.e. links styled with the `btn` class), and anything else that is not a form input or button, the focus ring is a 2px dotted black outline supported by a 2px solid white box shadow. This white will appear _between_ the outline dots, looking like a dotted white line. Keyboard-tab through these links and buttons to see the accessibility rings:

<div class="my2 b1">
  <div class="grid3cols">
    <div class="p3 flex flexcolumn flexcenter flexmiddle">
    <p><a  class="tblue t600 h:t700"href="/#">Link</a></p>
    <p><button type="button" class="pill">Button</button></p>
    </div>
    <div class="p3 flex flexcolumn flexcenter flexmiddle bgblue bg700">
    <p><a class="tblue t200 h:t300" href="/#">Link</a></p>
    <p><button class="pill b1 bwhite h:bwhite" type="button">Button</button></p>
    </div>
    <div class="p3 flex flexcolumn flexcenter flexmiddle bgblack">
    <p><a class="tblue t200 h:t300" href="/#">Link</a></p>
    <p><button type="button" class="pill">Button</button></p>
    </div>
  </div>
</div>

### (2.) The `visually-hidden` class

The `visuallyhidden` is used for “skip links”, such as the visually-hidden link above the top navigation bar on this website.

```
<a  class="tblue t600 h:t700"
  href="#main-content"
  tabindex="1"
  class="inlineblock m1 visuallyhidden"
>Skip to main content</a>

<!-- Logo and menu go in here -->

<main id="main-content">
  ...
</main>
```

## Adding your own styles

The design philosophy behind the Baselayer project is:

* Make a stylesheet that does most things most people want
* With much less CSS that is mostly never used (e.g. rarely used grid column classes or color shade classes)
* Using modern CSS technologies such CSS variables, CSS functions, CSS grid, container queries, and a modern color system, that enable a lot of code reuse (reducing duplication)
* All without a preprocessor (no Sass, Less, Stylus etc.)
* Aim at being a “good place to start” — a _baselayer_ for a web design project, closer to being a more powerful replacement for [Normalize](https://necolas.github.io/normalize.css/) than an entire design system like the much bigger CSS frameworks out there (we could name more than several).

The Baselayer core stylesheet, `baselayer.css` (filesize: {{ metadata.filesize-baselayer }}) includes dozens of CSS variables (custom properties), most of which are in the `:root {}` that you can utilize in your own CSS rules. For example, you can change and/or reuse the variables for fonts, sizes, layout widths, decoration (margins, paddings, borders, rounded corners), and colors.

Baselayer’s color systems — choose either  `baselayer-oklch.css` ({{ metadata.filesize-baselayer-oklch }}) or `baselayer-hcl.css` ({{ metadata.filesize-baselayer-hsl }}) — each contain the Baselayer core.

Whichever version you choose, Baselayer is tiny so don’t expect it to do _all_ that you want, unless you are only working on a simple project. But it will probably do _most_ of what you want. This documentation gives you a thorough tour of the HTML styling and CSS classes available in Baselayer.

<div aria-label="Note" class="popout mb2 bl3 bblue b300 p2 tblack bgblue bg100">
  <strong>Baslayer’s CSS has been made deliberately compact by making most class names abbreviations and no hyphens or underscores.</strong> You can take advantage of that fact when you add your own CSS classes. E.g. if you use hyphens or underscores in your class names, it will be easier for you to remember what’s your own, and it will help you identify “what’s not Baselayer” in collaborative projects, or when looking back at your own code.
</div>