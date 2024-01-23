import { ReactComponent as Table } from "../icons/tables.svg";
import "../index.css";
function CreateBoard() {
  return (
    <button className="group navBarButtonAlignment  ">
      <Table className="text-dark-violet transition-opacity before:ease-in-out group-hover:opacity-70"></Table>
      <span className="text-dark-violet transition-colors before:ease-in-out group-hover:opacity-70">
        Create New Board
      </span>
    </button>
  );
}

export default CreateBoard;
