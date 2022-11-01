---
title: Buttons
mainHeading: Buttons
layout: base.njk
prevPage: "/forms"
prevLink: "Forms"
---

### Button Types and Link “Buttons”

<form>
  <p>
    <button type="button" name="button">Button</button>
    <input type="button" name="input" value="Input Button">
    <input type="submit" name="submit" value="Submit Button">
    <input type="reset" name="reset" value="Reset Button">
    <a class="btn" href="">Link “button”</a>
  </p>
</form>

```
<button type="button" name="button">Button</button>

<input type="button" name="input" value="Input Button">

<input type="submit" name="submit" value="Submit Button">

<input type="reset" name="reset" value="Reset Button">

<a class="btn" href="">Link “button”</a>
```

**Note:** The `btn` class doesn’t include the input focus ring (that is set only on form inputs, textareas, and the `<button>` tag). But if the `btn` utility class is used on an `<a href="">` link tag, then will get the link focus ring insead (this is only visible when keyboard-tabbing or using assistive tech).

## Full-width buttons

As with other [full-width form elements]({{ '/forms/#full-width-form-elements' | url }}), if you require a button to be full-width, you can add `class="w100%"` or control it in a [flex]({{ '/layout/#flex' | url }}) or [grid]({{ '/layout/#grid' | url }}) wrapper.

<button class="w100%" type="button" name="button">Button</button>

```
<button class="w100%" type="button" name="button">Button</button>
```

Block button with a down-caret icon and spacing controlled by flexbox:

<button class="w100% mt2 flex flexmiddle flexspace" type="button" name="button">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
</button>

```
<button class="w100% flex flex-middle flex-space-between" type="button" name="button">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
</button>
```

Down-caret SVG icon from [Phosphor Icons](https://phosphoricons.com/), with color set by `currentColor`, and width and height 16px — same as font size (1rem).

## Adding Colors

Border, background, or text color utilities can be used.

<form>
  <p>
    <label for="example-input-text">Text</label>
    <input class="b2 bred" type="text" id="example-input-text" placeholder="Enter some text here">
    <input class="b2 bgreen" type="text" id="example-input-text" placeholder="Enter some text here">
  </p>
</form>

```
<input class="b2 bred" type="text" id="example-input-text" placeholder="Enter some text here">

<input class="b2 bgreen" type="text" id="example-input-text" placeholder="Enter some text here">
```

When colorizing buttons, remember to set their hover state shades too.

<form>
  <p>
    <button type="button" name="button">Button</button>
    <button class="bblue b600 h:b700 bgblue bg600 h:bg700" type="button" name="button">Button</button>
    <button class="bamber b300 h:b400 tblack h:tblack bgamber bg300 h:bg400" type="button" name="button">Button</button>
    <button class="bgreen bg600 tgreen t600 bgtransparent h:b700 h:twhite bggreen h:bg700" type="button" name="button">Button</button>
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

**Note:** the _named_ colors (including `transparent`) take precedence over HSL coded colors in Baselayer because they are declared _after_ the coded colors — in `colors.css`. This is the reason why, in the green outline (ghost) button, it can have both `bgtransparent` and `bggreen` classes but the transparent wins out. Whereas the hover state shade `h:bg700` _overrides_ the `bgtransparent` on hover, and that’s when the `var(--green-hs)` in the `bggreen` class is applied — this property colorizes the hover shade.

## Buttons with Icons

<form>
  <p>
    <button type="button" name="button">
      Search&nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    </button>
  </p>
</form>

Baselayer CSS buttons works well with SVG icons, e.g. [Phosphor icons](https://phosphoricons.com/). Set the width and height of the icon to be e.g. 16px, 20px, or 24px. Set the fill colors to be `currentColor` so that it can be controlled by the CSS.

If you are combining text with an icon, you may sometimes need to add a non-breaking space `&nbsp;` (or some inline padding on a `<span>`) within your button.

If your icon is larger then the text height, you can add `flex flex-middle` to the button to control the vertical alignment.

<form>
  <p class="flex flex-middle">
    <button type="button" name="button" class="flex flex-middle">
      Search&nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    </button>
  </p>
</form>

```
<button type="button" name="button" class="flex flex-middle">
  Search&nbsp;
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
</button>
```

For icon-only buttons, add `.btn-icon` and have only a single character or icon in the button.

<form>
  <p class="flex flex-middle">
    <button type="button" name="button">Button</button>&nbsp;
    <button class="btn-icon" type="button" name="button">1</button>&nbsp;
    <button class="btn-icon" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </p>
</form>

## Pill Buttons

The `pill` class on a square icon button will make it circular.

<form>
  <p class="flex flex-middle">
    <button class="pill" type="button" name="button">Button</button>&nbsp;
    <button class="btn-icon pill" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </p>
</form>

```
<button class="pill" type="button" name="button">Button</button>

<button class="btn-icon pill" type="button" name="button">I</button>
```

## Stretch Buttons

Increase the x-axis padding (using the responsive `px2` or `px3`) to make a button more impressive:

<form>
  <p class="flex flex-middle">
    <button type="button" name="button">Button</button>&nbsp;
    <button class="px2" type="button" name="button">Button</button>&nbsp;
    <button class="px3" type="button" name="button">Button</button>&nbsp;
  </p>
</form>

```
<button type="button" name="button">Button</button>

<button class="px2" type="button" name="button">Button</button>

<button class="px3" type="button" name="button">Button</button>
```