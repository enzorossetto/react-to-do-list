import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexFlow: "row no-wrap",
    alignItems: "center"
  },
  buttonWrap: {
    marginLeft: "10px"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Task = props => {
  const classes = useStyles();
  const handleClick = event => {
    event.preventDefault();
    props.deleteTask(props.index);
  };

  return (
    <Box className={classes.container}>
      <Box>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Box>
      <Box className={classes.buttonWrap}>
        <IconButton
          className={classes.button}
          aria-label="delete"
          color="secondary"
          onClick={handleClick}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Task;
