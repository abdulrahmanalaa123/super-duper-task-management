import DropDownMenu from "./dropDownMenu";
import { useState } from "react";
import { ReactComponent as DropDown } from "../icons/dropdown.svg";
import WorkSpace from "./workspace";

function Body({ hidden }) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className={`flex-auto flex-col relative transition-all z-0 ease-in-out  duration-300 ${
        hidden ? "-ml-[300px] duration-[240ms]" : ""
      }`}
    >
      <div className="flex h-28 px-8 justify-between w-full bg-primary-color-dark [border-bottom-width:0.5px] border-b-text-grey">
        <span className="self-center text-2xl text-workspace-bg-light ">
          Platform Launch
        </span>
        <div className="self-center flex items-center relative">
          <button className=" bg-dark-violet rounded-full px-4 py-3 text-workspace-bg-light [font-size: 15px]  hover:bg-highlight-color transition-colors duration-150">
            + Add New Task
          </button>
          <button
            className="ml-4 inline-block p-2 rounded-full hover:bg-blackish"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <DropDown className="text-text-grey"></DropDown>
          </button>
          <DropDownMenu
            showDropDown={showDropDown}
            setShowDropDown={setShowDropDown}
          ></DropDownMenu>
        </div>
      </div>
      <WorkSpace></WorkSpace>
    </div>
  );
}

export default Body;
