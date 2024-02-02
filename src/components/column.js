function Column({ color, name, children, index, handleColumnDragEnter }) {
  // const color = [
  // "#67E2AE",
  // "#8471F2",
  // "#635fc7",
  // "#49C4E5",
  //
  // "#E5A449",
  // "#2A3FDB",
  // ];
  return (
    <>
      <div className="flex items-center mb-4 transition-all duration-150">
        <div
          className="rounded-full w-4 h-4 mr-4"
          style={{ backgroundColor: color }}
        ></div>
        <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px] ">
          {name}(0)
        </span>
      </div>
      <div
        className={`h-full rounded-md w-72  ${
          children.length ? "" : "dashedBorder"
        } `}
        onDragEnter={(e) => {
          handleColumnDragEnter(e, index);
        }}
        onDragLeave={(e) => {
          handleColumnDragEnter(e, index);
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Column;
