---
title: Baselayer
mainHeading: Baselayer Is a Splendiferous Yet Miniscule CSS Library
layout: base.njk
nextPage: "/typography"
nextLink: "Typography"
---

## Introduction

Designed as a good place to start, Baselayer may be all you need — for small static websites and blogs. Or you may use it as a _baselayer_ to quick-start your mega project.

Ready to use as-is, Baselayer gives you all this and more:

* A modern CSS reset
* Basic accessibility features
* Responsive typography
* Simple responsive layouts using positioning, dimensions, flexbox, and grid
* A lightweight system of utility classes for controlling spacing, borders, and colors
* Styled form elements and buttons
* Control of many of these things using CSS variables (custom properties)

Believe it or not, all this is packed into a tiny CSS file, **14kb**.

Baselayer uses some modern web technologies such as [CSS Grid](https://caniuse.com/?search=grid) and [CSS variables](https://caniuse.com/?search=variables), so it supports only modern web browsers (Safari, Firefox, Chrome, Edge, etc.). Sorry, it does not support Internet Explorer.

## Built using PostCSS

Baselayer is built using [PostCSS](https://postcss.org) and a few plugins. Preprocessors such as Sass are not required.

The PostCSS plugins used by Baselayer are:

* [postcss-import](https://github.com/postcss/postcss-import) — so that Baselayer could be built from separate CSS files, linked together in an `index.css` using the `@import` rule, and then inlined
* [postcss-custom-media](https://npm.devtool.tech/postcss-custom-media) — to enable CSS variables to be used in media queries (used only in the `flex` and `grid` layout classes)
* [cssnano](https://cssnano.co) — to remove comments and minify the output `baselayer.css`

**Note:** neither [postcss-preset-env](https://preset-env.cssdb.org) nor [autoprefixer](https://github.com/postcss/autoprefixer) have been used in Baselayer.

## Modern CSS Reset

The Baselayer reset is a “best of both” combination of [Josh W Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) and the [Andy Bell’s modern CSS reset (Picalilli)](https://piccalil.li/blog/a-modern-css-reset/).

Then, Baselayer takes care of the basics by setting some minimalist, easy-to-read typography, and styles for buttons and forms.

## Basic Accessibility Features

Baselayer has two basic accessibility features built-in.

### (1.) Focus Rings

**(a.) Form focus ring:**

For form inputs and buttons, there’s a 4px light blue ring (see [colors](/colors)). Example:

<form>
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

The zero outline resets the browser defaults, while the box shadow provides the same style accross browsers. Box-shadow has been used so that the focus ring curves around the corners of inputs and buttons following their border-radius.

**(b.) Link focus ring:**

For links, collapsible `<details>`, and anything else that is not a form input or button, the focus ring is a 2px dotted black outline supported by a 2px solid white box shadow. This white will appear _between_ the outline dots, looking like a dotted white line. Keyboard-tab through these links and buttons to see the accessibility rings:

<div class="mt2 b1 b600 sm:grid3cols">
  <div class="p3 flex flexcolumn flexcenter flexmiddle">
  <p><a href="/#">Link</a></p>
  <p><button type="button">Button</button></p>
  </div>
  <div class="p3 flex flexcolumn flexcenter flexmiddle bgblue bg700">
  <p><a class="tblue bblue h:b300 t200 h:t300" href="/#">Link</a></p>
  <p><button class="b1 bwhite h:bwhite" type="button">Button</button></p>
  </div>
  <div class="p3 flex flexcolumn flexcenter flexmiddle bgblack">
  <p><a class="tblue t200 h:t300" href="/#">Link</a></p>
  <p><button type="button">Button</button></p>
  </div>
</div>

### (2.) The Visually-Hidden Class

The `visuallyhidden` is used for “skip links”, such as the visually-hidden link above the top navigation bar on this website.

```
<a 
  href="#main-content"
  tabindex="1"
  class="inlineblock m1 visuallyhidden"
>Skip to main content</a>

<!-- Logo and menu go in here -->

<main id="main-content">
  ...
</main>
```