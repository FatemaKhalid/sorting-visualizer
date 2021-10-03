import { HamburgerIcon } from "./resources";
import "./navBar.scss";

export function NavBar() {
  return (
    <nav>
      <ul className="navbar__list">
        <li className="navbar__logo sorting__list-item">Logo</li>
        <li className="sorting__list-item">
          <HamburgerIcon className="navbar__menu-icon" />
        </li>
      </ul>
    </nav>
  );
}
