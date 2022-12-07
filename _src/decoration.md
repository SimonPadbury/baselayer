---
title: Decoration
mainHeading: Decoration
layout: base.njk
prevPage: "/layout"
nextPage: "/colors"
prevLink: "Layout"
nextLink: "Colors"
---

## Spacing (Margins and Paddings)

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) margin and padding spacing have both 4 levels based on 4 CSS variables. The smallest simply adds 0.5rem spacing, whereas levels 2-4 are responsive to viewport width using `clamp()` functions to ramp up to 150% their base size. These variables are set in the root-variables file.

```
:root {
  --s1: .5rem;
  --s2: clamp(1rem, 2.2222vw, 1.5rem);
  --s3: clamp(2rem, 4.4444vw, 3rem);
  --s4: clamp(3rem, 6.6667vw, 4.5rem);
}
```

This makes the negative space (“whitespace”) for spacing levels 2-4 bigger for larger screens.

Both margin and padding spacers are controlled on the 4 sides of blocks, as follows:

* All: `m1` through `m4` / `p1` through `p4`
* Top: `mt1` through `mt4` / `pt1` through `pt4`
* Right: `mr1` through `mr4` / `pr1` through `pr4`
* Bottom: `mb1` through `mb4` / `pb1` through `pb4`
* Left: `ml1` through `ml4` / `pl1` through `pl4`
* Inline x-axis (right and left): `mx1` through `mx4` / `px4` through `px4`
* Block y-axis (top and bottom): `my1` through `my4` / `py4` through `py4`

Spacing example with paddings:

<div class="mt2 b1 p4">p4</div>

<div class="mt2 b1 p3">p3</div>

<div class="mt2 b1 p2">p2</div>

<div class="mt2 b1 p1">p1</div>

### Spacing Extras

In addition, there are the following specials:

* `pcell` — adds y-axis padding `--s1` and x-axis padding of double `--s1` for creating menu items. Same as the padding for table cells and buttons
* `mxauto` — for x-axis margin auto-centering
* `m0` and `p0` — for removing (resetting) all unwanted space

These zero spacing utilities are declared before the spacers above in `decoration.css` so that you can use them to _reset_ and then use spacers to set spacing the way you want it.

_What if you want to remove e.g. only the top margin of a heading (or other typographic block element)?_ Use `m0` to remove all margins, then use any of the above additive margin classes to put back the ones you want to keep.

## Borders

Baselayer provides three thicknesses of border (plus a zero border override):

<div class="mt2 b1 p1">b1 (1px)</div>

<div class="mt2 b2 p1">b2 (4px)</div>

<div class="mt2 b3 p1">b3 (8px)</div>

Borders can be set as follows:

* All: `b*`
* Top: `bt*`
* Right: `br*`
* Bottom: `bb*`
* Left: `bl*`

### Border Extra

* `b0` — for removing (resetting) all borders

## Rounded Corners

* `r2` — 4px border radius
* `r3` — 8px border radius
* `r4` — 16px border radius

<div class="mt2 sm:grid3cols gap">
  <div class="b1 r2 p1">r2</div>
  <div class="b1 r3 p1">r3</div>
  <div class="b1 r4 p1">r4</div>
</div>

Since Baselayer v.1.0.6, border and border-radius variables pair as follows:

<table class="center">
  <thead>
    <tr>
      <th>Border variable</th>
      <th>Border-radius variable</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--b1</code></td>
      <td>n/a</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>--b2</code></td>
      <td><code>--r2</code></td>
      <td><code>4px</code></td>
    </tr>
    <tr>
      <td><code>--b3</code></td>
      <td><code>--r3</code></td>
      <td><code>8px</code></td>
    </tr>
    <tr>
      <td>n/a</td>
      <td><code>--r4</code></td>
      <td><code>16px</code></td>
    </tr>
  </tbody>
</table>

***Note:** You will probably never need `--r1` (a border radius of 1px) or `--r4` (border radius of 16px) so these are not available in Baselayer.

* `pill` — 99em border radius (more than sufficient to put x-axis semi-circular ends on even mid-sized blocks)

<div class="mt2 b1 pill p3">pill</div>

If `pill` is used on a square, then the result will be a circle.

<div class="mt2 b1 pill flex flexcenter flexmiddle center" style="width: 280px; height: 280px;">280px²<br>square pill</div>

## The Image Cover Class

There’s the Baselayer `cover` class can be used to make an image expand or contract to fully cover a container block rectangle. It is designed for use on an `<img src="">` tag.

```
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
}
```

An example of `cover` being used can be seen in the [expanded panel]({{ '/layout/#expanded-panels' | url }}) example.

## Opacity

Opacities (with hover states):

* `opacity25%` / `h:opacity25%`
* `opacity50%` / `h:opacity50%`
* `opacity75%` / `h:opacity75%`
*  `h:opacity100%`

The hover states are provided in case you want an image inside a link to change opacity on hover.

If you use these on an image over a colored background, then you get a color-tinted image.

If you have text over an image (e.g. in a hero component), then you can use opacity over a black (or dark color) background to make white text more readable — and _vise versa_.