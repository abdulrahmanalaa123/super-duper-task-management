import "../index.css";
import { ReactComponent as Logo } from "../icons/logo-light.svg";
import ProjectButton from "./projectButton";
import CreateBoard from "./createBoard";
import { ReactComponent as DarkIcon } from "../icons/dark.svg";
import { ReactComponent as LightIcon } from "../icons/light.svg";
function Navbar({ toggleHover }) {
  return (
    <div
      className="navbarcomp"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div>
        <Logo></Logo>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 mt-8">
          <div className=" flex flex-row items-center mt-4">
            <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px]">
              ALL BOARDS
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <ProjectButton></ProjectButton>
            </li>
            <li>
              <ProjectButton></ProjectButton>
            </li>
            <li>
              <ProjectButton></ProjectButton>
            </li>
            <li>
              <CreateBoard></CreateBoard>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-6 items-center justify-center bg-workspace-bg-dark h-12 rounded-md">
            <DarkIcon className="text-text-grey"></DarkIcon>
            <label
              htmlFor="theme-switch"
              className="relative  inline-flex cursor-pointer w-10 h-[20px] bg-app-violet rounded-full"
            >
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="absolute top-0 left-0 right-0 bottom-0 peer before:transition-all peer-checked:before:duration-300 rtl:before:peer-checked:-translate-x-[29.5px] before:peer-checked:translate-x-[29.5px] before:absolute before:content-[''] before:left-[4px] before:bottom-[2.5px] before:rounded-full before:bg-workspace-bg-light before:w-[15px] before:h-[15px] "></div>
            </label>
            <LightIcon className="text-text-grey"></LightIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
