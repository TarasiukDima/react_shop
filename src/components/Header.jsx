function Header() {
    return (
        <nav className="teal darken-4 nav">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/TarasiukDima/react_shop" target="_blank" rel="noreferrer">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;