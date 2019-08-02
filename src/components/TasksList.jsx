import React from "react";
import Task from "./Task";
import Box from "@material-ui/core/Box";

const TasksList = props => {
  const deleteTask = taskIndex => {
    props.deleteTask(taskIndex);
  };

  return (
    <Box>
      {props.tasks.map((task, index) => (
        <Task
          key={task.title}
          {...task}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </Box>
  );
};

export default TasksList;
