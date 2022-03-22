---
title: "Media, images and other pretty things"
weight: 90
draft: false
---

aside:
    header: "Easy to read?"
    content: "Padding, Font size and good contrast are the key."
quote:
    content: "I didn't kill my wife! Also something about web design!"
    caption: "Dr. Richard Kimble"
    cite: "Seeking the One Armed Man (1963)"
image:
    name: "working"
    alt: "Web developer working diligently"
    caption: "Needed a wide picture here"

include quote.html

Media is also another concern in modern design. Videos should be responsively sized for both desktop and
mobile. Size and compression is a consideration. We can also embed, if we are concerned with hosting
video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RzX-fx_GhrM"
    title="YouTube video player - Harrison Ford Already Works Around the Clock" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy" allowfullscreen></iframe>


A lot of the same advice goes for images, with an added emphasis on size. Most modern browsers support
internet optimized image formats like <abbr>webp</abbr> and <abbr>avif</abbr>, which can be
substantially smaller than conventional formats.

<div>
    include aside.html
    <p>
        Even accounting for the tables and forms, we're still looking at less than 500 lines of CSS. That's with
        extensive font integration, media responsiveness and accounting for a majority of the elements that
        exist within the <abbr>HTML</abbr> spec.
    </p>
</div>

include image.html image=page.image.name alt=page.image.alt caption=page.image.caption 