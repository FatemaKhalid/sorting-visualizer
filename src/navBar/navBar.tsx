import { HamburgerIcon, SORTING_ALGO } from "./resources";
import "./navBar.scss";

export function NavBar() {
  return (
    <nav>
      <ul className="navbar__list">
        <li className="navbar__logo sorting__list-item">Logo</li>
        <li className="sorting__list-item">
          <HamburgerIcon className="navbar__menu-icon" />
        </li>
        {SORTING_ALGO.map((sorting) => (
          <SortingButton key={sorting} name={sorting} />
        ))}
      </ul>
    </nav>
  );
}

function SortingButton({ name }: { name: string }) {
  return (
    <li className="sorting__list-item">
      <button
        className="sorting__btn"
        type="button"
        onClick={() => {
          console.log({ name });
        }}
      >
        {name}
      </button>
    </li>
  );
}
