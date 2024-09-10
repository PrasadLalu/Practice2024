import { useEffect, useState } from "react";
import User from "./components/user";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function fetchAllUsers() {
    const response = await fetch("https://dummyjson.com/users", {
      method: "GET",
    });
    const data = await response.json();
    if (data && data.users) {
      setUsers(data.users);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <h3>Users List</h3>
      {users.length > 0 ? (
        users.map((user, index) => <User key={index} data={user} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Users;
