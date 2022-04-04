let scrollListener = null

const progressHandler = () => {
    //Add our scroll checker if page progress exists
    const progress = document.querySelector('#pageProgress')
    const progressSpan = document.querySelector('#progressSpan')
    if (progress && progressSpan) {
        scrollListener = document.addEventListener("scroll", () => {
            //Page Progress
            const yPos = Math.round(window.scrollY)
            const yMax = Math.round(document.body.scrollHeight)
            const progressVal = Math.round(yPos / (yMax - window.innerHeight) * 100)
            progress.value = progressVal
            progressSpan.innerHTML = progressVal
        })
    } else {
        if (scrollListener !== null) {
            document.removeEventListener("scroll", scrollListener)
            scrollListener = null
        }
    }
}

// For static site.
document.addEventListener("DOMContentLoaded", () => {
    progressHandler()
})

export { progressHandler }