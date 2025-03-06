import { createRoot } from "react-dom/client"

import Header from "./Header.jsx" // when importing, using ./ indicates we are importing from our own files
import Main from "./MainContent.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById("root"))

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