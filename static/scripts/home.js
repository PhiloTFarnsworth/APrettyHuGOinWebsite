import { exampleFormHandler } from "./form.js"
import { progressHandler } from "./progress.js"
import { displayPage } from "./nav.js"

//We load with much of a functionality intact, but to allow for users to comfortably switch between
//the static site and the javascript version, we need to check for query parameters, then use that
//parameter to load our data into the 'main' element.  Finally, we need to set our onclick values
//for our radio navigation, as well as update their appearance based on the page we start from.
document.addEventListener('DOMContentLoaded', () => {
    //Parse page url, check for query.
    const originatingURLParams = new URLSearchParams(window.location.search)
    //We'll accept one parameter, which will be the page number (weight in our markdown frontmatter).  So
    //a valid query would be ?page=0.  If there is no parameter, load index/first item in navigation.
    if (originatingURLParams.has('page')) {
        const navlink = document.querySelector('#rad' + originatingURLParams.get('page')) 
        if (navlink) {
            displayPage(navlink.value)
            navlink.checked = true
        } else {
            //Set main to error message regarding query.
        }
    } else {
        const navlink = document.querySelector('#rad1')
        displayPage(navlink.value)
        navlink.checked = true
    }
})