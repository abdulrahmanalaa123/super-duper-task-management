import { useState } from "react";

import { ReactComponent as DropDown } from "../icons/dropdown.svg";

function WorkSpace({ hidden }) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className={`flex-auto relative transition-all z-0 ease-in-out  duration-300 ${
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
          {
            <div
              className={`${
                showDropDown ? "opacity-100 sr-only" : "opacity-0 "
              } transition-opacity absolute w-[200px] h-[100px] bg-workspace-bg-dark top-[60px] rounded-lg drop-shadow-md shadow-[#364e7e1a] p-4`}
            >
              <ul>
                <li className="mb-4">
                  <button className="text-text-grey hover:text-opacity-80 transition-colors duration-150">
                    Edit Task
                  </button>
                </li>
                <li>
                  <button className="text-[#ea5555] hover:text-opacity-80 transition-colors duration-150">
                    Delete Task
                  </button>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
      <div
        className={`h-[calc(100%-7rem)]   w-full bg-workspace-bg-dark`}
      ></div>
    </div>
  );
}

export default WorkSpace;
