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

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content column. If you are not looking at these docs on a phone or narrow window, then you’ve probably noticed it already in the left sidebar. But here’s another button that does the same:

<button id="font-toggle" class="bgblue bg600 h:bg700">&nbsp;typeface</button>

Font stack usage in Baselayer:

* The base font stack is set in the `<body>` tag (in `base.css`) and in the `.base` utility class.
* The prose is only available via the `.prose` utility class
* The monotype is available via the `<code>`, `<kbd>`, and `<samp>` HTML tags, and in the `.mono` utility class.

### HTML and Body Tag Styling

The base font size and line height (used throughout Baselayer, not only on default text) is set as variables in `root-vars.css`:

```
/* root-vars.css */
:root {
  --fshtml: 100%; /* sets 1 rem = 16px */
  --lh: 1.5;
}
```

These variables, along with a few more, are deployed on the `<html>` and `<body>` tags:

```
/* reset.css */
html {
  font-size: var(--fshtml);
  line-height: var(--lh);
}
```

```
/* base.css */
body {
  font-family: var(--base);
  color: var(--ctext);
  background-color: var(--body-bg-color);
}
```

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

But you can also mix and match. In Baselayer, sizes and weights for the base and prose typefaces can optionally be set independently — but you will still want them to share the same line height. For using another set of sizes and weights for prose, you will need to do some un-commenting in two files: `root-variables.css` and `typography.css`.

So, for example:

* If your chosen base typeface has an x-height much larger than your chosen prose, then you can set the prose font-size slightly larger, or the base slightly smaller.
* If your base has thicker strokes so that it “looks darker” then your prose, then you may set your base font-weight slightly lighter, to `300` (if this is available) while retaining your prose font-weight at the normal `400`.

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

* `p` `table` and most others: top margin `--s2`
* Headings `h2` to `h6` (both tags and matching utility classes): top margin `--s3`
* List items (except the first-of-type):  `margin-top: var(--s2) / 2`

See [decoration](/posts/2022/decoration/) for more information on these spacing vasiables.

In some contexts (e.g. in card components) you may not want any built-in spacing for typographic block elements. You can remove margins by using the `m0` utility class. With `m0` added as a margin reset, you can start again adding margins that you may require (e.g. this works: `m0 mr1`).

### Headings

All headings `<h1>` to `<h6>` and matching utility classes `h1` to `h6` have their font sizes set in the root variables file. The typographic scale is 1.250 (major third), calculated using the [Type Scale](https://type-scale.com) webapp.

Example of heading sizes — using utility classes (so that they don’t show up in the table-of-contents generator), and with margins controlled so that you can compare the sizes better):

<div class="h1 mt2">Heading h1</div>
<div class="h2 mt1">Heading h2</div>
<div class="h3 mt1">Heading h3</div>
<div class="h4 mt1">Heading h4</div>
<div class="h5 mt1">Heading h5</div>
<div class="h6 mt1">Heading h6</div>

The headings font weight is set using `--hfw: normal` — which you can override.

```
:root {
  /* Heading font sizes */
  --h1: 2.441em;
  --h2: 1.953em;
  --h3: 1.563em;
  --h4: 1.25em;
  --h5: 1em;
  --h6: .8em;

  --hf: inherit;
  --hfw: normal;

  /* Heading line heights*/
  --h1lh: 1.2;
  --h2lh: 1.25;
  --h3lh: 1.3;
  --h4lh: 1.4;
  --h5lh: 1.5;
  --h6lh: 1.625;
}
```

Headings also have their font-family set using `--hf: inherit` This has been done using the variable `--hf: inherit` so that you can override that. Headings don’t need to have the same typeface as paragraphs.

Line heights are calcaulated manually as follows: `{font-size} * (1 + (1/{font-size} * 10))` (rounded). This formula gives smaller line heights for bigger text sizes.

(Prior to v.1.1.1, all Baselayer line heights were set using `calc(1em + .5rem)` until I noticed that this causes heading line heights to be tighter within `longread` blocks. So, the manual formula above was introduced so that rem` isn’t involded in setting heading line heights.)

### Block Quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the responsive spacing variable `--s3` so that it becomes wider for wider viewports.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

### Lists

In Baselayer ordered `<ol>` and unordered `<ul>` have a little left padding. By default list items have no margin, but Baselayer separates them to make them more obious by setting a small top margin _between_ list items (smaller than the top margin between paragraphs).

1. Ordered item one
2. Ordered item two
    1. Ordered item two child one
    2. Ordered item two child two
3. Ordered item three

```
<ol>
  <li>Ordered item one</li>
  <li>Ordered item two
    <ol>
      <li>Ordered item two child one</li>
      <li>Ordered item two child two</li>
    </ol>
  </li>
  <li>Ordered item three</li>
</ol>
```

* Unordered item
* Unordered item
    * Unordered item child
    * Unordered item child
* Unordered item

```
<ul>
  <li>Unordered item</li>
  <li>Unordered item
    <ul>
      <li>Unordered item child</li>
      <li>Unordered item child</li>
    </ul>
  </li>
  <li>Unordered item</li>
</ul>
```

For definition lists, the title is bold and the data-item is indented (with the same left padding as for the  lists above). And the top margin between the title and its respective data is reduced the same way as between list items above.

<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>

```
<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>
```

## The Link Tag

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underscore) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings where link underscores can be too bulky).

Link color is set by `--clink`, which is the Baselayer theme middle blue (see [colors](/baselayer/colors/)). The hover state is a shade darker.

## Text Alignment

* `left`
* `center`
* `right`

These simple alignment classes handle text alignment and _nested_ text alignment, because they include a `*` descendent selector that puts the same alignment on any elements inside. This means that they can be used to align the cells of a whole table, if required.

The same class-names `left` and `right` are also used in [layout positions](/baselayer/layout/#positions). (However, while the text-alignment `center` can also be used in layouts, it is better to use [flexbox](/baselayer/layout/#flex) centering and middling: `flexcenter` and `flexmiddle`).

## Tables

Baselayer tables simply style `<table>` `<th>` and `<td>` tags directly. 

* Paddings are set by `--pcell`
* Table headers `<th>` are bold. 
* Since v.1.1.0, table cells `<th>` and `<td>` have a border set by var(--b1) – the same detail as `<hr>` and [border](/baselayer/decoration/#borders) utility classes.
* Since v.1.1.0, all cell content is left-aligned. You can change that on the whole `<table>` or on a per-cell basis using the text alignment classes.

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

If you have a lot of content in your table, it will probably break your page layout on small viewports (e.g. phones). So, you can wrap your table in a DIV with the `overflowx` class to make it horizontally scrollable.

```
<div class="overflow-x">
  <table>
    ...
  </table>
</div>
```

### Controlling Table Styling

_What if this classless table styling is incompatible with something else in your design system?_ You can go into Baselayer’s `typography.css`, find its table styling and _prefix_ it all with a class of your choice. In an example of how to do that below, first, the HTML tag `table` style simply has a dot `.` prefix added. Then the class `.table` has been inserted before the Baselayer default table styling:

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
thead, tr:not(:last-of-type) {
  border-bottom: var(--b1);
}
.table th {
  font-weight: bold;
}
```

## The _Long Read_ Utility Class 

Intended for long-read essays, articles and blog posts, the `longread` utility class (to be used as a _wrapper_ class) enlarges text (including headings) responsive to wider viewports (e.g. tablets, laptops, and up) using the following CSS clamp, which is set in `root-variables.css`:

```
:root {
  --fslongread: clamp(1rem, 0.4375rem + 1.1719vw, 1.375rem);
}
```

The base font size is expanded to 137.5% over the middle range — from viewport widths 768px to 1280px (i.e. same as the `sm` to `lg` default breakpoints). Starting from 1rem (16px), this expands the base sext size to 22px.

### _Long Read_ Example Toggle

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content column. If you are not looking at these docs on a phone or narrow screen, you’ve probably noticed it already in the sidebar. But here's another button that does the same:

<button id="fs-toggle" class="bgblue bg600 h:bg700">&nbsp;size</button>

## Code Blocks

`<code>` tags have monospaced text over a blue background (set by `--bgcode`) with a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other Typographic Utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `big` — increase font size by 1.5em. Use it directly on a `<p>` to enlarge the font (e.g. for a lead paragraph). But don’t use `big`  directly on a heading — instead, use it on a _wrapper_ around a heading that you wish to enlarge (e.g. for a title or hero component).
* `small` (or use the `<small>` HTML tag) — decrease font-size to 0.75em.  
* `right`, `center`, and `left` — text alignment
* `bold`, `normal` — font weights
* `italic` — font style italic
* `uppercase` — text transform to capitals
* `noline` — use to remove the underscore from links where having it may be inappropriate (e.g. in menus)
* `h:line` – make underscore appear on hover (pair as `noline h:line` on a link)
  * Example `noline h:line`: <a class="noline h:line" href="http://example.com">example</a>
* `nowrap` — prevents text wrapping
* `unlist` — sets `list-style-type: none` on `<ol>`, `<ul>`, or `<li>`. You can use this when you want to use a list in a navigation menu. And you can combine it with `p0` to remove the list inset padding.

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons](/baselayer/buttons).

## Simple Menus

If you wrap links in a `<nav>` tag, as you should do when creating a menu, then the links have their underscores removed. (So, there is no need to use `noline` inside a `<nav>` tag.)

Simple can created in this way, whether or not you involve an `<ul>` unordered list. Example:

<nav class="mt3 mb2">
  <a class="pcell bggray bg100 h:bg200" href="#/">Home</a>
  <a class="pcell bggray bg100 h:bg200" href="#/">About</a>
  <a class="pcell bggray bg100 h:bg200" href="#/">Contact</a>
</nav>

```
<nav>
  <a class="pcell bggray bg100 h:bg200" href="#/">Home</a>
  <a class="pcell bggray bg100 h:bg200" href="#/">About</a>
  <a class="pcell bggray bg100 h:bg200" href="#/">Contact</a>
</nav>
```

For more information on `pcell` see decoration [spacing extras](/baselayer/decoration/#spacing-extras). And for how Baselayer colors work, see [colors](/baselayer/colors).