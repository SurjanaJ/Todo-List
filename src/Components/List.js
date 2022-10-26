import { useState } from "react";

export const List = ({ tasks, setTasks }) => {
  const [isChecked, setIsChecked] = useState(false);

  //remove tasks
  const remove = (selected) => {
    const arr = tasks.filter((task) => {
      if (task.id === selected.id) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(arr);
  };

  //complete
  const completeTask = (selected) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === selected.id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div>
        <ul className="list-group list-group-flush ">
          {tasks.map((task) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center rounded-1 border-0"
                style={{
                  backgroundColor:
                    task.complete === true ? "lightGreen" : "lightGray",
                }}
                key={task.id}
              >
                <div>
                  <input
                    role="button"
                    type="checkbox"
                    checked={task.complete}
                    onClick={() => completeTask(task)}
                  />{" "}
                  {task.name}{" "}
                </div>
                {/* <div
                  onClick={()=>completeTask(task)}
                  className="btn btn-ouline-success btn-sm text-success"
                >
                  Complete
                </div>{" "} */}
                <div onClick={() => remove(task)} className="btn text-danger">
                  X
                </div>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
