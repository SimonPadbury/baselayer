---
title: Typography
mainHeading: Typography
layout: base.njk
prevPage: "/"
nextPage: "/layout/"
prevLink: "Introduction"
nextLink: "Layout"
---

## Font stacks

Three native font stacks are set in the `root-vars.css` file.

```
:root {
  --base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --prose: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --mono: ui-monospace, Menlo, "Segoe UI Mono", Consolas, "Ubuntu Monospace", monospace;
}
```

Everything here is an example, a place to start. Your own `--base` and `--prose` don’t need to be both sans-serif and serif.

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content column.

<p class="flex flexcenter">
  <button class="pcell flex flexcolumn gap1 bgblue bg600 h:bg700" onclick="toggleFont()">
    <div class="label-base w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Base font</div>
    </div>
    <div class="label-prose w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Prose font</div>
    </div>
  </button>
</p>

Font stack usage in Baselayer:

* The base font stack is set in the `<body>` tag (in `base.css`) and in the `base` utility class.
* The prose is only available via the `prose` utility class
* The monotype is available via the `<code>`, `<kbd>`, and `<samp>` HTML tags, and in the `mono` utility class.

### Setting font stacks

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
* If your base has thicker strokes so that it “looks darker” than your prose, then you may want to set your base font-weight slightly lighter, to `300` (if this is available) while retaining your prose font-weight at the normal `400`.

For inspiration:

* [Pairing Typefaces (Google Fonts article)](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
* [fontpairings.com](https://www.fontpairings.com)
* [fontpair.co](https://www.fontpair.co)
* [fontjoy.com](https://fontjoy.com)
* [Pair & Compare](https://www.pairandcompare.net)
* [Top 50 Google Font Pairings [Handpicked by Pro Designers] (Pagecloud)](https://www.pagecloud.com/blog/best-google-fonts-pairings)

## Typographic block elements

In Baselayer 2:

* The bottom margin on most typographic blocks have zero top margin, and bottom margin set to the _line height in rems_ using these two varibles:

```css
:root {
  --lh: 1.5; /* Base lineheight (no unit) */
  --mlh: calc(var(--lh) * 1rem); /* margin line height in rems */
}
```

### Headings

All headings `<h1>` to `<h6>` and matching utility classes `h1` to `h6` have:

* Font sizes set in the root variables file. The typographic scale is 1.250 (major third), calculated using the [Type Scale](https://type-scale.com) webapp.
* Line heights set using the formula `1em + 0.5rem`. Meanwhile the bottom margin is the same as described above.

```css
:root {
  --hlh: calc(1em + 0.5rem); /* headings line-height */
}
```

* Headings `<h2>` to `<h6>` and matching utility classes `h2` to `h6` also have top margins equal to their respective line heights (so H2 has a bigger top margin than H3, and so on)

Tips:

1. In some contexts (e.g. in card components) you may not want any built-in spacing for typographic block elements. Then, you can remove margins by using the `m0` utility class. With `m0` added as a _margin reset_, you can start again adding margins that you may require (e.g. this works: `m0 mr1`).
2. You can also remove top margin “remotely” e.g. you can target the first item inside its wrapper using `.wrapper:first-child { margin-top: 0; }`, or the first sibling after the `<header>` or `<h1>` e.g. as I have done in these docs: `.contentgrid header + * { margin-top: 0; }`. This takes care of any chapters that start their content with an H2 as the first item under the title (header) block.


Example of heading sizes — using utility classes (so that they don’t show up in the table-of-contents generator):

<p class="h1">Heading h1</p>
<p class="h2">Heading h2</p>
<p class="h3">Heading h3</p>
<p class="h4">Heading h4</p>
<p class="h5">Heading h5</p>
<p class="h6">Heading h6</p>

The headings font weight is set using `--hfw: var(--normal)` — which you can override.

```
:root {
  /* Heading font sizes */
  --h1: 2.441em;
  --h2: 1.953em;
  --h3: 1.563em;
  --h4: 1.25em;
  --h5: 1em;
  --h6: .8em;

  --hf: inherit; /* headings font */
  --hfw: var(--normal); /* headings font-weight */
  --hlh: calc(1em + 0.5rem); /* headings line-height */
}
```

Headings also have their font-family set using `--hf: inherit` This has been done so that you can override it. Headings don’t need to have the same typeface as paragraphs.

### Block quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the responsive spacing variable `--s3` so that it becomes wider for wider viewports.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

### Lists

In Baselayer ordered `<ol>` and unordered `<ul>` have a little left padding. By default list items have no margin, but Baselayer separates them to make them more obvious by setting a small top margin _between_ list items (smaller than the top margin between paragraphs).

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

For definition lists, the title is bold and the data-item is indented (with the same left padding as for the lists above). 

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

## The link tag

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underscore) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings where link underscores can be too bulky).

Link color is set by `--clink`, which is the Baselayer theme middle blue (see [colors]({{ '/colors/' | url }})). The hover state is a shade darker.

## Text alignment

* `left`
* `center`
* `right`

These simple alignment classes handle text alignment and _nested_ text alignment, because they include a `*` descendent selector that puts the same alignment on any elements inside. This means that they can be used to align the cells of a whole table, if required.

The same class-names `left` and `right` are also used in [layout positions]({{ '/layout/' | url }}#positions). (However, while the text-alignment `center` can also be used in layouts, it is better to use [flexbox]({{ '/layout/' | url }}#flex) centering and middling: `flexcenter` and `flexmiddle`).

## Tables

Baselayer tables simply style any table’s HTML tags directly. (There are no `.table` classes.)

* Table headers `<thead>` and footers `tfoot` are bold. 
* Borders of table cells `<th>` and `<td>` are set by `var(--b1)` – the same detail as `<hr>` and [border]({{ '/decoration/' | url }}#borders) utility classes.
* Paddings table cells `<th>` and `<td>` are set by `--pcell` (see decoration [spacing extras]({{ '/decoration/' | url }}#spacing-extras))
* All cell content is left-aligned. You can change that on the whole `<table>` or on a per-cell basis using [text alignment](#text-alignment) classes.

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
  <tfoot>
    <tr>
      <td>Table Footer 1</td>
      <td>Table Footer 2</td>
      <td>Table Footer 3</td>
    </tr>
  </tfoot>
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
  <tfoot>
    <tr>
      <td>Table Footer 1</td>
      <td>Table Footer 2</td>
      <td>Table Footer 3</td>
    </tr>
  </tfoot>
</table>
```

### Making wide tables responsive

If you have a lot of content in your table, it will probably break your page layout on small viewports (e.g. phones). So, you can wrap your table in a DIV with the `overflowx` class to make it horizontally scrollable.

```
<div class="overflowx">
  <table>
    ...
  </table>
</div>
```

### Controlling table styling

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
.table thead,
.table tfoot {
  font-weight: bold;
}
```

## The `longlead` utility class 

Intended for long-read essays, articles and blog posts, the `longread` utility class (to be used as a _wrapper_ class) enlarges text (including headings) responsive to wider viewports (e.g. tablets, laptops, and up) using the following CSS clamp, which is set in `root-variables.css`:

```
:root {
  --fslongread: clamp(1rem, 0.25rem + 1.5625vw, 1.25rem);
  --lhlongread: calc(var(--fs) * 1.5);
}
```

The base font size is expanded to 125% over the middle range — from viewport widths 768px to 1024px (i.e. same as the `sm` to `md` default breakpoints). Starting from 1rem (16px), this expands the base sext size to 20px.

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content column.

<p class="flex flexcenter">
  <button class="flex flexcolumn gap1 bgblue bg600 h:bg700" onclick="toggleFS()">
    <div class="label-normal w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Normal font-size</div>
    </div>
    <div class="label-longread w100% flex flexmiddle gap1">
      <div class="check-box flex flexcenter flexmiddle tblack bgwhite"></div>
      <div class="grow left">Long read font-size</div>
    </div>
  </button>
</p>

## Code blocks

`<code>` tags have monospaced text over a pale blue background (set by `--cbgcode`) with a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other typographic utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `big` — increase font size by 1.5em. Use it directly on a `<p>` to enlarge the font (e.g. for a lead paragraph). But don’t use `big`  directly on a heading, because that will overrive the heading size — but you can use it on a _wrapper_ around a heading that you wish to enlarge (e.g. for a title or hero component).
* `small` (or use the `<small>` HTML tag) — decrease font-size to 0.75em.  
* `right`, `center`, and `left` — text alignment
* `lighter`, `normal`, `semibold`, `bold`, `heavy` — font weights
* `italic` — font style italic
* `uppercase` — text transform to capitals
* `noline` — use to remove the underscore from links where having it may be inappropriate (e.g. in menus)
* `h:line` – make underscore appear on hover (pair as `noline h:line` on a link)
  * Example `noline h:line`: <a class="noline h:line" href="http://example.com">example</a>
* `nowrap` — prevents text wrapping (spaces behave as non-breaking)
* `hyphenate` — enables word-break hyphenation of long words at the ends of lines, using `overflow-wrap: break-word; hyphens: auto;`
* `unlist` — sets `list-style-type: none` on `<ol>`, `<ul>`, or `<li>`. You can use this when you want to use a list in a navigation menu. And you can combine it with `p0` to remove the list inset padding.

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons]({{ '/buttons/' | url }}).

## Simple Menus

If you wrap links in a `<nav>` tag, as you should do when creating a menu, then the links have their underscores removed. (So, there is no need to use `noline` inside a `<nav>` tag.)

Simple can created in this way, whether or not you involve an `<ul>` unordered list. Example:

<nav class="mt2 mb4">
  <a class="pcell" href="#/">Home</a>
  <a class="pcell" href="#/">About</a>
  <a class="pcell" href="#/">Contact</a>
</nav>

```
<nav>
  <a class="pcell" href="#/">Home</a>
  <a class="pcell" href="#/">About</a>
  <a class="pcell" href="#/">Contact</a>
</nav>
```

For more information on `pcell` see decoration [spacing extras]({{ '/decoration/' | url }}#spacing-extras). And for how Baselayer colors work, see [colors]({{ '/colors/' | url }}).