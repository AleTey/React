import { useEffect, useState } from "react";


export const ConsultaAEleccion = () => {

  const [users, setUsers] = useState([]);

  const consultaUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect( () => {
  //   consultaUsers()
  // },[]
  // );

  const handleFetch = () => {
    consultaUsers();
  }


  return (
    <>
      <button onClick={handleFetch}>Consultar</button>
      <ul> 
        {users.map(user => <li key={user.id}>nombre: {user.name}</li>)}
      </ul>


    </>
  )
}


