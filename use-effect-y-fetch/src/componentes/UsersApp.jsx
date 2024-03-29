import { useState, useEffect } from "react";

export const UsersApp = () => {

  const [users, setusers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setusers(data);
    } catch (error) {
      console.error(error);
    }
  }

  // es un hook para que no se ejecute muchas veces
  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map(user => <li key={user.id}> {user.name} </li>)}
      </ul>
    </>
  )
}
