// Returns a promise to load content.  Expects a url to a json file.  Sets 'main' element content and updates current page with
// current 'weight', updates browser history.
export const displayPage = async (url) => {
    const response = await fetch(url, { method: 'GET'})
    if (!response.ok) {
        document.querySelector('main').innerHTML = '<p>Error fetching your content, please refresh page<p>'
        return null
    }
    const data = await response.json()
    // See single.json.json for JSON template
    document.querySelector('main').innerHTML = data.title + data.content
    document.querySelector('#currentPage').innerHTML = data.weight
    // update history pointing to static site page (for now).
    const baseURL = window.location.toString().replace(window.location.search, "") 
    history.pushState({}, "", baseURL + "?page=" + data.weight)
}

// navClickHandler will take the entire nav element, then iterate over all children to set or update their 
// onclick functionality
export const navClickHandler = async (nav) => {

}
