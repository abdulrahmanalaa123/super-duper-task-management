import { useState } from "react";

const CustomToggle = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor="theme-switch"
      className="relative cursor-pointer items-center inline-flex w-10 h-[20px] bg-dark-violet rounded-full"
    >
      <input
        type="checkbox"
        id="theme-switch"
        value=""
        className="w-0 h-0 opacity-0 peer"
        checked={checked}
        onChange={(e) => {
          console.log(e.target.checked);
          console.log(checked);
          setChecked(e.target.checked);
        }}
      ></input>
      <span
        className="absolute top-0 left-0 right-0 bottom-0  before:transition-all before:duration-300 peer peer-checked:before:translate-x-[17.5px] rtl:peer-checked:before:-translate-x-[17.5px]
           before:absolute before:content-[''] before:left-[4px] before:bottom-[2.5px] before:rounded-full before:bg-workspace-bg-light before:w-[15px] before:h-[15px] "
      ></span>
    </label>
  );
};

export default CustomToggle;
