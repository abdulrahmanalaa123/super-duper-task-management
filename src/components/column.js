function Column({ color, name, children }) {
  return (
    <>
      <div className="flex items-center mb-4">
        <div className={`rounded-full w-4 h-4 bg-${color} mr-4`}></div>
        <span className="text-text-grey font-bold text-[0.75rem] tracking-[2.4px]">
          {name}(0)
        </span>
      </div>
      <div
        className={`h-full rounded-md w-72 border-dashed ${
          children ? "" : "border-text-grey border-[1px]"
        } `}
      >
        {children}
      </div>
    </>
  );
}

export default Column;
