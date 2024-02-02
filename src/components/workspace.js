import { useRef, useState } from "react";
import CustomColumn from "./column";
function WorkSpace() {
  const columnData = [
    {
      name: "TODO",
      color: "#49C4E5",
      data: [
        {
          taskname: "Review results of reusability tests and iterate",
          subtasks: 1,
        },
        {
          taskname: "balblaldblwlblwdlbwldblwdlblwdbl",
          subtasks: 5,
        },
        {
          taskname: "haha e qhwqehqeqr htyqryqe tqe tqwet qwe tqwet ewt eqwt ",
          subtasks: 3,
        },
        {
          taskname:
            "qqqqqqweeeeeee tttttttttttttttqwww tailwindcsst tailwindcsst tailwindcsst t tailwindcss",
          subtasks: 4,
        },
      ],
    },
    { name: "DOING", color: "#E5A449", data: [] },
    { name: "DONE", color: "#67E2AE", data: [] },
  ];

  const [dataList, setDataList] = useState(columnData);
  const [dragging, setDragging] = useState(false);

  // used to target teh item's position in the list
  const dragItemIndex = useRef();

  // used to target teh actual div
  const dragItemNode = useRef();

  function handleDragStart(e, params) {
    dragItemIndex.current = params;
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  }

  function handleColumnDragEnter(e, colIndex) {
    if (
      colIndex !== dragItemIndex.current.columnIndex &&
      !dataList[colIndex].data.length &&
      dragging
    ) {
      const newList = JSON.parse(JSON.stringify(dataList));
      const temp =
        newList[dragItemIndex.current.columnIndex].data[
          dragItemIndex.current.taskIndex
        ];
      newList[colIndex].data.push(temp);
      newList[dragItemIndex.current.columnIndex].data.splice(
        dragItemIndex.taskIndex,
        1
      );
      setDataList(newList);
    }
  }
  function handleCardDragEnter(e, params) {
    if (e.target !== dragItemNode.current && dragging) {
      const newList = JSON.parse(JSON.stringify(dataList));
      const temp =
        newList[dragItemIndex.current.columnIndex].data[
          dragItemIndex.current.taskIndex
        ];
      newList[dragItemIndex.current.columnIndex].data.splice(
        dragItemIndex.current.taskIndex,
        1
      );
      newList[params.columnIndex].data.splice(params.taskIndex, 0, temp);
      setDataList(newList);
    }
  }
  function handleDragEnd(e) {
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemIndex.current = null;
    dragItemNode.current = null;
    setDragging(false);
  }
  function determineDragging(params) {
    if (
      dragging &&
      params.columnIndex === dragItemIndex.current.columnIndex &&
      params.taskIndex === dragItemIndex.current.taskIndex
    ) {
      return false;
    }
    return true;
  }

  return (
    <div
      className={`max-h-[calc(100%-7rem)] h-full absolute right-0 left-0 min-w-full bg-workspace-bg-dark px-8 py-12 overflow-x-auto overflow-y-auto cursor-move`}
    >
      <ul className="flex flex-row h-full gap-8">
        {dataList.map((column, columnIndex) => {
          return (
            <li>
              <CustomColumn
                key={columnIndex}
                color={column.color}
                name={column.name}
                index={columnIndex}
                handleColumnDragEnter={handleColumnDragEnter}
              >
                {column.data ? (
                  column.data.map((task, taskIndex) => {
                    return determineDragging({
                      columnIndex: columnIndex,
                      taskIndex: taskIndex,
                    }) ? (
                      <div
                        key={taskIndex}
                        className="bg-primary-color-dark rounded-md px-4 py-6 w-full  
                  shadow-[#364e7e1a] shadow-md mb-6 before:w-full before:h-full
                   before:bg-blackish before:opacity-0 cursor-auto before:absolute 
                   before:inset-0 relative before:rounded-md hover:before:opacity-50 
                   before:transition-opacity before:duration-150 "
                        draggable
                        onDragStart={(e) => {
                          handleDragStart(e, {
                            columnIndex: columnIndex,
                            taskIndex: taskIndex,
                          });
                        }}
                        onDragEnter={(e) => {
                          handleCardDragEnter(e, {
                            columnIndex: columnIndex,
                            taskIndex: taskIndex,
                          });
                        }}
                      >
                        <p className="text-wrap text-workspace-bg-light text-[15px] break-words ">
                          {task.taskname}
                        </p>
                        <span className="text-text-grey text-xs">
                          1 of {task.subtasks} subtasks
                        </span>
                      </div>
                    ) : (
                      <div className="mb-6 w-full h-28"></div>
                    );
                  })
                ) : (
                  <></>
                )}
              </CustomColumn>
            </li>
          );
        })}

        <button className="h-full rounded-md whitespace-nowrap px-12 w-72 mt-[34px]  gradientButton text-[clamp(1.2rem,3vw,1.5rem)] text-text-grey transition-colors duration-150 hover:text-dark-violet ">
          + New Column
        </button>
      </ul>
    </div>
  );
}

export default WorkSpace;
