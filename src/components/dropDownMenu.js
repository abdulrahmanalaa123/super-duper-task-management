import onClickOutside from "react-onclickoutside";

function DropDownMenu({ showDropDown, setShowDropDown }) {
  DropDownMenu.handleClickOutside = () => {
    setShowDropDown(false);
  };
  return (
    <>
      <div
        className={`${
          showDropDown ? "opacity-100 visible" : "opacity-0 sr-only"
        } transition-opacity absolute w-[200px] h-[100px] bg-workspace-bg-dark top-[60px] rounded-lg drop-shadow-md shadow-[#364e7e1a] p-4`}
      >
        <ul>
          <li className="mb-4">
            <button className="text-text-grey hover:text-opacity-80 transition-colors duration-150 font-bold">
              Edit Board
            </button>
          </li>
          <li>
            <button className="text-[#ea5555] hover:text-opacity-80 transition-colors duration-150 font-bold">
              Delete Task
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDownMenu.handleClickOutside,
};
export default onClickOutside(DropDownMenu, clickOutsideConfig);
