import { exampleFormHandler } from "./form.js"
import { progressHandler } from "./progress.js"

// Returns a promise to load content.  Expects a navElement (radio button) to a json file.  Sets 'main' element content and updates current page with
// current 'weight', updates browser history.
export const displayPage = async (navElement) => {
    window.scroll(0,0)
    const response = await fetch(navElement.value, { method: 'GET' })
    if (!response.ok) {
        document.querySelector('main').innerHTML = '<p>Error fetching your content, please refresh page<p>'
        return null
    }
    const data = await response.json()
    // See single.json.json for JSON template
    document.querySelector('main').innerHTML = '<section>' + data.title + data.content + '</section>'
    document.querySelector('#currentPage').innerHTML = data.weight
    // update history pointing to static site page (for now).
    const baseURL = window.location.toString().replace(window.location.search, '')
    history.pushState({}, '', baseURL + '?page=' + data.weight)
    navElement.checked = true
    toggleLabels(navElement.parentElement)
    navButtonHandler(navElement)
    //Run progress handler no matter what, since it will unmount the listener if the progress widget is not available
    progressHandler()
    //example form handler doesn't do anything if a form doesn't exist.
    exampleFormHandler()
}

// toggleLabels take a navElement which has been selected and makes its label visible, while also hiding all unselected
// navigational elements labels.  We take a nav element, then use iterate over the parent element, if the element returned is
// a navigational element with label, change visibility of label as appropriate.
const toggleLabels = (navElement) => {
    const navBubbles = Array.from(navElement.parentElement.children).filter((element) => element.tagName === "DIV")
    navBubbles.forEach((child) => {
        if (child === navElement) {
            //make label visible.  Since we're always going to place labels first, we can use firstChild.
            const label = Array.from(child.children).find((element) => element.tagName === 'LABEL')
            label.hidden = false
        } else {
            //make label invisible.  
            const label = Array.from(child.children).find((element) => element.tagName === 'LABEL')
            label.hidden = true
        }
    })
}

// navClickHandler will take the entire nav element, then iterate over all children to set or update their 
// onclick functionality
const navButtonHandler = async (activeNavElement) => {

    //First we need to identify just where we are.  'prev' and 'next' are the divs adjacent to active element.  From this,
    //we can populate the next and previous buttons.
    const prev = activeNavElement.parentElement.previousElementSibling
    const next = activeNavElement.parentElement.nextElementSibling
    // Active nav is the radio button, so its grandparent is our total nav
    const nav = activeNavElement.parentElement.parentElement
    //Get all navigation bubble divs, to access first and last items quickly 
    const navBubbles = Array.from(nav.children).filter((element) => element.tagName === "DIV")

    Array.from(nav.children).forEach((child) => {
        // First, Find Buttons
        if (child.tagName === 'BUTTON') {
            // Then Find the right button
            if (child.id === 'prevPage') {
                //Finally validate position in navigation.  In this case, if our previous element is a button, it means we're 
                //on the first page of a collection 
                if (prev.tagName === 'BUTTON') {
                    //On the static site, first page leads to the About.
                    child.innerHTML = 'About'
                    child.setAttribute('title', navBubbles[navBubbles.length - 1].lastElementChild.getAttribute('aria-label'))
                    child.onclick = () => {
                        displayPage(navBubbles[navBubbles.length - 1].lastElementChild)
                    }
                } else {
                    child.innerHTML = 'Prev'
                    child.setAttribute('title', 'Previous Page - ' + prev.getAttribute("title"))
                    // Do button stuff
                    child.onclick = () => {
                        displayPage(prev.lastElementChild)
                    }
                }
            } else {
                if (next.tagName === 'BUTTON') {
                    //Static site says we usher the people back to the beginning.
                    child.innerHTML = "Start"
                    child.setAttribute('title', navBubbles[0].lastElementChild.getAttribute('aria-label'))
                    // I'm totally cheating right now.  If an About page is a reasonable assumption, foreword is a terrible one.
                    child.onclick = () => {
                        displayPage(navBubbles[0].lastElementChild)
                    }
                } else {
                    child.innerHTML = "Next"
                    child.setAttribute('title', 'Next Page - ' + next.getAttribute('title'))
                    // Do button stuff
                    child.onclick = () => {
                        displayPage(next.lastElementChild)
                    }
                }
            }
        }
    })
}

export const navRadioInitiator = () => {
    // Start by getting all the nav Bubbles, which are all children from nav that are encased in a 'div'
    const navBubbles = Array.from(document.querySelector('nav').children).filter((element) => element.tagName === 'DIV')
    navBubbles.forEach((bubble) => {
        bubble.onclick = () => {
            displayPage(bubble.lastElementChild)
        }
    })
}