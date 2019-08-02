import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Form from "./components/Form";
import TasksList from "./components/TasksList";

const useStyles = makeStyles(themes => ({
  container: {
    position: "absolute",
    display: "flex",
    flexFlow: "row no-wrap"
  }
}));

function App() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const addTask = newTask => {
    setTasks([newTask, ...tasks]);
  };
  const deleteTask = taskToDelete => {
    setTasks(tasks.filter((task, index) => index !== taskToDelete));
  };

  return (
    <>
      <Container>
        <h1>ToDo List</h1>
      </Container>
      <Container className={classes.container}>
        <Form onSubmit={addTask} className={classes.form} />
        <TasksList tasks={tasks} deleteTask={deleteTask} />
      </Container>
    </>
  );
}

export default App;
