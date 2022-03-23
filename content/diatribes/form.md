---
title: "Forms are Fundamental"
weight: 80
draft: false
---

{{< col >}}
    {{< aside head="Form Warning!" body="You could make pseudo form elements with Javascript. Resist the temptation.">}}
    {{</ aside >}}
    <p>
        It's hard to think of a website that doesn't contain form. Even if your content is a canon of
        theological theses, you're at least going to want to get users to subscribe to your newsletter. Most
        important considerations are to keep it simple, even if you're running frameworks on top of frameworks,
        your forms are going to boil down to something like the one below.
    </p>
{{</ col >}}

Interactive elements are also very important styling opportunities. Beyond tweaks to font size and padding
for legibility, box shadows are an effective way to highlight the special nature of the input boxes.
Animation allows inputs and buttons to indicate hover and focus without jarring color transitions.

### Form

<form id="exampleForm" action="javascript:void(0);">
<fieldset>
    <legend>Just a Form</legend>
    <label for="formText">Text Input</label>
    <input type="text" id="formText" name="text" placeholder="Type Something, Will ya?" required>
    <label for="formNumber">Number Input</label>
    <input type="number" id="formNumber" name="number" min="0" max="100" required>
    <label for="formRange">Range Input</label>
    <input type="range" id="formRange" name="range" min="0" max="100" required>
    <label for="formDate">Date Time Input</label>
    <input type="datetime-local" id="formDate" name="date" required>
    <label for="formBoxes">Checkboxes</label>
    <fieldset id="formBoxes">
        <label for="formBoxYes">YES</label>
        <input type="checkbox" id="formBoxYes" name="box" value="YES" checked>
        <label for="formBoxNo">NO</label>
        <input type="checkbox" id="formBoxNo" name="box" value="NO">
    </fieldset>
    <label for="formSelect">Select</label>
    <select id="formSelect" name="select" required>
        <option value=""></option>
        <optgroup label="Average Dev">
            <option value="1xer">1Xer</option>
        </optgroup>
        <optgroup label="Great Dev">
            <option value="10xer">10Xer</option>
        </optgroup>
        <optgroup label="Godlike Dev">
            <option value="overflow xer">Overflow Xer</option>
        </optgroup>
    </select>
    <button>Submit Form</button>
</fieldset>
</form>

### Form Submission

<div id="Results" name="results" aria-atomic="true" aria-live="assertive" disabled>
<p id="formResults">Form Not Submitted</p>
</div>
<button id="clearResults"> Clear Results </button>