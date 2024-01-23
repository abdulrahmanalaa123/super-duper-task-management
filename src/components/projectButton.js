import { ReactComponent as Table } from "../icons/tables.svg";

function ProjectButton() {
  return (
    <button className="group navBarButtonAlignment boardButton">
      <Table className="text-text-grey transition-colors before:ease-in-out group-hover:text-workspace-bg-light z-[1]"></Table>
      <span className="text-text-grey transition-colors before:ease-in-out group-hover:text-workspace-bg-light z-[1]">
        Platform Launch
      </span>
    </button>
  );
}

export default ProjectButton;
