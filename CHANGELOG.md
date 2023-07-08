
# Baselayer CSS Changelog

[Updating: numbers in three CSS indexes, README.md, data/metadata.json, package.json, and package-lock.json (twice).]

## 8 July 2023 -- v.2.0.0 -- MAJOR UPDATE WITH BREAKING CHANGES  

* Refactored `<h1>` through `<h6>` line heights, spacing.
* Removed `hyphens: auto; overflow-wrap: break-word` from the `<body>` tag.
* Refactored `container` and max-width utilities `wxxs` through `wxl` to include their own `--vmax` variable. (So that their onboard `--vmax` works as a modifier for `container` and the new `grid`.)
* Removed `expand-right` and `expand-left` from the content grid.
* **BREAKING CHANGE:** removed Baselayer 1’s columnar grid system.
* **NEW** improved grid system with media queries AND container queries for reverting to a single _flexbox column_ at smaller (viewport or container) widths.
* HSL colors (from Baselayer 1) are now refactored and moved to their own partial file `colors-hsl.css`. This is done so that HSL colors can be not-included from `index.css` when you no longer need to support older browsers that do not have an interpreter for OKLCH colors.
* **NEW** OKLCH color system in file `colors-oklch.css` using the same CSS classes and theme variable names, it is a drop-in replacement for the Baselayer 1’s HSL color system. HSL is still present as an option (not a fallback) for pre-OKLCH browsers in Baselayer 2.
* **NEW** built-in dark themes for Baselayer core, OKLCH and HSL -- controllable by a JS toggle.
* And a load of minor improvements.

## 27 Jan 2023 -- v.1.1.5

* Removed smooth scrolling.
* Removed `gap` alias from `gap2`.

## 22 Dec 2022 -- v.1.1.4

* Added `gap1` through `gap4` for flexbox and grid layouts.

## 16 Dec 2022 -- v.1.1.3

* Activated focus ring on buttons only for `:focus-visible`.

## 9 Dec 2022 -- v.1.1.2

* Font weight utilities `lighter`, `normal`, `semibold`, `bold`, `heavy` -- all controlled by CSS variables. 

## 5 Dec 2022 -- v.1.1.1

* `font-size: 100%` set on the `<html>` tag, not the `<body>` tag (defaulting as 16px).
* Base line heights simply set at 1.5 (not increasing by a built-in clamp).
* Line heights of headings no longer controlled by `calc(1em + 0.5rem)` but by a _manual_ calculation: `{font-size} * (1 + (1/{font-size} * 10))` (rounded). Therefore line heights will properly scale with the headings if they are wrapped in the `longread` utility.
* Improved font elements and buttons: now font-size scalable.

## 1 Dec 2022 -- v.1.1.0

* Added `[class*=grid] { display:grid }` to ensure that `grid gap` works at all viewport widths.
* Added `expand-right` and `expand-left` to the content grid for e.g. asymmetrical blockquotes.
* Improved dimensions, including width variables now in 7 × 256px increments, 
    * `xxs` 256px
    * `xs` 512px
    * `sm` 768px
    * `md` 1024px
    * `lg` 1280px
    * `xl` 1440px
    * `xxl` 1600 px (same as max-width of `container`)
* Another tier of invisibility classes: `lg`.
* Improved form elements.
* Improved typography.
* Improved tables: now borderlines around all cells, not simple hotizontal lines between table rows. Cell text left-aligned.

## 30 Nov 2022 -- v.1.0.6

* Added `--b4` tier for borders
* Refactored border radius to `--r2` through `--r4` to pair with borders `--b2` through `--b4`. And now both are set in pixels. (There is no `--r1` because no need for a 1px border radius.)
* Removed the forced left-alignment of the first column of cells in `<table>`.

## 14 Nov 2022 -- v.1.0.5

* Added hover states of _colors_, so hover can change a color (not only change a shade).
* Added hover transition states for links and buttons.
* Improvements to tables: removing cell borders; adding border-bottom to `thead` and `tr`.
* Further improvements to forms and buttons.
* Added `hmax100vh`.
* Added `inlineflex`.

## 10 Nov 2022 -- v.1.0.4

* Renamed `.article` (the content grid class) as `.contentgrid`.

## 9 Nov 2022 -- v.1.0.3

* Improvements to list item spacing.

## 2 Nov 2022 -- v.1.0.2

* Improvements to forms and buttons.

## 29 Oct 2022 -- v.1.0.0

* Initial public release -- GitHub repo.