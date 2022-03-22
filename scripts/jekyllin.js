const navs = [
    '#forward',
    '#behind'
]

// I don't really like to do this, but I also hate the idea of having to adjust order in more than one place.  The
// difficulty is that the github pages/Jekyll integration isn't completely up to date, so we cannot define custom 
// ordering in the main _config.yml.  While we could name our files or submit funny metadata and hijack the default
// blogging date scheme, that runs into the problem of having to edit all files if we insert something into the
// the middle of our faux manual.  So instead, we'll take the ugly but practical approach of defining order once as
// a constant here.
const order = [
    "dummyIndex.html",
    "why.html",
    "section.html",
    "data.html",
    "tables.html",
    "lists.html",
    "other.html",
    "form.html",
    "media.html",
    "satire.html",
    "epilogue.html"
]

//Since we're only serving from the index page, we should also set our browsing index to zero.  
let index = 0

//placeholder for scroll event, so we aren't checking scroll values every page
let scrollListener = null

//Conditional Scripts loads functions for elements which only appear on certain pages.  For the time being
//we are returning our pages as text, so we can't really embed this information into a page with this implementation.
//TODO: A better version of this.
function conditionalScripts() {
    //Add our scroll checker if page progress exists
    if (document.querySelector('#pageProgress')) {
        scrollListener = document.addEventListener("scroll", () => {
            //Page Progress
            const yPos = Math.round(window.scrollY)
            const yMax = Math.round(document.body.scrollHeight)
            const progress = Math.round((yPos / yMax) * 100)
            document.querySelector('#pageProgress').value = progress
            document.querySelector('#progressSpan').innerHTML = progress
        })
    } else {
        if (scrollListener !== null) {
            document.removeEventListener("scroll", scrollListener)
            scrollListener = null
        }
    }
    const form = document.querySelector("#exampleForm") 
    //Form handling
    if (form) {
        form.onsubmit = () => {
            const text = document.querySelector('#formText').value
            const numeral = document.querySelector('#formNumber').value
            const ranger = document.querySelector('#formRange').value
            const time = document.querySelector('#formDate').value
            const yes = document.querySelector('#formBoxYes').checked ? 'YES' : 'NO'
            const no = document.querySelector('#formBoxNo').checked ? 'NO' : 'YES'
            const selection = document.querySelector('#formSelect').value
            document.querySelector('#formResults').innerHTML = "Text: " +
                text + " Number: " + numeral + " Range: " + ranger + " Time: " +
                time + " Boxes: " + yes + ' ' + no + " Selection: " + selection
            return false
        }
        //Clear Results
        document.querySelector('#clearResults').onclick = () => {
            document.querySelector('#formResults').innerHTML = "Form Cleared"
        }
    }
}

function setFetchContent(selector, link) {
    // Now we add event listeners for both forward and back that will load the new information over the old one.
    document.querySelector(selector).onclick = async () => {
        const fetchData = async () => {
            const response = await fetch(link, { method: 'GET' })
            if (!response.ok) {
                document.querySelector('main').innerHTML = '<p>Error fetching your content, please refresh page<p>'
                return null
            }
            const data = await response.text()
            // Get new data, maybe add a transition here for less jarring effect
            document.querySelector('main').innerHTML = data
            //Update links.  how do?  Well, we need to know which selector it is, then check where we are in the index
            //of our order constant and place link accordingly
            switch (selector) {
                case '#forward':
                    //update index forward
                    index = index + 1
                    document.querySelector('#currentPage').innerHTML = index + 1
                    //Check index, use the link from order to load forward.  If at end, disable(?) forward button.
                    if (index < order.length - 1) {
                        setFetchContent('#forward', order[index + 1])
                        document.querySelector('#behind').disabled = false
                        document.querySelector('#forward').disabled = false
                    } else {
                        document.querySelector('#forward').disabled = true
                    }
                    //backwards
                    setFetchContent('#behind', order[index - 1])
                    break;
                case '#behind':
                    //see case '#forward'
                    index = index - 1
                    document.querySelector('#currentPage').innerHTML = index + 1
                    if (index > 0) {
                        setFetchContent('#behind', order[index - 1])
                        document.querySelector('#behind').disabled = false
                        document.querySelector('#forward').disabled = false
                    } else {
                        document.querySelector('#behind').disabled = true
                    }
                    setFetchContent('#forward', order[index + 1])

                    break;
                default:
                    // will update when new directions are added
                    break;
            }
            const nav = document.querySelector('#siteNav')
            Array.from(nav.children).forEach(child => {
                if (child.id !== 'toggleNav') {
                    const url = child.id.replace('Nav', '.html')
                    if (link === url) {
                        //set button disabled and visible
                        child.hidden = false
                        child.setAttribute('aria-hidden', false)
                        child.disabled = true
                    } else {
                        //set button hidden
                        child.hidden = true
                        child.setAttribute('aria-hidden', true)
                        child.disabled = true
                    }
                }
            })
        }
        try {
            await fetchData()
        } catch(error) {
            console.log(error)
        }
        conditionalScripts()
    }
}

// Nav links need to:
// - Display button links to each page
// - Display the current page as a disabled button
// - Collapse and expand.

//How do?  Well, we start with all buttons defined in the HTML, but hidden.  On page initiation, we want to make visible/disable the home button,
//as well as associate all buttons with their navigation link.  Navigation links can be parsed from button ids.
function populateNavLinks() {
    const nav = document.querySelector('#siteNav')
    Array.from(nav.children).forEach(child => {
        if (child.id === 'toggleNav') {
            child.onclick = async () => {
                document.querySelector('#toggleNav').disabled = true
                await navigationFurl(nav)
                document.querySelector('#toggleNav').disabled = false
            }
        } else {
            // Ok, so for every child besides toggleNav, take the ID, slice the Nav off the end, and then graft '.html'
            // to the end of it. Bind a fetch to that link and you're gravy
            const url = child.id.replace("Nav", ".html")
            child.onclick = async () => {
                const fetchData = async () => {
                    const response = await fetch(url, { method: 'GET' })
                    if (!response.ok) {
                        document.querySelector('main').innerHTML = '<p>Error fetching your content, please refresh page<p>'
                        return null
                    }
                    const data = await response.text()

                    document.querySelector('main').innerHTML = data
                    index = order.findIndex((u) => u === url)
                    //Re-enable the previous button pressed and disable this button
                    Array.from(nav.children).forEach(kid => {
                        kid.id !== 'toggleNav' ? kid.disabled = false : ''
                    })
                    child.disabled = true
                    if (document.querySelector('#toggleNav').dataset.active === 'true') {
                        await navigationFurl(nav)
                    }
                    document.querySelector('#currentPage').innerHTML = index + 1
                    if (index > 0) {
                        setFetchContent('#behind', order[index - 1])
                        document.querySelector('#behind').disabled = false
                    } else {
                        document.querySelector('#behind').disabled = true
                    }
                    if (index < order.length - 1) {
                        setFetchContent('#forward', order[index + 1])
                        document.querySelector('#forward').disabled = false
                    } else {
                        document.querySelector('#forward').disabled = true
                    }
                }
                try {
                    await fetchData()
                } catch(error) {
                    console.log(error)
                }
                conditionalScripts()
            }
        }
    })
}

// Navigation furl will alternatively expand or collapse the navigation menu.
async function navigationFurl(nav) {
    const offset = 20
    for (const child of Array.from(nav.children)) {
        const furl = async (child) => {
            if (child.id !== 'toggleNav') {
                const url = child.id.replace('Nav', '.html')
                if (url !== order[index]) {
                    const doAnimation = async () => {
                        const prevDisabled = child.disabled
                        child.disabled = true
                        child.hidden = false
                        let anim
                        if (prevDisabled) {
                            anim = child.animate([
                                { opacity: 0, transform: 'translateY(-' + offset.toString() + 'px)' },
                                { opacity: .5, transform: 'translateY(-' + (offset / 2).toString() + 'px)' },
                                { opacity: 1, transform: 'translateY(0px)' }
                            ], {
                                duration: 200
                            })
                        } else {
                            anim = child.animate([
                                { transform: 'translateY(0px)' },
                                { opacity: .5, transform: 'translateY(-' + (offset / 2).toString() + 'px)' },
                                { opacity: 0, transform: 'translateY(-' + offset.toString() + 'px)' }
                            ], {
                                duration: 200
                            })
                        }
                        await anim.finished
                        child.disabled = !prevDisabled
                        child.hidden = !prevDisabled
                        child.setAttribute('aria-hidden', !prevDisabled)
                    }
                    await doAnimation()
                        .catch(error => console.error(error))
                }
            } else {
                child.dataset.active = child.dataset.active === 'true' ? 'false' : 'true'
                child.innerHTML = child.dataset.active === 'true' ? 'Collapse Site Navigation' : 'Expand Site Navigation'
                nav.setAttribute('aria-expanded', child.dataset.active === 'true')
            }
        }
        await furl(child)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    setFetchContent('#forward', order[1])
    populateNavLinks()
    document.querySelector('#about').onclick = async () => {
        const fetchData = async () => {
            const response = await fetch("about.html", { method: "GET" })
            if (!response.ok) {
                document.querySelector('main').innerHTML = '<p>Error fetching your content, please refresh page<p>'
                return null
            }
            const data = await response.text()
            document.querySelector('main').innerHTML = data
            document.querySelector('#currentPage').innerHTML = 'about'
            document.querySelector('#forward').disabled = true
            document.querySelector('#behind').onclick = () => {
                fetch(order[0], { method: "GET" })
                    .then(response => response.text())
                    .then(data => {
                        document.querySelector('main').innerHTML = data
                        index = 0
                        document.querySelector('#currentPage').innerHTML = index + 1
                        document.querySelector('#behind').disabled = true
                        setFetchContent('#forward', order[1])
                        document.querySelector('#forward').disabled = false
                    })
            }
            document.querySelector('#behind').disabled = false
        }
        try {
            await fetchData()
        } catch(error) {
            console.log(error)
        }
        const nav = document.querySelector('#siteNav')
        Array.from(nav.children).forEach(child => {
            if (child.id !== 'toggleNav') {
                //set button hidden
                child.hidden = true
                child.setAttribute('aria-hidden', true)
                child.disabled = true
            }
        })
    }
})