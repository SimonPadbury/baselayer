---
title: Forms
mainHeading: Forms
layout: base.njk
prevPage: "/colors"
nextPage: "/buttons"
prevLink: "Colors"
nextLink: "Buttons"
---

Baselayer form elements have simple border and focus styling.

## Textual Form Input Fields

<form action="">
  <p>
    <label for="example-input-email">Email address</label>
    <input type="email" id="example-input-email" placeholder="Enter email">
  </p>
  <p>
    <label for="example-input-password">Password</label>
    <input type="password" id="example-input-password" placeholder="Password">
  </p>
  <p>
    <label for="example-input-search">Search</label>
    <input type="search" id="example-input-serach" placeholder="Search ...">
  </p>
  <p>
    <label for="example-input-tel">Telephone number</label>
    <input type="tel" id="example-input-tel" placeholder="Telephone number">
  </p>
  <p>
    <label for="example-input-text">Text</label>
    <input type="text" id="example-input-text" placeholder="Enter text">
  </p>
  <p>
    <label for="example-input-url">Url</label>
    <input type="url" id="example-input-url" placeholder="Enter a url">
  </p>
</form>

## Number (Picker) Input

<form action="">
  <p>
    <label for="example-input-password1">Number</label>
    <input type="number" id="example-input-number" placeholder="Number">
  </p>
</form>

## Date and Time Inputs

<form action="">
  <p>
    <label for="example-input-date">Date</label>
    <input type="date" id="example-input-date" placeholder="Date">
  </p>
  <p>
    <label for="example-input-date-time">Date / Time</label>
    <input type="datetime" id="example-input-date-time" placeholder="Date / Time">
  </p>
  <p>
    <label for="example-input-date-time-local">Date / Time local</label>
    <input type="datetime-local" id="example-input-date-time-local" placeholder="date / time local">
  </p>
  <p>
    <label for="example-input-month">Month</label>
    <input type="month" id="example-input-month" placeholder="Month">
  </p>
  <p>
    <label for="example-input-week">Week</label>
    <input type="week" id="example-input-week" placeholder="Week">
  </p>
  <p>
    <label for="example-input-time">Time</label>
    <input type="time" id="example-input-time" placeholder="Time">
  </p>
</form>

## Color Picker

<form action="">
  <p>
    <label for="example-input-color">Color</label>
    <input type="color" id="example-inupt-color" placeholder="#fff">
  </p>
</form>

## File Upload

<form action="">
  <p>
    <label for="example-input-file">File input</label>
    <input type="file" id="example-input-file">
  </p>
</form>

## Select and Multi-select

<form action="">
  <p>
    <label for="example-select1">Example select</label>
    <select id="example-select1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>
  <p>
    <label for="example-select2">Example multiple select</label>
    <select multiple id="example-select2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>
</form>

## Text Area (Multiline)

<form action="" class="mt2">
    <label for="example-textarea">Example textarea</label><br>
    <textarea id="example-textarea" rows="3"></textarea>
</form>

## Radio Boxes and Checkboxes

<form action="">
  <p class="my2">Radio boxes:</p>
  <input type="radio" id="example-radio-1" name="example-raio-1" value="banana">
  <label for="example-radio-1">Banana</label><br>
  <input type="radio" id="example-radio-2" name="example-radio-2" value="mango">
  <label for="example-radio-2">Mango</label><br>
  <input type="radio" id="example-radio-3" name="example-radio-3" value="coconut" disabled>
  <label for="example-radio-3">Coconut (disabled)</label>
  <p class="my2">Checkboxes:</p>
  <input type="checkbox" id="example-check-1" name="example-check-1" value="strawberry">
  <label for="example-check-1"> Strawberry</label><br>
  <input type="checkbox" id="example-check-2" name="example-check-2" value="chocolatte">
  <label for="example-check-2"> Chocolate</label><br>
  <input type="checkbox" id="example-check-3" name="example-check-3" value="vanilla">
  <label for="example-check-3"> Vanilla</label><br><br>
  <input type="submit" value="Submit">
</form>


## Fieldsets and Legends

Groups of form elements can be wrapped in `<fieldset>` tags. Add a `<legend>` to provide a special title for the entire fieldset.

<form action="">
  <fieldset>
    <legend>Example e-newsletter subscribe</legend>
    <input type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

```
<form action="">
  <fieldset>
    <legend>Example e-newsletter subscribe</legend>
    <input type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>
```

## Form Buttons

<form action="">
  <p>
    <button type="button" name="button">Button</button>
    <input type="button" name="input" value="Input Button">
    <input type="submit" name="submit" value="Submit Button">
    <input type="reset" name="reset" value="Reset Button">
  </p>
  <fieldset>
    <legend>Example e-newsletter subscribe</legend>
    <input type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

```
<form action="">
  <p>
    <button type="button" name="button">Button</button>
    <input type="button" name="input" value="Input Button">
    <input type="submit" name="submit" value="Submit Button">
    <input type="reset" name="reset" value="Reset Button">
  </p>
  <fieldset>
    <legend>Example e-newsletter subscribe</legend>
    <input type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>
```

See [buttons]({{ '/buttons' | url }}) for more information.

## Full-width Form Elements

All form elements are natively inline elements. If you require a form element to be full-width, you can add `class="w100%"` or control it in a [flex]({{ '/layout/#flex' | url }}) or [grid]({{ '/layout/#grid' | url }}) wrapper.

<form action="">
  <p>
    <label for="example-input-text">Text</label>
    <input class="w100%" type="text" id="example-input-text" placeholder="Enter some text here">
  </p>
  <p>
    <button class="w100%" type="button" name="button">Button</button>
  </p>
</form>

```
<input class="w100%" type="text" id="example-input-text" placeholder="Enter some text here">

<button class="w100%" type="button" name="button">Button</button>
```

<form class="mt2" action="">
  <label for="example-input-text">Text</label>
  <div class="sm:grid4cols gap">
    <input class="sm:cols1-3" type="text" id="example-input-text" placeholder="Enter some text here">
    <button type="button" name="button">Button</button>
  </div>
</form>

```
<form class="mt2" action="">
  <label for="example-input-text">Text</label>
  <div class="sm:grid4cols gap">
    <input class="sm:cols1-3" type="text" id="example-input-text" placeholder="Enter some text here">
    <button type="button" name="button">Button</button>
  </div>
</form>
```