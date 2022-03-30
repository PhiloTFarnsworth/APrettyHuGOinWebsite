---
title: "Other Informational Widgets"
shortTitle: "Other Widgets"
weight: 7
script: "progress.js"
summary: "Details, Progress Bars and Meters! Oh My!"
draft: false
---

{{< col >}}
    {{< aside head="Internet Explorer" body="It still exists.">}}
    {{</ aside >}}
    <p>
        These next few widgets have a special significance in that they are not supported in Internet Explorer.
        {{< abbr IE >}} compatibility isn't as big a concern as it was in the past, but you never know, so keep
        compatibility in mind and don't lock any core functionality behind these features.
    </p>
{{</ col >}}

### Details

The details{{< sup 1 >}} tag is a handy way to implement footnotes and other non-critical data that doesn't
merit an aside bubble. Even when used with {{< abbr IE >}} the summary and content will still be available,
so compatibility is a minor concern employing the details element.

{{< details 
    summary="1" 
    body="You can use details when you don't think it's necessary for the reader to get all the details." >}}

### Progress

Progress tags create progress bars, useful for showing numeric information that indicate progress. In other
words, it is a gauge that is expected to fill one way (from zero to one).

{{< progress id="pageProgress" label="Page Progress:" >}}

<p aria-atomic="true" aria-live="polite">The above bar measures your progress on the page, you are <span id="progressSpan">Not Supported - Javascript is Disabled </span>% through this page.</p>



### Meter

Meters can be used to represent gauges. For example, Lighthouse, an browser accessibility tool, grades this website for both desktop and mobile:

#### Lighthouse Score

{{< col >}}
    {{< row >}}
        {{< meter id="perfGrade" label="Performance" value="100" valModifier="Score" >}}
    {{</ row >}}
    {{< row >}}
        {{< meter id="a11yGrade" label="Accessibility" value="100" valModifier="Score" >}}
    {{</ row >}}
    {{< row >}}
        {{< meter id="bestGrade" label="Best Practices" value="100" valModifier="Score" >}}
    {{</ row >}}
    {{< row >}}
        {{< meter id="seoGrade" label="SEO" value="100" valModifier="Score" >}}
    {{</ row >}}
{{</ col >}}

#### My own rigorous self-critique

{{< col >}}
    {{< row >}}
        {{< meter id="humorGrade" label="Humor" value="37" valModifier="Score" >}}
    {{</ row >}}
    {{< row >}}
        {{< meter id="looksGrade" label="Attractive Design" value="61" valModifier="Score" >}}
    {{</ row >}}
    {{< row >}}
        {{< meter id="ectGrade" label="Et Cetera Grade" value="85" valModifier="Score" >}}
    {{</ row >}}
{{</ col >}}

In all honesty, I would give these 100s as well, but we do need to check styling for non optimum values eventually, right?
