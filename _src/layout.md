---
title: Layout
mainHeading: Layout
layout: base.njk
prevPage: "/typography/"
nextPage: "/decoration/"
prevLink: "Typography"
nextLink: "Decoration"
---


## Blocks

* `block` — make an inline element behave as a block element
* `inlineblock` — to enable block-like settings on an inline element (width, height, margins, paddings)
* `inlineflex`, `flex` — [see flex below](#flex-layouts)
* `grid` — [see grid below](#grid-layouts)

## Containers

The centered layout container `container` with is set as follows:

```css
/*
 * root-vars.css
 */
:root {
  --wxxl: 1600px;

  --s2: clamp(1rem, 2.2222vw, 1.5rem);
}

/*
 * layout.css
 */
.container {
  --wmax: var(--wxxl);
  width: min(100% - (var(--s2) * 2), var(--wmax));
  margin-inline: auto;
}
```

For viewport widths below `--wmax` side spacing is provided by `--s2`. This adds a negative space (whitespace) right and left of the container, to prevent text being difficult to read when up against the sides of phone and tablet screens.

If you require a narrower container, use the max-width classes as modifiers: e.g `container wlg` or `container wmd`.

## Dimensions

Width:

* `w100%` — width: 100%

Max-width (256px increments):

* `wxxl` — max-width 1600px, same as `--wxxl`
* `wxl` — max-width 1440px, same as `--wxl`
* `wlg` — max-width 1280px, same as `--wlg`
* `wmd` — max-width 1024px, same as `--wmd`
* `wsm` — max-width 768px, same as `--wsm`
* `wxs` — max-width 512px, same as `--wxs`
* `wxxs` — max-width 256px, same as `--wxxs`
* `wmax100vw` — max-width 100vw

Height:

* `h100%` — height 100%, e.g. for making cards equal to the height of their wrapper
* `h100vh` — height 100% _or_ 100vh, e.g. for making “full cover” panels
* `hmax100dvh` — max-height 100dvh, e.g. for tall sidebars (use it with `overflowy`)

`dvh` = [dynamic viewport height](https://css-tricks.com/the-large-small-and-dynamic-viewports/).

Two dimensions:

* `box` — expands an inner element using `inset: 0` to fill the size of its wrapper (you must put `relative` on a `box` wrapper). Useful for setting up a panel (e.g. hero or card) background image with text overlay.

## Positions

* `relative`
* `absolute`
* `sticky`
* `top` — `top: 0`
* `right` — `right: 0` (same class name is used for `text-align: right`)
* `bottom` — `bottom: 0`
* `left` — `left: 0` (same class name is used for `text-align: left`)
* `z1` — `z-index: 1`
* `z2` — `z-index: 2`
* `z3` — `z-index: 3`

For centering and middling, use [flex](#flex-layouts).

Example: 

<div class="relative mb2 b1 ratio16x9">
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

## Flex layouts

Flexbox utilities for simple layout, menubars, pagination lists, cards, etc.

* `inlineflex` — inline flexbox at all viewport widths
* `flex` — flexbox at all viewport widths

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  Baselayer 1’s <code>sm:flex</code> and <code>md:flex</code> have been removed (obsoleted) in Baselayer 2. Use <a  class="tblue t600 h:t700"href="#“dropping”-a-flex-or-grid-layout">flexbox dropping</a> instead.
</div>

### Flex modifiers

* `gap*` — adds a horizontal and and vertical gap (same as for [grid](#grid-layouts) layouts — and uses the same spacing CSS variables as [margins and paddings]({{ '/decoration/' | url }}#spacing-(margins-and-paddings))):
    * `gap1` — `--s1`
    * `gap2` — `--s2`
    * `gap3` — `--s3`
    * `gap4` — `--s4`
* X-axis: `flexstart` / `flexcenter` / `flexend`
* Y-axis: `flextop` / `flexmiddle` / `flexbottom`
* `flexwrap` — gives you `flex-wrap: wrap`
* `flexcolumn` — gives you `flex-direction: column`
* `flexspace` — gives you `justify-content: space-between`

The following `flex` example uses `xs:drop` to [drop a flexbox](#“dropping”-a-flex-or-grid-layout) to become a _flex column_ below the `xs` breakpoint (512px):

<nav class="mt2 mb3 flex gap1 flexend xs:drop">
<a class="btn flex" href="#/">Home</a>
<a class="btn flex" href="#/">Products</a>
<a class="btn flex" href="#/">About</a>
<a class="btn flex" href="#/">Blog</a>
<a class="btn flex" href="#/">Contact</a>
</nav>

```html
<nav class="flex gap1 flexend xs:drop">
  <a class="btn flex" href="">Home</a>
  <a class="btn flex" href="">Products</a>
  <a class="btn flex" href="">About</a>
  <a class="btn flex" href="">Blog</a>
  <a class="btn flex" href="">Contact</a>
</nav>
```

The “link pseudo buttons” have small gaps between them, whether in horizontal arrangement or in their vertical (phones) arrangement (`gap1` always works because they are still wrapped in a flexbox, whether arranged as a row or a column).

### Flex-item grow

* `grow` — gives you `flex-grow: 1`

<div class="mb2 flex">
<div class="b1 p1 tblack bggray bg100">no grow</div>
<div class="b1 p1 grow bggray bg100"><code class="tblack bgblue bg200">grow</code></div>
</div>

```html
<div class="flex">
<div></div>
<div class="grow"></div>
</div>
```

## Grid layouts

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  The grid system has been reinvented in Baselayer 2 — this is a breaking change over Baselayer 1. The grid is now more versatile, yet simpler and lighter.
</div>

### Controlling the number of columns

To set up a Baselayer 2 _grid wrapper_, all you need to do is choose one of these wrapper classes:

* `grid2cols`
* `grid3cols`
* `grid4cols`

These supply `display:grid`, and set up either 2, 3, or 4 columns of equal width. _This covers most use cases for the traditional 12 column grid system._

```html
<div class="grid3cols">
  <div></div>
  <div></div>
  <div></div>
</div>
```

At this point, _grid items_ will automatically span one grid cell, and if you have more grid items than set columns, the excess will wrap onto new row(s). This is all you need for setting up equal width columns such as galleries.

### Grid gaps

* `gap*` — adds a horizontal and and vertical gap (same as for [flex](#flex-layouts) layouts; see above):
    * `gap1` — `--s1`
    * `gap2` — `--s2`
    * `gap3` — `--s3`
    * `gap4` — `--s4`

### Grid item control

For any of the 2, 3, or 4 column grids, the following _column control_ classes can be used on grid items. Use these to handle column spanning and reordering.

* `col1` / `col2` / `col3` / `col4` — cell placement
* `cols1-2` / `cols1-3` / `cols1-4` — spanning from column 1
* `cols2-3` / `cols2-4` — spanning from column 2
* `cols3-4` — spanning from column 3

<div class="mt2 mb3 grid2cols gap1 tblack">
  <div class="pcell bggray bg100">1</div>
  <div class="pcell bggray bg100">2</div>
  <div class="cols1-2 pcell bggray bg100">cols1-2</div>
</div>

```html
<div class="grid2cols gap1">
  <div></div>
  <div></div>
  <div class="cols1-2"></div>
</div>
```

<div class="mt2 mb3 grid3cols gap2 tblack">
  <div class="pcell bggray bg100">1</div>
  <div class="cols2-3 pcell bggray bg100">cols2-3</div>
</div>

```html
<div class="grid3cols gap2">
  <div></div>
  <div class="cols2-3"></div>
</div>
```

If you use these column control classes to _reorder_ your grid items, there’s also the `dense` class that handles sense packing: the CSS grid will attempt to fit later grid items into earlier empty cells, if there's sufficient space available.

<div class="mt2 mb3 grid4cols gap1 dense tblack">
  <div class="pcell bggray bg100">Item 1</div>
  <div class="cols1-2 pcell bggray bg100">Item 2 <code class="tblack bgblue bg200">cols1-2</code></div>
  <div class="cols2-4 pcell bggray bg100">Item 3 <code class="tblack bgblue bg200">cols2-4</code></div>
  <div class="col4 pcell bggray bg100">Item 4 <code class="tblack bgblue bg200">col4</code></div>
  <div class="col3 pcell bggray bg100">Item 5 <code class="tblack bgblue bg200">col3</code></div>
</div>

```html
<div class="grid4cols gap1 dense">
  <div>Item 1</div>
  <div class="cols1-2">Item 2</div>
  <div class="cols2-4">Item 3</div>
  <div class="col4">Item 4</div>
  <div class="col3">Item 5</div>
</div>
```

**Note:** when grid item reordering, be careful not to cause an accessibility problem by confusing the tabbing order.

The grid columns take up equal fractions of the available space (on the horizontal axis), accounting for gaps.

## “Dropping” a flex or grid layout

Flexbox or grid layouts on narrower viewports — and in narrower space, if so constrained, you need to use a Baselayer 2 `drop` class to reset your layout as a _flexbox column_. Or you can make your own similar class at a different `@media` query or `@container` query breakpoint.

There are eight special `drop` classes that affect the [flex](#flex-layouts) and [grid](#grid-layouts-system) systems below the `xs`, `sm`, `md`, or `lg` breakpoint widths (four for media queries and four for container queries): making them into flexbox columns:

### Media query widths

For `@media` viewport width breakpoint control:

* `xs:drop` — resets to a flexbox column below 512px
* `sm:drop` — ... below 768px
* `md:drop` — ... below 1024px
* `lg:drop` — ... below 1280px

### Container query widths

For `@container` width breakpoint control:

* `cqxs:drop` — resets to a flexbox column below 512px
* `cqsm:drop` — ... below 768px
* `cqmd:drop` — ... below 1024px
* `cqlg:drop` — ... below 1280px

**Note:** the container query `drop` classes create a `container-type` context on the parent element of the wrapper of a `cq*:drop` class` — whatever the parent is, by the following style:

```css
:has(> [class*=cq]) {
  container-type: inline-size;
}
```

Therefore, you may need to add another wrapping element around your `@container` grid or `@container` flex, or the outer layout may be distorted by the `container-type` context rule.

Example `@media` grid using `xs:drop` (`xs` = 512px):

<div class="mt2 mb3">
  <div class="grid4cols gap1 xs:drop">
    <div class="bggray bg100">
      &nbsp;
    </div>
    <div class="bggray bg200">
      &nbsp;
    </div>
    <div class="bggray bg100">
      &nbsp;
    </div>
    <div class="bggray bg200">
      &nbsp;
    </div>
    <div class="col1 bggray bg100">
      &nbsp;
    </div>
    <div class="cols2-4 bggray bg200">
      &nbsp;
    </div>
    <div class="cols1-2 bggray bg100">
      &nbsp;
    </div>
    <div class="cols3-4 bggray bg200">
      &nbsp;
    </div>
    <div class="cols1-3 bggray bg100">
      &nbsp;
    </div>
    <div class="col4 bggray bg200">
      &nbsp;
    </div>
  </div>
</div>

Example `@container` grid drop using `cqxs:drop` (`xs` = 512px):

<div class="mt2 mb3 resize-x">
  <div class="grid4cols gap1 cqxs:drop">
    <div class="bggray bg100">
      &nbsp;
    </div>
    <div class="bggray bg200">
      &nbsp;
    </div>
    <div class="bggray bg100">
      &nbsp;
    </div>
    <div class="bggray bg200">
      &nbsp;
    </div>
    <div class="col1 bggray bg100">
      &nbsp;
    </div>
    <div class="cols2-4 bggray bg200">
      &nbsp;
    </div>
    <div class="cols1-2 bggray bg100">
      &nbsp;
    </div>
    <div class="cols3-4 bggray bg200">
      &nbsp;
    </div>
    <div class="cols1-3 bggray bg100">
      &nbsp;
    </div>
    <div class="col4 bggray bg200">
      &nbsp;
    </div>
  </div>
</div>

I have provided a resizable wrapper (see the dashed border box) to help you understand how the `@container` grid drop works: use the resize handle in the bottom right corner to make the box narrower.

Example `@container` flex drop:

<div class="mt2 mb3 resize-x">
<div class="b1 r3 flex cqxs:drop overflow">
<img class="ratio4x3 cover" src="https://picsum.photos/200/300">
<div class="grow p2 flex flexcolumn flexcenter">
<div class="h3 m0 mb1 p0">Title of this media object</div>
<p class="m0">Some accompanying text that explains what this thing is about. It could be anything, because the photo is randomly supplied by <a href="https://picsum.photos">Lorem Picsum</a>.</p>
</div>
</div>
</div>

There’s also an example `@media` flex drop in [flex modifiers](#flex-modifiers) above.

## Content grid

`contentgrid` uses CSS Grid to set up a 7 column layout where the main content is placed in the middle (column 4) and has max `--wsm`.

`contentgrid` expects your content typographic blocks (headings, paragraphs, etc.), and the panel blocks below, to be its immediate children.

* Use the `popout` utility class to make an element span the middle 3 columns (3 to 5). Columns 3 and 5 have width `--s2`
* Use the `expand` utility class to make an element span the middle 5 columns (2 to 6). A panel spanning columns 2 to 6 has max-width `var(--wmd)`.
* Use the `fullbleed` utility class to make an element span all 7 columns

**Note:** Columns 1 and 7 have a minimum width of `--s2` Therefore both `popout`, `expand` and the middle content column always have negative space (a.k.a. white space) right and left – they will never reach the full width of the `contentgrid` wrapper. Therefore, on smaller viewports `popout` and `expand` will adopt the same width as the middle content column.

### Popout Panels

Example information panel using `popout`:

<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  Alert panel
</div>

```
<div aria-label="Note" class="popout mb2 bl3 bamber b300 p2 tblack bgamber bg100">
  Alert panel
</div>
```

### Expanded Panels

Example poster component using `expand`:

<div class="expand mb2">
  <div class="ratio16x9 flex flexcenter flexmiddle relative bgblack">
    <img class="absolute box cover opacity50%" src="https://picsum.photos/id/1015/700/700">
    <div class="relative wsm p3">
      <p class="h1 twhite"><strong>This is a lot of example text that may or may not distort the aspect ratio (16×9) of this hero component.</strong></p>
      <p class="h1 m0 twhite"><strong>See what it does on a small viewport width.</strong></p>
    </div>
  </div>
</div>

Image from [Lorem Pixum](https://picsum.photos/).

```html
<div class="expand mb2">
  <div class="ratio16x9 flex flexcenter flexmiddle relative bgblack">
    <img class="absolute box cover opacity50%" src="https://picsum.photos/id/1015/700/700">
    <div class="relative wsm p3">
      <p class="h1 twhite"><strong>This is with a lot of example text that may or may not distort the aspect ratio (16&times;9) of this hero component.</strong></p>
      <p class="h1 twhite"><strong>See what it does on a small viewport width.</strong></p>
    </div>
  </div>
</div>
```

### Full Bleed Panels

If your layout has no sidebars, side spacing (margin or padding) or other object that constrains the width of your `contentgrid` column, then `fullbleed` will expand to the full width of the viewport.

Example colored stripe using `fullbleed`:

<div class="fullbleed mb2 p2 bgred twhite">
 <code>fullbleed</code> — expands to the full width of the <code>article</code> wrapper.
</div>

```
<div class="fullbleed mb2 p2 bgred twhite">
 Full bleed panel content...
</div>
```

## Aspect ratios

Common aspect ratio constraints for images, video, and hero blocks.

<div class="expand mb2 grid4cols gap2 xs:drop">
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

* `xs:hidden` — hides elements on viewports with width 512px and up
* `xs:hiddenbelow` — hides elements on viewports with width below 512px
* `sm:hidden` — hides elements on viewports with width 768px and up
* `sm:hiddenbelow` — hides elements on viewports with width below 768px
* `md:hidden` — hides elements on viewports with width 1024px and up
* `md:hiddenbelow` — hides elements on viewports with width below 1024px
* `lg:hidden` — hides elements on viewports with width 1280px and up
* `lg:hiddenbelow` — hides elements on viewports with width below 1280px