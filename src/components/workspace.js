function WorkSpace({ hidden }) {
  return (
    <div
      className={`flex-auto relative transition-all  ease-in-out -z-[1] duration-300 ${
        hidden ? "-ml-[300px]" : ""
      }`}
    >
      <div className="flex h-28 px-8 justify-between w-full bg-primary-color-dark [border-width:1px] border-b-text-grey">
        <span className="self-center text-2xl text-workspace-bg-light ">
          Platform Launch
        </span>
        <div className="self-center ">
          <button className=" bg-dark-violet rounded-full px-4 py-3 text-workspace-bg-light [font-size: 15px]  hover:bg-highlight-color transition-colors duration-150">
            + Add New Task
          </button>
        </div>
      </div>
      <div
        className={`h-[calc(100%-7rem)]   w-full bg-workspace-bg-dark`}
      ></div>
    </div>
  );
}

export default WorkSpace;
