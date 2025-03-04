import { createRoot } from "react-dom/client"
const root = createRoot(document.querySelector("#root"))

// This will render the same as placing the <main> in the root.render()
// When using Pascal Case and custom components, instead of calling the function like TempComponent()
// We call it as if it were and HTML element </>
root.render(
    <TempComponent />
)

// **Note: In JSX, we need to use Pascal Case
function TempComponent() {
    return (
        <main>
            <img src="../react-logo.png" alt="React logo" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>React was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k start on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

/**
 Challenge:

 Part 2:
 - Add a `<header>` element with an `<img />` element with the image of the
 React logo inside (src="react-logo.png") and make sure to set the
 width to something more manageable so it doesn't take up the whole screen.
 Also, as always, you should include some alt text on the image.
 - Add an `<h1>` with some text describing the page. (E.g. "Reasons
 I'm excited to learn React"). Place it above the ordered list, then wrap
 the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
 structure flowing well.
 - Add a `<footer>` after the list that says:
 "© 20xx <last name here> development. All rights reserved."
 */


function Page() {
    return (
        <main>
            <header>
                <img src="../react-logo.png" alt="React logo" width="40px" />
            </header>
            <h1>Reason I want to learn React!</h1>
            <ol>
                <li>React is a popular library, so I will be able to
                    fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                    if I know React</li>
            </ol>
            <footer>
                © 2025 Bishop development. All rights reserved.
            </footer>
        </main>
    )
}

root.render(
    <Page />
)

// ===========================================================================================================
// Fragment - allows us to combine different elements together without having to worry about another DOM node, like a div
// Instead of needing to import Fragment from React, we can use empty brackets to achieve the same thing
//   <> </>
import { Fragment } from "react"

function PageFragment() {
    return (
        // using an opening and closing Fragment tag allows us to combine sibling elements
        // But what it won't do is place all these elements within another node
        // So instead of all of it being in a div, it will just be placed in the HTML as is
        <Fragment>
            <header>
                <img src="../react-logo.png" alt="React logo" width="40px" />
            </header>
            <main>
                <h1>Reason I want to learn React!</h1>
                <ol>
                    <li>React is a popular library, so I will be able to
                        fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer
                        if I know React</li>
                </ol>
            </main>
            <small>
                © 2025 Bishop development. All rights reserved.
            </small>
        </Fragment>
    )
}

function PageEmptyFragment() {
    return (
        // This component uses the Fragment tags without needing the Fragment component to be imported
        <>
            <header>
                <img src="../react-logo.png" alt="React logo" width="40px" />
            </header>
            <main>
                <h1>Reason I want to learn React!</h1>
                <ol>
                    <li>React is a popular library, so I will be able to
                        fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer
                        if I know React</li>
                </ol>
            </main>
            <small>
                © 2025 Bishop development. All rights reserved.
            </small>
        </>
    )
}

//