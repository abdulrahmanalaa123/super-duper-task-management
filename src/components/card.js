function Card({ taskname, subtasks }) {
  return (
    <div
      className="bg-primary-color-dark rounded-md px-4 py-6 w-full  
      shadow-[#364e7e1a] shadow-md mb-6 before:w-full before:h-full
       before:bg-blackish before:opacity-0 cursor-auto before:absolute 
       before:inset-0 relative before:rounded-md hover:before:opacity-50 
       before:transition-opacity before:duration-150 "
    >
      <p className="text-wrap text-workspace-bg-light text-[15px] break-words ">
        {taskname}
      </p>
      <span className="text-text-grey text-xs">1 of {subtasks} subtasks</span>
    </div>
  );
}

export default Card;
