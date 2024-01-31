function WorkSpace({ hidden }) {
  return (
    <div
      className={`flex flex-col h-full  w-[calc(100%-300px)] absolute left-[300px] overflow-x-clip transition ease-in-out  duration-300 ${
        hidden ? "-translate-x-[300px] w-[100%] " : ""
      }`}
    >
      <div className="h-28 w-full  bg-primary-color-dark [border-width:1px] border-b-text-grey"></div>
      <div className="h-full w-full bg-workspace-bg-dark"></div>
    </div>
  );
}

export default WorkSpace;
