import "../index.css";
import { ReactComponent as Logo } from "../icons/logo-light.svg";
import ProjectButton from "./projectButton";
import CreateBoard from "./createBoard";
import { ReactComponent as DarkIcon } from "../icons/dark.svg";
import { ReactComponent as LightIcon } from "../icons/light.svg";
import { ReactComponent as HideSidebar } from "../icons/hideSidebar.svg";
import { useState } from "react";
import CustomToggle from "./customToggle";
import { ReactComponent as ShowSidebar } from "../icons/showSideBar.svg";

function Navbar({ toggleHover }) {
  // will be used later to switch the theme
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`navbarcomp ${hidden ? "" : "-translate-x-[300px]"}`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {!hidden && (
        <button
          className=" absolute w-20 h-14 top-[80%] bg-dark-violet left-[100%] rounded-r-full"
          onClick={() => {
            setHidden(true);
          }}
        >
          <ShowSidebar className="ml-8 text-workspace-bg-light"></ShowSidebar>
        </button>
      )}
      <div>
        <Logo></Logo>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 mt-10">
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
            <CustomToggle></CustomToggle>
            <LightIcon className="text-text-grey"></LightIcon>
          </div>
          <div>
            <button
              className="ml-4 flex items-center group"
              onClick={() => {
                setHidden(false);
              }}
            >
              <HideSidebar className="w-5 h-4 text-text-grey mr-4 group-hover:opacity-80"></HideSidebar>
              <span className="text-text-grey group-hover:opacity-80">
                Hide Sidebar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
