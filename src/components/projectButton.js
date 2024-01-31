import { ReactComponent as Table } from "../icons/tables.svg";

function ProjectButton() {
  return (
    //TODO
    //when selected before hover wont be there
    <button className="group navBarButtonAlignment boardButton hover:before:bg-highlight-color">
      <Table className="text-text-grey transition-colors before:ease-in-out group-hover:text-workspace-bg-light z-[1]"></Table>
      <span className="text-text-grey transition-colors before:ease-in-out group-hover:text-workspace-bg-light z-[1]">
        Platform Launch
      </span>
    </button>
  );
}

export default ProjectButton;
