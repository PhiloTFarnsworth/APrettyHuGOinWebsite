---
title: "Media, images and other pretty things"
weight: 9
summary: "Putting the 'multi-' in fully immersive multimedia experience."
draft: false
---

{{< quote author="Dr. Richard Kimble" cite="Seeking the One Armed Man" year="1963" >}}
I didn't kill my wife! Also something about web design!
{{</ quote >}}

Media is another concern in modern design. Videos should be responsively sized for both desktop and
mobile. Size and compression is a consideration. We can also embed, if we are concerned with hosting
video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RzX-fx_GhrM"
    title="YouTube video player - Harrison Ford Already Works Around the Clock" frameborder="0"
    loading="lazy" allowfullscreen></iframe>


A lot of the same advice goes for images, with an added emphasis on size. Most modern browsers support
internet optimized image formats like WebP and {{< abbr abbr="avif" title="AV1 Image File Format" >}}, which can be
substantially smaller than conventional formats.

{{< image image="working" alt="Web developer working diligently" caption="Needed a wide picture here" >}}

{{< col >}}
    {{< aside head="Easy to read?" body="Padding, Font size and good contrast are the key." >}}
    {{</ aside >}}
        <p>
            Even accounting for the tables and forms, we're still looking at less than 500 lines of {{< abbr CSS >}}. That's with
            extensive font integration, media responsiveness and accounting for a majority of the elements that
            exist within the {{< abbr HTML >}} spec.
        </p>
{{</ col >}}
