function WorkSpace() {
  return (
    // background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    // border-radius: 8px;
    <div
      className={`h-[calc(100%-7rem)]   min-w-full bg-workspace-bg-dark px-8 py-12`}
    >
      <ul className="flex flex-row h-full gap-8">
        <li>
          <div className="flex items-center mb-4">
            <div className="rounded-full w-4 h-4 bg-app-sky mr-4"></div>
            <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px]">
              TODO(0)
            </span>
          </div>
          <div className="h-full rounded-md w-72 border-dashed border-text-grey border-[1px]"></div>
        </li>
        <li>
          <div className="flex items-center mb-4">
            <div className="rounded-full w-4 h-4 bg-app-orange mr-4"></div>
            <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px]">
              DOING(0)
            </span>
          </div>
          <div className="h-full rounded-md w-72 border-dashed border-text-grey border-[1px]"></div>
        </li>
        <li>
          <div className="flex items-center mb-4">
            <div className="rounded-full w-4 h-4 bg-app-green mr-4"></div>
            <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px]">
              DONE(0)
            </span>
          </div>
          <div className="h-full rounded-md w-72 border-dashed border-text-grey border-[1px]"></div>
        </li>
        <button className="h-full rounded-md w-72 mt-[34px] bg-primary-color-dark"></button>
      </ul>
    </div>
  );
}

export default WorkSpace;
