import { useState } from "react";
import CreateMissionComponent from "./createMissionComponent";

function Project() {
  const [createMission, setCreateMision] = useState(false);

  return (
    <div className="p-1 w-full max-w-xl bg-white sm:p-6 ">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
        Mission list
      </h5>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setCreateMision(!createMission);
        }}
      >
        Create new mission
      </button>
      {createMission && <CreateMissionComponent></CreateMissionComponent>}
      <div
        className="flex rounded-md shadow-sm justify-evenly flex-wrap"
        role="group"
      >
        <button
          type="button"
          className=" box-border py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          My mission
        </button>
        <button
          type="button"
          className="box-border py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Start
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Process
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Completed
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Finished
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Late
        </button>
      </div>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
      <ul className="my-4 space-y-3">
        <li className="flex items-center p-3 font-bold text-gray-900 bg-gray-50 border-2 rounded-lg hover:bg-gray-100 group hover:shadow ">
          <span className="flex-1 ml-3">Init backend</span>
          <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
            start
          </span>
        </li>
        <li className="flex items-center p-3 font-bold text-gray-900 bg-gray-50 border-2 rounded-lg hover:bg-gray-100 group hover:shadow ">
          <span className="flex-1 ml-3">Init frontend</span>
          <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
            process
          </span>
        </li>
        <li className="flex items-center p-3 font-bold text-gray-900 bg-gray-50 border-2 rounded-lg hover:bg-gray-100 group hover:shadow ">
          <span className="flex-1 ml-3">Init redux store</span>
          <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
            completed
          </span>
        </li>
        <li className="flex items-center p-3 font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-green-600 dark:hover:bg-green-500 dark:text-white">
          <span className="flex-1 ml-3">Init database</span>
          <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
            finished
          </span>
        </li>
        <li className="flex items-center p-3 font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-orange-600 dark:hover:bg-orange-500 dark:text-white">
          <span className="flex-1 ml-3">Write database</span>
          <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
            process
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Project;
