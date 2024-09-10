import PropTypes from "prop-types";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const TodoItem = ({ todo, findCurrentTodo }) => {
    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",          
      }}>
        <CardContent>
          <Typography variant="h5" color={"text.secondary"}>{todo.todo}</Typography>
        </CardContent>
            <CardActions>
                <Button sx={{
                    backgroundColor: "black",
                    color: "white",
                    opacity: "0.75",
                    "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        opacity: "1"
                    }
                }} onClick={() => findCurrentTodo(todo.id)}>Details</Button>
        </CardActions>
      </Card>
    );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  findCurrentTodo: PropTypes.func,
};

export default TodoItem;
