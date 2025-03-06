import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/** STYLING WITH CLASSES
 * In React and JSX, using classes is almost exactly the same as how we would do it in vanilla HTML
 * Since we link the css file in the head of our html file, we can call css classes in our React components
 * There is only one slight difference, instead of class="" we use className=""
 * Under the hood of React, we are telling React via JSX to access the native DOM property for the JS Object it will create
 */

function Header() {
    return (
        <header>
            <img src="../react-logo.png" alt="React logo" width="40px" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
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