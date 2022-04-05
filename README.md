# A Pretty HuGOin' Website
## The Ultimate Installment of A Pretty Heckin' Website

A Pretty HuGOin' Website is the final in a series of webpages devoted to building lightweight, accessible webpages that model a suite of html elements with a (somewhat) modern styling.  Our content is devoted to using and explaining the semantic usage of html elements, with a little lighthearted snark thrown in.  This final iteration features the Hugo static site generator, which enables a more ergonomic approach to creating content and allows for the dual functionality of an SPA-style homepage as well as a more traditional static site navigation experience.

Don't take my word for it though, take a look at [A Pretty HuGOin' Website](https://philotfarnsworth.github.io/APrettyHuGOinWebsite/)!

### Features
- Choose between static and SPA experiences
- Semantic HTML, lightweight styling and scripting
- Testing integration to ensure accessibility of content and reliability of scripting
- Streamlined content editing and creation
- Blazing fast build times
- That sweet, sweet Heckin' theme.

### Check out the Development Process
This project features a lot more usage of Github's many organizational features than I have included in previous projects.  If you're interested in the process that drove the development of A Pretty HuGOin' Website, check out the Issues, Pull Requests and Project associated with this repo!

### Design Notes
Both static and SPA experiences endeavor to give the user a "book" like feel.  While I could have incorporated the pagination features included with Hugo, I often feel like pagination causes me to skim articles, and can be difficult to navigate after loading several articles.  Instead, we have a navigation widget that functions much like a book's pages do, giving you a general idea of your relative position in a corpus, while relaying the information specific to the currently open page.  While this might not encourage binge skimming, as pagination does, I feel it makes it easier to read the content in related bite-size sections, and it is more convenient when it comes to navigating back to previously read content.

The Heckin' theme itself, which has been refined across the iterations of this website, is meant to evoke a textbook.  I'm not totally sure if I succeeded in that respect, but if it's not totally beautiful, it is designed to accessible.  Our triadic color scheme gives us some nice options for contrast, and styling is applied where appropriate to enhance semantic HTML elements like `aside`.

## Several Heckin' Websites: A Progression
As mentioned above, this is not the only version of A Pretty Heckin' Website I have developed.  The original [A Pretty Heckin' Website](https://philotfarnsworth.github.io/APrettyHeckinWebsite/) and the middle installment [A Pretty Jekyllin' Website](https://philotfarnsworth.github.io/APrettyJekyllinWebsite/) represent iterations of publishing this content on Github Pages.  As a note of caution, while these websites work, they are intended to be intermediary steps:  A Pretty Heckin' Website offered limited expandability and was entirely written in HTML while A Pretty Jekyllin' Website was an initial experiment in using a static site generator with Github pages and was abandoned after meeting minimum functionality.

### A Pretty Heckin' Website
The idea behind A Pretty Heckin' Website was simple --  I had been using CSS frameworks like Bootstrap on recent projects, and I felt that instead of lowering the overhead for styling, I was often writing long class names for HTML elements which simply moved my styling definitions from CSS to a property definition in HTML.  This created difficulties in maintaining consistency between class declarations in elements, as well as difficulties in immediately recognizing bugs due to typos. By writing writing CSS (using Sass), I could instead focus on building a simple website and use broad declarations to maintain a coherent theme, relying on VScode's linter to alert me to possible problematic declarations. 

I had hoped by building a website with simple and semantic HTML, I could both hone my skills in writing CSS, as well as explore the various accessibility topics around those semantic elements.  This would provide a good refresher after spending much of the past couple of months writing the Fantasy Draft and Fantasy Draft Go projects, where exploring the React framework and experimenting with backends were the primary concerns.  This website would also be useful in evaluating other CSS frameworks and themes, as with some minor alterations I could preview many common HTML elements and see how the framework or theme rendered those elements.

### A Pretty Jekyllin' Website
The second iteration of A Pretty Heckin' Website, Jekyllin' was a preliminary step forward in streamlining the publishing process using Github Pages.  While there are many merits to A Pretty Heckin' Website, the writing of the content was not particularly pleasant, and I wanted a solution that would allow me to forgo writing out the HTML while creating a site.  Jekyll is Github's recommended static site publisher, so it felt like it was as good a place as any to start.

I am at heart an off-road enthusiast, and since the content of A Pretty Heckin' Website didn't really fit the blog concept, the first idea was to break free from the tutorial and use Jekyll to create an SPA website experience in a "book" type format.  While the final result fulfills this desire, it is also an undeniably rough effort.  Part of that is simply bad design on my part, but I also found that while Jekyll has many great tutorials of what you can do with their static site designer, their documentation lacks a concrete reference section, and I found I was often jumping from tutorial to tutorial to find out whether a variable existed, or the proper way to request and template information.

### A Pretty HuGOin' Website
While I was able to cobble together an SPA experience in A Pretty Jekyllin' Website, I felt that I might have better luck trying a different static site generator.  After a little shopping around, I settled on the Hugo static site generator, which had some pretty nice advantages over Jekyll.  For one, instead of a tutorial heavy documentation site, Hugo features a basic tutorial and detailed pages on specific site concepts.  Beyond this, it also features a nice reference section that contains all possible functions and variables.  Finally, being built in with Go, it features Go's server and template implementations, which cut build times from a couple of seconds with Jekyll to milliseconds with Hugo.

Armed with a static site generator I felt more comfortable with, I went to work using our base content to provide both an SPA experience on the homepage, as well as a static site design that the user could navigate without Javascript.  This version also features an enhanced CI build, allowing for testing of functionality and accessibility to be run on every commit, to ensure that our page is built reliably.  Finally, the content and design was refined to allow for a more ergonomic experience when browsing.