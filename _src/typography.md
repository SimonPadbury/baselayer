---
title: Typography
mainHeading: Typography
layout: base.njk
prevPage: "/"
nextPage: "/layout"
prevLink: "Introduction"
nextLink: "Layout"
---

## Font Stacks

Three native font stacks are set in the `root-vars.css` file.

```
:root {
  --base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --prose: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --mono: ui-monospace, Menlo, "Segoe UI Mono", Consolas, "Ubuntu Monospace", monospace;
}
```

Everything here is an example, a place to start. `--base` and `--prose` don’t need to be both sans-serif and serif.

### Base/Prose Typeface Example Toggle

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `var(--base)` and `var(--prose)` in this main content column. If you are not looking at these docs on a phone or narrow screen, you’ve probably noticed it already in the sidebar. But here's another button that does the same:

<button id="font-toggle">&nbsp;typeface</button>

Font stack usage in Baselayer:

* The base font stack is set in the `<body>` tag (in `base.css`) and in the `.base` utility class.
* The prose is only available via the `.prose` utility class
* The monotype is available via the `<code>`, `<kbd>`, and `<samp>` HTML tags, and in the `.mono` utility class.

The base font size and line height (used throughout Baselayer, not only on default text) is set as variales in `root-variables.css`:

```
:root {
  --fsbase: 18px;
  --lineheight: clamp(calc(1em + .5rem), calc(1em + 1.1111vw), calc(1em + .75rem);
}
```

The browser default font size is usually 16px, but the Baselayer `--fsbase` (default font size) is set slightly larger at 18px. This 18px is the value of `1rem` thorughout Baselayer.

### Line Heights

Line heights are controlled by a CSS `clamp` in the variable `--lh`. For default text e.g. paragraphs on small viewports (phones and tablets in portrait orientation), the line height is a 1.5× the font-size. This expands to 1.75× the font-size for larger viewports — for more comfortable reading on larger screens. The middle part of the clamp `1em + 1.1111vw` makes the expansion (ramp) range from viewport widths 720px to 1080px — the same range as that between the `sm` to `md` default breakpoints). Thus, with the base font size of 18px, `--lh` starts at 26px for phones and ramps up to 30px for large “pro” tablets (landscape orientation), laptops, and larger screens.

The line heights of all text in Baselayer are set by this responsive `--lh` variable — including headings. The `calc()` function makes the line heights “tighter” for the larger headings, as you would want them to be.

### Body Tag Styling

These variables, along with a few more, are deployed in `base.css` on the `<body>` tag:

```
body {
  font-family: var(--base);
  font-size: var(--fsbase);
  line-height: var(--lh);
  color: var(--ctext);
  background-color: var(--bgbody);
}
```

(There are a few other `<body>` style rules set in `reset.css`.)

### More on Setting Font Stacks

In choosing your own font stacks, you may wish to choose two fonts that have similar x-height, so that you can set them using the same font size and line-height. Some other factors to compare are hights for lowercase ascenders and descenders, letter width, and stroke thickness.

A good place to start is by pairing serif and sans-serif (or slab serif) fonts of the same typeface. There are several to choose from on [Google Fonts](https://fonts.google.com). Some examples:

* Alegreya and Alegreya Sans
* IBM Plex and IBM Plex Sans
* Inria Serif and Inria Sans
* Noto Serif and Noto Sans
* PT Serif and PT Sans
* Roboto and Roboto Slab
* Source Sans 3 and Source Serif 4
* Source Sans Pro and Source Serif Pro

But you can also mix and match. In Baselayer, sizes and weights for the `base` and `prose` typefaces can optionally be set independently (you will need to do some un-commenting in two files: `root-variables.css` and `typography.css`) — but they will still share the same line height.

So, for example:

* If your chosen `base` has an x-height much larger than your chosen `prose`, then you can set the prose font-size slightly larger, or the base slightly smaller.
* If your `base` has thicker strokes so that it “looks darker” then your `prose`, then you may set your `base` font-weight slightly lighter, to `300` (if this is available) while retaining your `prose` font-weight at the normal `400`.

For inspiration:

* [Pairing Typefaces (Google Fonts article)](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
* [fontpairings.com](https://www.fontpairings.com)
* [fontpair.co](https://www.fontpair.co)
* [fontjoy.com](https://fontjoy.com)
* [Pair & Compare](https://www.pairandcompare.net)
* [Top 50 Google Font Pairings [Handpicked by Pro Designers] (Pagecloud)](https://www.pagecloud.com/blog/best-google-fonts-pairings)

## Typographic Block Elements

Built-in browser (user-agent) stylesheets generally have top and bottom margins set on paragraphs, headings, etc. while many popular CSS frameworks (e.g. Bootstrap) have the top margin set to zero.

Baselayer, however, zeros the bottom margin of typographic block elements and sets the top margin as follows:

* `p`, `table`, and most others: top margin `var(--s2)`
* Headings `h2` to `h6` (both tags and matching utility classes): top margin `var(--s3)`
* List items:  top margin `var(--s2) / 2`

See  [decoration](/posts/2022/decoration/) for more information on these spacing vasiables.

In some contexts (e.g. in card components) you may not want any built-in spacing for typographic block elements. You can remove margins by using the `m0` utility class. with `m0` added as a margin reset, you can start again adding margins that you may require (e.g. this works: `m0 mr1`).

### More on Headings

All headings `<h1>` to `<h6>`, and matching utility classes `h1` to `h6`, have their font sizes set in the root variables file. The typographic scale is 1.250 (major third), calculated using the [Type Scale](https://type-scale.com) webapp.

The headings font weight is set using `--hfw: var(--normal);` which has been set to `400`.

```
:root {
  --h1: 2.441em;
  --h2: 1.953em;
  --h3: 1.563em;
  --h4: 1.25em;
  --h5: 1em;
  --h6: .8em;
  --hf: inherit;
  --hfw: var(--normal);
}
```

Headings also have their font-family set to `inherit` in `typography.css`. This has been done in the variable `var(--hf)` so that you can override that. Headings don’t need to have the same typeface as paragraphs.

Example of heading sizes — using utility classes (so that they don’t show up in the table-of-contents generator), and with margins reduced so that you cam compare the sizes better):

<div class="h1 mt2">Heading h1</div>
<div class="h2 mt1">Heading h2</div>
<div class="h3 mt1">Heading h3</div>
<div class="h4 mt1">Heading h4</div>
<div class="h5 mt1">Heading h5</div>
<div class="h6 mt1">Heading h6</div>

The line height of headings is controlled by `var(--line-height)` as per default typography (see [line heights](#line-heights) above).

### Block Quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the responsive spacing variable `var(--s3)` so that it becomes wider for wider viewports.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

## The Link Tag

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underscore) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings, or `long-read` text).

Link color is set by `var(--link-color)`, which is the Baselayer theme middle blue (see [colors](/posts/2022/colors/)). The hover state is a shade darker.

## Tables

Baselayer tables simply style `<table>`, `<th>`, and `<td>` tags directly. Cell borders are set by `var(--b1)` — that is 1px solid light gray. Paddings are set by `var(--pcell)`. The left column is left-aligned while all other columns are centered. The table headers `<th>` are bold.

<table>
  <caption>This is a Table Caption</caption>
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

```
<table>
  <caption>This is a Table Caption</caption>
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
  </tbody>
</table>
```

### Wide Tables

If you have a lot of content in your table, it will probably break your page layout on small viewports (e.g. phones). So, you can wrap your table in a DIV with the `overflow-x` class to make it horizontally scrollable.

```
<div class="overflow-x">
  <table>
    ...
  </table>
</div>
````

### Controlling Table Styling

_What if this classless table styling is incompatible with something else in your design system?_ You can go into Baselayer’s `typography.css`, find its table styling and prefix it all with a class of your choice. In an example of how to do that below, first, the HTML tag `table` style simply has a dot `.` prefix added. Then the class `.table` has been inserted before the Baselayer default table styling:

```
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.table th,
.table td {
  border: var(--b1);
  padding: var(--pcell);
  vertical-align: top;
  text-align: center;
}
.table th:first-child,
.table td:first-child {
  text-align: left;
}

.table th {
  font-weight: bold;
}
```

## The _Long Read_ Utility Class 

Intended for long-read essays, articles and blog posts, the `longread` utility class (to be used as a _wrapper_ class) enlarges text (including headings) responsive to wider viewports (e.g. tablets, laptops, and up) using the following CSS clamp, which is set in `root-variables.css`:

```
:root {
  --fslongread: clamp(1.125rem, 0.625rem + 1.1111vw, 1.375rem);
}
```

The base font size is expanded to 137.5% over the middle range — from viewport widths 720px to 1080px (i.e. same as the `sm` to `md` default breakpoints). Starting from 1.125rem (18px), this expands the base sext size to 22px.

### _Long Read_ Example Toggle

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `var(--base)` and `var(--prose)` in this main content column. If you are not looking at these docs on a phone or narrow screen, you’ve probably noticed it already in the sidebar. But here's another button that does the same:

<button id="fs-toggle">&nbsp;size</button>

## Code Blocks

`<code>` tags have monospaced text over a blue background (set by `var(--bgcode)`) with a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other Typographic Utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `big` — increase font size by 1.25em. Use it directly on a `<p>` to enlarge the font (e.g. for a lead paragraph). But don’t use `big`  directly on a heading — instead, use it on a wrapper around a heading that you wish to enlarge (e.g. for a title or hero component).
* `small` (or use the `<small>` HTML tag) — decrease font-size to 0.85em.  
* `right`, `center`, and `left` — text alignment
* `bold`, `normal` — font weights
* `italic` — font style italic
* `uppercase` — text transform to capitals
* `noline` — use to remove the underscore from links where having it may be inappropriate (e.g. in menus)
* `nowrap` — prevents text wrapping
* `unlist` — sets `list-style-type: none` on `<ol>`, `<ul>`, or `<li>`. You can use this when you want to use a list in a navigation menu. And you can combine it with `p0` to remove the list inset padding.

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons](/buttons).

```
<ul class="unlist p0">
  <li><a class="noline" href="">Home</a></li>
  <li><a class="noline" href="">About</a></li>
  <li><a class="noline" href="">Contact</a></li>
</ul>
```
