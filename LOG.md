
# Baselayer CSS Log

[Updating: numbers in index.css, README.md, data/metadata.json, package.json, and package-lock.json (twice).]

## 1 Dec 2022 -- v.1.0.7

* Added `[class*=grid] { display:grid }` to ensure that `grid gap` works at all viewport widths.
* Added `expand-right` and `expand-left`.

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