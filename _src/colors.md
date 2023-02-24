---
title: Colors
mainHeading: Colors
layout: base.njk
prevPage: "/decoration"
nextPage: "/forms"
prevLink: "Decoration"
nextLink: "Forms"

---

Baselayer currently uses `hsl()` for setting colors (except for named colors `black` and `white`). `hsl()` (from the CSS3 Color Module) can do all that `#` (hex) and `rgb()` (CSS2) can do, but with two advantages: `hsl()` is human readable, and it’s easy to set up a series of color shades by adjusting the lightness channel — which in Baselayer is done by CSS variables `--l100` through `--l900`.

In the [CSS4 Color Module](https://www.w3.org/TR/css-color-4/) (a recommendation released by the W3C in July 2022), there are some more color declarations systems, such as `lab()`, `oklab()`, `lch()` and `oklch()`. However, at the time of creating Baselayer 1.x in October 2022, only the Safari browser has partially implemented these color systems (it is not yet possible in Safari (Oct 2022) to use CSS variables within these color declarations). In future I hope to swap out the Baselayer `hsl()` system for one of the CSS4 systems.

More on LCH and OKLCH:

* [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/) by Lea Verou
* [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) by Andrey Sitnik and Travis Turner (_Evil Martians_)

_Evil Martians_ (currently) use a color polyfill script, so that they can code in OKLCH in 2022 but it ands up as RGB (so all browsers can understand he color). Baselayer can’t use that script, since it splits the HSL into two variables (one for hue-saturation, the othr for lightness) in geneating its color shades `*l100` to `*l900`.

As of v.1.0 Baselayer has several utility classes for setting the `hsl()` color of border, text, and background of HTML elements. `hsl()` swatches are `gray` `blue` `green` `amber` and `red` These are used to control a set of utility classes for controlling text color, background color, and border color.

These five colors have been carefully chosen so that in the Baselayer system, each of the the `*l100` variants are not too close to white and the `*l900` variants are not too close to black.

Also present are `black` and `white` but these are set as _named_ colors. There’s also `bgtransparent` — for setting a transparent background e.g. for outline buttons.

The `hsl()` colors with variables can be adjusted in the root-variables file to correspond to the common user interface (UI) colors (see below), if that’s what you need.

Color utility classes are prefixed acording to where the color will be applied:

* `b*` — border color / `h:b*` — border color hover
* `t*` — text color / `h:t*` — text color hover
* `bg*` — background color / `h:bg*` — background color hover

I have named the colors according to their common names, instead of opting to name them according to the UI “success”, “warning”, “danger” etc. so that you can _also_ make color utilities or components with colors dedicated to your purposes, meanwhile allowing you to adjust these built-in colors and also add your own.

Examples:

<div class="mt2 sm:grid3cols gap">
  <div class="b3 bgreen p2">bgreen</div>
  <div class="b3 p2 tgreen">tgreen</div>
  <div class="b3 p2 twhite bggreen">bggreen</div>
</div>

```
<div class="b3 bgreen p2">...</div>
<div class="b3 p2 tgreen">...</div>
<div class="b3 p2 twhite bggreen">...</div>
```

<div class="mt2 flex flexmiddle">
  <div class="p2 bggray"></div>
  <div class="ml1"><code>bggray</code></div>
</div>
<div class="flex flexmiddle">
  <div class="p2 bgblue"></div>
  <div class="ml1"><code>bgblue</code></div>
</div>
<div class="flex flexmiddle">
  <div class="p2 bggreen"></div>
  <div class="ml1"><code>bggreen</code></div>
</div>
<div class="flex flexmiddle">
  <div class="p2 bgamber"></div>
  <div class="ml1"><code>bgamber</code></div>
</div>
<div class="flex flexmiddle">
  <div class="p2 bgred"></div>
  <div class="ml1"><code>bgred</code></div>
</div>

Each of these colors is set at the `500` shade level in the Baselayer color scale, by default. This is how it works (example):

```
/* root-vars.css */

:root {
  --green-hs: 135, 35%; /* hue and saturation */
}

/* colors.css */

.bggreen {
  --hs: var(--green-hs);
  background: hsl(var(--hs), var(--l500));
}

<!-- HTML -->

<div class="bggreen">
  ...
</div>
```

## Color Shades

HSL lightness is controlled separately by supplemental classes for each, and there are hover states for each. 

* Border shades: 
    * `b100` through `b900`
    * Hover state: `h:b100` through `h:b900`
* Text shades:
    * `t100` through `t900`
    * Hover state: `h:t100` through `h:t900`
* Background shades:
    * `bg100` through `bg900`
    * Hover state: `h:bg100` through `h:bg900`

Example usage:

<div class="popout mt2 bl3 bamber p2 tbase tblack bgamber bg200">
  &#9888; Alert panel.
</div>

```
<div class="popout bl3 bamber p2 tbase tblack bgamber bg200">
  &#9888; Alert panel.
</div>
```

The shades `100` thorugh `900` if used alone, _do not provide color_. But if you use them to supplement one of the other colors above, then their `-hs` will provide the color, and the shase will shade that color.

Demo of color shades using background colors:

<div class="overflow-x">
<table style="table-layout: fixed;">
<thead>
<tr>
<th></th>
<th><code>bggray</code></th>
<th><code>bgblue</code></th>
<th><code>bggreen</code></th>
<th><code>bgamber</code></th>
<th><code>bgred</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>bgwhite</code></td>
<td colspan="5" class="py3 bgwhite"></td>
</tr>
<tr>
<td><code>bg100</code></td>
<td class="py3 bggray bg100"></td>
<td class="py3 bgblue bg100"></td>
<td class="py3 bggreen bg100"></td>
<td class="py3 bgamber bg100"></td>
<td class="py3 bgred bg100"></td>
</tr>
<tr>
<td><code>bg200</code></td>
<td class="py3 bggray bg200"></td>
<td class="py3 bgblue bg200"></td>
<td class="py3 bggreen bg200"></td>
<td class="py3 bgamber bg200"></td>
<td class="py3 bgred bg200"></td>
</tr>
<tr>
<td><code>bg300</code></td>
<td class="py3 bggray bg300"></td>
<td class="py3 bgblue bg300"></td>
<td class="py3 bggreen bg300"></td>
<td class="py3 bgamber bg300"></td>
<td class="py3 bgred bg300"></td>
</tr>
<tr>
<td><code>bg400</code></td>
<td class="py3 bggray bg400"></td>
<td class="py3 bgblue bg400"></td>
<td class="py3 bggreen bg400"></td>
<td class="py3 bgamber bg400"></td>
<td class="py3 bgred bg400"></td>
</tr>
<tr>
<td><code>bg500</code></td>
<td class="py3 bggray bg500"></td>
<td class="py3 bgblue bg500"></td>
<td class="py3 bggreen bg500"></td>
<td class="py3 bgamber bg500"></td>
<td class="py3 bgred bg500"></td>
</tr>
<tr>
<td><code>bg600</code></td>
<td class="py3 bggray bg600"></td>
<td class="py3 bgblue bg600"></td>
<td class="py3 bggreen bg600"></td>
<td class="py3 bgamber bg600"></td>
<td class="py3 bgred bg600"></td>
</tr>
<tr>
<td><code>bg700</code></td>
<td class="py3 bggray bg700"></td>
<td class="py3 bgblue bg700"></td>
<td class="py3 bggreen bg700"></td>
<td class="py3 bgamber bg700"></td>
<td class="py3 bgred bg700"></td>
</tr>
<tr>
<td><code>bg800</code></td>
<td class="py3 bggray bg800"></td>
<td class="py3 bgblue bg800"></td>
<td class="py3 bggreen bg800"></td>
<td class="py3 bgamber bg800"></td>
<td class="py3 bgred bg800"></td>
</tr>
<tr>
<td><code>bg900</code></td>
<td class="py3 bggray bg900"></td>
<td class="py3 bgblue bg900"></td>
<td class="py3 bggreen bg900"></td>
<td class="py3 bgamber bg900"></td>
<td class="py3 bgred bg900"></td>
</tr>
<tr>
<td><code>bgblack</code></td>
<td colspan="5" class="py3 bgblack"></td>
</tr>
</tbody>
</table>
</div>

**Note:** of course, there are no shades of black and white — use `*gray` and shades for a grayscale.

## Adding More Colors the “Baselayer Way”

To add more colors the, you would need to convert them to `hsl()` format and declate the hue(s) and saturation(s) in `root-vars.css`. 

```
:root {
                  /* hue and saturation */
  --purple-hs:    280, 100%;
  --teal-hs:      195, 55%;
}
```

Then, in the `colors.css` you can create the set of utility classes for text color, border color, and background color (with hover states).

```
/*
 * .b* is for border color
 * .t* is for text color
 * .bg* is for background color
 */

.bpurple, .h\:bpurple:hover {
  --bhs: var(--purple-hs);
  border-color: hsl(var(--bhs), var(--l500));
}
.tpurple, .h\:tpurple:hover {
  --ths: var(--purple-hs);
  color: hsl(var(--ths), var(--l500));
}
.bgpurple, .h\:bgpurple:hover {
  --bghs: var(--purple-hs);
  background: hsl(var(--bghs), var(--l500));
}

/* ...etc. */
```

## Other Color Utilities Included

* White (named color `white`):
    * `bwhite` / `twhite` / `bgwhite`,
    * `h:bwhite`, `h:twhite`, `h:bgwhite`,
* Black (named color `black`):
    * `bblack` / `tblack` / `bgblack`,
    * `h:bblack` / `h:tblack` / `h:bgblack`,
* Transparent:
    * `bgtransparent`

However, any colors near yellow, such as Baselayer amber, as well as orange and yellow-green (not included) are notoriously difficult for [accessibility](#colors-and-accessibility). You will do better going for a lighter background amber with black text.

<form>
  <p>
    <button type="button" name="button">Button</button>
    <button class="bblue b600 h:b700 bgblue bg600 h:bg700" type="button" name="button">Button</button>
    <button class="bamber b300 h:b400 tblack h:tblack bgamber bg300 h:bg400" type="button" name="button">Button</button>
    <button class="b1 bgreen bg600 tgreen t600 bgtransparent h:b700 h:twhite bggreen h:bg700" type="button" name="button">Button</button>
  </p>
</form>

```
/* Default button */
<button type="button" name="button">Button</button>

/* Blue button */
<button class="bblue b600 h:b700 bgblue bg600 h:bg700" type="button" name="button">Button</button>

/* Amber button */
<button class="bamber b300 h:b400 tblack h:tblack bgamber bg300 h:bg400" type="button" name="button">Button</button>

/* Green outline (a.k.a. ghost) button*/
<button class="bgreen bg600 tgreen t600 bgtransparent h:b700 h:twhite bggreen h:bg700" type="button" name="button">Button</button>
```

**Note:** the _named_ colors (`black`, `white`, and `transparent`) take precedence over HSL coded colors in Baselayer because they are declared subsequent to the coded colors in `colors.css`. This is the reason why, in the example green outline (ghost) button above, it can have both `bgtransparent` and `bggreen` classes but the transparent wins out. Whereas the hover state shade `h:bg700` _overrides_ the `bgtransparent` on hover, and that’s when the `var(--green-hs)` in the `bggreen` class is applied — this is the property that colorizes the hover shade.

## Colors and Accessibility

_All color systems, if color combinations are chosen with care, can be used sufficient contrast between text and background colors for purposes of assessibility._

In your text and background color combinations, be careful to ensure that the text is readable — there needs to be an adequate contrast. Generally, you will want to aim at **WCAG level AA** for accessibility compliance.

For WCAG level AA compliance, most user interface colors need to be _darker than the middle shade_ (i.e. use `*600` up) if the text color is white, or _lighter than the middle shade_ (i.e. use `*400` down) if the text color is black.

Background reading on HSL color and accessibility:

* Useful blog posts from [The Accessibility (A11Y) Project](https://www.a11yproject.com):
    * [A primer to visual impairment](https://www.a11yproject.com/posts/understanding-visual-impairment/)
    * [Understanding color blindness](https://www.a11yproject.com/posts/understanding-colourblindness/)
    * [How I deal with colorblindness as a digital product designer](https://www.a11yproject.com/posts/how-i-deal-with-colorblindness-as-a-digital-product-designer/)
* [Using HSL Colors In CSS (Smashing Magazine)](https://www.smashingmagazine.com/2021/07/hsl-colors-css/)
* [Web Content Accessibility Guidelines (WCAG) 2](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Contrast and Color Accessibility (WEB AIM)](https://webaim.org/articles/contrast/)
* The [_Coolors_ contrast checker](https://coolors.co/contrast-checker/112a46-acc8e5) has an HSL picker option
* [https://contrast-ratio.com](https://contrast-ratio.com) has an HSLA contrast checker (HSL plus opacity)
* [Web Accessibility: Understanding Colors and Luminance (Mozilla Developer Network Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

## Creating a Dark Theme

**There is no built-in dark theme in Baselayer.** But it is easy to set up by using the color CSS variables.

At minimum, you will need to make dark versions of the colors for background, text, and line details (for tables, horizontal rules, etc.)

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between (default) light mode and (example) dark mode in this main content area. If you are not looking at these docs on a phone or narrow screen, you’ve probably noticed it already in the sidebar. But here's another button that does the same:

<button id="theme-toggle" class="bgblue bg600 h:bg700">&nbsp;theme</button>

