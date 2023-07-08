---
title: Colors
mainHeading: Colors
layout: base.njk
prevPage: "/decoration/"
nextPage: "/forms/"
prevLink: "Decoration"
nextLink: "Forms"
---

Since late May/early June 2023, all “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability for the new [OKLCH color model](https://caniuse.com/?search=oklch). And in each of these browsers, the hue/ chroma/ lightness color channels can be separately controlled by CSS variables.

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

These download options can be found in the [source output folder](https://github.com/SimonPadbury/baselayer-2/tree/main/_src/css/min).

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  <p>If a browser does not support <code class="tblack bgblue bg200">oklch()</code> then <code class="tblack bgblue bg200">baselayer-oklch.css</code> will fall back to these Baselayer <code class="tblack bgblue bg200">#</code> colors — and all the color utilities will be ignored.</p>
  <p class="m0">If you much support older, pre-OKLCH browsers, then you must use either <code class="tblack bgblue bg200">baselayer-hsl.css</code> or <code class="tblack bgblue bg200">baselayer.css</code> and add your own HEX <code class="tblack bgblue bg200">#</code> colors.</p>
</div>

At the time of writing these docs (July 2023), the HSL color model has wider support, having been implemented in [some browsers since 2010](https://caniuse.com/?search=hsl). The Baselayer HSL utilities will continue to be available as an alternative (not a fallback) in Baselayer v.2.x.

## Rationale for Baselayer’s color systems

I wanted to develop a color system that was based on CSS variables for generating a series of shades for each color, so that the stylesheet didn’t need to be loaded with all the shade permutations of each color — most of which you would probably never use in a project. This meant finding a color model with a _lightness channel_ that could be controlled by a CSS variables, which I could then apply to numerous hues. 

For this purpose, the HSL model almost gave me what I needed. Therefore Baselayer 1 used the HSL color model from [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) because `hsl()` had a lightness channel that I could control. However, I found that when building the various HSL color lightness series, it was not possible to get the various colors to look _perceptually uniform_ while using the scale lightnesses for each (i.e. the Baselayer [color shade classes](#color-shades) `*100` through `*900`), whatever combination of hue and saturation I tried. Choosing HSL hue+saturation combinations for different colors that worked tolerably well against the same set of lightness levels meant that the mid-range colors would look less vibrant / “washed out”.

If the muted look is what you’re going for, or you need to support pre-OKLCH browsers, then stick with Baselayer 2’s HSL system in `baselayer-hsl.css`. But if you want your colors to “pop” go with Baselayer 2’s OKLCH system in `baselayer-oklch.css` (from [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)). OKLCH looks really great in shades. 😎

<div class="mt2 mb3 expand">
<img src="{{ '/' | url }}img/colors-oklch-hsl-comparison.png" alt="">
</div>

So, the colors in Baselayer’s HSL and OKLCH systems are _not the same colors_ — the OKLCH colors are more vibrant. To see the difference, play with the colors toggle while looking at the [color shade utilities](#color-lightness-(shades)) demo below.

More on HSL and OKLCH:

* [HSL color finder](https://hslfinder.com) by Colin Swinney
* [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/) by Lea Verou
* [It’s Time to Learn oklch Color](https://keithjgrant.com/posts/2023/04/its-time-to-learn-oklch-color/) by Keith J. Grant
* [oklch.com](https://oklch.com) color picker and converter by _Evil Martians_
* [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) by Andrey Sitnik and Travis Turner (_Evil Martians_)
* [LCH and OKLCH color tool](https://atmos.style/playground) by Atmos.style
* [High Definition CSS Color Guide (Google)](https://developer.chrome.com/articles/high-definition-css-color-guide/)

## Baselayer 2 core colors

Each version of Baselayer 2 contains the `baselayer.css` core (v.2.x), which also contains a few of its own base theme colors — e.g. colors for text, fineline details (table borders, horizontal rule), form elements and buttons. In `baselayer.css` these are set in the `:root{}` CSS variables mostly as three letter `#` codes:

```css
/* 
Base theme colors
*/
:root {
  --cbgbody:  white; 
  --ctext:    #222;
  --clink:    #06f;  /* link text */
  --clinkh:   #02b;  /* link text hover */
  --cfocus:   #4cf;  /* input & button (not link) focus ring */
  --cbginput: #eee;  /* input background */
  --cbtn:     white; /* button text */
  --cbtnh:    white; /* button text on hover */
  --cbgbtn:   #777;  /* button background */
  --cbgbtnh:  #666;  /* button background on hover */
  --ccode:    black; /* <code> text */
  --cbgcode:  #eef;  /* <code> background */
  --cborder:  #ddd;  /* Finelines (table borders and HR) */
}
```

Except for those set by the color names `white` or `black` above, these theme colors are overridden as OKLCH colors in `baselayer-oklch.css` or as HSL colors in `baselayer-hsl.css`. Therefore, in either of these Baselayer+color utility packages, you only need to be concerned about setting colors in your chosen color models.

The Baselayer core `baselayer.css` does not contain any color utility classes — it only has a few required set colors e.g. for text, table borders, forms and buttons, and these are set by CSS variables. Meanwhile, in `baselayer-oklch.css` and `baselayer-hsl.css`, both sets of color utilities use the same CSS class names. So if you switch, you won’t need to modify your HTML.

## Color utility classes

Since both `baselayer-oklch.css` and `baselayer-hsl.css` use _the same CSS classes_, we can describe once how they both work in the HTML.

Baselayer color utility classes are prefixed acording to where the color will be applied:

* `b*` — border color / `h:b*` — border color hover
* `t*` — text color / `h:t*` — text color hover
* `bg*` — background color / `h:bg*` — background color hover

Example border, text and background utilities:

<div class="mt2 mb3 flex gap2">
  <div class="grow b3 bgreen p2">bgreen</div>
  <div class="grow b3 p2 tgreen">tgreen</div>
  <div class="grow b3 p2 twhite bggreen">bggreen</div>
</div>

```
<div class="b3 bgreen p2">...</div>
<div class="b3 p2 tgreen">...</div>
<div class="b3 p2 twhite bggreen">...</div>
```

Each of these colors is set at the `500` shade level in the Baselayer color scale, by default.

The colors are as follows (demo uses background colors at the default `bg500` lightness):

<div class="mt2 mb3 center">
<div class="grid4cols gap2">
<div>
<div class="ratio16x9 bgblue"></div>
<code>bgblue</code>
</div>
<div>
<div class="ratio16x9 bggreen"></div>
<code>bggreen</code>
</div>
<div>
<div class="ratio16x9 bgamber"></div>
<code>bgamber</code>
</div>
<div>
<div class="ratio16x9 bgred"></div>
<code>bgred</code>
</div>
<div>
<div class="ratio16x9 bggray"></div>
<code>bggray</code>
</div>
<div>
<div class="ratio16x9 bgblack"></div>
<code>bgblack</code>
</div>
<div>
<div class="ratio16x9 bgwhite"></div>
<code>bgwhite</code>
</div>
<div>
<div class="ratio16x9 bgreversi"></div>
<code>bgreversi</code>
</div>
</div>
</div>

You can use Baselayer colors for user interface (UI) components: blue for “information”, green for  “success”, amber for “warning”, red for “danger”. Alternatively, you can dedicate particular hues to those purposes, and then swap out the Baselayer default hues for hues that fit your project requirement (e.g. corporate style guidelines).

There’s also utilities for For black, white, reversi, and transparent — see [other Baselayer color utilities](http://localhost:8080/baselayer/colors/#other-baselayer-color-utilities).

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  In Baselayer 2, utility colors are declared in using the <code class="tblack bgblue bg200">*</code> selector.
</div>

This is how it works (simplified examples):

<div class="expand grid2cols gap2 xs:drop">
<div>
<p class="mb1 center"><strong>EITHER</strong> use Baselayer 2’s OKLCH colors:<br><code>colors-oklch.css</code></p>
<pre><code class="language-css">* {
  --l500:  64%;  /* lightness */
  --c30:   0.30; /* chroma */
  --green: 165;  /* hue */
  /* builder */
  --bgcolor: oklch(var(--bgl) var(--bgc) var(--bgh));
}
.bggreen {
  --bghs:     var(--hsgreen);
  --bgl:      var(--l500);
  background: var(--bgcolor);
}
</code></pre>
</div>
<div>
<p class="mb1 center"><strong>OR</strong> use Baselayer 2’s HSL colors:<br><code>colors-hsl.css</code></p>
<pre><code class="language-css">* {
  --hsgreen: 135, 40%; /* hue and saturation */
  --l500:    55%;      /* lightness */
  /* builder */
  --bgcolor: hsl(var(--bghs), var(--bgl));
}
.bggreen {
  --bghs:     var(--hsgreen);
  background: var(--bgcolor);
}
</code></pre>
</div>
</div>

<p class="mb1 center"><strong>The SAME HTML</strong> is used for either color system:</p>

```html
<div class="bggreen">
  ...
</div>
```

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  <code class="tblack bgblue bg200">oklch()</code> requires no commas (it breaks if you add commas), whereas <code class="tblack bgblue bg200">hsl()</code> requires commas (it breaks if you leave out commas).
</div>

### Color lightness (shades)

both OKLCH and HSL lightness channels are controlled separately by supplemental classes for each shade, and there are hover states for each shade. 

Demo of color shades using background colors:

<p class="flex flexcenter">
  <button class="pcell flex flexcolumn gap1 bgblue h:bg600" onclick="toggleColors()">
    <div class="label-oklch w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">OKLCH colors</div>
    </div>
    <div class="label-hsl w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">HSL colors</div>
    </div>
  </button>
</p>

<div class="mb2 expand flex flexwrap gap1">
  <div class="grow wxxs" style="min-width: 128px">
    <div class="p1 center"><code>bggray</code></div>
    <div class="p1 tblack bggray bg100">100</div>
    <div class="p1 tblack bggray bg200">200</div>
    <div class="p1 tblack bggray bg300">300</div>
    <div class="p1 tblack bggray bg400">400</div>
    <div class="p1 twhite bggray bg500">500</div>
    <div class="p1 twhite bggray bg600">600</div>
    <div class="p1 twhite bggray bg700">700</div>
    <div class="p1 twhite bggray bg800">800</div>
    <div class="p1 twhite bggray bg900">900</div>
  </div>
  <div class="grow wxxs" style="min-width: 128px">
    <div class="p1 center"><code>bgblue</code></div>
    <div class="p1 tblack bgblue bg100">100</div>
    <div class="p1 tblack bgblue bg200">200</div>
    <div class="p1 tblack bgblue bg300">300</div>
    <div class="p1 tblack bgblue bg400">400</div>
    <div class="p1 twhite bgblue bg500">500</div>
    <div class="p1 twhite bgblue bg600">600</div>
    <div class="p1 twhite bgblue bg700">700</div>
    <div class="p1 twhite bgblue bg800">800</div>
    <div class="p1 twhite bgblue bg900">900</div>
  </div>
  <div class="grow wxxs" style="min-width: 128px">
    <div class="p1 center"><code>bggreen</code></div>
    <div class="p1 tblack bggreen bg100">100</div>
    <div class="p1 tblack bggreen bg200">200</div>
    <div class="p1 tblack bggreen bg300">300</div>
    <div class="p1 tblack bggreen bg400">400</div>
    <div class="p1 twhite bggreen bg500">500</div>
    <div class="p1 twhite bggreen bg600">600</div>
    <div class="p1 twhite bggreen bg700">700</div>
    <div class="p1 twhite bggreen bg800">800</div>
    <div class="p1 twhite bggreen bg900">900</div>
  </div>
  <div class="grow wxxs" style="min-width: 128px">
    <div class="p1 center"><code>bgabmer</code></div>
    <div class="p1 tblack bgamber bg100">100</div>
    <div class="p1 tblack bgamber bg200">200</div>
    <div class="p1 tblack bgamber bg300">300</div>
    <div class="p1 tblack bgamber bg400">400</div>
    <div class="p1 twhite bgamber bg500">500</div>
    <div class="p1 twhite bgamber bg600">600</div>
    <div class="p1 twhite bgamber bg700">700</div>
    <div class="p1 twhite bgamber bg800">800</div>
    <div class="p1 twhite bgamber bg900">900</div>
  </div>
  <div class="grow wxxs" style="min-width: 128px">
    <div class="p1 center"><code>bgred</code></div>
    <div class="p1 tblack bgred bg100">100</div>
    <div class="p1 tblack bgred bg200">200</div>
    <div class="p1 tblack bgred bg300">300</div>
    <div class="p1 tblack bgred bg400">400</div>
    <div class="p1 twhite bgred bg500">500</div>
    <div class="p1 twhite bgred bg600">600</div>
    <div class="p1 twhite bgred bg700">700</div>
    <div class="p1 twhite bgred bg800">800</div>
    <div class="p1 twhite bgred bg900">900</div>
  </div>
</div>

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  The shades <code>100</code> thorugh <code>900</code> if used alone, <em>do not provide color</em>. But if you use them to supplement one of the other colors above, then the color class will provide the color, and the shade class will set the lightness level.
</div>

* Border lightness: 
    * `b100` through `b900`
    * Hover state: `h:b100` through `h:b900`
* Text lightness:
    * `t100` through `t900`
    * Hover state: `h:t100` through `h:t900`
* Background lightness:
    * `bg100` through `bg900`
    * Hover state: `h:bg100` through `h:bg900`

Of course, there are no shades of `*black` and `*white` — use `*gray` and shades for a grayscale.

Example usage:

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  Alert panel.
</div>

```
<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  Alert panel.
</div>
```

## Adding more colors the “Baselayer way”

To add more colors the, you would need to convert them to `oklch()` format or `hsl()` format, declare the variables in the `*` universal selector, and set up the default (lightness 500) color utilities. The color shade utilities will take care of everything else.

<div class="expand grid2cols gap2 xs:drop">
<div>
<p class="mb1 center"><strong>EITHER</strong> OKLCH:
<pre><code>* {
  /* hue */
  --purple: 280;
  --teal:   195;
}
.tpurple, .h\:tpurple:hover {
  --tl: var(--l500);
  --tc: var(--c30);
  --th: var(--purple);
  color: var(--tcolor); 
}
.bpurple, .h\:bpurple:hover {
  --bl: var(--l500);
  --bc: var(--c30);
  --bh: var(--purple);
  border-color: var(--bcolor); 
}
.bgpurple, .h\:bgpurple:hover {
  --bgl: var(--l500);
  --bgc: var(--c30);
  --bgh: var(--purple);
  background: var(--bgcolor); 
}
/* ...etc. */
</code></pre>
</div>
<div>
<p class="mb1 center"><strong>OR</strong> HSL:
<pre><code>* {
  /* hue and saturation */
  --hspurple: 280, 100%;
  --hsteal:   180, 50%;
}
.tpurple, .h\:tpurple:hover {
  --ths: var(--hspurple);
  --tl: var(--l500);
  color: var(--tcolor);
}
.bpurple, .h\:bpurple:hover {
  --bhs: var(--hspurple);
  --bl: var(--l500);
  border-color: var(--bcolor);
}
.bgpurple, .h\:bgpurple:hover {
  --bghs: var(--hspurple);
  --bgl: var(--l500);
  background: var(--bgcolor);
}
/* ...etc. */
</code></pre>
</div>
</div>

Utility classes for colors: `b*` = border; `t*` = text; `bg*` = background.

## Other Baselayer color utilities

Other color utilities included in Baselayer cover black, white, and transparent, as follows:

### Black and white

* White — named color `white`:
    * `bwhite` / `twhite` / `bgwhite`,
    * `h:bwhite`, `h:twhite`, `h:bgwhite`,
* Black — named color `black`:
    * `bblack` / `tblack` / `bgblack`,
    * `h:bblack` / `h:tblack` / `h:bgblack`,

### Reversi / Reversi opposite

Baselayer 2’s [reversi](https://en.wikipedia.org/wiki/Reversi) color utilities can be used for flipping from black to white (and the opposite way) depending on whether the user is viewing your site in its light theme or dark theme. E.g. use `*reversi` and `*revopp` utilities for a [dark/light theme toggle](#dark%2Flight-theme-toggle) button or for [brutalist](https://brutalist-web.design) web designs.

* Reversi — `black` on light theme; `white` on dark theme:
    * `treversi` / `.breversi` / `.bgreversi`
* Reversi opposite — `white` on light theme; `black` on dark theme:
    * `trevopp` / `.revopp` / `.bgrevopp`

### Transparent background

E.g. for outline buttons.

* Transparent:
    * `bgtransparent`

There are no hover states of `bgtransparent`.

## Colors and accessibility

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  In any color model, color combinations must chosen with care so that there is sufficient contrast between text and background colors for purposes of assessibility.
</div>

In your text and background color combinations, be careful to ensure that the text is readable — there needs to be an adequate contrast. Generally, you will want to aim at **WCAG level AA** for accessibility compliance.

For WCAG level AA compliance, most user interface colors need to be _darker than the middle shade_ (i.e. use `*600` up) if the text color is white, or _lighter than the middle shade_ (i.e. use `*400` down) if the text color is black.

However, any colors near yellow, such as Baselayer amber, as well as orange and yellow-green (not included) are notoriously difficult for accessibility. You may do better using a lighter background amber and pairing it with black text.

<form>
  <p>
    <button type="button" name="button">Button</button>
    <button class="bgblue bg600 h:bg700" type="button" name="button">Button</button>
    <button class="tblack h:tblack bgamber bg300 h:bg400" type="button" name="button">Button</button>
    <button class="b1 bgreen bgtransparent bg600 tgreen t600 h:b700 h:twhite h:bggreen h:bg700" type="button" name="button">Button</button>
  </p>
</form>

When colorizing buttons, remember to set their `h:` hover state shades too.

```
/* Default button */
<button type="button" name="button">Button</button>

/* Blue button */
<button class="bgblue bg600 h:bg700" type="button" name="button">Button</button>

/* Amber button */
<button class="tblack h:tblack bgamber bg300 h:bg400" type="button" name="button">Button</button>

/* Green outline (a.k.a. ghost) button */
<button class="b1 bgreen bgtransparent bg600 tgreen t600 h:b700 h:twhite h:bggreen h:bg700" type="button" name="button">Button</button>
```

Background reading on colors and accessibility (not much is available about OKLCH at this time, mid-2023):

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

## Baselayer’s dark theme

Baselayer 2 has some simple dark themes built in, controlled by a [JavaScript toggle](#dark%2Flight-theme-toggle) in this documentation. 

Each Baselayer 2 variant has a dark theme, that sets dark theme colors for the HTML tags. These are set using `#` in `baselayer.css`, `oklch()` in `baselayer-oklch.css` and `hsl()` in `baselayer-hsl.css`.

Example from `baselayer.css`:

```css
.theme-dark {
  --cbgbody:    #222;
  --ctext:      #ddd;
  --clink:      #39f;
  --clinkh:     #07f;
  --cbginput:   #444;
  --ccode:      white;
  --cbgcode:    #228;
  --cborder:    #ddd;
}
```

(There’s also the flipped colors for  [reversi / reversi-opposite](#reversi-%2F-reversi-opposite).)

Both `baselayer-oklch.css` and `baselayer-hsl.css` have [color utility lightness](#color-lightness-(shades)) classes — and both these sets of shades are necessarily darkened a little for the dark theme. E.g. see the following graph:

<p class="mb1 bold center">Baselayer 2’s OKLCH shades (lightness) are darkened for the dark theme<p>
<div class="mb3 w100% wxs mxauto">
<svg viewBox="0 0 121 119" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:1.5"><path d="M200 100v200" style="fill:none;stroke:currentColor;stroke-width:.38px" transform="matrix(1 0 0 .5 -180.003 -48.459)"/><path d="m210 85.185 80-503.704" style="fill:none;stroke:currentColor;stroke-width:.42px" transform="matrix(-1 0 0 .135 319.997 61.041)"/><path d="m210-329.63 80 444.445" style="fill:none;stroke:currentColor;stroke-width:.42px;stroke-dasharray:3,3,0,0" transform="matrix(1 0 0 .135 -180.003 61.041)"/><path d="M200 100v200" style="fill:none;stroke:currentColor;stroke-width:.38px" transform="matrix(0 -1 .5 0 -30.003 301.541)"/><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -59.51 354.107)">100</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -54.51 345.447)">200</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -49.51 336.786)">300</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -44.51 328.126)">400</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -39.51 319.466)">500</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -34.51 310.806)">600</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -29.509 302.145)">700</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -24.509 293.485)">800</text><text x="194.001" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 -19.509 284.824)">900</text><text x="194.843" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -309.959)">100%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -299.959)">90%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -289.959)">80%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -279.959)">70%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -269.959)">60%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -259.959)">50%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -249.959)">40%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -239.959)">30%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -229.959)">20%</text><text x="197.161" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -219.959)">10%</text><text x="199.478" y="312.992" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-190.003 -209.959)">0%</text><text x="194" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-147.187 -300.459)">Light theme shades</text><text x="204.541" y="314.288" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-147.187 -300.459)">(default)</text><text x="194" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-122.133 -226.452)">Dark theme shades</text><text x="212.275" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="translate(-163.867 -192.459)">Lightness code number</text><text x="219.454" y="309.985" style="font-family:'ArialMT','Arial',sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-90 -10.731 296.272)">Lightness value</text><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -198.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -188.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -178.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -168.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -158.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -148.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -138.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -128.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -118.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -108.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(.66667 0 0 1 -113.336 -98.459)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -170.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -160.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -150.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -140.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -130.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -120.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -110.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -100.003 234.874)"/><path d="M200 200h-3" style="fill:none;stroke:currentColor;stroke-width:.35px" transform="matrix(0 -.66667 1 0 -90.003 234.874)"/><path d="m60.152 26.55-2.155.991 1.13-2.086 1.025 1.095Z" style="fill:currentColor"/><path d="M64.997 16.541c-.008 3.629-3.661 7.759-5.686 9.769" style="fill:none;stroke:currentColor;stroke-width:.5px"/><path d="m94.746 68.532 2.154-.991-1.129 2.086-1.025-1.095Z" style="fill:currentColor"/><path d="M89.9 78.541c.009-3.629 3.662-7.759 5.687-9.769" style="fill:none;stroke:currentColor;stroke-width:.5px"/></svg></div>

The Baselayer 2 HSL darth theme shades are similarly darkened.

### Dark/light theme toggle

Baselayer’s dark/light theme switcher JavaScript uses [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) in the user’s browser to remember their theme preference as they visit multiple pages in this website in any one “visit session”.

This script is embedded in the `<head>` of the webpage and it is read early so that it is implimented _before_ the `<body>` is painted in the browser window.

The theme switcher in the Baselayer 2 docs is built into its `switcher.js` sidebar demo toggling system. If you want to use the same dark/light mode toggler, here it is isolated below (no JS framework required):

```js
const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const htmlClassList = document.querySelector('html').classList;

function themeDark() {
  sessionStorage.setItem("baselayerTheme", "dark");
  htmlClassList.remove('theme-light');
  htmlClassList.add('theme-dark');
}

function themeLight() {
  sessionStorage.setItem("baselayerTheme", "light");
  htmlClassList.remove('theme-dark');
  htmlClassList.add('theme-light');
}

function toggleTheme() {
  if ( sessionStorage.baselayerTheme === 'dark' ) {
    themeLight();
  } else {
    themeDark();
  }
};

function baselayerInit() {
  if (sessionStorage.baselayerTheme === 'dark' || (!('baselayerTheme' in sessionStorage) && matchMediaDark.matches)) {
    themeDark();
  } else {
    themeLight();
  }
};

baselayerInit();
```

You will also need a toggle button, like the one in the sidebar. The checks (ticks) are added in by CSS pseudo-selectors.

<p class="flex flexcenter">
  <button class="pcell flex flexcolumn gap1 bgblue h:bg600" onclick="toggleTheme()">
    <div class="label-light w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Light theme</div>
    </div>
    <div class="label-dark w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Dark theme</div>
    </div>
  </button>
</p>

Another, simpler example theme toggle button, with glyphs from [&what;](https://www.amp-what.com)

<style>
  .theme-dark .theme-toggle span::before { content: '☀️ '; }
  .theme-light .theme-toggle span::before { content: '🌙 '; }
</style>

<p class="flex flexcenter">
  <button class="theme-toggle trevopp bgreversi" onclick="toggleTheme()">
    <span>theme</span>
  </button>
</p>

```
<style>
  .theme-dark .theme-toggle span::before { content: '☀️ '; }
  .theme-light .theme-toggle span::before { content: '🌙 '; }
</style>

<button class="theme-toggle trevopp bgreversi" onclick="toggleTheme()">
  <span>theme</span>
</button>
```

The simple example above uses `bgreversi` to put a “night time” black background behind the moon and a “day time” white backgorund behind the sun, and `trevopp` (reversi opposite) to flip the text color the opposite way.

If you don’t want to give your visitors the option to toggle, then you can also change the CSS to make the dark theme simply respond to the `prefers-color-scheme: dark` instead.

```css
@media (prefers-color-scheme: dark) {
  /*
  Your dark theme styles
  */
}
```