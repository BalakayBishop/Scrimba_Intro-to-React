import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/** Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

// This now makes this piece easier to work with and reusable
function Header() {
    return (
        <header>
            <img src="../react-logo.png" alt="React logo" width="40px" />
        </header>
    )
}

function Page() {
    return (
        <>
            <Header />
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

root.render(
    <Page />
)