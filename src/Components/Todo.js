import { useState } from "react";
import { InputBar } from "./InputBar";
import { List } from "./List";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="d-flex gap-3 col align-items-center flex-column">
      <InputBar tasks={tasks} setTasks={setTasks} />
      <div className="display-5">Today's Tasks</div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
