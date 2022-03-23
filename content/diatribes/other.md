---
title: "Other Informational Widgets"
weight: 70
draft: false
---

aside:
    header: "Internet Explorer"
    content: "It still exists."

<div>
    include aside.html
    <p>
        These next few widgets have a special note that they are not supported in Internet Explorer.
        {{< abbr IE >}} compatibility isn't as big a concern as it was in the past, but you never know, so keep
        compatibility in mind and don't lock any core functionality behind these features.
    </p>
</div>

<h3 id="detailHead">Details</h3>

The details<sup>1</sup> tag is a handy way to implement footnotes and other non-critical data that doesn't
merit an aside bubble. Even when used with {{< abbr IE >}} the summary and content will still be available,
so compatibility is a minor concern employing the details element.

<details>
    <summary>1</summary>
    <p>You can use details when you don't think it's necessary for the reader to get all the details.</p>
</details>

<h3 id="progressHead">Progress</h3>

Progress tags create progress bars, useful for showing numeric information that indicate progress. In other
words, it is a gauge that is expected to fill one way (from zero to one).

<label class="freeLabel" for="pageProgress">Page Progress:</label>
<progress id="pageProgress" min="0" max="100" value="0">
</progress>

<p aria-atomic="true" aria-live="polite">The above bar measures your progress on the page, you are <span id="progressSpan">Not Supported - Javascript is Disabled </span>% through this page.</p>



<h3 id="meterHead">Meter</h3>

Meters can be used to represent gauges. For example, Lighthouse, an browser accessibility tool, grades this website:

#### Lighthouse Score

<div>
    <div class="flexRows">
        <label for="perfGrade">Performance</label>
        <meter id="perfGrade" min="0" max="100" value="100" optimum="90"></meter>
        <p><strong>100 Score</strong></p>
    </div>
    <div class="flexRows">
        <label for="a11yGrade">Accessibility</label>
        <meter id="a11yGrade" min="0" max="100" value="100" optimum="90"></meter>
        <p><strong>100 Score</strong></p>
    </div>
    <div class="flexRows">
        <label for="bestGrade">Best Practices</label>
        <meter id="bestGrade" min="0" max="100" value="100" optimum="90"></meter>
        <p><strong>100 Score</strong></p>
    </div>
    <div class="flexRows">
        <label for="seoGrade">SEO</label>
        <meter id="seoGrade" min="0" max="100" value="100" optimum="90"></meter>
        <p><strong>100 Score</strong></p>
    </div>
    <div class="flexRows">
        <label for="humorGrade">Humor</label>
        <meter id="humorGrade" min="0" max="100" low="60" high="80" value="37" optimum="90"></meter>
        <p><strong>37 Score</strong></p>
    </div>
</div>

A Pretty Jekyllin' website also was graded highly for mobile screens as well.

<!-- 
    We hew pretty closely to the original implementation here.  We have to use ids for navigable headings, and I'm
    resisting the temptation to look into the markdown parsing engine and injecting the header's contents into the header's
    id property.
-->