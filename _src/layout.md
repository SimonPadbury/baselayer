---
title: Layout
mainHeading: Layout
layout: base.njk
prevPage: "/typography"
nextPage: "/decoration"
prevLink: "Typography"
nextLink: "Decoration"
---

## Blocks

* `block` — make an inline element behave as a block element
* `inline-block` — to enable block-like settings on an inline element (width, height, margins, paddings)
* `flex` — [see below](#flex)
* `grid` — [see below](#grid)

## Containers

The centered layout container `container` with is set as follows:

```
/* root-vars.css */

:root {
  --wlg: 1440px;
  --container: min(94vw, var(--wlg));
}

/* layout.css */

.container {
  width: var(--container);
  margin-inline: auto;
}
```

For narrower containers, use the max-width classes as modifiers: `container wmd` or `container wsm`.

See also how to set up a content grid using `content` below.

## Dimensions

Constrained widths:

* `wlg` — max-width 1440px, from `var(--wlg)`
* `wmd` — max-width 1080px, from `var(--wmd)`
* `wsm` — max-width 720px, from `var(--wsm)`
* `w50vw` — max-width 50vw
* `w100vw` — max-width 100vw

Heights:

* `h100%` — height 100%, e.g. for making cards equal to the height of their wrapper
* `h50vh` — min-height 50vh, e.g. for making split “full cover” panels
* `h100vh` — min-height 100vh, e.g. for making “full cover” panels
* `hmax100vh` — min-height 100vh, e.g. for tall sidebars (used with `overflowy`)

## Positions

* `relative`
* `absolute`
* `sticky`
* `box` — stretches an inner element using `inset: 0` to cover the size of its wrapper (you must put a use it with `absolute`, and put `relative` on the wrapper). Useful for setting up a hero image with text overlay.
* `top` — `top: 0`
* `right` — `right: 0` and `text-align: right`
* `bottom` — `bottom: 0`
* `left` — `left: 0` and `text-align: left`
* `z1` — `z-index: 1`
* `z2` — `z-index: 2`
* `z3` — `z-index: 3`

Example: 

<div class="relative mt2 b1 ratio16x9">
  <div class="absolute top w100% center"><code>top</code></div>
  <div class="absolute right h100% flex flexmiddle"><code>right</code></div>
  <div class="absolute bottom w100% center"><code>bottom</code></div>
  <div class="absolute left h100% flex flexmiddle"><code>left</code></div>
  <div class="absolute box flex flexcenter flexmiddle center"><code>centered<br>and middled</code></div>
</div>

```
<div class="relative mt2 b1 ratio16x9">
  <div class="absolute top w100% center"><code>top</code></div>
  <div class="absolute right h100% flex flexmiddle"><code>right</code></div>
  <div class="absolute bottom w100% center"><code>bottom</code></div>
  <div class="absolute left h100% flex flexmiddle"><code>left</code></div>
  <div class="absolute box flex flexcenter flexmiddle center"><code>centered<br>and middled</code></div>
</div>
```

## Flex

Flexbox utilities for simple layout, menubars, pagination lists, cards, etc.

### Flex classes

* `flex` — flexbox with wrapping at all viewport widths
* `sm:flex` — flexbox with wrapping at 720px up
* `md:flex` — flexbox with wrapping at 1080px up

**Note:** The following classes below will not take effect below the `*:flex` breakpoints.

### Flex modifier classes 

* `gap` — same as for `grid` (see below), adding a horizontal and vetical gap of `var(--s2)`
* X-axis: `flexstart` / `flexcenter` / `flexend`
* Y-axis: `flextop` / `flexmiddle` / `flexbottom`
* `flexcolumn` — gives you `flex-direction: column`
* `flexspace` — gives you `justify-content: space-between`

### Flex-item class

* `grow` — gives you `flex-grow: 1`

## Grid

Using _CSS Grid_.

Baselayer grids are take effect at the `sm` or `md` breakpoint widths. The grids can be combined, for three layouts:

* _There is no grid below_ `sm` _for small phones_
* large phones (landscape orientation), and tablets up (`sm` at 720px up)
* large “pro” tablets (landscape orientation) up (`md` at 1080px)

### Grid classes

* `sm:grid2cols`, `sm:grid3cols`, or `sm:grid4cols` — sets up a grid with 2, 3, or 4 equal-width columns from 720px up.
* `md:grid2cols`, `md:grid3cols`, or `md:grid4cols` — sets up a grid with 2, 3, or 4 equal-width columns from 1080px up.
* `gap` — adds a horizontal and and vetical gap of `var(--s2)`
* `dense` — adds `grid-auto-flow: dense`, telling the browser to reorder and pack items as dense as possible filling empty cells.

So, Baselayer can handle simple grid layouts (covering most use-cases of the traditional 12-column grid), providing you with layouts for tablets-up (`sm:`) and small laptops-up, etc. (`md:`). Note: there is no grid layout provided for phones (smaller than `sm:`).

Simply using the grid wrapper classes above will enable you to set up galleries e.g. of images or cards, where you want grid items to span one grid cell each. Grid items will have equal width and height.

### Grid-item classes

For positioning grid-items in columns and making them span more than one column.

For `sm` — 720px up:

* `sm:col1` / `sm:col2` / `sm:col3` / `sm:col4` — cell placement
* `sm:cols1-2` / `sm:cols1-3` / `sm:cols1-4` — spanning from column 1
* `sm:cols2-3` / `sm:cols2-4` — spanning from column 2
* `sm:cols3-4` — spanning from column 3

For `md` — 1080px up:

* `md:col1` / `md:col2` / `md:col3` / `md:col4` — cell placement
* `md:cols1-2` / `md:cols1-3` / `md:cols1-4` — spanning from column 1
* `md:cols2-3` / `md:cols2-4` — spanning from column 2
* `md:cols3-4` — spanning from column 3

Examples:

`sm:grid4cols`:

<div class="mt2 sm:grid4cols">
  <div class="p1 bgred twhite">Item 1</div>
  <div class="sm:cols1-2 p1 bgblack twhite">Item 2 <code>sm:cols1-2</code></div>
  <div class="sm:cols2-4 p1 bgblue twhite">Item 3 <code>sm:cols2-4</code></div>
  <div class="sm:col4 p1 bggreen twhite">Item 4</div>
  <div class="sm:col3 p1 bgamber tblack">Item 5</div>
</div>

```
<div class="mt2 sm:grid4cols">
  <div>Item 1</div>
  <div class="sm:cols1-2">Item 2</div>
  <div class="sm:cols2-4">Item 3</div>
  <div class="sm:col4">Item 4</div>
  <div class="sm:col3">Item 5</div>
</div>
```

If your layout leaves gaps but you want them filled by reordering the items, then add the `dense` class to the grid wrapper.

`sm:grid4cols dense` (same as above, plus `dense`):

<div class="mt2 sm:grid4cols dense">
  <div class="p1 bgred twhite">Item 1</div>
  <div class="sm:cols1-2 p1 bgblack twhite">Item 2 <code>sm:cols1-2</code></div>
  <div class="sm:cols2-4 p1 bgblue twhite">Item 3 <code>sm:cols2-4</code></div>
  <div class="sm:col4 p1 bggreen twhite">Item 4</div>
  <div class="sm:col3 p1 bgamber tblack">Item 5</div>
</div>

## Content Grid

`contentgrid` uses CSS Grid to set up a 7 column layout where the main content is placed in the middle (column 4) and has max `var(--wsm)`.

* Use the `popout` utility class to make an element span the middle 3 columns (3 to 5). Columns 3 and 5 have width `var(--s2)`.
* Use the `expand` utility class to make an element span the middle 5 columns (2 to 6). A panel spanning columns 2 to 6 has max-width `var(--wmd)`.
* Use the `fullbleed` utility class to make an element span all 7 columns.

**Note:** Columns 1 and 7 have a minimum width of `var(--s2)`. Therefore both `popout`, `expand` and the middle content column always have negative space (a.k.a. white space) right and left – they will never reach the full width of the `contentgrid` wrapper. Therefore, on smaller viewports `popout` and `expand` will adopt the same width as the middle content column.

### Popout Panels

Example information panel using `popout`:

<div class="popout mt2 bt3 bblue b300 r2 p2 tblack bggray bg100">
  &star; Information panel
</div>

```
<div class="popout mt2 bt3 bblue b300 r2 p2 bggray bg100">
  &star; Information panel
</div>
```

### Expanded Panels

Example poster component using `expand`:

<div class="expand mt2">
  <div class="ratio16x9 flex flexcenter flexmiddle relative bgblack">
    <img class="absolute box cover opacity50%" src="https://picsum.photos/id/1015/700/700">
    <div class="relative wsm ratio16x9 p3">
      <p class="h1 m0 twhite"><strong>This is a lot of example text that may or may not distort the aspect ratio (16&times;9) of this poster/hero component.</strong></p>
      <p class="h1 twhite"><strong>See what it does on a small viewport width.</strong></p>
    </div>
  </div>
</div>

Image from [Lorem Pixum](https://picsum.photos/).

```
<div class="expand mt2">
  <div class="ratio16x9 flex flexcenter flexmiddle relative bgblack">
    <img class="absolute box cover opacity50%" src="https://picsum.photos/id/1015/700/700">
    <div class="relative wsm ratio16x9 p3">
      <p class="h1 m0 twhite"><strong>This is with a lot of example text that may or may not distort the aspect ratio (16&times;9) of this poster/hero component.</strong></p>
      <p class="h1 twhite"><strong>See what it does on a small viewport width.</strong></p>
    </div>
  </div>
</div>
```

### Full Bleed Panels

If your layout has no sidebars, side spacing (margin or padding) or other object that constrains the width of your `contentgrid` column, then `fullbleed` will expand to the full width of the viewport.

Example colored stripe using `fullbleed`:

<div class="fullbleed mt2 p2 bgred twhite">
 <code>fullbleed</code> — expands to the full width of the <code>article</code> wrapper.
</div>

```
<div class="fullbleed mt2 p2 bgred twhite">
 Full bleed panel content...
</div>
```

## Aspect ratios

Common aspect ratio constraints for images, video, and hero blocks.

<div class="mt2 sm:grid4cols gap">
  <div>
    <div class="ratio1x1 b1 p1"><code>ratio1x1</code></div>
  </div>
  <div>
    <div class="ratio4x3 b1 p1"><code>ratio4x3</code></div>
  </div>
  <div>
    <div class="ratio16x9 b1 p1"><code>ratio16x9</code></div>
  </div>
  <div>
    <div class="ratio21x9 b1 p1"><code>ratio21x9</code></div>
  </div>
</div>

## Overflows

Using `auto` to add scrollling when the content of a block exceeds its constrained height or width.

* `overflowx` — e.g. for wrapping tables with a lots of columns, that would break a template layout in small viewports
* `overflowy` — e.g. for sidebar menus loaded with content

## Invisibility

There may be situation where you require some element(s) to be displayed on smaller or larger viewports, but hidden otherwise. Baselayer has:

* `sm:hidden` — hides elements on viewports with width 720px and up
* `sm:hiddenbelow` — hides elements on viewports with width below 720px
* `md:hidden` — hides elements on viewports with width 1080px and up
* `md:hiddenbelow` — hides elements on viewports with width below 1080px