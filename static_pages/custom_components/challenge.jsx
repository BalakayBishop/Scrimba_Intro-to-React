import { createRoot } from "react-client/dom"
const root = createRoot(document.getElementById("root"))

/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */

function Header() {
    return (
        <header>
            <img src="../react-logo.png" alt="React logo" width="40px" />
        </header>
    )
}

function Main() {
    return (
        <main>
            <h1>Reason I want to learn React!</h1>
            <ol>
                <li>React is a popular library, so I will be able to
                    fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                    if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <small>
            © 2025 Bishop development. All rights reserved.
        </small>
    )
}

function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)