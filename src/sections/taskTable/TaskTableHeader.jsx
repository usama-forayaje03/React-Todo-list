
function TaskTableHeader() {
  return (
    <div className=" flex justify-between items-center "> 
                <h3 className="font-bold dark:text-rose-600 text-rose-900 text-lg">Your Task</h3>
                <label className="input input-bordered dark:bg-gray-800 dark:text-white dark:border-gray-600 input-sm flex  items-center gap-2">
                    <input className="grow " placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 dark:text-gray-100">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>
  )
}

export default TaskTableHeader