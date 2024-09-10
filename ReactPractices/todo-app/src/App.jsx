import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import TodoItem from "./components/todo/todo-item";
import TodoDetail from "./components/todo/todo-detail";
import { Skeleton } from "@mui/material";


function App() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [todoDetail, setTodoDetail] = useState(null);


  async function fetchTodoList() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/todos", { method: "GET" });
      const response = await apiResponse.json();
  
      if (response?.todos && response?.todos.length > 0) {
        setTodoList(response?.todos);
        setLoading(false);
      }

    } catch (e) {
      console.error(e);
      setErrorMessage(e);
    }
  }
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function findCurrentTodo(id) {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${id}`, { method: "GET" });
      const response = await apiResponse.json();
      console.log(response);
      if (response?.todo) {
        setTodoDetail(response);
        setOpenDialog(true);
      } else {
        setTodoDetail(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.error(e);
    }
    
  }

  return (
    <div className={styles.mainWrapper}>
      <h2 className={styles.headerTitle}>Simple Todo App Using Material UI</h2>
      { errorMessage !== null ? errorMessage : null }
      <div className={styles.todoListWrapper}>
        {loading
          ? <Skeleton variant="rounded" width={210} height={60} />
          : todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} todo={todoItem} findCurrentTodo={findCurrentTodo} />
            ))}
      </div>
      <TodoDetail
        todoDetail={todoDetail}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setTodoDetail={setTodoDetail}
      />
    </div>
  );
}

export default App;
