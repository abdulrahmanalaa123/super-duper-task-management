import "../index.css";
import { updown } from "../icons/updown.svg";
function Navbar({ toggleHover }) {
  return (
    <div
      className="navbarcomp"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div>
        <span>Omw Studios</span>
        <i icon></i>
      </div>
      <ul className="flex flex-col gap-8">
        <li>
          <a className="flex flex-row gap-8 align-middle mt-4">
            A<span>dashboard</span>
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-8 align-middle mt-4">
            S<span>settings</span>
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-8 align-middle mt-4">
            A<span>activity</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
