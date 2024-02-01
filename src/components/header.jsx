export function Header() {
  return (
    <header className="header">
      <div className="header__section">
        <picture className={classNameToggle} onClick={handleMenu}>
          <img
            src={menu ? toggleClose : toggleMenu}
            alt="toggle img"
            className="toggle"
          />
        </picture>
        <picture className="logo-container">
          <img src={Logo} alt="Logo img" className="logo" />
        </picture>
        <nav className={classNameMenu}>
          <ul className="menu">
            <li className="menu__item">
              <NavLink
                onClick={handleClick}
                to="/"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Collection
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                onClick={handleClick}
                to="/men"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Men
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                onClick={handleClick}
                to="/women"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Women
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                onClick={handleClick}
                to="/about"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__section">
        <picture className={cartClassname} onClick={handleCart}>
          {cart.length > 0 && <p className="tag">{cart.length}</p>}
          <img src={cartIcon} alt="Cart-icon" className="cart-icon" />
        </picture>
        <picture>
          <img src={imgProfile} alt="img Profile" className="profile-img" />
        </picture>
      </div>
      <div className={classNameCart}>
        <Cart />
      </div>
    </header>
  );
}
