import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  box: {
    marginRight: "100px"
  },
  container: {
    display: "flex",
    flexFlow: "column wrap",
    marginRight: "100px",
    minWidth: "100%"
  },
  input: {
    margin: "20px"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Form = props => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <Box className={classes.box}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          id="task-title"
          label="Task title"
          value={title}
          className={classes.input}
          margin="normal"
          variant="outlined"
          onChange={event => setTitle(event.target.value)}
        />
        <TextField
          id="task-description"
          label="Task description"
          value={description}
          className={classes.input}
          margin="normal"
          variant="outlined"
          required
          multiline
          rowsMax="5"
          onChange={event => setDescription(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Add task
        </Button>
      </form>
    </Box>
  );
};

export default Form;
