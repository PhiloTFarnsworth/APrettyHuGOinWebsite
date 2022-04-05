---
title: "Media, images and other pretty things"
shortTitle: "Multimedia"
weight: 9
summary: "Putting the 'multi-' in fully immersive multimedia experience."
draft: false
---

{{< quote author="Dr. Richard Kimble" cite="Seeking the One Armed Man" year="1963" >}}
I didn't kill my wife! Also something about web design!
{{</ quote >}}

Media is another concern in modern design. Videos should be responsively sized for both desktop and mobile.  More commonly, we might simply include an embed, and pass the hosting costs onto someone else, like Google.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RzX-fx_GhrM"
    title="YouTube video player - Harrison Ford Already Works Around the Clock" frameborder="0"
    loading="lazy" allowfullscreen></iframe>

A lot of the same advice goes for images, with an added emphasis on size. Most modern browsers support internet optimized image formats like WebP and {{< abbr abbr="avif" title="AV1 Image File Format" >}}, which can be substantially smaller than conventional formats.  Supporting multiple versions of a single image can help ensure that when possible, the most efficient image is served while ensuring compatibility.

{{< image image="working" alt="Web developer working diligently" caption="Felt the need for a wide picture here" >}}

{{< col >}}

    {{< aside head="Easy to read?" body="Padding, Font size and good contrast are the key." >}}
    {{</ aside >}}
        <p>
            At this point, we've covered many of the elements available to us in the {{< abbr HTML >}} spec.  With that, We're still looking at less than 500 lines of {{< abbr CSS >}}. That's with extensive font integration, media responsiveness and subtle animations.  
        </p>

{{</ col >}}

With Hugo's template system, we're also able to replicate the layout across our content easily, decoupling the work of creating content from the work of web design.
