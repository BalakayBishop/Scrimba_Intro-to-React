import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))
root.render(
    <main>
        <img src="react-logo.png" alt="React logo" width="40px" />
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