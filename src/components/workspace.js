import Column from "./column";
import Card from "./card";

function WorkSpace() {
  const data = [
    {
      taskname: "Review results of reusability tests and iterate",
      subtasks: 1,
    },
    {
      taskname: "Review results of reusability tests and iterate",
      subtasks: 1,
    },
    {
      taskname: "Review results of reusability tests and iterate",
      subtasks: 1,
    },
    {
      taskname: "Review results of reusability tests and iterate",
      subtasks: 1,
    },
  ];
  return (
    <div
      className={`max-h-[calc(100%-7rem)] h-full absolute right-0 left-0 min-w-full bg-workspace-bg-dark px-8 py-12 overflow-x-auto overflow-y-auto cursor-move`}
    >
      <ul className="flex flex-row h-full gap-8">
        <li>
          <Column color="app-sky" name="TODO">
            {data ? (
              data.map((task, taskIndex) => {
                console.log(taskIndex);
                return (
                  <Card
                    key={taskIndex}
                    taskname={task.taskname}
                    subtasks={task.subtasks}
                  ></Card>
                );
              })
            ) : (
              <></>
            )}
          </Column>
        </li>
        <li>
          <Column color="app-orange" name="DOING"></Column>
        </li>
        <li>
          <Column color="app-green" name="DONE"></Column>
        </li>

        <button className="h-full rounded-md whitespace-nowrap px-12 w-72 mt-[34px]  gradientButton text-[clamp(1.2rem,3vw,1.5rem)] text-text-grey transition-colors duration-150 hover:text-dark-violet ">
          + New Column
        </button>
      </ul>
    </div>
  );
}

export default WorkSpace;
