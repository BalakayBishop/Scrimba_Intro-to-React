/**
 * When using export default, when we import the component we can give it whatever name we want as long as it is from
 * the correct file.
 *
 */

export default function Header() {
    return (
        <header className={"header"}>
            <img src="../react-logo.png" alt="React logo" className={"nav-img"} />
            <nav>
                <ul className={"nav-list"}>
                    <li className={"nav-list-item"}>Pricing</li>
                    <li className={"nav-list-item"}>About</li>
                    <li className={"nav-list-item"}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}