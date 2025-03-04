// ==========


// ========== createElement ==========
import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from createElement!")
console.log(reactElement)

root.render(
    reactElement
)

/*
For a short amount of time, React would export a function named createElement
The object is just a regular JS object with a specific structure
Although speculation, the React dev team must have seen that createElement would not be a long term solution
Therefore, they created JSX, the weird looking JS-HTML hybrid
*/

// ========== JSX ==========
/*
- The same team that created React also created JSX
- JSX is the syntax that allows developers the ability to write familiar HTML
- Under the hood, React is doing everything the same, whether you are using createElement or JSX syntax
- If we were to console log the nestedJsx variable we would see an object with the same structure as a createElement
variable
- JSX is syntatic sugar
 */
// Nested elements in createElement
const nestedCreateElement = createElement("h1", null, createElement("p", null, "Hello from inside the p-tag createElement!"))
root.render(
    nestedCreateElement
)

// Nested JSX
const nestedJsx = <h1><span>Hello from inside the span, inside the h1</span></h1>
root.render(
    nestedJsx
)

// ========== Why React ==========
/*
- React is composable
    - Can create easily reusable and interchangeable "pieces" that can be combined in various ways to create complex systems
    - In the old days, when using a navbar on an HTML page you would need to copy and paste the HTML to each page
    you wanted your navbar to be present on
    - In contrast to today, we can create custom HTML components that can be reused
 */

// Rendering a component
function MainContent() {
    return (
        <h1>Hello, World!</h1>
    )
}

root.render(
    <div>
        <MainContent />
    </div>
)

/*
- React is declarative
    - we can lean on the library to handle the manual, tedious tasks that we otherwise would have to worry about
    ourselves
    - Imperative: going to a restaurant and instructing the host on how to get us to our table
    - Declarative: going to a restaurant and asking the host for a table for 4 and trusting that the host will do the
    rest without further instructions
 */

// Imperative - Challenge
const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)

// Declarative with React - we pass what we want and React has to figure it out
root.render(
    <h1 className="header">This is declarative coding</h1>
)

// Housekeeping
/*
- Although it is okay to a .js, when using Vite it is always better to use a .jsx file when working with JSX syntax
- It allows Vite to bundle things much cleaner in the end
 */

// Images
/*
- Static images that are not going to be changing or coming from a CDN or db
- Things are a little different for React than vanilla JS and HTML
- When using Vite and adding a relative image source it would not work correctly
- The fastest way to solve this is make the path absolute by adding /dir/{img-name}
 */
root.render(
    <img src="/static_pages/react-logo.png" alt={"logo"} />
)

// Rendering Multiple Elements in one root.render()
/*
- trying to render two elements side by side is the same as trying createElement()createElement()
- if we want two elements then we need to wrap the elements in one parent element
- when rendering in JSX, it can only render one element, but there is no limit to the number of children in that element
 */

root.render(
    // This syntax results in an error
    // <img src="/static_pages/react-logo.png" alt={"logo"} />
    // <h1 className="header">This is declarative coding</h1>

    // This syntax is more acceptable
    <div>
        <img src="/static_pages/react-logo.png" alt={"logo"} />
        <h1 className="header">This is declarative coding</h1>
    </div>
)
